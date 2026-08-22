import { createFileRoute } from '@tanstack/react-router';
import { createClient } from '@supabase/supabase-js';
import webpush from 'web-push';

export const Route = createFileRoute('/api/public/send-push')({ server: { handlers: { POST: async ({ request }) => {
  try {
    const authHeader = request.headers.get('authorization') || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';
    if (!token) return new Response(JSON.stringify({error:'Unauthorized'}),{status:401,headers:{'Content-Type':'application/json'}});
    const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    const anonKey = process.env.SUPABASE_PUBLISHABLE_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    const publicKey = process.env.VAPID_PUBLIC_KEY;
    const privateKey = process.env.VAPID_PRIVATE_KEY;
    if (!supabaseUrl || !anonKey || !publicKey || !privateKey) return new Response(JSON.stringify({error:'Push não configurado no servidor.'}),{status:503,headers:{'Content-Type':'application/json'}});
    const userClient = createClient(supabaseUrl, anonKey, { global: { headers: { Authorization: `Bearer ${token}` } }, auth: { persistSession:false, autoRefreshToken:false } });
    const { data: { user } } = await userClient.auth.getUser(token);
    if (!user) return new Response(JSON.stringify({error:'Unauthorized'}),{status:401,headers:{'Content-Type':'application/json'}});
    const body = await request.json();
    const endpoint = body?.subscription?.endpoint;
    if (!endpoint) return new Response('Missing subscription endpoint',{status:400});
    const { data: owned } = await (userClient as any).from('push_subscriptions').select('endpoint,p256dh,auth,enabled').eq('endpoint',endpoint).eq('user_id',user.id).maybeSingle();
    if (!owned?.endpoint || owned.enabled === false) return new Response(JSON.stringify({error:'Subscription não pertence ao usuário.'}),{status:403,headers:{'Content-Type':'application/json'}});
    webpush.setVapidDetails(process.env.VAPID_SUBJECT || 'mailto:suporte@neurobrilha.com.br', publicKey, privateKey);
    const payload=JSON.stringify({title:body.title||'NeuroBrilha Kids',body:body.message||'Nova notificação!',url:body.url||'/rotina'});
    await webpush.sendNotification({endpoint:owned.endpoint,keys:{auth:owned.auth,p256dh:owned.p256dh}},payload);
    return new Response(JSON.stringify({success:true}),{status:200,headers:{'Content-Type':'application/json'}});
  } catch(error:any){console.error('Error sending push notification:',error);return new Response(JSON.stringify({error:error.message}),{status:500,headers:{'Content-Type':'application/json'}});}
} } } });

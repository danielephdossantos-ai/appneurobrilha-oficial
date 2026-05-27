import React, { useEffect, useState } from 'react';
import { AuthService } from '../services/AuthService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

export const LGPDConsent: React.FC = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkConsent = async () => {
      const { data: { session } } = await AuthService.getSession();
      if (!session) {
        setShow(false);
        setLoading(false);
        return;
      }
      
      const settings = await AuthService.getPrivacySettings();
      if (!settings || !settings.terms_accepted) {
        setShow(true);
      }
      setLoading(false);
    };
    checkConsent();

    const { data: { subscription } } = AuthService.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        checkConsent();
      } else if (event === 'SIGNED_OUT') {
        setShow(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleAccept = async () => {
    setLoading(true);
    try {
      await AuthService.updatePrivacySettings({
        terms_accepted: true,
        data_usage_consent: true,
        analytics_consent: true
      });
      setShow(false);
    } catch (error: any) {
      console.error("Erro ao salvar consentimento LGPD:", error);
      const errorMessage = error?.message || "Erro desconhecido";
      toast.error(`Não foi possível salvar: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <Card className="max-w-md w-full animate-in fade-in zoom-in duration-300">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="h-6 w-6 text-primary" />
            <CardTitle>Privacidade e Segurança</CardTitle>
          </div>
          <CardDescription>
            No NeuroBrilha Kids, levamos a segurança dos dados da sua criança a sério. Estamos em conformidade com a LGPD.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>
            Ao utilizar nosso aplicativo, você concorda com o processamento de dados necessários para a personalização das atividades pedagógicas e neurocientíficas.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Dados criptografados de ponta a ponta.</li>
            <li>Acesso restrito apenas aos responsáveis.</li>
            <li>Possibilidade de exportação ou exclusão de dados a qualquer momento.</li>
          </ul>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="outline" onClick={() => window.location.href = '/privacidade'}>
            Saiba Mais
          </Button>
          <Button 
            className="flex-1" 
            onClick={handleAccept}
            disabled={loading}
          >
            {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
            Aceitar e Continuar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

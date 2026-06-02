import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from '@tanstack/react-router';
import { AuthService } from '../services/AuthService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const LGPD_KEY = 'lgpd_accepted_v1';

export const LGPDConsent: React.FC = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const checkedRef = useRef(false);
  const mountedRef = useRef(true);
  const location = useLocation();

  useEffect(() => {
    mountedRef.current = true;

    // Não mostrar na tela de autenticação
    if (location.pathname === '/auth') {
      setShow(false);
      return;
    }

    // Se já aceitou (persistido em localStorage), nunca mais mostrar nesta máquina
    if (localStorage.getItem(LGPD_KEY)) {
      setShow(false);
      return;
    }

    // Evitar re-checagem (TOKEN_REFRESHED, navegação, etc. não devem disparar o modal de novo)
    if (checkedRef.current) return;

    const checkConsent = async () => {
      try {
        const { data: { session } } = await AuthService.getSession();
        checkedRef.current = true;
        if (!session || !mountedRef.current) return;

        const settings = await AuthService.getPrivacySettings();
        if (settings?.terms_accepted) {
          localStorage.setItem(LGPD_KEY, 'true');
          return;
        }

        // Só mostrar depois de confirmar que realmente falta aceitar
        if (mountedRef.current && !localStorage.getItem(LGPD_KEY)) {
          setShow(true);
        }
      } catch (error) {
        console.error('Erro ao verificar consentimento:', error);
      }
    };

    checkConsent();

    const { data: { subscription } } = AuthService.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        setShow(false);
        checkedRef.current = false;
      }
    });

    return () => {
      mountedRef.current = false;
      subscription.unsubscribe();
    };
  }, [location.pathname]);

  const handleAccept = async () => {
    setLoading(true);
    localStorage.setItem(LGPD_KEY, 'true');
    setShow(false);

    try {
      await AuthService.updatePrivacySettings({
        terms_accepted: true,
        data_usage_consent: true,
        analytics_consent: true,
      });
    } catch (error: any) {
      console.error('Erro ao salvar consentimento LGPD:', error);
      toast.error('Aviso fechado. Vamos tentar salvar sua preferência novamente depois.');
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

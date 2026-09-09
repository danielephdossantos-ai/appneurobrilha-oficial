
import { useAppState } from "@/core/store";
import { useLocation, Navigate } from "@tanstack/react-router";
import React from "react";
import { Lock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Normaliza a string de série para comparação.
 * Ex: "2º Ano" -> "2-ano"
 */
export function normalizeSerieSlug(serie: string): string {
  if (!serie) return "";
  return serie
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/º/g, "")
    .replace(/ª/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .trim();
}

/**
 * Verifica se a rota atual pertence a uma série específica.
 * @param pathname Caminho da URL
 * @param serieSlug Slug da série (ex: "2-ano")
 */
export function isRouteOfSerie(pathname: string, serieSlug: string): boolean {
  // Padrões comuns de rotas da Escola Brilha:
  // /escola-brilha/trilha/2-ano/...
  // /escola-brilha/curso/portugues-2-ano
  // /escola-brilha/geo-2-ano/...
  
  const normalizedPath = pathname.toLowerCase();
  
  // Se a URL contém explicitamente o slug da série como um segmento
  if (normalizedPath.includes(`/${serieSlug}/`)) return true;
  if (normalizedPath.endsWith(`/${serieSlug}`)) return true;
  
  // Casos especiais para slugs de cursos que podem não ter o hífen da mesma forma
  // ex: "2ano" vs "2-ano"
  const compactSlug = serieSlug.replace(/-/g, "");
  if (normalizedPath.includes(`/${compactSlug}/`)) return true;
  if (normalizedPath.includes(`-${compactSlug}`)) return true; // ex: portugues-2ano
  if (normalizedPath.includes(`-${serieSlug}`)) return true;   // ex: portugues-2-ano

  return false;
}

interface GradeGuardProps {
  children: React.ReactNode;
}

/**
 * Guardião de Série: Impede que a criança acesse conteúdos de outros anos letivos.
 * Administradores ignoram esta regra.
 */
export const GradeGuard: React.FC<GradeGuardProps> = ({ children }) => {
  const { activeChild, session } = useAppState();
  const location = useLocation();
  
  // 1. Administrador tem acesso total
  const isAdmin = session?.user?.user_metadata?.role === "admin" || 
                  (session?.user as any)?.role === "admin";
                  
  if (isAdmin) return <>{children}</>;

  // 2. Se não estiver em uma rota da Escola Brilha, não aplica o bloqueio aqui
  const isEscolaBrilha = location.pathname.startsWith("/escola-brilha");
  if (!isEscolaBrilha) return <>{children}</>;

  // 3. Se não houver criança ativa, o sistema de perfil deve lidar (redirecionar para seleção)
  if (!activeChild) return <>{children}</>;

  const childSerieSlug = normalizeSerieSlug(activeChild.serie);
  
  // Séries disponíveis no sistema para verificação
  const SERIES_SLUGS = [
    "educacao-infantil", "1-ano", "2-ano", "3-ano", "4-ano", 
    "5-ano", "6-ano", "7-ano", "8-ano", "9-ano"
  ];

  // Verifica se o usuário está tentando acessar uma série que não é a dele
  const targetSerieSlug = SERIES_SLUGS.find(s => isRouteOfSerie(location.pathname, s));

  // Se achou uma série na URL e não é a da criança -> BLOQUEIA
  if (targetSerieSlug && targetSerieSlug !== childSerieSlug) {
    return (
      <div className="min-h-screen bg-[#0d1f55] flex items-center justify-center p-6 text-white text-center">
        <div className="max-w-md space-y-6">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/20">
            <Lock className="w-10 h-10 text-amber-400" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl font-black uppercase tracking-tight">Acesso Não Disponível</h1>
            <p className="text-white/70">
              Este conteúdo pertence a outra etapa de aprendizagem.
            </p>
            <p className="text-amber-300 font-bold">
              Continue estudando os conteúdos da sua série atual. 🌟
            </p>
          </div>

          <div className="pt-4">
            <Button 
              onClick={() => window.location.href = "/escola-brilha"}
              className="bg-white text-[#0d1f55] hover:bg-white/90 font-black rounded-2xl px-8 h-12 flex items-center gap-2 mx-auto"
            >
              <ArrowLeft className="w-5 h-5" /> Voltar para minha série
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2, Sparkles, RefreshCw } from "lucide-react";
import { gerarConteudoBncc } from "@/lib/bncc-conteudo-ia.functions";

type BnccMeta = {
  codigo: string;
  ano: number;
  componente: string;
  habilidade: string | null;
};

type BnccConteudo = {
  codigo: string;
  titulo: string | null;
  explicacao: string | null;
  objetivos: any;
  aula_ilustrada: any;
  exemplos: any;
  exercicios_faceis: any;
  exercicios_medios: any;
  exercicios_dificeis: any;
  atividade_imprimir: string | null;
  gabarito: any;
  video_url: string | null;
  criterios_avaliacao: any;
  habilidades_relacionadas: any;
};

const toArr = (v: any): any[] => (Array.isArray(v) ? v : []);

const youtubeEmbed = (url: string | null) => {
  if (!url) return null;
  const m = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/)|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
};

export const Route = createFileRoute("/bncc/$codigo")({
  component: BnccCodigoPage,
  errorComponent: ({ error }) => (
    <div className="p-8 text-center" role="alert">
      <p className="text-destructive">{error.message}</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="p-8 text-center">
      <p>Código BNCC não encontrado.</p>
    </div>
  ),
});

function BnccCodigoPage() {
  const { codigo } = Route.useParams();
  const router = useRouter();
  const [meta, setMeta] = useState<BnccMeta | null>(null);
  const [conteudo, setConteudo] = useState<BnccConteudo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      const [m, c] = await Promise.all([
        supabase
          .from("bncc_biblioteca")
          .select("codigo,ano,componente,habilidade")
          .eq("codigo", codigo)
          .maybeSingle(),
        supabase
          .from("bncc_conteudo")
          .select("*")
          .eq("codigo", codigo)
          .maybeSingle(),
      ]);
      if (!active) return;
      setMeta((m.data as any) ?? null);
      setConteudo((c.data as any) ?? null);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [codigo]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  if (!meta) {
    return (
      <div className="max-w-3xl mx-auto p-8 text-center space-y-4">
        <h1 className="text-2xl font-bold">Código {codigo} não encontrado</h1>
        <Button onClick={() => router.history.back()}>Voltar</Button>
      </div>
    );
  }

  const objetivos = toArr(conteudo?.objetivos);
  const exemplos = toArr(conteudo?.exemplos);
  const faceis = toArr(conteudo?.exercicios_faceis);
  const medios = toArr(conteudo?.exercicios_medios);
  const dificeis = toArr(conteudo?.exercicios_dificeis);
  const gabarito = toArr(conteudo?.gabarito);
  const criterios = toArr(conteudo?.criterios_avaliacao);
  const relacionadas = toArr(conteudo?.habilidades_relacionadas);
  const embed = youtubeEmbed(conteudo?.video_url ?? null);

  const semConteudo = !conteudo;

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-6">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => router.history.back()}
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
        </Button>
      </div>

      <header className="space-y-3">
        <div className="flex flex-wrap gap-2 items-center">
          <Badge variant="secondary" className="text-sm font-mono">
            {meta.codigo}
          </Badge>
          <Badge variant="outline">{meta.ano}º Ano</Badge>
          <Badge variant="outline">{meta.componente}</Badge>
        </div>
        <h1 className="text-3xl font-bold">
          {conteudo?.titulo || meta.habilidade || meta.codigo}
        </h1>
        {meta.habilidade && !conteudo?.titulo && (
          <p className="text-muted-foreground">{meta.habilidade}</p>
        )}
      </header>

      {semConteudo && (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            Conteúdo pedagógico desta habilidade ainda não foi cadastrado.
            <div className="mt-2 text-sm">
              Em breve: explicação, exemplos, exercícios, gabarito e vídeo.
            </div>
          </CardContent>
        </Card>
      )}

      {!semConteudo && (
        <Tabs defaultValue="explicacao" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
            <TabsTrigger value="explicacao">Explicação</TabsTrigger>
            <TabsTrigger value="exemplos">Exemplos</TabsTrigger>
            <TabsTrigger value="exercicios">Exercícios</TabsTrigger>
            <TabsTrigger value="gabarito">Gabarito</TabsTrigger>
            <TabsTrigger value="video">Vídeo</TabsTrigger>
          </TabsList>

          <TabsContent value="explicacao" className="space-y-4 mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Explicação</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none whitespace-pre-wrap">
                {conteudo?.explicacao || "Sem explicação cadastrada."}
              </CardContent>
            </Card>
            {objetivos.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Objetivos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-1">
                    {objetivos.map((o, i) => (
                      <li key={i}>{String(o)}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            {criterios.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Critérios de avaliação</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-1">
                    {criterios.map((c, i) => (
                      <li key={i}>{String(c)}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            {relacionadas.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Habilidades relacionadas</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {relacionadas.map((r, i) => {
                    const code = typeof r === "string" ? r : r?.codigo;
                    return code ? (
                      <Link
                        key={i}
                        to="/bncc/$codigo"
                        params={{ codigo: code }}
                      >
                        <Badge variant="secondary" className="font-mono cursor-pointer hover:bg-accent">
                          {code}
                        </Badge>
                      </Link>
                    ) : null;
                  })}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="exemplos" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Exemplos resolvidos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {exemplos.length === 0 && (
                  <p className="text-muted-foreground">Nenhum exemplo cadastrado.</p>
                )}
                {exemplos.map((ex, i) => (
                  <div key={i} className="border rounded-md p-4">
                    {ex?.enunciado && <p className="font-medium">{ex.enunciado}</p>}
                    {ex?.resolucao && (
                      <p className="mt-2 text-sm whitespace-pre-wrap">{ex.resolucao}</p>
                    )}
                    {typeof ex === "string" && <p>{ex}</p>}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exercicios" className="mt-4 space-y-4">
            {[
              { label: "Fáceis", arr: faceis },
              { label: "Médios", arr: medios },
              { label: "Difíceis", arr: dificeis },
            ].map(({ label, arr }) => (
              <Card key={label}>
                <CardHeader>
                  <CardTitle>{label}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {arr.length === 0 && (
                    <p className="text-muted-foreground text-sm">
                      Nenhum exercício cadastrado.
                    </p>
                  )}
                  {arr.map((q, i) => (
                    <div key={i} className="border rounded-md p-3">
                      <p className="font-medium">
                        {i + 1}. {q?.enunciado ?? (typeof q === "string" ? q : "")}
                      </p>
                      {Array.isArray(q?.alternativas) && (
                        <ul className="mt-2 space-y-1 text-sm">
                          {q.alternativas.map((a: any, j: number) => (
                            <li key={j}>
                              {String.fromCharCode(65 + j)}) {String(a)}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
            {conteudo?.atividade_imprimir && (
              <Card>
                <CardHeader>
                  <CardTitle>Atividade para imprimir</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={conteudo.atividade_imprimir}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline"
                  >
                    Abrir atividade imprimível
                  </a>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="gabarito" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Gabarito</CardTitle>
              </CardHeader>
              <CardContent>
                {gabarito.length === 0 ? (
                  <p className="text-muted-foreground">Nenhum gabarito cadastrado.</p>
                ) : (
                  <ol className="list-decimal pl-6 space-y-1">
                    {gabarito.map((g, i) => (
                      <li key={i}>
                        {typeof g === "string"
                          ? g
                          : `${g?.resposta ?? ""}${
                              g?.justificativa ? " — " + g.justificativa : ""
                            }`}
                      </li>
                    ))}
                  </ol>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="video" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Vídeo</CardTitle>
              </CardHeader>
              <CardContent>
                {embed ? (
                  <div className="aspect-video w-full">
                    <iframe
                      src={embed}
                      title="Vídeo BNCC"
                      className="w-full h-full rounded-md"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <p className="text-muted-foreground">Nenhum vídeo cadastrado.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}

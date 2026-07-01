import { useMemo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useDeviceTTS } from "@/hooks/useDeviceTTS";
import type { Aula } from "../types";
import { mascoteDaAula, disciplinaDaAula } from "../mascotes-disciplina";
import { mascoteAtribuido } from "../mascote-assign";

type BlocoId =
  | "narrativa"
  | "missao"
  | "objetivos"
  | "explicacao"
  | "exemplo"
  | "guiada"
  | "exercicios"
  | "desafio"
  | "quiz"
  | "resumo"
  | "conclusao";

/**
 * Professor Virtual (Profª Brilha) — mascote fixo que acompanha
 * toda a aula: apresenta a missão, explica, incentiva, corrige,
 * dá dicas e parabeniza. Fala adaptada à idade da criança.
 */
export function ProfessorVirtual({
  aula,
  blocoId,
  idade,
  nomeCrianca,
  acertos,
  erros,
  childId,
}: {
  aula: Aula;
  blocoId: BlocoId;
  idade?: number;
  nomeCrianca?: string;
  acertos: number;
  erros: number;
  childId?: string | null;
}) {
  const tts = useDeviceTTS();
  const [aberto, setAberto] = useState(true);
  const mascote = useMemo(() => {
    const disc = disciplinaDaAula(aula);
    const override = mascoteAtribuido(childId, disc);
    return mascoteDaAula(aula, override);
  }, [aula.codigo, aula.disciplina, childId]);

  const faixa = faixaDaIdade(idade);
  const fala = useMemo(
    () => construirFala({ aula, blocoId, faixa, nomeCrianca, acertos, erros, mascoteNome: mascote.nome }),
    [aula, blocoId, faixa, nomeCrianca, acertos, erros, mascote.nome],
  );

  // Ao trocar de bloco, abrir a fala novamente
  useEffect(() => {
    setAberto(true);
    tts.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blocoId, aula.codigo]);

  const speak = () => (tts.speaking ? tts.stop() : tts.speak(fala));

  return (
    <div className="px-4 mt-6">
      <div className="max-w-2xl mx-auto flex items-end gap-3">
        <motion.button
          onClick={() => setAberto((v) => !v)}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          className="shrink-0 h-20 w-20 sm:h-24 sm:w-24 rounded-full p-1 shadow-lg"
          style={{
            backgroundImage: `linear-gradient(135deg, ${mascote.corPrimaria}, ${mascote.corSecundaria})`,
            boxShadow: `0 10px 25px -8px ${mascote.corPrimaria}80`,
          }}
          aria-label={aberto ? `Esconder ${mascote.nome}` : `Chamar ${mascote.nome}`}
        >
          <div className="h-full w-full rounded-full bg-white/95 overflow-hidden grid place-items-center">
            <img
              src={mascote.imagem}
              alt={`${mascote.nome} — ${mascote.papel}`}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.button>

        <AnimatePresence>
          {aberto && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="relative flex-1 rounded-3xl rounded-bl-md bg-white text-[#0d1f55] px-4 py-3 shadow-xl border-2"
              style={{ borderColor: mascote.corPrimaria }}
            >
              <div className="flex items-center justify-between mb-1">
                <span
                  className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1"
                  style={{ color: mascote.corSecundaria }}
                >
                  <span aria-hidden>{mascote.emoji}</span> {mascote.nome} · {mascote.papel}
                </span>
                <button
                  onClick={speak}
                  className="h-7 w-7 rounded-lg grid place-items-center active:scale-95"
                  style={{ background: `${mascote.corPrimaria}22` }}
                  aria-label={tts.speaking ? `Parar ${mascote.nome}` : `Ouvir ${mascote.nome}`}
                >
                  {tts.speaking ? (
                    <VolumeX className="h-3.5 w-3.5" style={{ color: mascote.corSecundaria }} />
                  ) : (
                    <Volume2 className="h-3.5 w-3.5" style={{ color: mascote.corSecundaria }} />
                  )}
                </button>
              </div>
              <p className="text-sm sm:text-base font-bold leading-snug whitespace-pre-wrap">
                {fala}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ============================================================
// Faixa etária → tom da fala
// ============================================================
type Faixa = "pequeno" | "medio" | "grande";
function faixaDaIdade(idade?: number): Faixa {
  if (!idade || idade <= 6) return "pequeno";
  if (idade <= 9) return "medio";
  return "grande";
}

function construirFala(args: {
  aula: Aula;
  blocoId: BlocoId;
  faixa: Faixa;
  nomeCrianca?: string;
  acertos: number;
  erros: number;
  mascoteNome?: string;
}): string {
  const { aula, blocoId, faixa, nomeCrianca, acertos, erros, mascoteNome } = args;
  const nome = nomeCrianca ? `, ${nomeCrianca}` : "";

  const T = TEMPLATES[blocoId][faixa];
  // pega uma fala determinística por bloco (não muda toda hora)
  const idxHash = simpleHash(aula.codigo + blocoId) % T.length;
  let base = T[idxHash];

  base = base.replaceAll("{nome}", nome);
  base = base.replaceAll("{titulo}", aula.titulo);
  base = base.replaceAll("{missao}", aula.missao);
  base = base.replaceAll("{dica}", aula.revisao?.dica ?? "capriche na atenção!");
  base = base.replaceAll("{acertos}", String(acertos));
  base = base.replaceAll("{mascote}", mascoteNome ?? "Pip");

  // Feedback dinâmico na conclusão
  if (blocoId === "conclusao") {
    const total = aula.quiz.length || 0;
    if (total > 0) {
      if (acertos === total) base += " Você mandou muito bem — 100%! 🌟";
      else if (acertos >= Math.ceil(total * 0.7)) base += " Ótimo trabalho, você dominou!";
      else if (acertos > 0) base += " Bom esforço! Podemos revisar juntos pra melhorar ainda mais.";
      else base += " Não desanima — vamos revisar juntinho pra você arrasar!";
    }
  }
  // Se errou bastante em exercícios/desafio, dá uma dica
  if ((blocoId === "exercicios" || blocoId === "desafio") && erros >= 2) {
    base += `\n💡 Dica: ${aula.revisao?.dica ?? "leia o enunciado devagar e tente de novo."}`;
  }

  return base;
}

// Templates por bloco × faixa etária. 2 variações por combinação.
const TEMPLATES: Record<BlocoId, Record<Faixa, string[]>> = {
  missao: {
    pequeno: [
      "Oi{nome}! Hoje a gente vai brincar de aprender assim: {missao} Vamo lá? 💛",
      "Prontinho{nome}? Nossa missão é: {missao} Vai ser divertido!",
    ],
    medio: [
      "E aí{nome}! Bora começar? A missão de hoje é: {missao}",
      "Missão de hoje{nome}: {missao} Tô do seu lado o tempo todo!",
    ],
    grande: [
      "Bora{nome}! Objetivo desta aula: {missao} Foco no processo, não só na resposta.",
      "Missão{nome}: {missao} Se travar, respira e vamos por partes.",
    ],
  },
  objetivos: {
    pequeno: ["Olha só o que a gente vai descobrir juntinho!", "Presta atenção nessas coisinhas que vamos aprender!"],
    medio: ["Esses são os objetivos da nossa aula. Guarda eles na cabeça!", "Vou te mostrar o que você vai dominar hoje."],
    grande: ["Esses objetivos são o que você deve dominar no fim da aula.", "Use os objetivos como checklist do seu aprendizado."],
  },
  explicacao: {
    pequeno: ["Agora escuta com atenção, vou te contar o segredo!", "Presta atenção que fica fácil, viu?"],
    medio: ["Vou te explicar passo a passo, sem pressa.", "Se algo não fizer sentido, a gente lê de novo — sem drama."],
    grande: ["Foca aqui: vou explicar a lógica, não só o 'como'.", "Entende o porquê, não decora — isso serve pra vida toda."],
  },
  exemplo: {
    pequeno: ["Olha o exemplo! Assim fica bem mais fácil.", "Vou te mostrar como faz — é igual a um truque!"],
    medio: ["Acompanha o exemplo comigo, cada passo tem um motivo.", "Repara nos passos: eles resolvem qualquer questão parecida."],
    grande: ["Estude o método do exemplo, ele é modelo pra outras questões.", "Compare seu raciocínio com os passos do exemplo."],
  },
  guiada: {
    pequeno: ["Agora é a sua vez! Eu tô aqui do seu lado.", "Vamo fazer juntinho, tenta aí!"],
    medio: ["Bora praticar juntos! Eu te ajudo se precisar.", "Tenta você agora — se errar, é só respirar e tentar de novo."],
    grande: ["Sua vez de aplicar. Faça devagar e confira cada passo.", "Prática guiada: use o exemplo como base."],
  },
  exercicios: {
    pequeno: ["Vamos brincar de exercícios? Você consegue!", "Cada resposta certinha ganha uma estrelinha no meu coração!"],
    medio: ["Hora dos exercícios{nome}! Não tem pressa, tem capricho.", "Erra sem medo — errar faz o cérebro crescer!"],
    grande: ["Foca nos exercícios. Se errar, releia o enunciado antes de tentar de novo.", "Exercícios treinam a mão; explicação treina a cabeça. Faz os dois!"],
  },
  desafio: {
    pequeno: ["Chegou o desafio! Eu sei que você é fera!", "Uh, desafio! Vamo mostrar que você aprendeu!"],
    medio: ["Desafio na área{nome}! Confia no que você já aprendeu.", "Esse é o momento de brilhar. Tá pronto?"],
    grande: ["Desafio: pega o conteúdo e leva pra um caso novo. Pensa antes de responder.", "Se travar no desafio, volta na explicação — não é vergonha, é estratégia."],
  },
  quiz: {
    pequeno: ["Quiz! Escolhe a resposta que você acha certa!", "Vamo ver o que você aprendeu? Sem medo!"],
    medio: ["Hora do quiz{nome}! Lê com calma antes de escolher.", "Confia em você — você estudou pra isso agora."],
    grande: ["Elimine as alternativas erradas antes de escolher a certa.", "Leia todas as opções — quase certa não é certa."],
  },
  resumo: {
    pequeno: ["Vamo lembrar tudo que a gente viu? É rapidinho!", "Olha só o que você já sabe agora!"],
    medio: ["Resumo do que você aprendeu hoje. Guarda essas ideias!", "Se você entender o resumo, tá dominando a aula."],
    grande: ["Revisar consolida a memória. Leia o resumo com atenção.", "Se algum ponto do resumo estranhar, volte à explicação antes do quiz."],
  },
  conclusao: {
    pequeno: ["Uhuuu{nome}, você conseguiu! Que orgulho de você!", "Missão cumprida{nome}! Você tá brilhando! ✨"],
    medio: ["Boa{nome}! Você chegou até o fim da aula.", "Parabéns{nome}, mais uma habilidade conquistada!"],
    grande: ["Aula concluída{nome}. Consistência hoje vira domínio amanhã.", "Bom trabalho{nome}. Bora pra próxima habilidade?"],
  },
};

function simpleHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

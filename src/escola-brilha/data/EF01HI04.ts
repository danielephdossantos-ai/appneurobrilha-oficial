import type { Aula } from "../types";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as salaImg } from "@/assets/neuro-treino/objetos/sala-aula.png.asset.json";
import { url as patioImg } from "@/assets/neuro-treino/objetos/patio-escola.png.asset.json";

/** EF01HI04 — ambientes de convivência, hábitos e regras. */
const aula: Aula = {
  codigo: "EF01HI04", ano: "1º Ano", disciplina: "História", titulo: "Casa, Escola e Comunidade",
  narrativa: { titulo: "O Mapa dos Combinados", contexto: "Brilha recebeu um mapa com três lugares: casa, escola e comunidade.", problema: "Os hábitos e combinados de cada lugar foram misturados. Algumas regras são parecidas; outras existem por causa da função de cada ambiente.", convite: "Vamos comparar os lugares e entender por que seus hábitos e regras podem ser diferentes?" },
  conhecimentosPrevios: ["Reconhecer casa e escola.", "Saber que grupos criam combinados de convivência."],
  missao: "Identificar diferenças entre ambientes doméstico, escolar e comunitário, reconhecendo hábitos e regras próprios de cada um.",
  objetivos: ["Comparar funções de casa, escola e espaços comunitários.", "Identificar hábitos e regras de cada ambiente.", "Explicar por que um combinado pode mudar conforme o lugar.", "Valorizar respeito, inclusão e segurança."],
  explicacao: "A casa é um espaço de vida doméstica e descanso; a escola organiza tempos e espaços para aprender e conviver; praças, ruas e outros locais são compartilhados pela comunidade. Em casa pode haver horários próprios. Na escola, a turma combina turnos de fala e cuidado com materiais. Na comunidade, regras de circulação e conservação protegem muitas pessoas.",
  explicacoesNiveis: { nivel1: "Cada lugar tem uma função e seus combinados.", nivel2: "Na sala falamos por turnos; no pátio há regras de brincadeira segura.", nivel3: "Regras são como sinais que organizam a convivência.", nivel4: "Uma boa regra protege direitos e pode ser revista quando exclui alguém." },
  exemploResolvido: { enunciado: "Brilha quer correr. A sala está cheia de mesas, mas o pátio tem área livre. Onde essa ação é mais segura?", passos: ["Comparar a função dos espaços.", "Identificar obstáculos e pessoas.", "Escolher o pátio no momento permitido."], resposta: "No pátio, seguindo os combinados da escola." },
  atividadeGuiada: { enunciado: "Qual imagem representa o ambiente organizado principalmente para aulas?", resposta: "A sala de aula.", explicacao: "A sala tem materiais e combinados voltados à aprendizagem.", visual: { tipo: "escolherImagem", pergunta: "Onde a turma participa das aulas?", opcoes: [{ nome: "sala", imagemUrl: salaImg }, { nome: "casa", imagemUrl: casaImg }, { nome: "patio", imagemUrl: patioImg }, { nome: "escola", imagemUrl: escolaImg }], respostaCerta: "sala" } },
  exercicios: [
    { enunciado: "Dê um exemplo de hábito doméstico.", resposta: "Organizar objetos pessoais ou seguir o horário combinado em casa.", dica: "As famílias podem ter hábitos diferentes." },
    { enunciado: "Por que há turnos de fala na sala?", resposta: "Para que todos possam ouvir e participar.", dica: "A regra organiza a aprendizagem." },
    { enunciado: "Qual cuidado vale em um espaço comunitário?", resposta: "Preservar o lugar e respeitar as pessoas.", dica: "O espaço é compartilhado." },
  ],
  desafio: { enunciado: "Compare hábitos e regras dos três ambientes.", resposta: "Cada ambiente tem função própria, mas respeito e segurança atravessam todos.", visual: { perguntas: [
    { pergunta: "Onde a turma costuma seguir turnos de fala para aprender?", opcoes: ["Sala de aula", "Quarto particular", "Loja fechada", "Nenhum lugar"], correta: 0, explicacao: "Esse combinado ajuda a aula.", visual: { tipo: "itens", imagemUrl: salaImg, quantidade: 1, rotulo: "Sala" } },
    { pergunta: "Por que uma praça tem regras de conservação?", opcoes: ["Porque é compartilhada pela comunidade", "Porque pertence a uma criança", "Para impedir toda convivência", "Para substituir a escola"], correta: 0, explicacao: "Muitas pessoas usam o espaço comum.", visual: { tipo: "itens", imagemUrl: patioImg, quantidade: 1, rotulo: "Espaço comum" } },
    { pergunta: "As famílias precisam ter exatamente os mesmos hábitos?", opcoes: ["Não; hábitos podem variar com respeito e segurança", "Sim, todos idênticos", "Só uma família tem hábitos", "Hábitos não existem"], correta: 0, explicacao: "Rotinas domésticas variam entre famílias.", visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "Casa" } },
  ] } },
  quiz: [
    { pergunta: "Qual é uma diferença entre casa e escola?", opcoes: ["A escola organiza atividades coletivas de aprendizagem", "A casa é sempre uma escola", "Nenhuma tem hábitos", "Só a casa tem pessoas"], correta: 0, explicacao: "Os ambientes têm funções diferentes.", visual: { tipo: "comparar", lados: [{ imagemUrl: casaImg, quantidade: 1, rotulo: "Casa" }, { imagemUrl: escolaImg, quantidade: 1, rotulo: "Escola" }] } },
    { pergunta: "Uma regra de convivência deve ajudar a quê?", opcoes: ["Proteger e organizar o grupo", "Excluir colegas", "Criar perigo", "Impedir perguntas"], correta: 0, explicacao: "Regras adequadas favorecem direitos, segurança e participação.", visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "Convivência" } },
    { pergunta: "Onde correr costuma ser mais adequado na escola?", opcoes: ["Em área permitida do pátio", "Entre mesas da sala", "Na escada", "Em qualquer lugar"], correta: 0, explicacao: "O lugar e o momento precisam ser seguros.", visual: { tipo: "itens", imagemUrl: patioImg, quantidade: 1, rotulo: "Pátio" } },
    { pergunta: "Os combinados podem ser conversados pelo grupo?", opcoes: ["Sim, quando precisam melhorar a convivência", "Nunca", "Só fora da escola", "Somente em segredo"], correta: 0, explicacao: "Regras podem ser explicadas e revistas com participação responsável.", visual: { tipo: "itens", imagemUrl: salaImg, quantidade: 1, rotulo: "Turma" } },
  ],
  revisao: { pontos: ["Casa, escola e comunidade têm funções diferentes.", "Hábitos domésticos variam.", "Regras escolares organizam aprendizagem e convivência.", "Espaços comunitários exigem cuidado coletivo."], dica: "Para entender uma regra, pergunte: qual espaço, qual função e quem ela protege?" },
  conclusao: "Missão concluída: você comparou ambientes, hábitos e regras.",
  curiosidade: { titulo: "Você sabia?", texto: "Turmas podem criar combinados coletivos e revisar se eles realmente ajudam todos a participar." },
  interativas: [{ tipo: "ligar", titulo: "Lugar e hábito", instrucao: "Ligue cada situação ao ambiente mais relacionado.", pares: [
    { a: "Aula em grupo", b: "Escola", aImagem: salaImg, aQuantidade: 1 }, { a: "Rotina doméstica", b: "Casa", aImagem: casaImg, aQuantidade: 1 }, { a: "Cuidado com espaço compartilhado", b: "Comunidade", aImagem: patioImg, aQuantidade: 1 },
  ] }],
};

export default aula;

import type { AulaV4 } from "../../types";
import { url as moeda } from "@/assets/neuro-treino/objetos/moeda.png.asset.json";

export const aula06_dinheiroEquivalente: AulaV4 = {
  slug: "u6-06-dinheiro-equivalente", titulo: "Dinheiro: Valores Equivalentes", iconeTrilha: "💰", bncc: ["EF02MA20"], duracaoMin: 25,
  momento01_motivacao: { titulo: "O Caixa da Vila", historia: "Brilha precisa pagar valores exatos usando combinações diferentes de moedas e cédulas.", imagemUrl: moeda },
  momento02_exploracao: { instrucao: "Compare: R$ 5; R$ 2 + R$ 2 + R$ 1; cinco moedas de R$ 1.", cenas: [{ tipo: "grupoItens", imagemUrl: moeda, quantidade: 1, rotulo: "R$ 5" }, { tipo: "grupoItens", imagemUrl: moeda, quantidade: 3, rotulo: "R$ 2 + R$ 2 + R$ 1" }, { tipo: "grupoItens", imagemUrl: moeda, quantidade: 5, rotulo: "5 × R$ 1" }] },
  momento03_descoberta: { perguntaGuia: "As combinações têm a mesma quantidade de peças? E o mesmo valor?", pista: "Conte o valor, não o número de peças.", revelacao: "As três combinações valem R$ 5. Equivalente significa mesmo valor." },
  momento04_explicacao: { titulo: "Mesmo valor, combinações diferentes", etapas: [{ texto: "100 centavos formam R$ 1.", exemplo: "2 moedas de 50 centavos = R$ 1." }, { texto: "Some os valores de todas as peças.", exemplo: "R$ 2 + R$ 2 + R$ 1 = R$ 5." }, { texto: "Mais peças não significa necessariamente mais valor.", exemplo: "10 moedas de 10 centavos = uma moeda de R$ 1." }, { texto: "Para pagar exato, o total deve ser igual ao preço.", exemplo: "Preço R$ 6: R$ 5 + R$ 1." }] },
  momento05_modelagem: { enunciado: "EU FAÇO — formar R$ 10", passos: ["Escolho R$ 5.", "Acrescento mais R$ 5.", "Confiro: 5 + 5 = 10."], resposta: "Duas cédulas de R$ 5 equivalem a R$ 10.", visualUrl: moeda },
  momento06_praticaGuiada: { enunciado: "NÓS FAZEMOS — forme R$ 4.", dica: "Use duas parcelas iguais.", interacao: { tipo: "contarQuiz", grupos: [{ imagemUrl: moeda, quantidade: 2, rotulo: "R$ 2 + R$ 2" }], pergunta: "Qual total?", opcoes: ["R$ 2", "R$ 4", "R$ 6"], correta: 1, feedbackAcerto: "2 + 2 = 4.", feedbackErro: "Some os valores." } },
  momento07_praticaIndependente: { enunciado: "VOCÊ FAZ — qual combinação vale R$ 6?", interacao: { tipo: "contarQuiz", grupos: [{ imagemUrl: moeda, quantidade: 2 }], pergunta: "Escolha.", opcoes: ["R$ 5 + R$ 1", "R$ 2 + R$ 2", "R$ 10 − R$ 2"], correta: 0, feedbackAcerto: "5 + 1 = 6.", feedbackErro: "Calcule cada total." } },
  momento08_aplicacao: { contexto: "Um livro custa R$ 7.", problema: "Qual pagamento é exato?", interacao: { tipo: "contarQuiz", grupos: [{ imagemUrl: moeda, quantidade: 2 }], pergunta: "Pagamento exato", opcoes: ["R$ 5 + R$ 2", "R$ 5 + R$ 1", "R$ 10"], correta: 0, feedbackAcerto: "5 + 2 = 7.", feedbackErro: "O total precisa ser R$ 7." } },
  momento09_revisao: { pontos: ["Equivalente = mesmo valor.", "R$ 1 = 100 centavos.", "Some valores, não peças.", "Confira o preço."], miniDesafio: { tipo: "contarQuiz", grupos: [{ imagemUrl: moeda, quantidade: 2 }], pergunta: "50 c + 50 c = ?", opcoes: ["50 c", "R$ 1", "R$ 2"], correta: 1, feedbackAcerto: "100 centavos = R$ 1.", feedbackErro: "Some 50 + 50." } },
  momento10_avaliacao: { perguntas: [
    { pergunta: "R$ 2 + R$ 2 = ?", opcoes: ["R$ 2", "R$ 4", "R$ 6"], correta: 1, feedbackAcerto: "Certo.", feedbackErro: "Some 2 + 2." },
    { pergunta: "Duas moedas de 50 c valem:", opcoes: ["R$ 1", "R$ 2", "50 c"], correta: 0, feedbackAcerto: "100 c = R$ 1.", feedbackErro: "50 + 50 = 100 c." },
    { pergunta: "Qual vale R$ 10?", opcoes: ["R$ 5 + R$ 5", "R$ 5 + R$ 2", "R$ 2 + R$ 2"], correta: 0, feedbackAcerto: "5 + 5 = 10.", feedbackErro: "Some." },
    { pergunta: "Mais moedas sempre significa mais valor?", opcoes: ["Sim", "Não", "Só moedas douradas"], correta: 1, feedbackAcerto: "Importa o valor.", feedbackErro: "Compare os valores." },
    { pergunta: "Preço R$ 8. Pagamento exato:", opcoes: ["R$ 5 + R$ 2", "R$ 5 + R$ 2 + R$ 1", "R$ 10"], correta: 1, feedbackAcerto: "5 + 2 + 1 = 8.", feedbackErro: "Some cada opção." },
  ] },
  momento11_missaoFamilia: { titulo: "Mercadinho de brincadeira", materiais: ["Dinheiro de brinquedo ou cartões desenhados"], passos: ["Criem preços até R$ 10.", "Formem dois pagamentos equivalentes.", "Confiram as somas."], registro: "Desenho de dois pagamentos iguais." },
  recompensa: { xp: 240, moedas: 120, medalha: "Caixa Matemático" },
};

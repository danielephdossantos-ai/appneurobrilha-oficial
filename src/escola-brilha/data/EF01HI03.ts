import type { Aula } from "../types";
import { url as casaImg } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as escolaImg } from "@/assets/neuro-treino/objetos/escola.png.asset.json";
import { url as criancasImg } from "@/assets/neuro-treino/objetos/criancas-grupo.png.asset.json";
import { url as mochilaImg } from "@/assets/neuro-treino/objetos/mochila.png.asset.json";

/** EF01HI03 — papéis e responsabilidades na família, escola e comunidade. */
const aula: Aula = {
  codigo: "EF01HI03", ano: "1º Ano", disciplina: "História", titulo: "Meus Papéis em Cada Lugar",
  narrativa: { titulo: "As Três Portas da Convivência", contexto: "Brilha encontrou três portas: CASA, ESCOLA e COMUNIDADE. Em cada lugar, ele participa de um jeito diferente.", problema: "As placas com papéis e responsabilidades se misturaram. É preciso descobrir o que cada pessoa pode fazer em cada espaço.", convite: "Vamos organizar as responsabilidades sem dizer que uma tarefa pertence somente a menino, menina ou adulto?" },
  conhecimentosPrevios: ["Reconhecer casa, escola e comunidade.", "Perceber que convivemos com pessoas diferentes."],
  missao: "Descrever e distinguir seus papéis e responsabilidades na família, na escola e na comunidade.",
  objetivos: ["Distinguir os papéis de estudante, familiar e integrante da comunidade.", "Reconhecer responsabilidades adequadas à idade.", "Perceber que tarefas podem ser compartilhadas sem estereótipos.", "Relacionar direitos, cuidado e cooperação."],
  explicacao: "Em casa, a criança pode guardar brinquedos e colaborar com tarefas seguras. Na escola, tem o papel de estudante: participar, cuidar dos materiais e respeitar colegas. Na comunidade, pode cuidar dos espaços, seguir combinados e pedir ajuda a um adulto de confiança. Responsabilidade não é fazer tudo sozinho: adultos devem proteger e cuidar das crianças.",
  explicacoesNiveis: { nivel1: "Em cada lugar, participamos de um jeito.", nivel2: "Guardar o brinquedo é uma colaboração em casa; ouvir e participar é responsabilidade na escola.", nivel3: "Papel é como uma função numa equipe: muda conforme o lugar, mas sempre envolve respeito.", nivel4: "Direitos e responsabilidades caminham juntos, e crianças podem pedir ajuda quando uma tarefa não é segura." },
  exemploResolvido: { enunciado: "Na escola, Brilha terminou de usar os lápis. Qual é sua responsabilidade?", passos: ["Reconhecer que está na escola.", "Identificar que os lápis são materiais compartilhados.", "Guardar os materiais e deixar o espaço organizado."], resposta: "Guardar os lápis e cuidar do material coletivo." },
  atividadeGuiada: { enunciado: "Qual imagem mostra o lugar em que a criança tem o papel de estudante?", resposta: "A escola.", explicacao: "Na escola, a criança aprende, pergunta, participa e convive com colegas.", visual: { tipo: "escolherImagem", pergunta: "Onde você exerce o papel de estudante?", opcoes: [{ nome: "escola", imagemUrl: escolaImg }, { nome: "casa", imagemUrl: casaImg }, { nome: "grupo", imagemUrl: criancasImg }, { nome: "mochila", imagemUrl: mochilaImg }], respostaCerta: "escola" } },
  exercicios: [
    { enunciado: "Dê um exemplo de colaboração segura em casa.", resposta: "Guardar brinquedos ou organizar os próprios materiais.", dica: "A tarefa precisa ser adequada à idade." },
    { enunciado: "Qual é uma responsabilidade na escola?", resposta: "Participar e respeitar colegas e combinados.", dica: "Pense no que ajuda todos a aprender." },
    { enunciado: "O que fazer quando uma tarefa parece perigosa?", resposta: "Não fazer sozinho e chamar um adulto de confiança.", dica: "Segurança vem primeiro." },
  ],
  desafio: { enunciado: "Classifique cada responsabilidade pelo espaço em que costuma acontecer.", resposta: "Casa, escola ou comunidade, lembrando que algumas ações cabem em mais de um lugar.", visual: { perguntas: [
    { pergunta: "Guardar o próprio brinquedo é uma colaboração comum em qual espaço?", opcoes: ["Casa", "Escola apenas", "Rua apenas", "Nenhum lugar"], correta: 0, explicacao: "É uma forma segura de colaborar em casa.", visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "Casa" } },
    { pergunta: "Participar da aula é papel de quem?", opcoes: ["Estudante", "Somente diretor", "Somente visitante", "Ninguém"], correta: 0, explicacao: "O estudante pergunta, escuta e participa.", visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "Escola" } },
    { pergunta: "Ao encontrar lixo na praça, qual atitude é responsável?", opcoes: ["Usar a lixeira com segurança", "Espalhar o lixo", "Ignorar regras", "Danificar o espaço"], correta: 0, explicacao: "Cuidar do espaço comum beneficia a comunidade.", visual: { tipo: "itens", imagemUrl: criancasImg, quantidade: 1, rotulo: "Comunidade" } },
  ] } },
  quiz: [
    { pergunta: "Qual é uma responsabilidade do estudante?", opcoes: ["Cuidar dos materiais", "Mandar em todos", "Faltar com respeito", "Fazer tarefas perigosas"], correta: 0, explicacao: "Cuidar do que usa ajuda toda a turma.", visual: { tipo: "itens", imagemUrl: mochilaImg, quantidade: 1, rotulo: "Material" } },
    { pergunta: "Quem pode colaborar nas tarefas de casa?", opcoes: ["As pessoas da casa, conforme idade e possibilidade", "Somente meninas", "Somente meninos", "Somente visitantes"], correta: 0, explicacao: "Tarefas podem ser compartilhadas sem estereótipos.", visual: { tipo: "itens", imagemUrl: casaImg, quantidade: 1, rotulo: "Casa" } },
    { pergunta: "Uma criança deve resolver sozinha uma tarefa perigosa?", opcoes: ["Não; deve chamar um adulto de confiança", "Sim, sempre", "Só se ninguém vir", "Deve esconder o risco"], correta: 0, explicacao: "Adultos têm responsabilidade de proteção.", visual: { tipo: "itens", imagemUrl: criancasImg, quantidade: 1, rotulo: "Ajuda" } },
    { pergunta: "Os papéis são iguais em todos os lugares?", opcoes: ["Não; mudam conforme o espaço", "Sim, nunca mudam", "Existem só na escola", "Existem só em casa"], correta: 0, explicacao: "Somos estudantes na escola e integrantes da família e da comunidade em outros espaços.", visual: { tipo: "itens", imagemUrl: escolaImg, quantidade: 1, rotulo: "Papéis" } },
  ],
  revisao: { pontos: ["Casa, escola e comunidade são espaços diferentes.", "Papéis e responsabilidades mudam conforme o lugar.", "Tarefas podem ser compartilhadas.", "Crianças têm direito a cuidado e proteção."], dica: "Pergunte: onde estou, qual é meu papel e qual atitude é segura?" },
  conclusao: "Missão concluída: você distinguiu papéis e responsabilidades em diferentes espaços.",
  curiosidade: { titulo: "Você sabia?", texto: "Uma mesma pessoa pode exercer vários papéis: estudante, familiar, vizinho e integrante de um grupo." },
  interativas: [{ tipo: "arrastar", titulo: "Cada papel em seu espaço", instrucao: "Ligue cada ação ao espaço mais comum.", pares: [{ item: "Participar da aula", alvo: "Escola", itemImagem: escolaImg }, { item: "Guardar brinquedos", alvo: "Casa", itemImagem: casaImg }, { item: "Cuidar da praça", alvo: "Comunidade", itemImagem: criancasImg }] }],
};

export default aula;

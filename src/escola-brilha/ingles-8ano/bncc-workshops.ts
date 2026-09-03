import type { LessonData } from "../ingles-1ano/types";
import { IMG } from "./_assets";

type Plan = { slug: string; title: string; codes: string[]; goal: string; passages: string[]; words: Array<[string,string]>; teaching: string; examples: Array<[string,string]>; product: string };
const distractors = ["Ignore context", "Guess without evidence", "Copy without reviewing"];

function createWorkshop(p: Plan): LessonData {
  return {
    slug: p.slug, bnccCodes: p.codes,
    meta: {
      unitLabel: `BNCC Workshop — ${p.title}`, headerKicker: `English Academy · 8th Grade · ${p.codes.join(" · ")}`,
      coverKicker: "Communication · Critical reading · Authorship", coverTitle: p.title, coverSubtitle: p.goal,
      storyTitle: `Mission: ${p.title}`, vocabularyTitle: "Language in context", speakingTargets: p.examples.map(([en]) => en),
      listeningIntro: "Ouça para construir o sentido global; conecte contexto, assunto e informações relevantes.",
      listeningQuestion: `Qual alternativa realiza a missão “${p.title}”?`, listeningOptions: [p.goal, ...distractors], listeningCorrect: p.goal,
      listeningWrongHint: "Retome o contexto, a finalidade e as evidências antes de responder.",
      readingNarration: `Leia antes, durante e depois: formule inferências, localize evidências e compare perspectivas. ${p.goal}`,
      grammarNarration: p.teaching, finalProjectIntro: `Planeje, revise e publique “${p.product}”. Escreva seu nome:`,
      finalProjectPhrase: (name) => `${p.product.toUpperCase()} — By ${name}. ${p.passages.join(" ")}`, finalProjectSectionTitle: p.product,
    },
    VOCAB: p.words.map(([en,pt],i)=>({id:`v${i}`,en,pt,img:[IMG.CLASS,IMG.LIBRARY,IMG.SCHOOL,IMG.FRIENDS][i%4]})),
    STORY: p.passages.map((en,i)=>({img:[IMG.CLASS,IMG.LIBRARY,IMG.SCHOOL,IMG.FRIENDS][i%4],en,pt:`Parte ${i+1}: explique como esta informação contribui para o sentido global.`})),
    DIALOG: [
      {who:"Ms. Anna",img:IMG.ANNA,en:"Could you explain that in another way?",pt:"Você poderia explicar isso de outra forma?"},
      {who:"Maya",img:IMG.MAYA,en:p.examples[0][0],pt:p.examples[0][1]},
      {who:"Kenji",img:IMG.KENJI,en:"I understand your point, but my evidence suggests another view.",pt:"Entendo seu ponto, mas minha evidência sugere outra perspectiva."},
      {who:"Lucas",img:IMG.LUCAS,en:p.examples[1][0],pt:p.examples[1][1]},
    ],
    READING:{title:p.title,img:IMG.LIBRARY,parts:p.passages.map((en,i)=>({en,pt:`Trecho ${i+1}: identifique explícitos, implícitos e perspectiva.`,highlight:en.split(" ").slice(0,3)}))},
    WRITING:[
      {prompt:"Primeiro passo da escrita:",answer:"Define purpose and audience",hint:"Defina finalidade e público.",options:["Define purpose and audience",...distractors]},
      {prompt:"Na revisão entre colegas:",answer:"Use clear criteria and evidence",hint:"Avalie conteúdo, organização e linguagem.",options:["Use clear criteria and evidence","Only say good or bad","Change the author's idea","Ignore the audience"]},
      {prompt:"Para melhorar o rascunho:",answer:"Cut, add and reformulate",hint:"Reconstrua o texto.",options:["Cut, add and reformulate","Publish immediately","Remove all paragraphs","Copy another text"]},
      {prompt:"Escolha a produção adequada:",answer:p.examples[0][0],hint:p.examples[0][1],options:[p.examples[0][0],...distractors]},
    ],
    QUIZ:[
      {q:"Qual é o objetivo desta oficina?",options:[{text:p.goal,correct:true},...distractors.map(text=>({text}))]},
      {q:"Inferir significa:",options:[{text:"Concluir usando pistas e conhecimentos",correct:true},{text:"Copiar uma frase"},{text:"Ignorar implícitos"},{text:"Traduzir letra por letra"}]},
      {q:"Uma revisão útil considera:",options:[{text:"Finalidade, público, conteúdo e organização",correct:true},{text:"Somente o tamanho"},{text:"A opinião do corretor"},{text:"Somente a capa"}]},
      {q:"Ao comparar perspectivas, devemos:",options:[{text:"Verificar argumentos e evidências",correct:true},{text:"Escolher a primeira"},{text:"Evitar discordância"},{text:"Apagar uma fonte"}]},
    ],
    REAL_LIFE:p.examples.map(([answer,situation])=>({situation,answer})),
    GRAMMAR:{focus:p.title,why:p.teaching,examples:p.examples.map(([en,pt])=>({en,pt})),errors:[
      {wrong:"I will to study.",right:"I will study.",why:"Depois de will, use o verbo sem to."},
      {wrong:"There is many water.",right:"There is much water.",why:"Water é incontável; use much."},
    ]},
    HUNTER:{intro:"Encontre a aplicação correta.",rounds:[{promptEn:p.goal,promptPt:p.goal,targetLabel:p.examples[0][0],objects:[{id:"a",label:p.examples[0][0],img:"",isTarget:true},{id:"b",label:distractors[0],img:""},{id:"c",label:distractors[1],img:""},{id:"d",label:distractors[2],img:""}]}]},
    MEMORY:{intro:"Relacione conceito e significado.",pairs:p.words.slice(0,4).map(([en,pt],i)=>({id:`p${i}`,en,pt,img:IMG.CLASS}))},
    BOOK:{title:p.product,intro:"Planeje, produza, revise e publique.",pages:p.passages.map((en,i)=>({en,pt:`Seção ${i+1}`,img:[IMG.CLASS,IMG.LIBRARY][i%2],badge:"📗"}))},
    CULTURE:{title:"Communication across cultures",emoji:"🌍",paragraphs:[{en:p.passages[0],pt:"Analise a manifestação e seu contexto sem hierarquizar culturas."},{pt:"Gestos, expressões e expectativas podem mudar de sentido entre comunidades; pergunte e esclareça com respeito."}]},
  };
}

export const BNCC_WORKSHOPS_8ANO: LessonData[] = [
  createWorkshop({
    slug:"u8-a08-communication-reading",title:"Meaning Negotiators 🎧🔎",codes:["EF08LI01","EF08LI02","EF08LI03","EF08LI05","EF08LI08"],
    goal:"Resolver mal-entendidos com paráfrases e justificativas, usar recursos verbais e corporais, construir sentidos em textos orais, inferir implícitos e comparar perspectivas.",
    passages:["Two students watch the same report about a new public park.","One praises the green area; the other questions accessibility and transport.","The reporter never says the project is perfect, but the selected interviews create that impression.","The students paraphrase each view, compare evidence and explain their own conclusions."],
    words:[["paraphrase","paráfrase"],["clarify","esclarecer"],["hesitation","hesitação"],["gesture","gesto"],["inference","inferência"],["perspective","perspectiva"],["evidence","evidência"],["implicit","implícito"]],
    teaching:"Para esclarecer, use In other words..., Do you mean...? e justificativas com because. Pausas, hesitações, gestos e expressão facial ajudam a negociar sentido. Para compreender um texto oral ou multimodal, conecte as partes ao assunto principal; inferências precisam de pistas. Compare seleção de fatos, vozes e evidências.",
    examples:[["In other words, you think the park needs better access.","Paráfrase que confirma entendimento."],["I disagree because the second interview presents different evidence.","Opinião justificada."],["Her pause and expression suggest uncertainty.","Recurso paralinguístico sustenta inferência."]],product:"Two-Perspective Media Review",
  }),
  createWorkshop({
    slug:"u8-a09-literature-writing",title:"Read, Review & Publish 📚✍️",codes:["EF08LI06","EF08LI07","EF08LI09","EF08LI10","EF08LI11","EF08LI18"],
    goal:"Apreciar narrativas e manifestações culturais em suportes físicos e digitais e produzir textos autorais por planejamento, avaliação, reconstrução, edição e publicação.",
    passages:["A class reads a licensed digital short story and observes voice, setting and conflict.","Students compare the story with a visual artwork and a film scene from another English-speaking community.","Each writer plans a future-themed narrative for a defined audience, then produces a first draft.","Peers use criteria to suggest cuts, additions and reformulations before the final accessible publication."],
    words:[["narrative","narrativa"],["setting","cenário"],["conflict","conflito"],["draft","rascunho"],["peer review","revisão por colega"],["reformulate","reformular"],["publish","publicar"],["heritage","patrimônio cultural"]],
    teaching:"Apreciação literária observa linguagem, personagens, cenário, conflito e efeitos no leitor. Em ambiente virtual, confira acesso legal, autoria e acessibilidade. Produção autoral: finalidade e público → planejamento → rascunho → revisão por critérios → cortes, acréscimos e reformulações → edição final. O texto deve comunicar sonhos e projetos futuros.",
    examples:[["In 2040, our community will have a public garden on every street.","Projeto futuro em narrativa curta."],["This paragraph needs a clearer connection to the conflict.","Feedback específico de revisão."],["The artwork and the story represent belonging in different ways.","Comparação de manifestações culturais."]],product:"Future Story Digital Showcase",
  }),
  createWorkshop({
    slug:"u8-a10-future-language-culture",title:"Future Language & Intercultural Lab 🌐",codes:["EF08LI04","EF08LI12","EF08LI13","EF08LI14","EF08LI15","EF08LI16","EF08LI17","EF08LI19","EF08LI20"],
    goal:"Comunicar planos e previsões, formar palavras, comparar qualidades e quantidades, usar quantificadores e pronomes relativos e prevenir ruídos culturais na comunicação.",
    passages:["Our international team is going to design a more accessible school fair.","We will need some volunteers, but we won't need much paper because the guide will be digital.","A volunteer who knows sign language will welcome visitors; the app that shows the map will have multilingual labels.","Before meeting, the team investigates gestures, turn-taking and expressions whose meanings may differ across cultures."],
    words:[["prediction","previsão"],["expectation","expectativa"],["possible","possível"],["impossible","impossível"],["accessible","acessível"],["volunteer","voluntário"],["quantity","quantidade"],["misunderstanding","mal-entendido"]],
    teaching:"Planos: be going to; previsões e decisões: will; possibilidades: may/might. Prefixos e sufixos ajudam a formar e inferir palavras: possible/impossible, help/helpful. Comparativos e superlativos comparam qualidades e quantidades. Use some/any e many para contáveis, much para incontáveis. Who retoma pessoas, which coisas, that ambos e whose indica relação. Gestos e expectativas culturais exigem investigação e esclarecimento.",
    examples:[["Our new guide will be more useful than the old one.","Comparativo dentro de uma previsão."],["We need many signs but not much paper.","Quantidade contável e incontável."],["The student who designed the app is presenting it.","Who conecta informações sobre pessoa."],["Could you explain what that gesture means to you?", "Pergunta que previne ruído cultural."]],product:"Intercultural Future Fair Plan",
  }),
];

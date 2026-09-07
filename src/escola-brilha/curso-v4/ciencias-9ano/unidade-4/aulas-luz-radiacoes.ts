import { criarAulaConsolidacao } from "../../ciencias-3ano/criar-aula-consolidacao";

export const aula02 = criarAulaConsolidacao({
  slug: "aula-02-luz-cores-rgb", titulo: "Luz, Cores e Sistema RGB", icone: "🌈", bncc: ["EF09CI04"],
  tema: "composição da luz e percepção das cores", conceito: "Luzes vermelha, verde e azul formam o sistema aditivo RGB; a cor percebida depende da luz que ilumina e das faixas que o objeto reflete.",
  explicacao: "Somar vermelho, verde e azul em intensidades altas produz luz branca; pares produzem ciano, magenta e amarelo. Um objeto parece vermelho sob luz branca porque reflete mais vermelho, mas pode parecer escuro sob luz azul.",
  exemplo: "Pixels de uma tela variam a intensidade de subpixels RGB. Uma banana amarela reflete sobretudo vermelho e verde da luz incidente.",
  vocabulario: ["síntese aditiva", "RGB", "reflexão seletiva"], etapas: ["Escolher luz incidente", "Combinar componentes RGB", "Identificar faixas refletidas", "Prever a cor observada"],
  questoes: [
    { pergunta: "O que resulta da soma intensa de R, G e B?", opcoes: ["Luz branca", "Preto absoluto", "Som", "Calor sem luz"], correta: 0, explicacao: "Na síntese aditiva, as três componentes formam branco." },
    { pergunta: "Por que um objeto vermelho parece vermelho sob luz branca?", opcoes: ["Reflete principalmente luz vermelha", "Cria luz do nada", "Absorve apenas vermelho", "Não interage com luz"], correta: 0, explicacao: "A cor percebida depende da radiação refletida." },
    { pergunta: "Vermelho mais verde em uma tela produz qual luz?", opcoes: ["Amarela", "Azul", "Preta", "Ultravioleta"], correta: 0, explicacao: "R + G forma amarelo na síntese aditiva." },
  ], missao: "Preveja cores de telas e objetos sob diferentes iluminações usando o modelo RGB e reflexão seletiva.",
});

export const aula03 = criarAulaConsolidacao({
  slug: "aula-03-comunicacao-e-espectro", titulo: "Comunicação e Espectro Eletromagnético", icone: "📡", bncc: ["EF09CI05", "EF09CI06"],
  tema: "ondas eletromagnéticas e comunicação", conceito: "Informação de som e imagem pode ser convertida em sinais, transmitida por ondas eletromagnéticas e reconstruída; o espectro é classificado por frequência e comprimento de onda.",
  explicacao: "Rádio, micro-ondas, infravermelho, visível, ultravioleta, raios X e gama são a mesma família, mas diferem em frequência, energia, fontes e usos. Antenas e fibras ópticas transportam sinais codificados.",
  exemplo: "Numa videochamada, microfone e câmera digitalizam som e imagem; a rede transmite dados por rádio, cabo ou luz na fibra; o aparelho receptor reconstrói ambos.",
  vocabulario: ["sinal", "frequência", "espectro eletromagnético"], etapas: ["Captar som ou imagem", "Codificar o sinal", "Transmitir pela onda", "Receber e reconstruir"],
  questoes: [
    { pergunta: "O que um celular transmite durante uma chamada?", opcoes: ["Informação codificada em sinais", "A voz como matéria", "Som diretamente no vácuo", "Somente calor"], correta: 0, explicacao: "O aparelho converte informação em sinal e a reconstrói no destino." },
    { pergunta: "Como se classificam faixas do espectro?", opcoes: ["Por frequência e comprimento de onda", "Por cor do aparelho", "Por preço", "Por país"], correta: 0, explicacao: "Essas grandezas distinguem as faixas eletromagnéticas." },
    { pergunta: "Qual meio usa pulsos de luz?", opcoes: ["Fibra óptica", "Barbante", "Ar sem sinal", "Papel"], correta: 0, explicacao: "A fibra guia luz modulada com dados." },
  ], missao: "Trace o caminho de som e imagem entre dois celulares e classifique as ondas usadas em cada trecho.",
});

export const aula04 = criarAulaConsolidacao({
  slug: "aula-04-radiacoes-na-medicina", titulo: "Radiações na Medicina", icone: "🩻", bncc: ["EF09CI07"],
  tema: "aplicações médicas das radiações", conceito: "Diferentes radiações permitem obter imagens ou tratar doenças; benefícios dependem de indicação, dose controlada e proteção profissional.",
  explicacao: "Raios X atravessam tecidos de modos diferentes e formam radiografias; radiofármacos podem indicar funções de órgãos; radioterapia direciona radiação para danificar células doentes. Ultrassom não é radiação eletromagnética.",
  exemplo: "Uma radiografia é escolhida para observar ossos, enquanto outros exames são indicados conforme o tecido e a pergunta clínica. A equipe aplica o princípio da menor exposição necessária.",
  vocabulario: ["diagnóstico por imagem", "radioterapia", "dose"], etapas: ["Definir a pergunta clínica", "Escolher a tecnologia", "Controlar exposição", "Interpretar com profissional habilitado"],
  questoes: [
    { pergunta: "Para que raios X são usados na medicina?", opcoes: ["Produzir imagens internas", "Transmitir som no ar", "Medir chuva", "Criar matéria"], correta: 0, explicacao: "A absorção diferente pelos tecidos permite formar imagens." },
    { pergunta: "Qual é a finalidade da radioterapia?", opcoes: ["Tratar doenças com radiação direcionada", "Substituir qualquer exame", "Aumentar exposição sem controle", "Produzir vacinas"], correta: 0, explicacao: "O tratamento é planejado para concentrar dose no alvo e proteger tecidos saudáveis." },
    { pergunta: "Ultrassom é onda de qual tipo?", opcoes: ["Mecânica", "Eletromagnética", "Radioativa", "Luz visível"], correta: 0, explicacao: "Ultrassom é vibração mecânica e precisa de meio material." },
  ], missao: "Compare três tecnologias médicas por tipo de onda, finalidade, benefício e cuidados de segurança.",
});

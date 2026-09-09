#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fases 3 e 4 — Português 4º ano.
Injeta `momento_escrita` (ciclo Rascunho → Revisão → Versão final, foco em
texto longo e coesão, 9 anos) e `momento_fluencia` (releitura calibrada a
~110 palavras/minuto, leitura EXPRESSIVA) nas 24 aulas.

Idempotente: se a aula já tiver o bloco, ela é pulada.
"""
import os
import re
import glob

BASE = "src/escola-brilha/curso-v4/portugues-4ano"

CHECK_BASE = [
    "Meu texto tem começo, meio e fim — não termina no meio da ideia.",
    "Comecei cada frase com letra maiúscula e fechei com ponto.",
    "Não repeti a mesma palavra várias vezes: troquei por pronome ou sinônimo.",
    "Usei pelo menos um conectivo (porque, então, mas, além disso) ligando as ideias.",
    "Li em voz alta e consertei o que ficou estranho.",
]


def esc(titulo, comando, linhas, modelo, extra=None):
    return {
        "titulo": titulo,
        "comando": comando,
        "linhas": linhas,
        "modelo": modelo,
        "checklist": CHECK_BASE + (extra or []),
    }


def flu(titulo, texto):
    palavras = sum(len(t.split()) for t in texto)
    return {"titulo": titulo, "texto": texto, "meta": max(12, round(palavras / 110 * 60))}


AULAS = {
    # ---------------- UNIDADE 1 — Mapa da Leitura ----------------
    "unidade-1/aula-01-ideia-principal-e-detalhes.ts": (
        esc(
            "Escreva um parágrafo com ideia principal",
            "Escolha um lugar que você conhece bem (sua rua, sua escola, um parque). Escreva UM parágrafo em que a primeira frase diga a ideia principal e as outras três tragam detalhes que provam essa ideia.",
            5,
            [
                "A praça do meu bairro é o melhor lugar para brincar de tarde.",
                "Ela tem uma quadra grande, com cesta e traves.",
                "Debaixo das árvores fica sempre fresco, mesmo no sol forte.",
                "Por isso, quase toda criança da rua aparece por lá depois da aula.",
            ],
            ["A primeira frase do meu parágrafo diz a IDEIA PRINCIPAL.", "Cada detalhe que escrevi comprova essa ideia."],
        ),
        flu(
            "Leitura expressiva: A Trilha das Pistas",
            [
                "A trilha começava atrás da escola e subia devagar até o alto do morro, onde o vento não parava nunca.",
                "Ao longo do caminho, placas de madeira contavam a história do lugar: aqui existiu um engenho, ali passava um riacho que hoje corre por baixo da rua.",
                "Quem lê as placas com atenção descobre que a cidade inteira já foi um grande campo — e que cada nome de rua guarda um pedaço dessa memória.",
            ],
        ),
    ),
    "unidade-1/aula-02-inferencia-o-que-o-texto-nao-diz.ts": (
        esc(
            "Escreva uma cena cheia de pistas",
            "Escreva um parágrafo descrevendo uma pessoa chegando em casa — SEM dizer como ela está se sentindo. Deixe 3 pistas (o que ela faz, o que ela carrega, o som que faz) para o leitor inferir a emoção.",
            5,
            [
                "Ana empurrou o portão com o ombro e deixou a mochila cair no chão da sala.",
                "Ela nem tirou o tênis molhado antes de se jogar no sofá.",
                "O celular tocou três vezes e ela virou a tela para baixo.",
            ],
            ["Deixei pistas em vez de contar tudo com todas as letras.", "Um colega consegue INFERIR a emoção lendo meu texto."],
        ),
        flu(
            "Leitura expressiva: A Porta Entreaberta",
            [
                "A luz da cozinha estava acesa, mas ninguém respondeu quando Téo chamou pelo nome da avó.",
                "Sobre a mesa havia duas xícaras ainda mornas, um pano dobrado às pressas e a porta dos fundos entreaberta, batendo com o vento.",
                "Téo respirou fundo, guardou o susto no bolso e resolveu seguir as marcas de terra que atravessavam o corredor até o quintal.",
            ],
        ),
    ),
    "unidade-1/aula-03-ordem-e-causa.ts": (
        esc(
            "Escreva a corrente de causas",
            "Conte, em um parágrafo, algo que aconteceu com você e explique a CORRENTE: o que aconteceu primeiro, o que isso causou e qual foi a consequência final. Use conectivos como porque, então, por isso.",
            5,
            [
                "Na terça choveu forte a manhã inteira.",
                "Por isso, o recreio aconteceu dentro da sala.",
                "Como ninguém pôde correr no pátio, a professora inventou um campeonato de adivinhas.",
                "No fim, todo mundo saiu rindo — a chuva acabou virando a melhor aula da semana.",
            ],
            ["Meu texto mostra CAUSA e CONSEQUÊNCIA, não só uma lista de fatos.", "Usei conectivos de causa (porque, por isso, então)."],
        ),
        flu(
            "Leitura expressiva: O Dia em que o Rio Subiu",
            [
                "Choveu sem parar durante três dias, e o rio que corta a cidade foi subindo devagar, centímetro por centímetro.",
                "Como o bueiro da rua estava entupido de folhas, a água não teve para onde escorrer e invadiu as calçadas.",
                "Depois disso, os moradores se organizaram em mutirão: limparam os bueiros, plantaram árvores na margem e combinaram um aviso por mensagem sempre que o nível começasse a subir de novo.",
            ],
        ),
    ),
    "unidade-1/aula-04-resumo-do-explorador.ts": (
        esc(
            "Resumo com suas próprias palavras",
            "Pense em um filme, livro ou episódio que você gostou. Escreva um resumo de 4 a 6 linhas contando SÓ o essencial: quem, onde, qual foi o problema e como terminou. Nada de copiar frases prontas.",
            6,
            [
                "A história acontece numa vila pequena, perto do mar.",
                "Uma menina descobre que os barcos estão sumindo toda madrugada.",
                "Ela decide vigiar o porto e encontra a explicação escondida na maré.",
                "No fim, a vila aprende a prender os barcos de um jeito novo.",
            ],
            ["Meu resumo tem só o ESSENCIAL — cortei os detalhes pequenos.", "Escrevi com MINHAS palavras, sem copiar o texto original."],
        ),
        flu(
            "Leitura expressiva: O Caderno do Explorador",
            [
                "Todo explorador carrega um caderno pequeno, com a capa gasta pelo uso e as páginas cheias de anotações rápidas.",
                "Nele não cabem histórias inteiras: cabe o essencial, aquilo que precisa ser lembrado quando a memória cansar.",
                "Por isso, resumir é uma arte — é escolher, entre tudo o que aconteceu, as poucas frases que seguram a história em pé.",
            ],
        ),
    ),
    # ---------------- UNIDADE 2 — Oficina da Palavra ----------------
    "unidade-2/aula-01-silaba-tonica-acentuacao.ts": (
        esc(
            "Texto com caça ao acento",
            "Escreva um parágrafo sobre o seu lanche favorito usando pelo menos 5 palavras acentuadas (por exemplo: café, você, açúcar, também, pão). Depois circule mentalmente a sílaba tônica de cada uma.",
            5,
            [
                "No sábado de manhã, a minha avó faz pão de queijo.",
                "Ela também prepara um café com pouco açúcar.",
                "Eu ajudo a pôr a mesa e escolho a geleia que vamos usar.",
            ],
            ["Usei pelo menos 5 palavras com acento.", "Conferi se cada acento está na sílaba tônica certa."],
        ),
        flu(
            "Leitura expressiva: A Oficina dos Acentos",
            [
                "Na oficina das palavras, cada acento é uma ferramenta pequena que muda tudo de lugar.",
                "Sem ele, sabia vira sabiá, secretaria vira secretária e o sentido escorrega da frase inteira.",
                "Por isso o escritor cuidadoso lê em voz alta antes de entregar o texto: é o próprio ouvido que aponta onde a força da voz caiu.",
            ],
        ),
    ),
    "unidade-2/aula-02-por-que-mas-mais.ts": (
        esc(
            "Bilhete com os quatro porquês",
            "Escreva um bilhete para um colega explicando por que você faltou em um combinado. Use pelo menos uma vez 'por que' (pergunta), 'porque' (resposta) e o par 'mas' / 'mais'.",
            6,
            [
                "Você deve estar se perguntando por que eu não apareci ontem.",
                "Não fui porque minha irmã ficou doente e precisei ficar com ela.",
                "Queria muito ter ido, mas não deu.",
                "Na próxima vez eu aviso com mais antecedência.",
            ],
            ["Usei 'por que' em pergunta e 'porque' em resposta.", "Conferi cada 'mas' (oposição) e cada 'mais' (quantidade)."],
        ),
        flu(
            "Leitura expressiva: O Enigma dos Porquês",
            [
                "Por que tanta gente confunde as quatro formas se cada uma tem um lugar próprio na frase?",
                "A resposta é simples: elas soam iguais, mas fazem trabalhos diferentes — uma pergunta, outra responde, uma fecha a frase e a última é substantivo.",
                "Quem lê com atenção percebe a diferença no sentido, e não apenas no som, e escreve com muito mais segurança.",
            ],
        ),
    ),
    "unidade-2/aula-03-familia-de-palavras.ts": (
        esc(
            "Parágrafo da mesma família",
            "Escolha um radical (por exemplo: terra, flor, pedra, livro) e escreva um parágrafo usando pelo menos 4 palavras da mesma família (terreno, aterrar, enterrado, terrestre).",
            5,
            [
                "O terreno atrás da escola estava cheio de mato.",
                "A turma resolveu desenterrar as pedras e aterrar os buracos.",
                "Hoje, aquele pedaço de terra virou uma horta.",
            ],
            ["Usei pelo menos 4 palavras do mesmo radical.", "As palavras que escolhi realmente combinam com o sentido do texto."],
        ),
        flu(
            "Leitura expressiva: A Árvore das Palavras",
            [
                "Toda palavra nasce de uma raiz, e dessa raiz brotam galhos que carregam o mesmo sentido de origem.",
                "De flor vêm floreira, florido, florescer e floricultura; de pedra vêm pedreiro, pedregulho e empedrado.",
                "Quando você reconhece a raiz, descobre de uma vez a grafia e o significado de dezenas de palavras que ainda nem aprendeu.",
            ],
        ),
    ),
    "unidade-2/aula-04-encontros-dificeis.ts": (
        esc(
            "Texto sem tropeço ortográfico",
            "Escreva um parágrafo contando um passeio, usando pelo menos 6 palavras com os encontros difíceis: X ou CH, G ou J, S ou Z, SS ou Ç.",
            6,
            [
                "No sábado fomos até a cachoeira, e eu levei minha mochila laranja.",
                "A viagem foi comprida, mas a paisagem valeu a passagem.",
                "Almoçamos peixe assado com açaí de sobremesa.",
            ],
            ["Usei pelo menos 6 palavras com encontros difíceis.", "Consultei a família da palavra quando fiquei em dúvida."],
        ),
        flu(
            "Leitura expressiva: A Travessia",
            [
                "A viagem até a cachoeira exigia paciência: primeiro a estrada de chão, depois a passagem estreita entre as pedras.",
                "No caminho, o guia mostrava as folhas grandes, explicava o barulho dos bichos e pedia silêncio quando algum pássaro aparecia.",
                "Ao chegar, ninguém falou nada por um instante — só se ouvia a água caindo, gelada e barulhenta, no poço de pedra.",
            ],
        ),
    ),
    # ---------------- UNIDADE 3 — Engrenagem da Frase ----------------
    "unidade-3/aula-01-concordancia.ts": (
        esc(
            "Parágrafo que concorda",
            "Descreva a sua sala de aula em um parágrafo, usando pelo menos três frases no PLURAL. Confira se o verbo e os adjetivos acompanharam o plural.",
            5,
            [
                "As carteiras novas ficam viradas para o quadro.",
                "Os cartazes coloridos cobrem a parede do fundo.",
                "Meus colegas chegam cedo e organizam os materiais antes da aula.",
            ],
            ["Todos os verbos concordam com o sujeito (singular ou plural).", "Os adjetivos concordam com o substantivo em gênero e número."],
        ),
        flu(
            "Leitura expressiva: A Engrenagem Certa",
            [
                "Uma frase funciona como uma engrenagem: se uma peça está fora de lugar, o mecanismo inteiro range.",
                "Quando o sujeito está no plural, o verbo precisa acompanhar; quando o substantivo é feminino, o adjetivo também muda.",
                "É por isso que ler o próprio texto em voz alta ajuda tanto: o ouvido percebe o desencaixe antes mesmo de a gente entender a regra.",
            ],
        ),
    ),
    "unidade-3/aula-02-tempos-verbais.ts": (
        esc(
            "Mesma história, três tempos",
            "Escreva um pequeno relato de algo que aconteceu com você. Depois reescreva a primeira frase no PRESENTE e a última no FUTURO, mostrando que você controla o tempo do verbo.",
            6,
            [
                "Ontem eu perdi o horário do ônibus e cheguei atrasado.",
                "Hoje eu acordo mais cedo e deixo a mochila pronta na véspera.",
                "Amanhã eu chegarei antes do sinal tocar.",
            ],
            ["Mantive o mesmo tempo verbal dentro de cada trecho.", "Marquei bem o passado, o presente e o futuro."],
        ),
        flu(
            "Leitura expressiva: Linha do Tempo",
            [
                "O verbo é o relógio da frase: ele avisa se a cena já aconteceu, se está acontecendo agora ou se ainda vai acontecer.",
                "Numa narrativa bem escrita, o narrador escolhe um tempo e se mantém nele, mudando só quando quer marcar uma lembrança ou uma promessa.",
                "Quando os tempos se misturam sem motivo, o leitor se perde e precisa voltar atrás para entender em que momento da história ele está.",
            ],
        ),
    ),
    "unidade-3/aula-03-pronomes.ts": (
        esc(
            "Texto sem repetição",
            "Escreva um parágrafo sobre um animal ou um objeto, citando o nome dele apenas UMA vez. Nas outras frases, use pronomes (ele, ela, o, a) ou expressões que substituam o nome.",
            5,
            [
                "O cachorro da vizinha chegou no mês passado.",
                "Ele late toda vez que o portão range.",
                "Mesmo assim, todo mundo na rua já gosta do bichinho.",
            ],
            ["Citei o nome principal só uma vez.", "Usei pronomes e sinônimos e ainda assim o texto ficou claro."],
        ),
        flu(
            "Leitura expressiva: O Truque do Pronome",
            [
                "Repetir o mesmo nome em todas as frases deixa o texto pesado, como um passo arrastado.",
                "Os pronomes resolvem isso: eles seguram o sentido no lugar sem obrigar o leitor a ouvir a mesma palavra o tempo todo.",
                "O cuidado é um só — o leitor precisa saber exatamente a quem cada ele, ela ou aquele se refere, senão a clareza escorre pelos dedos.",
            ],
        ),
    ),
    "unidade-3/aula-04-conectivos.ts": (
        esc(
            "Parágrafo costurado com conectivos",
            "Escreva um parágrafo defendendo uma opinião (por exemplo: o recreio deveria ser maior). Use pelo menos quatro conectivos diferentes: porque, mas, além disso, portanto.",
            6,
            [
                "Eu acho que o recreio deveria durar mais dez minutos.",
                "Isso ajudaria porque a gente volta mais concentrado para a sala.",
                "Além disso, dá tempo de comer sem pressa.",
                "Alguns dirão que atrasa a aula, mas o tempo perdido é pequeno; portanto, vale a pena testar.",
            ],
            ["Usei pelo menos 4 conectivos diferentes.", "Cada conectivo mostra a relação certa entre as ideias."],
        ),
        flu(
            "Leitura expressiva: As Palavras que Costuram",
            [
                "Conectivos são as costuras invisíveis de um texto: eles avisam se a próxima ideia soma, se contraria ou se conclui.",
                "Troque um porque por um mas e a frase inteira muda de lado, mesmo que todas as outras palavras continuem iguais.",
                "Por isso, escolher o conectivo certo não é enfeite — é decidir qual caminho o pensamento do leitor vai seguir.",
            ],
        ),
    ),
    # ---------------- UNIDADE 4 — Território dos Textos ----------------
    "unidade-4/aula-01-reportagem.ts": (
        esc(
            "Sua mini-reportagem",
            "Escolha um assunto da sua escola ou do seu bairro e escreva uma mini-reportagem com título, uma frase de abertura respondendo o que aconteceu, e pelo menos uma FALA de alguém entre aspas.",
            7,
            [
                "PONTE VELHA GANHA CORRIMÃO NOVO",
                "A ponte de madeira que liga os dois lados do bairro recebeu corrimão na semana passada.",
                "\"A gente pedia isso há dois anos\", contou dona Célia, moradora da rua de cima.",
                "A obra durou três dias e foi feita em mutirão pelos vizinhos.",
            ],
            ["Meu texto responde: o quê, quem, quando e onde.", "Incluí pelo menos uma fala entre aspas, dizendo quem falou."],
        ),
        flu(
            "Leitura expressiva: A Reportagem da Ponte",
            [
                "A reportagem não se contenta em avisar que a ponte quebrou: ela vai até o lugar, conversa com quem atravessa todo dia e mede quanto tempo o conserto levou.",
                "O repórter ouve mais de uma versão, confere os números com quem fez a obra e só então escreve.",
                "É essa apuração — perguntar, checar, voltar a perguntar — que separa uma notícia curta de uma reportagem de verdade.",
            ],
        ),
    ),
    "unidade-4/aula-02-divulgacao-cientifica.ts": (
        esc(
            "Explique um fenômeno",
            "Escolha um fenômeno da natureza (arco-íris, trovão, maré, arco de neblina) e escreva um texto curto explicando como ele acontece, para alguém mais novo. Inclua um glossário com 2 palavras difíceis.",
            7,
            [
                "O arco-íris aparece quando a luz do Sol atravessa gotas de chuva ainda no ar.",
                "Cada gota funciona como um pequeno prisma: ela separa a luz branca nas sete cores.",
                "Glossário — prisma: objeto transparente que separa a luz; refração: mudança de caminho da luz ao entrar na água.",
            ],
            ["Expliquei o fenômeno em ordem: causa, o que acontece, resultado.", "Incluí um glossário explicando as palavras difíceis."],
        ),
        flu(
            "Leitura expressiva: O Fenômeno do Arco-Íris",
            [
                "Depois da chuva, milhões de gotas continuam suspensas no ar, quase invisíveis, esperando o Sol reaparecer.",
                "Quando a luz entra em cada gota, ela muda de direção, se separa em cores e volta na direção dos nossos olhos.",
                "O arco que enxergamos não está preso no céu: ele depende de onde estamos, e por isso duas pessoas nunca veem exatamente o mesmo arco-íris.",
            ],
        ),
    ),
    "unidade-4/aula-03-verbete-infografico.ts": (
        esc(
            "Verbete de um animal",
            "Escreva o verbete de um animal que você conhece: nome, uma definição curta, onde vive, o que come e uma curiosidade. Depois liste em 3 passos numerados algo que esse animal faz (como um infográfico).",
            7,
            [
                "Abelha: inseto voador que vive em colmeias organizadas.",
                "Onde vive: em ocos de árvores, caixas de criação e frestas protegidas.",
                "Como faz o mel — 1) suga o néctar da flor; 2) leva na bolsa do papo até a colmeia; 3) desidrata o néctar dentro do favo.",
            ],
            ["Meu verbete começa com uma definição, não com uma história.", "Meus passos numerados estão na ordem certa do processo."],
        ),
        flu(
            "Leitura expressiva: A Cidade das Abelhas",
            [
                "Uma colmeia funciona como uma cidade minúscula, com tarefas distribuídas e horários que quase não falham.",
                "Umas abelhas saem para buscar néctar, outras ventilam o favo batendo as asas e algumas cuidam apenas das larvas.",
                "Sem esse trabalho repartido, o mel não amadureceria e boa parte das flores que conhecemos deixaria de ser polinizada.",
            ],
        ),
    ),
    "unidade-4/aula-04-carta-leitor-anuncio.ts": (
        esc(
            "Carta que convence",
            "Escreva uma carta de leitor pedindo uma melhoria no seu bairro. Comece dizendo qual é o problema, dê dois argumentos e termine com um pedido claro.",
            7,
            [
                "Escrevo para falar da praça da minha rua, que está sem iluminação há meses.",
                "Sem luz, as famílias deixam de usar o espaço à noite e o lugar fica abandonado.",
                "Além disso, as crianças perdem o único ponto de encontro seguro do bairro.",
                "Peço que as lâmpadas sejam trocadas ainda neste mês.",
            ],
            ["Meu texto tem problema, argumentos e pedido claro.", "Pensei em quem vai ler e escolhi palavras adequadas."],
        ),
        flu(
            "Leitura expressiva: A Praça que Precisa de Voz",
            [
                "A praça continua ali, com os bancos tortos e o escorregador enferrujado, esperando alguém que fale por ela.",
                "Escrever uma carta de leitor é justamente isso: transformar uma reclamação de calçada em um argumento que chega a quem decide.",
                "Quem escreve bem não grita mais alto — apresenta o problema, mostra as consequências e faz um pedido tão claro que fica difícil ignorar.",
            ],
        ),
    ),
    # ---------------- UNIDADE 5 — Diário de Bordo ----------------
    "unidade-5/aula-01-planejar-antes-de-escrever.ts": (
        esc(
            "Do plano ao parágrafo",
            "Antes de escrever, faça o plano em três linhas: assunto, para quem e as 3 ideias principais. Depois transforme esse plano em um parágrafo completo.",
            7,
            [
                "Plano — Assunto: por que ler antes de dormir faz bem. Para quem: colegas da turma.",
                "Ideias: acalma, aumenta o vocabulário, ajuda a dormir melhor.",
                "Ler antes de dormir é um hábito que vale a pena. A leitura acalma depois de um dia agitado, aumenta o vocabulário sem esforço e prepara o corpo para o sono.",
            ],
            ["Escrevi o PLANO antes do texto.", "Todas as ideias do plano apareceram no parágrafo final."],
        ),
        flu(
            "Leitura expressiva: O Diário de Bordo",
            [
                "Nenhum navegador levanta âncora sem antes traçar a rota no mapa e conferir o tempo previsto para a semana.",
                "Com o texto acontece o mesmo: quem planeja o assunto, o leitor e as ideias principais escreve mais rápido e se perde muito menos.",
                "O plano não engessa a escrita — ele é o corrimão que segura o autor quando a página em branco começa a assustar.",
            ],
        ),
    ),
    "unidade-5/aula-02-paragrafo-com-topico-frasal.ts": (
        esc(
            "Parágrafo com tópico frasal",
            "Escreva DOIS parágrafos sobre o mesmo assunto. Cada um deve começar com um tópico frasal (a frase que anuncia a ideia) seguido de duas frases que desenvolvem essa ideia.",
            8,
            [
                "O recreio é o momento mais importante do dia para a turma. É nele que resolvemos brigas, combinamos jogos e conversamos sem pressa.",
                "Mesmo assim, o tempo é curto demais. Quinze minutos mal dão para comer o lanche e organizar o time.",
            ],
            ["Cada parágrafo começa com um tópico frasal.", "As frases seguintes desenvolvem a ideia anunciada — não mudam de assunto."],
        ),
        flu(
            "Leitura expressiva: A Primeira Frase",
            [
                "O tópico frasal é a placa na entrada do parágrafo: ele avisa ao leitor sobre o que se vai falar ali dentro.",
                "Depois da placa, as frases seguintes precisam cumprir a promessa, trazendo explicações, exemplos ou dados que sustentem a ideia.",
                "Quando o parágrafo muda de assunto no meio do caminho, o leitor sente o tranco e precisa reler para descobrir onde a rota se perdeu.",
            ],
        ),
    ),
    "unidade-5/aula-03-coesao-sem-repetir.ts": (
        esc(
            "Reescreva sem repetir",
            "Escreva um parágrafo sobre um objeto que você usa todo dia. Regra: você não pode repetir nenhuma palavra importante mais de uma vez — troque por pronomes, sinônimos e conectivos.",
            6,
            [
                "Minha bicicleta azul foi presente do meu tio.",
                "Ela tem uma buzina que quase ninguém escuta, mas eu adoro.",
                "Uso esse transporte todos os dias para ir à escola; por isso, cuido dos pneus com atenção.",
            ],
            ["Não repeti nenhuma palavra importante.", "Mesmo trocando as palavras, o texto continuou claro."],
        ),
        flu(
            "Leitura expressiva: A Costura Invisível",
            [
                "Um texto coeso parece fácil de ler, mas por trás dessa facilidade existe uma costura cuidadosa entre as frases.",
                "Pronomes, sinônimos e conectivos ligam cada ideia à anterior, de modo que o leitor nunca precisa voltar para entender de quem se está falando.",
                "Quando essa costura falha, o texto vira uma pilha de frases soltas — todas corretas, mas sem nenhum fio que as segure juntas.",
            ],
        ),
    ),
    "unidade-5/aula-04-revisao-profissional.ts": (
        esc(
            "Revisão de verdade",
            "Pegue um texto que você já escreveu nesta unidade e reescreva-o inteiro aplicando o checklist profissional: corte o que sobra, troque repetições, conserte pontuação e melhore a frase final.",
            8,
            [
                "Versão antiga: A praça é boa. A praça tem banco. A praça tem árvore.",
                "Versão revisada: A praça do bairro é o melhor lugar da vizinhança: tem bancos à sombra e árvores altas que seguram o sol da tarde.",
                "Fechei o texto com uma frase que dá vontade de visitar o lugar.",
            ],
            ["Cortei palavras e frases que não faziam falta.", "Melhorei a frase final do texto."],
        ),
        flu(
            "Leitura expressiva: O Olhar do Revisor",
            [
                "Revisar não é procurar erros para se envergonhar: é dar ao texto a segunda chance que todo escritor precisa.",
                "O revisor lê devagar, em voz alta, e desconfia de tudo — da vírgula solta, da palavra repetida, da frase que promete e não entrega.",
                "Ao terminar, ele deixa o texto descansar um pouco e lê de novo, porque quase sempre aparece mais uma coisa para melhorar.",
            ],
        ),
    ),
    # ---------------- UNIDADE 6 — Vozes do Caminho ----------------
    "unidade-6/aula-01-narrador-1a-3a-pessoa.ts": (
        esc(
            "A mesma cena, duas vozes",
            "Escreva uma cena curta em 1ª pessoa (usando eu). Depois reescreva a MESMA cena em 3ª pessoa (ele/ela), mostrando como a voz do narrador muda o texto.",
            8,
            [
                "1ª pessoa: Eu abri a janela e senti o cheiro de chuva antes mesmo de ver as nuvens.",
                "3ª pessoa: Ele abriu a janela e sentiu o cheiro de chuva antes mesmo de ver as nuvens.",
                "Na primeira versão sabemos o que ele pensa; na segunda, só o que dá para ver de fora.",
            ],
            ["Mantive a mesma pessoa do verbo dentro de cada versão.", "Mostrei a diferença entre contar de dentro e contar de fora."],
        ),
        flu(
            "Leitura expressiva: Quem Conta a História",
            [
                "Quando o narrador diz eu, o leitor entra na cabeça do personagem e só enxerga o que ele enxerga.",
                "Quando o narrador diz ele ou ela, a câmera se afasta e passa a mostrar o que acontece com todos, inclusive o que o protagonista não percebeu.",
                "Escolher a voz que conta a história é escolher o que o leitor vai saber — e, principalmente, o que vai continuar escondido até o fim.",
            ],
        ),
    ),
    "unidade-6/aula-02-linguagem-figurada.ts": (
        esc(
            "Texto com imagens de linguagem",
            "Descreva um lugar usando pelo menos três recursos de linguagem figurada: uma comparação (como...), uma metáfora e uma personificação.",
            6,
            [
                "O mar estava liso como um espelho recém-limpo.",
                "A noite era um manto que cobria as casas devagar.",
                "O vento assobiava entre as telhas, sem pedir licença.",
            ],
            ["Usei comparação, metáfora e personificação.", "As imagens combinam com o clima do texto."],
        ),
        flu(
            "Leitura expressiva: O Mar de Espelho",
            [
                "A poesia não descreve o mundo do jeito mais direto: ela procura um caminho torto que faça o leitor enxergar melhor.",
                "Dizer que o mar é um espelho, que a noite tem manto e que o vento assobia é entregar a cena ao leitor pelos sentidos, não pela explicação.",
                "Por isso a linguagem figurada exige leitura lenta: cada imagem pede um instante de silêncio para se abrir dentro da cabeça de quem lê.",
            ],
        ),
    ),
    "unidade-6/aula-03-texto-teatral.ts": (
        esc(
            "Escreva uma cena de teatro",
            "Escreva uma cena curta de teatro com dois personagens. Use o formato: NOME DO PERSONAGEM, dois-pontos e a fala; e coloque pelo menos duas rubricas entre parênteses.",
            8,
            [
                "CENA 1 — Uma cozinha à noite.",
                "JOANA (abrindo a geladeira): Alguém comeu o último pedaço de bolo.",
                "TIÃO (sem levantar os olhos do livro): Deve ter sido o gato.",
                "JOANA (cruzando os braços): O gato não usa garfo, Tião.",
            ],
            ["Usei o formato NOME: fala em todas as falas.", "Coloquei pelo menos duas rubricas entre parênteses."],
        ),
        flu(
            "Leitura expressiva: A Cena Escrita",
            [
                "No texto teatral quase tudo acontece pela fala: não existe narrador para explicar o que os personagens sentem.",
                "O que sobra fica nas rubricas, aquelas indicações entre parênteses que dizem como entrar, como falar e para onde olhar.",
                "Ler uma peça em voz alta é o único jeito de descobrir se os diálogos soam como gente conversando de verdade.",
            ],
        ),
    ),
    "unidade-6/aula-04-falar-em-publico.ts": (
        esc(
            "Roteiro da sua apresentação",
            "Escreva o roteiro de uma apresentação de 1 minuto sobre um assunto que você domina: abertura que prende a atenção, três pontos principais e uma frase de encerramento.",
            8,
            [
                "Abertura: Vocês sabiam que a nossa escola joga fora mais de dez sacos de papel por semana?",
                "Ponto 1: de onde vem esse papel. Ponto 2: o que dá para reaproveitar. Ponto 3: como montar o ponto de coleta.",
                "Encerramento: Se cada sala separar o papel, em um mês a gente enche a primeira caixa. Topam começar amanhã?",
            ],
            ["Minha abertura prende a atenção logo na primeira frase.", "Marquei onde vou fazer pausa e mudar o tom da voz."],
        ),
        flu(
            "Leitura expressiva: A Voz que Alcança o Fundo da Sala",
            [
                "Falar em público não é falar alto: é falar com clareza, no ritmo certo, olhando para quem está ouvindo.",
                "Uma pausa bem colocada vale mais do que uma frase apressada, porque dá tempo de a ideia chegar ao fundo da sala.",
                "Quem ensaia em voz alta descobre onde a língua tropeça, onde falta ar e qual palavra precisa ser trocada por outra mais simples.",
            ],
        ),
    ),
}


def ts_str(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def bloco_escrita(e):
    modelo = "\n".join(f"          {ts_str(m)}," for m in e["modelo"])
    check = "\n".join(f"          {ts_str(c)}," for c in e["checklist"])
    return f"""  // ------------------------------------------------------------
  // ESCRITA · ciclo Rascunho → Revisão → Versão final (Fase 3 · 4º ano)
  // ------------------------------------------------------------
  momento_escrita: {{
    titulo: "Diário de Bordo do Explorador",
    instrucao:
      "Escritor de verdade escreve três vezes: primeiro o RASCUNHO (solte as ideias), depois a REVISÃO (confira item por item) e só então a VERSÃO FINAL.",
    blocos: [
      {{
        tipo: "escritaReal",
        formato: "texto",
        titulo: {ts_str(e["titulo"])},
        comando:
          {ts_str(e["comando"])},
        linhas: {e["linhas"]},
        modelo: [
{modelo}
        ],
        checklist: [
{check}
        ],
        cicloRevisao: true,
      }},
    ],
  }},

"""


def bloco_fluencia(f):
    texto = "\n".join(f"      {ts_str(t)}," for t in f["texto"])
    return f"""  // ------------------------------------------------------------
  // FLUÊNCIA · releitura expressiva (Fase 4 · 4º ano · ~110 ppm)
  // ------------------------------------------------------------
  momento_fluencia: {{
    titulo: {ts_str(f["titulo"])},
    instrucao:
      "Leia o mesmo trecho três vezes: a 1ª devagar, entendendo tudo; a 2ª no cronômetro; a 3ª em voz alta com ENTONAÇÃO — respeitando vírgula, ponto e travessão. A meta não é correr: é ler como quem conta.",
    texto: [
{texto}
    ],
    metaSegundos: {f["meta"]},
  }},

"""


def main():
    feitos, pulados = 0, []
    for rel, (e, f) in AULAS.items():
        path = os.path.join(BASE, rel)
        src = open(path, encoding="utf-8").read()
        add = ""
        if "momento_escrita:" not in src:
            add += bloco_escrita(e)
        if "momento_fluencia:" not in src:
            add += bloco_fluencia(f)
        if not add:
            pulados.append(rel)
            continue
        m = re.search(r"^  momento09_revisao:", src, re.M)
        if not m:
            print("!! âncora não encontrada:", rel)
            continue
        src = src[: m.start()] + add + src[m.start() :]
        open(path, "w", encoding="utf-8").write(src)
        feitos += 1
    print(f"aulas atualizadas: {feitos} | já tinham: {len(pulados)}")
    faltam = [
        p
        for p in sorted(glob.glob(os.path.join(BASE, "unidade-*/aula-*.ts")))
        if "momento_escrita:" not in open(p, encoding="utf-8").read()
        or "momento_fluencia:" not in open(p, encoding="utf-8").read()
    ]
    print("aulas ainda sem bloco:", faltam)


if __name__ == "__main__":
    main()

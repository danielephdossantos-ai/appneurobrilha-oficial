INSERT INTO public.pedagogical_activities_base (
  titulo, materia, serie, faixa_etaria, habilidade_bncc, nivel_dificuldade, 
  objetivo_pedagogico, estrategia_pedagogica, variacoes, reforco_positivo, reforco_erro
) VALUES 
(
  'Coordenação Motora: Seguindo o Caminho', 'Geral', 'Educação Infantil', '4-5 anos', 'EI03CG05', 'simples',
  'Desenvolver coordenação motora fina através do seguimento de linhas e caminhos.',
  'Ajude o coelhinho a chegar na cenoura seguindo a linha pontilhada com o dedo!',
  '[{"type": "visual_match", "enunciado": "Leve a abelhinha até a flor!", "options": ["🌸", "🚗", "🏠"], "answer": "🌸"}]',
  'Que movimento perfeito! Você brilhou!', 'Ops! Vamos tentar seguir a linha com calma?'
),
(
  'Cores e Formas: O Baú Mágico', 'Geral', 'Educação Infantil', '4-5 anos', 'EI03ET01', 'simples',
  'Identificar e parear formas geométricas e cores primárias.',
  'Olha só estas formas! Você consegue encontrar o círculo vermelho?',
  '[{"type": "visual_match", "enunciado": "Qual destas formas é um CÍRCULO?", "options": ["🔴", "🟦", "🔺"], "answer": "🔴"}]',
  'Forma encontrada! Você tem olhos de águia!', 'O círculo é redondinho como o sol. Tente de novo!'
),
(
  'Consciência Fonológica: O Som da Letra A', 'portugues', 'Educação Infantil', '4-5 anos', 'EI03EF09', 'simples',
  'Identificar o som inicial da letra A em palavras do cotidiano.',
  'Ouça o som: AAAAA. Qual destas figuras começa com esse som? A-A-Abacaxi!',
  '[{"type": "visual_match", "enunciado": "Qual começa com A?", "options": ["🍍", "🍌", "🍎"], "answer": "🍍"}]',
  'O som está certinho! Você é fera!', 'Escute bem: A-A-A... tente encontrar o som inicial.'
),
(
  'Números: Contando Amigos', 'matematica', 'Educação Infantil', '4-5 anos', 'EI03ET07', 'simples',
  'Relacionar pequenas quantidades aos números 1 a 5.',
  'Quantos gatinhos temos aqui? Vamos contar juntos: 1... 2!',
  '[{"type": "visual_match", "enunciado": "Onde tem 3 estrelas?", "options": ["⭐", "⭐⭐", "⭐⭐⭐"], "answer": "⭐⭐⭐"}]',
  'Contagem perfeita! Você sabe tudo de números!', 'Vamos contar de novo, um por um, com o dedo.'
),
(
  'Emoções: Como você se sente?', 'Geral', 'Educação Infantil', '4-5 anos', 'EI03EO01', 'simples',
  'Identificar e nomear emoções básicas através de expressões faciais.',
  'Olha esse amiguinho! Ele está sorrindo. Ele está feliz ou triste?',
  '[{"type": "visual_match", "enunciado": "Qual carinha está FELIZ?", "options": ["😊", "😢", "😠"], "answer": "😊"}]',
  'Isso mesmo! Você entende muito de sentimentos!', 'Observe o sorriso ou as lágrimas na carinha.'
),
(
  'Coordenação Visual: Quebra-Cabeça de 2 Peças', 'Geral', 'Educação Infantil', '4-5 anos', 'EI03ET05', 'simples',
  'Desenvolver percepção visual e raciocínio lógico simples.',
  'Vamos montar o cachorrinho! Qual peça completa o corpinho dele?',
  '[{"type": "visual_match", "enunciado": "Qual completa o desenho do 🐶?", "options": ["🦴", "🐕", "🐱"], "answer": "🐕"}]',
  'Encaixe perfeito! Você montou tudo!', 'Tente girar a peça na sua mente e veja se combina.'
);
// Módulo de Correção de Leitura e Síntese Rígida para Neurotreino

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

/**
 * Prepara e limpa o texto garantindo que caracteres especiais e acentos
 * sejam interpretados corretamente pela Web Speech API.
 */
export function normalizeTextForTTS(text: string): string {
  if (!text) return '';
  // 1. Remove caracteres invisíveis ou formatações ocultas que quebram o leitor
  // 2. Aplica normalização NFC conforme requisito de síntese rígida
  let cleanText = text.trim().normalize('NFC');
  
  // 3. Verifica se a palavra está no dicionário de correções fonéticas
  if (PHONETIC_FIXES[cleanText]) {
    return PHONETIC_FIXES[cleanText];
  }
  return cleanText;
}

/**
 * Dicionário de exceções e palavras com acentuação sensível

 * Adicione aqui qualquer palavra que o motor de voz do navegador tenda a soletrar ou ler errado.
 */
const PHONETIC_FIXES: Record<string, string> = {
  'três': 'três',
  'Três': 'Três',
  'TRÊS': 'três',
  // Se o leitor do navegador ainda falhar em algum dispositivo específico,
  // a representação fonética direta resolve:
  // 'três': 'trêss',
};

/**
 * Prepara e limpa o texto garantindo que caracteres especiais e acentos
 * sejam interpretados corretamente pela Web Speech API.
 */
export function normalizeTextForTTS(text: string): string {
  if (!text) return '';
  // 1. Remove caracteres invisíveis ou formatações ocultas que quebram o leitor
  let cleanText = text.trim().normalize('NFC');
  // 2. Verifica se a palavra está no dicionário de correções fonéticas
  if (PHONETIC_FIXES[cleanText]) {
    return PHONETIC_FIXES[cleanText];
  }
  return cleanText;
}

/**
 * Função de Leitura de Alta Precisão para o Neurotreino.
 * Substitui o uso direto de window.speechSynthesis.speak por esta versão sanitizada.
 */
export function speakNeurotreino(
  textToRead: string, 
  onEndCallback?: () => void
): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.error('API de Síntese de Voz não suportada neste navegador.');
    return;
  }
  // Cancela qualquer fala anterior em andamento para evitar sobreposição
  window.speechSynthesis.cancel();
  
  const safeText = normalizeTextForTTS(textToRead);
  const utterance = new SpeechSynthesisUtterance(safeText);
  
  // CONFIGURAÇÕES CRÍTICAS PARA NÃO ERRAR A LEITURA (SÍNTESE RÍGIDA):
  utterance.lang = 'pt-BR'; // Estritamente Português do Brasil
  utterance.rate = 0.9;     // Taxa de velocidade 0.9 para clareza pedagógica
  utterance.pitch = 1.0;    // Tom neutro
  
  // Seleciona preferencialmente uma voz nativa em pt-BR se disponível
  const voices = window.speechSynthesis.getVoices();
  const ptVoice = voices.find(
    (voice) => voice.lang === 'pt-BR' || voice.lang === 'pt_BR'
  );
  if (ptVoice) {
    utterance.voice = ptVoice;
  }
  
  if (onEndCallback) {
    utterance.onend = onEndCallback;
  }
  
  utterance.onerror = (event) => {
    console.error('Erro na leitura do Neurotreino:', event);
  };
  
  window.speechSynthesis.speak(utterance);
}

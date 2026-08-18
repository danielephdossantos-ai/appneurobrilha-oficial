/**
 * Remove termos clínicos e diagnósticos de textos voltados para pais e crianças.
 * Substitui por termos de desenvolvimento e objetivos pedagógicos.
 */
const CLINICAL_TERMS_MAP: Record<string, string> = {
  "TEA": "Desenvolvimento Atípico",
  "TDAH": "Foco e Atenção",
  "Autismo": "Comunicação Social",
  "Transtorno": "Desafio",
  "Déficit": "Necessidade de Estímulo",
  "Hiperatividade": "Energia e Movimento",
  "Impulsividade": "Controle Inibitório",
  "Dislexia": "Processamento da Leitura",
};

export function sanitizarLinguagem(texto: string): string {
  let resultado = texto;
  Object.entries(CLINICAL_TERMS_MAP).forEach(([termo, amigavel]) => {
    const regex = new RegExp(termo, "gi");
    resultado = resultado.replace(regex, amigavel);
  });
  return resultado;
}

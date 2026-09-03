import type { AulaGeoV1, CenaGeoV1, CursoGeoV1 } from "../types";
import { unidade1 } from "./unidade-1";
import { unidade2 } from "./unidade-2";
import { unidade3 } from "./unidade-3";
import { unidade4 } from "./unidade-4";
import { unidade5 } from "./unidade-5";
import { unidade6 } from "./unidade-6";
import { unidade7 } from "./unidade-7";

/**
 * Curso: Ensino Religioso 6º Ano — "Decifrador dos Textos Sagrados"
 * BNCC EF06ER01 → EF06ER07 — foco: TEXTOS SAGRADOS ESCRITOS E ORAIS.
 * Aula NÃO CONFESSIONAL. Todas as tradições retratadas com o MESMO respeito.
 */
function completarQuatro<T>(itens:T[],criar:(indice:number)=>T):T[]{return itens.length>=4?itens:[...itens,...Array.from({length:4-itens.length},(_,i)=>criar(i))]}
function normalizarCena(cena:CenaGeoV1):CenaGeoV1{
  if(cena.tipo==="votoExplorador")return{...cena,opcoes:completarQuatro(cena.opcoes,i=>({id:`extra-${i}`,titulo:"Não corresponde ao conteúdo",subtitulo:"Retome as pistas",emoji:"🔎",cor:"from-slate-400 to-gray-600"}))};
  if(cena.tipo==="quizRadar")return{...cena,perguntas:cena.perguntas.map(q=>({...q,cards:completarQuatro(q.cards,i=>({id:`extra-${i}`,emoji:"🔎",titulo:"Não corresponde ao texto",cor:"from-slate-400 to-gray-600"}))}))};
  if(cena.tipo==="seloAtlas")return{...cena,perguntas:cena.perguntas.map(q=>({...q,opcoes:completarQuatro(q.opcoes,i=>({id:`extra-${i}`,texto:"Não corresponde ao conteúdo",correta:false}))}))};
  return cena;
}
function normalizarAula(aula:AulaGeoV1):AulaGeoV1{return{...aula,cena01_motivacao:normalizarCena(aula.cena01_motivacao),cena02_previsao:normalizarCena(aula.cena02_previsao),cena03_vocabulario:normalizarCena(aula.cena03_vocabulario),cena04_leituraGuiada:normalizarCena(aula.cena04_leituraGuiada),cena05_compreensao:normalizarCena(aula.cena05_compreensao),cena06_personagensLugar:normalizarCena(aula.cena06_personagensLugar),cena07_sequencia:normalizarCena(aula.cena07_sequencia),cena08_voceLe:normalizarCena(aula.cena08_voceLe),cena09_minijogo:normalizarCena(aula.cena09_minijogo),cena10_revisao:normalizarCena(aula.cena10_revisao),cena11_avaliacao:normalizarCena(aula.cena11_avaliacao)}}

const curso: CursoGeoV1 = {
  slug: "ensino-religioso-6ano",
  disciplina: "Ensino Religioso",
  ano: "6º Ano",
  titulo: "Decifrador dos Textos Sagrados",
  descricao:
    "Brilha e Aurora entram no mundo dos textos que guardam a memória das grandes tradições — Torá, Bíblia, Alcorão, Vedas, Sutras, tradições orais indígenas e afro-brasileiras. Sem julgar, só entender.",
  corPrimaria: "#c9a84c",
  corSecundaria: "#1a1035",
  tipoAula: "geo-v1",
  unidades: [unidade1, unidade2, unidade3, unidade4, unidade5, unidade6, unidade7].map(unidade=>({...unidade,aulas:unidade.aulas.map(normalizarAula)})),
};

export default curso;

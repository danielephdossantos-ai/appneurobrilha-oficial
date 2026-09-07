import type { LessonData } from "../ingles-1ano/types";
import u01 from "./u9-a01-my-future/data";
import u02 from "./u9-a02-digital-citizenship/data";
import u03 from "./u9-a03-global-challenges/data";
import u04 from "./u9-a04-science-innovation/data";
import u05 from "./u9-a05-literature/data";
import u06 from "./u9-a06-entrepreneurship/data";
import u07 from "./u9-a07-english-for-life/data";
import { BNCC_WORKSHOPS_9ANO } from "./bncc-workshops";

function pad<T>(items:T[],fallback:(index:number)=>T):T[]{return items.length>=4?items:[...items,...Array.from({length:4-items.length},(_,i)=>fallback(i))]}
function withFourOptions(lesson:LessonData):LessonData{return{...lesson,meta:{...lesson.meta,listeningOptions:pad(lesson.meta.listeningOptions,()=>"A informação não foi apresentada")},WRITING:lesson.WRITING.map(item=>({...item,options:pad(item.options,i=>["none","other","not stated"][i]??"unknown")})),QUIZ:lesson.QUIZ.map(item=>({...item,options:pad(item.options,()=>({text:"Nenhuma das informações apresentadas"}))})),HUNTER:lesson.HUNTER?{...lesson.HUNTER,rounds:lesson.HUNTER.rounds.map(round=>({...round,objects:pad(round.objects,i=>({id:`extra-${i}`,label:"not stated",img:""}))}))}:undefined}}

export const LESSONS_9ANO: LessonData[] = [u01,u02,u03,u04,u05,u06,u07,...BNCC_WORKSHOPS_9ANO].map(withFourOptions);

export function getLesson9ano(slug: string): LessonData | undefined {
  return LESSONS_9ANO.find((l) => l.slug === slug);
}

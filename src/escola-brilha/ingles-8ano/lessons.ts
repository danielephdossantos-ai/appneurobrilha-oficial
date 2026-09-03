import type { LessonData } from "../ingles-1ano/types";
import u01 from "./u8-a01-global-citizens/data";
import u02 from "./u8-a02-media/data";
import u03 from "./u8-a03-science-future/data";
import u04 from "./u8-a04-environment/data";
import u05 from "./u8-a05-literature/data";
import u06 from "./u8-a06-careers/data";
import u07 from "./u8-a07-international/data";
import { BNCC_WORKSHOPS_8ANO } from "./bncc-workshops";

function pad<T>(items: T[], fallback: (index: number) => T): T[] {
  return items.length >= 4 ? items : [...items, ...Array.from({ length: 4 - items.length }, (_, i) => fallback(i))];
}

function withFourOptions(lesson: LessonData): LessonData {
  return {
    ...lesson,
    meta:{...lesson.meta,listeningOptions:pad(lesson.meta.listeningOptions,()=>"A informação não foi apresentada")},
    WRITING:lesson.WRITING.map(item=>({...item,options:pad(item.options,i=>["none","other","not stated"][i]??"unknown")})),
    QUIZ:lesson.QUIZ.map(item=>({...item,options:pad(item.options,()=>({text:"Nenhuma das informações apresentadas"}))})),
    HUNTER:lesson.HUNTER?{...lesson.HUNTER,rounds:lesson.HUNTER.rounds.map(round=>({...round,objects:pad(round.objects,i=>({id:`extra-${i}`,label:"not stated",img:""}))}))}:undefined,
  };
}

export const LESSONS_8ANO: LessonData[] = [u01,u02,u03,u04,u05,u06,u07,...BNCC_WORKSHOPS_8ANO].map(withFourOptions);

export function getLesson8ano(slug: string): LessonData | undefined {
  return LESSONS_8ANO.find((l) => l.slug === slug);
}

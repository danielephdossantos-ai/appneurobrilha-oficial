/**
 * NationalPedagogicalLibrary
 *
 * Núcleo pedagógico do aplicativo. Ponto único de acesso a todo o conteúdo
 * educacional armazenado no banco, organizado pela chave `codigo_bncc`.
 *
 * - Não gera conteúdo automaticamente.
 * - Não duplica dados: cada tipo vive em sua tabela própria.
 * - Crescimento ilimitado: novos repositórios são adicionados aqui sem
 *   alterar interfaces existentes.
 */

import { LessonService } from "./LessonService";
import { LessonSequenceService } from "./LessonSequence";
import { LessonFlow } from "./LessonFlow";
import { ActivityEngine } from "./ActivityEngine";
import { LessonAdaptationsService } from "./LessonAdaptations";
import { LessonReviewService } from "./LessonReview";
import { LessonCuriosityService } from "./LessonCuriosity";
import { LessonChallengeService } from "./LessonChallenge";
import { RecoveryLessonsService } from "./RecoveryLessons";
import { TeacherLessonPlanService } from "./TeacherLessonPlan";
import { RelationshipEngine } from "./RelationshipEngine";
import { ContentValidator } from "./ContentValidator";
import { AssessmentRepository } from "@/modules/assessment-repository";
import { ReinforcementRepository } from "@/modules/reinforcement-repository";
import { StudentProgressService } from "@/services/progress/StudentProgress";

export const NationalPedagogicalLibrary = {
  // Conteúdo da aula
  lessons: LessonService,
  sequence: LessonSequence,
  flow: LessonFlow,
  activities: ActivityEngine,
  adaptations: LessonAdaptationsService,
  reviews: LessonReviewService,
  curiosities: LessonCuriosityService,
  challenges: LessonChallengeService,

  // Avaliação e recuperação
  assessments: AssessmentRepository,
  recovery: RecoveryLessonsService,

  // Professor
  teacherPlans: TeacherLessonPlanService,

  // Reforço (composição de conteúdo existente)
  reinforcement: ReinforcementRepository,

  // Grafo de relacionamentos BNCC
  relations: RelationshipEngine,

  // Validação obrigatória antes de exibir
  validator: ContentValidator,

  // Progresso do aluno
  progress: StudentProgressService,
} as const;

export type NationalPedagogicalLibraryType = typeof NationalPedagogicalLibrary;

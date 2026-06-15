import {
  pgTable,
  text,
  uuid,
  integer,
  boolean,
  jsonb,
  timestamp,
  numeric,
  date,
  time,
  serial,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email"),
  firstName: text("first_name"),
  lastName: text("last_name"),
  profileImageUrl: text("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const sessions = pgTable("sessions", {
  sid: text("sid").primaryKey(),
  sess: jsonb("sess").notNull(),
  expire: timestamp("expire").notNull(),
});

export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  displayName: text("display_name"),
  avatarUrl: text("avatar_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const children = pgTable("children", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id").notNull(),
  nome: text("nome").notNull(),
  idade: integer("idade"),
  serie: text("serie"),
  hiperfoco: text("hiperfoco"),
  hasHyperfocus: boolean("has_hyperfocus").default(true),
  hyperfocusList: jsonb("hyperfocus_list").default([]),
  diagnostico: text("diagnostico"),
  avatar: text("avatar"),
  anamneseCompleta: boolean("anamnese_completa").default(false),
  anamnesisId: uuid("anamnesis_id"),
  anamnesisEditCount: integer("anamnesis_edit_count").default(0),
  tempoAtencaoMin: integer("tempo_atencao_min").default(15),
  sensoryMode: text("sensory_mode").default("foco"),
  coins: integer("coins").default(0),
  earnedToday: integer("earned_today").default(0),
  totalEarned: integer("total_earned").default(0),
  perfil: jsonb("perfil").default({}),
  niveis: jsonb("niveis").default({}),
  flags: jsonb("flags").default({}),
  observacoes: text("observacoes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const childAnamnesis = pgTable("child_anamnesis", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => children.id, { onDelete: "cascade" }),
  responses: jsonb("responses").notNull(),
  internalProfile: jsonb("internal_profile").notNull(),
  editCount: integer("edit_count").default(1),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const anamneseV2 = pgTable("anamnese_v2", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => children.id, { onDelete: "cascade" }),
  userId: text("user_id").notNull(),
  currentStep: integer("current_step").default(1),
  responses: jsonb("responses").default({}),
  scores: jsonb("scores").default({}),
  riskLevels: jsonb("risk_levels").default({}),
  completed: boolean("completed").default(false),
  completedAt: timestamp("completed_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const activities = pgTable("activities", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  subcategory: text("subcategory"),
  bnccCode: text("bncc_code"),
  minAge: integer("min_age"),
  maxAge: integer("max_age"),
  content: jsonb("content").default({}),
  createdAt: timestamp("created_at").defaultNow(),
});

export const childJourney = pgTable("child_journey", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => children.id, { onDelete: "cascade" }),
  currentDay: integer("current_day").default(1),
  lastCompletedDay: integer("last_completed_day").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const activityLogs = pgTable("activity_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => children.id, { onDelete: "cascade" }),
  activityId: uuid("activity_id"),
  dayNumber: integer("day_number").notNull(),
  score: numeric("score"),
  durationMs: integer("duration_ms"),
  metadata: jsonb("metadata").default({}),
  createdAt: timestamp("created_at").defaultNow(),
});

export const childSkillMastery = pgTable("child_skill_mastery", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => children.id, { onDelete: "cascade" }),
  skillCode: text("skill_code").notNull(),
  materia: text("materia").notNull(),
  masteryLevel: numeric("mastery_level").default("0"),
  totalAttempts: integer("total_attempts").default(0),
  successRate: numeric("success_rate").default("0"),
  hitsCount: integer("hits_count").default(0),
  errorsCount: integer("errors_count").default(0),
  totalTimeSeconds: integer("total_time_seconds").default(0),
  masteryPercentage: integer("mastery_percentage").default(0),
  lastAttemptAt: timestamp("last_attempt_at").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const childProgressionStats = pgTable("child_progression_stats", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => children.id, { onDelete: "cascade" }),
  materia: text("materia").notNull(),
  evolutionPercentage: numeric("evolution_percentage").default("0"),
  activitiesCompleted: integer("activities_completed").default(0),
  currentStreak: integer("current_streak").default(0),
  lastActivityAt: timestamp("last_activity_at").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const cognitiveProfile = pgTable("cognitive_profile", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => children.id, { onDelete: "cascade" }),
  frequentErrors: jsonb("frequent_errors").default([]),
  masteredSkills: text("mastered_skills").array().default([]),
  fragileSkills: text("fragile_skills").array().default([]),
  avgFocusTime: numeric("avg_focus_time").default("0"),
  preferredStimuli: text("preferred_stimuli").array().default([]),
  sensoryDifficultyLevel: numeric("sensory_difficulty_level").default("1"),
  emotionalBehaviorPatterns: jsonb("emotional_behavior_patterns").default({}),
  avgResponseSpeed: numeric("avg_response_speed").default("0"),
  pedagogicalEvolutionScore: numeric("pedagogical_evolution_score").default("0"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const longitudinalScores = pgTable("longitudinal_scores", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => children.id, { onDelete: "cascade" }),
  attentionScore: numeric("attention_score").default("0"),
  selfRegulationScore: numeric("self_regulation_score").default("0"),
  autonomyScore: numeric("autonomy_score").default("0"),
  languageScore: numeric("language_score").default("0"),
  memoryScore: numeric("memory_score").default("0"),
  coordinationScore: numeric("coordination_score").default("0"),
  readingScore: numeric("reading_score").default("0"),
  mathScore: numeric("math_score").default("0"),
  recordedAt: timestamp("recorded_at").defaultNow(),
});

export const notifications = pgTable("notifications", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id").notNull(),
  childId: uuid("child_id"),
  title: text("title").notNull(),
  message: text("message").notNull(),
  type: text("type").notNull(),
  read: boolean("read").default(false),
  scheduledFor: timestamp("scheduled_for").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const studyAgenda = pgTable("study_agenda", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => children.id, { onDelete: "cascade" }),
  topic: text("topic").notNull(),
  description: text("description"),
  examDate: date("exam_date"),
  type: text("type").default("estudo"),
  completed: boolean("completed").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const examMissions = pgTable("exam_missions", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => children.id, { onDelete: "cascade" }),
  subject: text("subject").notNull(),
  examDate: date("exam_date").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const examMissionContents = pgTable("exam_mission_contents", {
  id: uuid("id").primaryKey().defaultRandom(),
  missionId: uuid("mission_id")
    .notNull()
    .references(() => examMissions.id, { onDelete: "cascade" }),
  contentTitle: text("content_title").notNull(),
  bnccCode: text("bncc_code"),
  completed: boolean("completed").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const examStudyPlans = pgTable("exam_study_plans", {
  id: uuid("id").primaryKey().defaultRandom(),
  missionId: uuid("mission_id")
    .notNull()
    .references(() => examMissions.id, { onDelete: "cascade" }),
  scheduledDate: date("scheduled_date").notNull(),
  title: text("title").notNull(),
  description: text("description"),
  completed: boolean("completed").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const mascots = pgTable("mascots", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  imageUrl: text("image_url"),
  category: text("category").default("store"),
  baseStats: jsonb("base_stats").default({}),
  skins: jsonb("skins").default({}),
  createdAt: timestamp("created_at").defaultNow(),
});

export const userMascots = pgTable("user_mascots", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id").notNull(),
  mascotId: uuid("mascot_id")
    .notNull()
    .references(() => mascots.id, { onDelete: "cascade" }),
  isActive: boolean("is_active").default(false),
  level: integer("level").default(1),
  affinity: integer("affinity").default(0),
  experience: integer("experience").default(0),
  metadata: jsonb("metadata").default({}),
  createdAt: timestamp("created_at").defaultNow(),
});

export const gamificationProfiles = pgTable("gamification_profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => children.id, { onDelete: "cascade" }),
  coins: integer("coins").default(0),
  totalStars: integer("total_stars").default(0),
  level: integer("level").default(1),
  xp: integer("xp").default(0),
  streakDays: integer("streak_days").default(0),
  lastActivityAt: timestamp("last_activity_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const mascotStates = pgTable("mascot_states", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => children.id, { onDelete: "cascade" }),
  name: text("name").default("Brilhante"),
  type: text("type").default("star"),
  evolutionStage: integer("evolution_stage").default(1),
  currentEmotion: text("current_emotion").default("happy"),
  energyLevel: integer("energy_level").default(100),
  affinityPoints: integer("affinity_points").default(0),
  lastInteractionAt: timestamp("last_interaction_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const achievements = pgTable("achievements", {
  id: uuid("id").primaryKey().defaultRandom(),
  code: text("code").notNull().unique(),
  title: text("title").notNull(),
  description: text("description"),
  category: text("category").notNull(),
  points: integer("points").default(10),
  iconUrl: text("icon_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const childAchievements = pgTable("child_achievements", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => children.id, { onDelete: "cascade" }),
  achievementId: uuid("achievement_id")
    .notNull()
    .references(() => achievements.id, { onDelete: "cascade" }),
  unlockedAt: timestamp("unlocked_at").defaultNow(),
});

export const userPrivacySettings = pgTable("user_privacy_settings", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id").notNull().unique(),
  termsAccepted: boolean("terms_accepted").default(false),
  marketingConsent: boolean("marketing_consent").default(false),
  analyticsConsent: boolean("analytics_consent").default(false),
  dataUsageConsent: boolean("data_usage_consent").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const bnccHabilidades = pgTable("bncc_habilidades", {
  id: uuid("id").primaryKey().defaultRandom(),
  codigoBncc: text("codigo_bncc").notNull().unique(),
  ano: text("ano"),
  disciplina: text("disciplina"),
  titulo: text("titulo"),
  objetivo: text("objetivo"),
  nivel: text("nivel"),
  ordem: integer("ordem"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const explicacoes = pgTable("explicacoes", {
  id: uuid("id").primaryKey().defaultRandom(),
  codigoBncc: text("codigo_bncc"),
  textoProfessor: text("texto_professor"),
  audio: text("audio"),
  imagem: text("imagem"),
  video: text("video"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const atividades = pgTable("atividades", {
  id: uuid("id").primaryKey().defaultRandom(),
  codigoBncc: text("codigo_bncc"),
  tipo: text("tipo"),
  nivel: text("nivel"),
  pergunta: text("pergunta"),
  alternativaA: text("alternativa_a"),
  alternativaB: text("alternativa_b"),
  alternativaC: text("alternativa_c"),
  alternativaD: text("alternativa_d"),
  resposta: text("resposta"),
  feedback: text("feedback"),
  ordem: integer("ordem").default(1),
  explicacaoAtiva: text("explicacao_ativa"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const progressoAluno = pgTable("progresso_aluno", {
  id: uuid("id").primaryKey().defaultRandom(),
  alunoId: uuid("aluno_id").references(() => children.id),
  codigoBncc: text("codigo_bncc"),
  tentativas: integer("tentativas").default(0),
  acertos: integer("acertos").default(0),
  erros: integer("erros").default(0),
  dominio: numeric("dominio").default("0"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const auditLogs = pgTable("audit_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: text("user_id"),
  action: text("action").notNull(),
  module: text("module").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  metadata: jsonb("metadata").default({}),
  createdAt: timestamp("created_at").defaultNow(),
});

export const neuroAtividades = pgTable("neuro_atividades", {
  id: uuid("id").primaryKey().defaultRandom(),
  categoriaSlug: text("categoria_slug").notNull(),
  categoriaNome: text("categoria_nome").notNull(),
  grupo: text("grupo").notNull(),
  variacaoId: text("variacao_id").notNull(),
  variacaoIndex: integer("variacao_index").notNull(),
  payload: jsonb("payload").notNull(),
  objetivo: text("objetivo"),
  instrucao: text("instrucao"),
  nivelDificuldade: integer("nivel_dificuldade").default(1),
  habilidadeClinica: text("habilidade_clinica"),
  criadoEm: timestamp("criado_em").defaultNow(),
});

export const trilhasAprendizagem = pgTable("trilhas_aprendizagem", {
  id: uuid("id").primaryKey().defaultRandom(),
  nome: text("nome").notNull(),
  descricao: text("descricao"),
  ano: text("ano").notNull(),
  disciplina: text("disciplina").notNull(),
  habilidadesOrdenadas: jsonb("habilidades_ordenadas").default([]),
  ativa: boolean("ativa").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const pedagogicalActivitiesBase = pgTable("pedagogical_activities_base", {
  id: uuid("id").primaryKey().defaultRandom(),
  titulo: text("titulo").notNull(),
  serie: text("serie"),
  faixaEtaria: text("faixa_etaria"),
  materia: text("materia").notNull(),
  habilidadeBncc: text("habilidade_bncc"),
  microHabilidade: text("micro_habilidade"),
  nivelDificuldade: text("nivel_dificuldade"),
  neuroPerfil: jsonb("neuro_perfil").default([]),
  tipoSensorial: jsonb("tipo_sensorial").default([]),
  tempoMedio: integer("tempo_medio"),
  objetivoPedagogico: text("objetivo_pedagogico"),
  estrategiaPedagogica: text("estrategia_pedagogica"),
  nivelCognitivo: text("nivel_cognitivo"),
  reforcoPositivo: text("reforco_positivo"),
  reforcoErro: text("reforco_erro"),
  tipoResposta: text("tipo_resposta"),
  tags: text("tags").array().default([]),
  domain: text("domain"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const tecnicasPedagogicas = pgTable("tecnicas_pedagogicas", {
  id: uuid("id").primaryKey().defaultRandom(),
  nome: text("nome").notNull(),
  categoria: text("categoria"),
  descricao: text("descricao"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const habilidadeTecnica = pgTable("habilidade_tecnica", {
  id: uuid("id").primaryKey().defaultRandom(),
  codigoBncc: text("codigo_bncc").notNull(),
  tecnicaId: uuid("tecnica_id").references(() => tecnicasPedagogicas.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").defaultNow(),
});

export type User = typeof users.$inferSelect;
export type UpsertUser = typeof users.$inferInsert;
export type Child = typeof children.$inferSelect;
export type InsertChild = typeof children.$inferInsert;

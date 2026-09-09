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

export const parentProfiles = pgTable("parent_profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  profileId: uuid("profile_id")
    .notNull()
    .references(() => profiles.id, { onDelete: "cascade" }),
  phone: text("phone"),
  cpf: text("cpf").unique(),
  consentGiven: boolean("consent_given").default(false),
  consentDate: timestamp("consent_date"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const childrenProfiles = pgTable("children_profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  parentId: uuid("parent_id")
    .notNull()
    .references(() => parentProfiles.id, { onDelete: "cascade" }),
  firstName: text("first_name").notNull(),
  lastName: text("last_name"),
  birthDate: date("birth_date").notNull(),
  gender: text("gender"),
  diagnosis: text("diagnosis").array().default([]),
  active: boolean("active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const bnccSkills = pgTable("bncc_skills", {
  code: text("code").primaryKey(),
  description: text("description").notNull(),
  segment: text("segment").notNull(),
  fieldOfExperience: text("field_of_experience"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const bnccLevels = pgTable("bncc_levels", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  minAge: integer("min_age").notNull(),
  maxAge: integer("max_age").notNull(),
});

export const activityTemplates = pgTable("activity_templates", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  category: text("category").notNull(),
  bnccSkillCode: text("bncc_skill_code").references(() => bnccSkills.code),
  baseDifficulty: integer("base_difficulty").default(1),
  cognitiveWeight: jsonb("cognitive_weight").default({}),
  sensoryType: text("sensory_type"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const difficultyRules = pgTable("difficulty_rules", {
  id: serial("id").primaryKey(),
  templateId: uuid("template_id").references(() => activityTemplates.id),
  level: integer("level").notNull(),
  config: jsonb("config").notNull(),
});

export const rewardRules = pgTable("reward_rules", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(),
  minScore: integer("min_score").notNull(),
  xpReward: integer("xp_reward").notNull(),
  coinsReward: integer("coins_reward").notNull(),
});

export const activityResults = pgTable("activity_results", {
  id: uuid("id").primaryKey().defaultRandom(),
  activityId: uuid("activity_id").references(() => activities.id, { onDelete: "cascade" }),
  childId: uuid("child_id").references(() => childrenProfiles.id),
  score: numeric("score"),
  timeSpentSeconds: integer("time_spent_seconds"),
  errorsCount: integer("errors_count"),
  helpRequestedCount: integer("help_requested_count"),
  completionData: jsonb("completion_data").default({}),
  createdAt: timestamp("created_at").defaultNow(),
});

export const therapistProfiles = pgTable("therapist_profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  profileId: uuid("profile_id")
    .notNull()
    .references(() => profiles.id, { onDelete: "cascade" }),
  specialty: text("specialty"),
  crpCrm: text("crp_crm"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const anamnesis = pgTable("anamnesis", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => childrenProfiles.id, { onDelete: "cascade" }),
  history: text("history"),
  milestones: jsonb("milestones").default({}),
  observations: text("observations"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const neuroProfiles = pgTable("neuro_profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => childrenProfiles.id, { onDelete: "cascade" }),
  mainDiagnosis: text("main_diagnosis").notNull(),
  severityLevel: integer("severity_level"),
  comorbidities: text("comorbidities").array().default([]),
  focusDurationMinutes: integer("focus_duration_minutes").default(15),
  createdAt: timestamp("created_at").defaultNow(),
});

export const sensoryProfiles = pgTable("sensory_profiles", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => childrenProfiles.id, { onDelete: "cascade" }),
  visualSensitivity: integer("visual_sensitivity").default(5),
  auditorySensitivity: integer("auditory_sensitivity").default(5),
  tactileSensitivity: integer("tactile_sensitivity").default(5),
  preferredColors: text("preferred_colors").array().default([]),
  triggerSounds: text("trigger_sounds").array().default([]),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const progression = pgTable("progression", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => childrenProfiles.id, { onDelete: "cascade" }),
  skillCode: text("skill_code").references(() => bnccSkills.code),
  masteryLevel: numeric("mastery_level").default("0"),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

export const dailySessions = pgTable("daily_sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => childrenProfiles.id, { onDelete: "cascade" }),
  startTime: timestamp("start_time").defaultNow(),
  endTime: timestamp("end_time"),
  totalActivities: integer("total_activities").default(0),
  moodStart: text("mood_start"),
  moodEnd: text("mood_end"),
});

export const attentionMetrics = pgTable("attention_metrics", {
  id: uuid("id").primaryKey().defaultRandom(),
  sessionId: uuid("session_id")
    .notNull()
    .references(() => dailySessions.id, { onDelete: "cascade" }),
  timestamp: timestamp("timestamp").defaultNow(),
  focusScore: integer("focus_score"),
  distractionEvents: integer("distraction_events"),
  latencyMs: integer("latency_ms"),
});

export const fatigueMetrics = pgTable("fatigue_metrics", {
  id: uuid("id").primaryKey().defaultRandom(),
  sessionId: uuid("session_id")
    .notNull()
    .references(() => dailySessions.id, { onDelete: "cascade" }),
  timestamp: timestamp("timestamp").defaultNow(),
  reactionTimeTrend: text("reaction_time_trend"),
  errorRateSpike: boolean("error_rate_spike").default(false),
  recommendedPause: boolean("recommended_pause").default(false),
});

export const adaptationLogs = pgTable("adaptation_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id").references(() => childrenProfiles.id),
  triggerReason: text("trigger_reason"),
  actionTaken: text("action_taken"),
  timestamp: timestamp("timestamp").defaultNow(),
});

export const reports = pgTable("reports", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => childrenProfiles.id, { onDelete: "cascade" }),
  type: text("type"),
  periodStart: date("period_start"),
  periodEnd: date("period_end"),
  data: jsonb("data").default({}),
  generatedAt: timestamp("generated_at").defaultNow(),
});

export const parentalControls = pgTable("parental_controls", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => childrenProfiles.id, { onDelete: "cascade" }),
  dailyTimeLimitMinutes: integer("daily_time_limit_minutes").default(60),
  breakIntervalMinutes: integer("break_interval_minutes").default(20),
  allowedStartTime: time("allowed_start_time"),
  allowedEndTime: time("allowed_end_time"),
  forcedPauseDurationMinutes: integer("forced_pause_duration_minutes").default(5),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const stories = pgTable("stories", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description"),
  coverImage: text("cover_image"),
  readingLevel: text("reading_level").default("iniciante"),
  ageMin: integer("age_min").default(4),
  ageMax: integer("age_max").default(10),
  theme: text("theme").notNull(),
  difficulty: integer("difficulty").default(1),
  aiGenerated: boolean("ai_generated").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const storyPages = pgTable("story_pages", {
  id: uuid("id").primaryKey().defaultRandom(),
  storyId: uuid("story_id")
    .notNull()
    .references(() => stories.id, { onDelete: "cascade" }),
  pageNumber: integer("page_number").notNull(),
  text: text("text").notNull(),
  imageUrl: text("image_url"),
  audioUrl: text("audio_url"),
  highlightWords: jsonb("highlight_words").default([]),
  createdAt: timestamp("created_at").defaultNow(),
});

export const storyQuestions = pgTable("story_questions", {
  id: uuid("id").primaryKey().defaultRandom(),
  storyId: uuid("story_id")
    .notNull()
    .references(() => stories.id, { onDelete: "cascade" }),
  question: text("question").notNull(),
  optionA: text("option_a").notNull(),
  optionB: text("option_b").notNull(),
  optionC: text("option_c").notNull(),
  correctAnswer: text("correct_answer").notNull(),
  difficulty: integer("difficulty").default(1),
  createdAt: timestamp("created_at").defaultNow(),
});

export const storyProgress = pgTable("story_progress", {
  id: uuid("id").primaryKey().defaultRandom(),
  childId: uuid("child_id")
    .notNull()
    .references(() => children.id, { onDelete: "cascade" }),
  storyId: uuid("story_id")
    .notNull()
    .references(() => stories.id, { onDelete: "cascade" }),
  currentPage: integer("current_page").default(1),
  completed: boolean("completed").default(false),
  score: integer("score").default(0),
  completedAt: timestamp("completed_at"),
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

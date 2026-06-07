export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      achievements: {
        Row: {
          category: string
          code: string
          created_at: string | null
          description: string | null
          icon_url: string | null
          id: string
          points: number | null
          title: string
        }
        Insert: {
          category: string
          code: string
          created_at?: string | null
          description?: string | null
          icon_url?: string | null
          id?: string
          points?: number | null
          title: string
        }
        Update: {
          category?: string
          code?: string
          created_at?: string | null
          description?: string | null
          icon_url?: string | null
          id?: string
          points?: number | null
          title?: string
        }
        Relationships: []
      }
      activities: {
        Row: {
          bncc_code: string | null
          category: string
          content: Json | null
          created_at: string
          id: string
          max_age: number | null
          min_age: number | null
          name: string
          subcategory: string | null
        }
        Insert: {
          bncc_code?: string | null
          category: string
          content?: Json | null
          created_at?: string
          id?: string
          max_age?: number | null
          min_age?: number | null
          name: string
          subcategory?: string | null
        }
        Update: {
          bncc_code?: string | null
          category?: string
          content?: Json | null
          created_at?: string
          id?: string
          max_age?: number | null
          min_age?: number | null
          name?: string
          subcategory?: string | null
        }
        Relationships: []
      }
      activity_logs: {
        Row: {
          activity_id: string | null
          child_id: string
          created_at: string
          day_number: number
          duration_ms: number | null
          id: string
          metadata: Json | null
          score: number | null
        }
        Insert: {
          activity_id?: string | null
          child_id: string
          created_at?: string
          day_number: number
          duration_ms?: number | null
          id?: string
          metadata?: Json | null
          score?: number | null
        }
        Update: {
          activity_id?: string | null
          child_id?: string
          created_at?: string
          day_number?: number
          duration_ms?: number | null
          id?: string
          metadata?: Json | null
          score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "activity_logs_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "activities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activity_logs_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      activity_results: {
        Row: {
          activity_id: string | null
          child_id: string | null
          completion_data: Json | null
          created_at: string | null
          errors_count: number | null
          help_requested_count: number | null
          id: string
          score: number | null
          time_spent_seconds: number | null
        }
        Insert: {
          activity_id?: string | null
          child_id?: string | null
          completion_data?: Json | null
          created_at?: string | null
          errors_count?: number | null
          help_requested_count?: number | null
          id?: string
          score?: number | null
          time_spent_seconds?: number | null
        }
        Update: {
          activity_id?: string | null
          child_id?: string | null
          completion_data?: Json | null
          created_at?: string | null
          errors_count?: number | null
          help_requested_count?: number | null
          id?: string
          score?: number | null
          time_spent_seconds?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "activity_results_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "activities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activity_results_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      activity_templates: {
        Row: {
          base_difficulty: number | null
          bncc_skill_code: string | null
          category: string
          cognitive_weight: Json | null
          created_at: string | null
          description: string | null
          id: string
          sensory_type: string | null
          title: string
        }
        Insert: {
          base_difficulty?: number | null
          bncc_skill_code?: string | null
          category: string
          cognitive_weight?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          sensory_type?: string | null
          title: string
        }
        Update: {
          base_difficulty?: number | null
          bncc_skill_code?: string | null
          category?: string
          cognitive_weight?: Json | null
          created_at?: string | null
          description?: string | null
          id?: string
          sensory_type?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "activity_templates_bncc_skill_code_fkey"
            columns: ["bncc_skill_code"]
            isOneToOne: false
            referencedRelation: "bncc_skills"
            referencedColumns: ["code"]
          },
        ]
      }
      adaptation_logs: {
        Row: {
          action_taken: string | null
          child_id: string | null
          id: string
          timestamp: string | null
          trigger_reason: string | null
        }
        Insert: {
          action_taken?: string | null
          child_id?: string | null
          id?: string
          timestamp?: string | null
          trigger_reason?: string | null
        }
        Update: {
          action_taken?: string | null
          child_id?: string | null
          id?: string
          timestamp?: string | null
          trigger_reason?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "adaptation_logs_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      anamnesis: {
        Row: {
          child_id: string
          created_at: string | null
          history: string | null
          id: string
          milestones: Json | null
          observations: string | null
        }
        Insert: {
          child_id: string
          created_at?: string | null
          history?: string | null
          id?: string
          milestones?: Json | null
          observations?: string | null
        }
        Update: {
          child_id?: string
          created_at?: string | null
          history?: string | null
          id?: string
          milestones?: Json | null
          observations?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "anamnesis_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: true
            referencedRelation: "children_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      atividades: {
        Row: {
          alternativa_a: string | null
          alternativa_b: string | null
          alternativa_c: string | null
          alternativa_d: string | null
          codigo_bncc: string | null
          created_at: string | null
          explicacao_ativa: string | null
          feedback: string | null
          id: string
          nivel: string | null
          ordem: number | null
          pergunta: string | null
          resposta: string | null
          tipo: string | null
          updated_at: string | null
        }
        Insert: {
          alternativa_a?: string | null
          alternativa_b?: string | null
          alternativa_c?: string | null
          alternativa_d?: string | null
          codigo_bncc?: string | null
          created_at?: string | null
          explicacao_ativa?: string | null
          feedback?: string | null
          id?: string
          nivel?: string | null
          ordem?: number | null
          pergunta?: string | null
          resposta?: string | null
          tipo?: string | null
          updated_at?: string | null
        }
        Update: {
          alternativa_a?: string | null
          alternativa_b?: string | null
          alternativa_c?: string | null
          alternativa_d?: string | null
          codigo_bncc?: string | null
          created_at?: string | null
          explicacao_ativa?: string | null
          feedback?: string | null
          id?: string
          nivel?: string | null
          ordem?: number | null
          pergunta?: string | null
          resposta?: string | null
          tipo?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "atividades_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "bncc_habilidades"
            referencedColumns: ["codigo_bncc"]
          },
        ]
      }
      attention_metrics: {
        Row: {
          distraction_events: number | null
          focus_score: number | null
          id: string
          latency_ms: number | null
          session_id: string | null
          timestamp: string | null
        }
        Insert: {
          distraction_events?: number | null
          focus_score?: number | null
          id?: string
          latency_ms?: number | null
          session_id?: string | null
          timestamp?: string | null
        }
        Update: {
          distraction_events?: number | null
          focus_score?: number | null
          id?: string
          latency_ms?: number | null
          session_id?: string | null
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "attention_metrics_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "daily_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          created_at: string
          id: string
          ip_address: string | null
          metadata: Json | null
          module: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          module: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          module?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      bncc_habilidades: {
        Row: {
          ano: string | null
          codigo_bncc: string
          created_at: string | null
          disciplina: string | null
          id: string
          nivel: string | null
          objetivo: string | null
          ordem: number | null
          titulo: string | null
          updated_at: string | null
        }
        Insert: {
          ano?: string | null
          codigo_bncc: string
          created_at?: string | null
          disciplina?: string | null
          id?: string
          nivel?: string | null
          objetivo?: string | null
          ordem?: number | null
          titulo?: string | null
          updated_at?: string | null
        }
        Update: {
          ano?: string | null
          codigo_bncc?: string
          created_at?: string | null
          disciplina?: string | null
          id?: string
          nivel?: string | null
          objetivo?: string | null
          ordem?: number | null
          titulo?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      bncc_levels: {
        Row: {
          id: number
          max_age: number
          min_age: number
          name: string
        }
        Insert: {
          id?: number
          max_age: number
          min_age: number
          name: string
        }
        Update: {
          id?: number
          max_age?: number
          min_age?: number
          name?: string
        }
        Relationships: []
      }
      bncc_skills: {
        Row: {
          code: string
          created_at: string | null
          description: string
          field: string | null
          field_of_experience: string | null
          grade: string | null
          segment: string
        }
        Insert: {
          code: string
          created_at?: string | null
          description: string
          field?: string | null
          field_of_experience?: string | null
          grade?: string | null
          segment: string
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string
          field?: string | null
          field_of_experience?: string | null
          grade?: string | null
          segment?: string
        }
        Relationships: []
      }
      child_achievements: {
        Row: {
          achievement_id: string
          child_id: string
          id: string
          unlocked_at: string | null
        }
        Insert: {
          achievement_id: string
          child_id: string
          id?: string
          unlocked_at?: string | null
        }
        Update: {
          achievement_id?: string
          child_id?: string
          id?: string
          unlocked_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "child_achievements_achievement_id_fkey"
            columns: ["achievement_id"]
            isOneToOne: false
            referencedRelation: "achievements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "child_achievements_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      child_anamnesis: {
        Row: {
          child_id: string
          created_at: string
          edit_count: number | null
          id: string
          internal_profile: Json
          responses: Json
          updated_at: string
        }
        Insert: {
          child_id: string
          created_at?: string
          edit_count?: number | null
          id?: string
          internal_profile: Json
          responses: Json
          updated_at?: string
        }
        Update: {
          child_id?: string
          created_at?: string
          edit_count?: number | null
          id?: string
          internal_profile?: Json
          responses?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_anamnesis_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      child_journey: {
        Row: {
          child_id: string
          created_at: string
          current_day: number
          id: string
          last_completed_day: number
          updated_at: string
        }
        Insert: {
          child_id: string
          created_at?: string
          current_day?: number
          id?: string
          last_completed_day?: number
          updated_at?: string
        }
        Update: {
          child_id?: string
          created_at?: string
          current_day?: number
          id?: string
          last_completed_day?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_journey_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: true
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      child_progression_stats: {
        Row: {
          activities_completed: number
          child_id: string
          created_at: string
          current_streak: number
          evolution_percentage: number
          id: string
          last_activity_at: string | null
          materia: string
          updated_at: string
        }
        Insert: {
          activities_completed?: number
          child_id: string
          created_at?: string
          current_streak?: number
          evolution_percentage?: number
          id?: string
          last_activity_at?: string | null
          materia: string
          updated_at?: string
        }
        Update: {
          activities_completed?: number
          child_id?: string
          created_at?: string
          current_streak?: number
          evolution_percentage?: number
          id?: string
          last_activity_at?: string | null
          materia?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_progression_stats_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      child_security_alerts: {
        Row: {
          child_id: string
          content: string
          created_at: string
          id: string
          reason: string
          status: string
          updated_at: string
        }
        Insert: {
          child_id: string
          content: string
          created_at?: string
          id?: string
          reason: string
          status?: string
          updated_at?: string
        }
        Update: {
          child_id?: string
          content?: string
          created_at?: string
          id?: string
          reason?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_security_alerts_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      child_skill_mastery: {
        Row: {
          child_id: string
          created_at: string
          errors_count: number | null
          hits_count: number | null
          id: string
          last_attempt_at: string | null
          mastery_level: number
          mastery_percentage: number | null
          materia: string
          skill_code: string
          success_rate: number
          total_attempts: number
          total_time_seconds: number | null
          updated_at: string
        }
        Insert: {
          child_id: string
          created_at?: string
          errors_count?: number | null
          hits_count?: number | null
          id?: string
          last_attempt_at?: string | null
          mastery_level?: number
          mastery_percentage?: number | null
          materia: string
          skill_code: string
          success_rate?: number
          total_attempts?: number
          total_time_seconds?: number | null
          updated_at?: string
        }
        Update: {
          child_id?: string
          created_at?: string
          errors_count?: number | null
          hits_count?: number | null
          id?: string
          last_attempt_at?: string | null
          mastery_level?: number
          mastery_percentage?: number | null
          materia?: string
          skill_code?: string
          success_rate?: number
          total_attempts?: number
          total_time_seconds?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_skill_mastery_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      children: {
        Row: {
          anamnese_completa: boolean | null
          anamnesis_edit_count: number | null
          anamnesis_id: string | null
          avatar: string | null
          coins: number | null
          created_at: string
          diagnostico: string | null
          earned_today: number | null
          flags: Json | null
          has_hyperfocus: boolean | null
          hiperfoco: string | null
          hyperfocus_list: string[] | null
          id: string
          idade: number | null
          niveis: Json | null
          nome: string
          observacoes: string | null
          perfil: Json | null
          sensory_mode: string | null
          serie: string | null
          tempo_atencao_min: number | null
          total_earned: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          anamnese_completa?: boolean | null
          anamnesis_edit_count?: number | null
          anamnesis_id?: string | null
          avatar?: string | null
          coins?: number | null
          created_at?: string
          diagnostico?: string | null
          earned_today?: number | null
          flags?: Json | null
          has_hyperfocus?: boolean | null
          hiperfoco?: string | null
          hyperfocus_list?: string[] | null
          id?: string
          idade?: number | null
          niveis?: Json | null
          nome: string
          observacoes?: string | null
          perfil?: Json | null
          sensory_mode?: string | null
          serie?: string | null
          tempo_atencao_min?: number | null
          total_earned?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          anamnese_completa?: boolean | null
          anamnesis_edit_count?: number | null
          anamnesis_id?: string | null
          avatar?: string | null
          coins?: number | null
          created_at?: string
          diagnostico?: string | null
          earned_today?: number | null
          flags?: Json | null
          has_hyperfocus?: boolean | null
          hiperfoco?: string | null
          hyperfocus_list?: string[] | null
          id?: string
          idade?: number | null
          niveis?: Json | null
          nome?: string
          observacoes?: string | null
          perfil?: Json | null
          sensory_mode?: string | null
          serie?: string | null
          tempo_atencao_min?: number | null
          total_earned?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "children_anamnesis_id_fkey"
            columns: ["anamnesis_id"]
            isOneToOne: false
            referencedRelation: "child_anamnesis"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "children_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      children_profiles: {
        Row: {
          active: boolean | null
          birth_date: string
          created_at: string | null
          diagnosis: string[] | null
          first_name: string
          gender: string | null
          id: string
          last_name: string | null
          parent_id: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          birth_date: string
          created_at?: string | null
          diagnosis?: string[] | null
          first_name: string
          gender?: string | null
          id?: string
          last_name?: string | null
          parent_id: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          birth_date?: string
          created_at?: string | null
          diagnosis?: string[] | null
          first_name?: string
          gender?: string | null
          id?: string
          last_name?: string | null
          parent_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "children_profiles_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "parent_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cognitive_profile: {
        Row: {
          avg_focus_time: number | null
          avg_response_speed: number | null
          child_id: string
          created_at: string
          emotional_behavior_patterns: Json | null
          fragile_skills: string[] | null
          frequent_errors: Json | null
          id: string
          mastered_skills: string[] | null
          pedagogical_evolution_score: number | null
          preferred_stimuli: string[] | null
          sensory_difficulty_level: number | null
          updated_at: string
        }
        Insert: {
          avg_focus_time?: number | null
          avg_response_speed?: number | null
          child_id: string
          created_at?: string
          emotional_behavior_patterns?: Json | null
          fragile_skills?: string[] | null
          frequent_errors?: Json | null
          id?: string
          mastered_skills?: string[] | null
          pedagogical_evolution_score?: number | null
          preferred_stimuli?: string[] | null
          sensory_difficulty_level?: number | null
          updated_at?: string
        }
        Update: {
          avg_focus_time?: number | null
          avg_response_speed?: number | null
          child_id?: string
          created_at?: string
          emotional_behavior_patterns?: Json | null
          fragile_skills?: string[] | null
          frequent_errors?: Json | null
          id?: string
          mastered_skills?: string[] | null
          pedagogical_evolution_score?: number | null
          preferred_stimuli?: string[] | null
          sensory_difficulty_level?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cognitive_profile_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: true
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      cognitive_profiles: {
        Row: {
          attention_control: number | null
          child_id: string
          id: string
          impulse_control: number | null
          processing_speed: number | null
          updated_at: string | null
          working_memory: number | null
        }
        Insert: {
          attention_control?: number | null
          child_id: string
          id?: string
          impulse_control?: number | null
          processing_speed?: number | null
          updated_at?: string | null
          working_memory?: number | null
        }
        Update: {
          attention_control?: number | null
          child_id?: string
          id?: string
          impulse_control?: number | null
          processing_speed?: number | null
          updated_at?: string | null
          working_memory?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cognitive_profiles_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: true
            referencedRelation: "children_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_routines: {
        Row: {
          child_id: string
          completed_at: string | null
          created_at: string | null
          id: string
          routine_code: string
        }
        Insert: {
          child_id: string
          completed_at?: string | null
          created_at?: string | null
          id?: string
          routine_code: string
        }
        Update: {
          child_id?: string
          completed_at?: string | null
          created_at?: string | null
          id?: string
          routine_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "daily_routines_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_sessions: {
        Row: {
          child_id: string | null
          end_time: string | null
          id: string
          mood_end: string | null
          mood_start: string | null
          start_time: string | null
          total_activities: number | null
        }
        Insert: {
          child_id?: string | null
          end_time?: string | null
          id?: string
          mood_end?: string | null
          mood_start?: string | null
          start_time?: string | null
          total_activities?: number | null
        }
        Update: {
          child_id?: string | null
          end_time?: string | null
          id?: string
          mood_end?: string | null
          mood_start?: string | null
          start_time?: string | null
          total_activities?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "daily_sessions_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      difficulty_rules: {
        Row: {
          config: Json
          id: number
          level: number
          template_id: string | null
        }
        Insert: {
          config: Json
          id?: number
          level: number
          template_id?: string | null
        }
        Update: {
          config?: Json
          id?: number
          level?: number
          template_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "difficulty_rules_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "activity_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      exam_mission_contents: {
        Row: {
          bncc_code: string | null
          completed: boolean
          content_title: string
          created_at: string
          id: string
          mission_id: string
        }
        Insert: {
          bncc_code?: string | null
          completed?: boolean
          content_title: string
          created_at?: string
          id?: string
          mission_id: string
        }
        Update: {
          bncc_code?: string | null
          completed?: boolean
          content_title?: string
          created_at?: string
          id?: string
          mission_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "exam_mission_contents_mission_id_fkey"
            columns: ["mission_id"]
            isOneToOne: false
            referencedRelation: "exam_missions"
            referencedColumns: ["id"]
          },
        ]
      }
      exam_missions: {
        Row: {
          child_id: string
          created_at: string
          exam_date: string
          id: string
          notes: string | null
          subject: string
          updated_at: string
        }
        Insert: {
          child_id: string
          created_at?: string
          exam_date: string
          id?: string
          notes?: string | null
          subject: string
          updated_at?: string
        }
        Update: {
          child_id?: string
          created_at?: string
          exam_date?: string
          id?: string
          notes?: string | null
          subject?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "exam_missions_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      exam_study_plans: {
        Row: {
          completed: boolean
          created_at: string
          description: string | null
          id: string
          mission_id: string
          scheduled_date: string
          title: string
        }
        Insert: {
          completed?: boolean
          created_at?: string
          description?: string | null
          id?: string
          mission_id: string
          scheduled_date: string
          title: string
        }
        Update: {
          completed?: boolean
          created_at?: string
          description?: string | null
          id?: string
          mission_id?: string
          scheduled_date?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "exam_study_plans_mission_id_fkey"
            columns: ["mission_id"]
            isOneToOne: false
            referencedRelation: "exam_missions"
            referencedColumns: ["id"]
          },
        ]
      }
      explicacoes: {
        Row: {
          audio: string | null
          codigo_bncc: string | null
          created_at: string | null
          id: string
          imagem: string | null
          texto_professor: string | null
          updated_at: string | null
          video: string | null
        }
        Insert: {
          audio?: string | null
          codigo_bncc?: string | null
          created_at?: string | null
          id?: string
          imagem?: string | null
          texto_professor?: string | null
          updated_at?: string | null
          video?: string | null
        }
        Update: {
          audio?: string | null
          codigo_bncc?: string | null
          created_at?: string | null
          id?: string
          imagem?: string | null
          texto_professor?: string | null
          updated_at?: string | null
          video?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "explicacoes_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "bncc_habilidades"
            referencedColumns: ["codigo_bncc"]
          },
        ]
      }
      fatigue_metrics: {
        Row: {
          error_rate_spike: boolean | null
          id: string
          reaction_time_trend: string | null
          recommended_pause: boolean | null
          session_id: string | null
          timestamp: string | null
        }
        Insert: {
          error_rate_spike?: boolean | null
          id?: string
          reaction_time_trend?: string | null
          recommended_pause?: boolean | null
          session_id?: string | null
          timestamp?: string | null
        }
        Update: {
          error_rate_spike?: boolean | null
          id?: string
          reaction_time_trend?: string | null
          recommended_pause?: boolean | null
          session_id?: string | null
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fatigue_metrics_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "daily_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      gamification_profiles: {
        Row: {
          child_id: string
          coins: number | null
          created_at: string | null
          id: string
          last_activity_at: string | null
          level: number | null
          streak_days: number | null
          total_stars: number | null
          updated_at: string | null
          xp: number | null
        }
        Insert: {
          child_id: string
          coins?: number | null
          created_at?: string | null
          id?: string
          last_activity_at?: string | null
          level?: number | null
          streak_days?: number | null
          total_stars?: number | null
          updated_at?: string | null
          xp?: number | null
        }
        Update: {
          child_id?: string
          coins?: number | null
          created_at?: string | null
          id?: string
          last_activity_at?: string | null
          level?: number | null
          streak_days?: number | null
          total_stars?: number | null
          updated_at?: string | null
          xp?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "gamification_profiles_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: true
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      habilidade_tecnica: {
        Row: {
          codigo_bncc: string
          created_at: string
          id: string
          tecnica_id: string
        }
        Insert: {
          codigo_bncc: string
          created_at?: string
          id?: string
          tecnica_id: string
        }
        Update: {
          codigo_bncc?: string
          created_at?: string
          id?: string
          tecnica_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "habilidade_tecnica_tecnica_id_fkey"
            columns: ["tecnica_id"]
            isOneToOne: false
            referencedRelation: "tecnicas_pedagogicas"
            referencedColumns: ["id"]
          },
        ]
      }
      hiperfoco_elementos: {
        Row: {
          created_at: string
          hiperfoco_id: string | null
          id: string
          image_url: string
          nome: string
        }
        Insert: {
          created_at?: string
          hiperfoco_id?: string | null
          id?: string
          image_url: string
          nome: string
        }
        Update: {
          created_at?: string
          hiperfoco_id?: string | null
          id?: string
          image_url?: string
          nome?: string
        }
        Relationships: [
          {
            foreignKeyName: "hiperfoco_elementos_hiperfoco_id_fkey"
            columns: ["hiperfoco_id"]
            isOneToOne: false
            referencedRelation: "hiperfocos"
            referencedColumns: ["id"]
          },
        ]
      }
      hiperfocos: {
        Row: {
          created_at: string
          emoji: string | null
          forma_pontilhado: string | null
          id: string
          label: string
          slug: string
          som: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          emoji?: string | null
          forma_pontilhado?: string | null
          id?: string
          label: string
          slug: string
          som?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          emoji?: string | null
          forma_pontilhado?: string | null
          id?: string
          label?: string
          slug?: string
          som?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      inventory: {
        Row: {
          child_id: string
          id: string
          is_equipped: boolean | null
          item_code: string
          item_type: string
          unlocked_at: string | null
        }
        Insert: {
          child_id: string
          id?: string
          is_equipped?: boolean | null
          item_code: string
          item_type: string
          unlocked_at?: string | null
        }
        Update: {
          child_id?: string
          id?: string
          is_equipped?: boolean | null
          item_code?: string
          item_type?: string
          unlocked_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      learning_trails: {
        Row: {
          created_at: string
          description: string | null
          difficulty_level: string | null
          domain: string | null
          id: string
          materia: string
          name: string
          serie: string | null
          steps: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          domain?: string | null
          id?: string
          materia: string
          name: string
          serie?: string | null
          steps?: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          domain?: string | null
          id?: string
          materia?: string
          name?: string
          serie?: string | null
          steps?: Json
          updated_at?: string
        }
        Relationships: []
      }
      longitudinal_scores: {
        Row: {
          attention_score: number | null
          autonomy_score: number | null
          child_id: string
          coordination_score: number | null
          id: string
          language_score: number | null
          math_score: number | null
          memory_score: number | null
          reading_score: number | null
          recorded_at: string
          self_regulation_score: number | null
        }
        Insert: {
          attention_score?: number | null
          autonomy_score?: number | null
          child_id: string
          coordination_score?: number | null
          id?: string
          language_score?: number | null
          math_score?: number | null
          memory_score?: number | null
          reading_score?: number | null
          recorded_at?: string
          self_regulation_score?: number | null
        }
        Update: {
          attention_score?: number | null
          autonomy_score?: number | null
          child_id?: string
          coordination_score?: number | null
          id?: string
          language_score?: number | null
          math_score?: number | null
          memory_score?: number | null
          reading_score?: number | null
          recorded_at?: string
          self_regulation_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "longitudinal_scores_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      mascot_catalog_items: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          required_coins: number | null
          required_level: number | null
          stats_bonus: Json | null
          type: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          required_coins?: number | null
          required_level?: number | null
          stats_bonus?: Json | null
          type: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          required_coins?: number | null
          required_level?: number | null
          stats_bonus?: Json | null
          type?: string
        }
        Relationships: []
      }
      mascot_states: {
        Row: {
          affinity_points: number | null
          child_id: string
          current_emotion: Database["public"]["Enums"]["mascot_emotion"] | null
          energy_level: number | null
          evolution_stage: number | null
          id: string
          last_interaction_at: string | null
          name: string
          type: string
          updated_at: string | null
        }
        Insert: {
          affinity_points?: number | null
          child_id: string
          current_emotion?: Database["public"]["Enums"]["mascot_emotion"] | null
          energy_level?: number | null
          evolution_stage?: number | null
          id?: string
          last_interaction_at?: string | null
          name?: string
          type?: string
          updated_at?: string | null
        }
        Update: {
          affinity_points?: number | null
          child_id?: string
          current_emotion?: Database["public"]["Enums"]["mascot_emotion"] | null
          energy_level?: number | null
          evolution_stage?: number | null
          id?: string
          last_interaction_at?: string | null
          name?: string
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mascot_states_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: true
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      mascots: {
        Row: {
          base_stats: Json | null
          category: string
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string
          skins: Json | null
        }
        Insert: {
          base_stats?: Json | null
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name: string
          skins?: Json | null
        }
        Update: {
          base_stats?: Json | null
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string
          skins?: Json | null
        }
        Relationships: []
      }
      neuro_profiles: {
        Row: {
          child_id: string
          comorbidities: string[] | null
          created_at: string | null
          focus_duration_minutes: number | null
          id: string
          main_diagnosis: string
          severity_level: number | null
        }
        Insert: {
          child_id: string
          comorbidities?: string[] | null
          created_at?: string | null
          focus_duration_minutes?: number | null
          id?: string
          main_diagnosis: string
          severity_level?: number | null
        }
        Update: {
          child_id?: string
          comorbidities?: string[] | null
          created_at?: string | null
          focus_duration_minutes?: number | null
          id?: string
          main_diagnosis?: string
          severity_level?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "neuro_profiles_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: true
            referencedRelation: "children_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          child_id: string | null
          created_at: string | null
          id: string
          message: string
          read: boolean | null
          scheduled_for: string | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          child_id?: string | null
          created_at?: string | null
          id?: string
          message: string
          read?: boolean | null
          scheduled_for?: string | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          child_id?: string | null
          created_at?: string | null
          id?: string
          message?: string
          read?: boolean | null
          scheduled_for?: string | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      parent_notifications: {
        Row: {
          child_id: string
          content: string
          created_at: string | null
          id: string
          is_read: boolean | null
          metadata: Json | null
          parent_id: string
          title: string
          type: string
        }
        Insert: {
          child_id: string
          content: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          metadata?: Json | null
          parent_id: string
          title: string
          type: string
        }
        Update: {
          child_id?: string
          content?: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          metadata?: Json | null
          parent_id?: string
          title?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "parent_notifications_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parent_notifications_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      parent_profiles: {
        Row: {
          consent_date: string | null
          consent_given: boolean | null
          cpf: string | null
          created_at: string | null
          id: string
          phone: string | null
          profile_id: string
        }
        Insert: {
          consent_date?: string | null
          consent_given?: boolean | null
          cpf?: string | null
          created_at?: string | null
          id?: string
          phone?: string | null
          profile_id: string
        }
        Update: {
          consent_date?: string | null
          consent_given?: boolean | null
          cpf?: string | null
          created_at?: string | null
          id?: string
          phone?: string | null
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "parent_profiles_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      parental_controls: {
        Row: {
          allowed_hours_end: string | null
          allowed_hours_start: string | null
          blocked_days: number[] | null
          break_duration_minutes: number | null
          break_interval_minutes: number | null
          child_id: string
          created_at: string | null
          daily_time_limit_minutes: number | null
          enforce_mandatory_breaks: boolean | null
          id: string
          is_active: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_hours_end?: string | null
          allowed_hours_start?: string | null
          blocked_days?: number[] | null
          break_duration_minutes?: number | null
          break_interval_minutes?: number | null
          child_id: string
          created_at?: string | null
          daily_time_limit_minutes?: number | null
          enforce_mandatory_breaks?: boolean | null
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_hours_end?: string | null
          allowed_hours_start?: string | null
          blocked_days?: number[] | null
          break_duration_minutes?: number | null
          break_interval_minutes?: number | null
          child_id?: string
          created_at?: string | null
          daily_time_limit_minutes?: number | null
          enforce_mandatory_breaks?: boolean | null
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "parental_controls_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: true
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      pedagogical_activities: {
        Row: {
          assessment: Json
          challenge: Json
          created_at: string
          demonstration: Json
          guided_training: Json
          id: string
          practice: Json
          skill_code: string
          title: string
          updated_at: string
        }
        Insert: {
          assessment: Json
          challenge: Json
          created_at?: string
          demonstration: Json
          guided_training: Json
          id?: string
          practice: Json
          skill_code: string
          title: string
          updated_at?: string
        }
        Update: {
          assessment?: Json
          challenge?: Json
          created_at?: string
          demonstration?: Json
          guided_training?: Json
          id?: string
          practice?: Json
          skill_code?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pedagogical_activities_skill_code_fkey"
            columns: ["skill_code"]
            isOneToOne: false
            referencedRelation: "bncc_skills"
            referencedColumns: ["code"]
          },
        ]
      }
      pedagogical_activities_base: {
        Row: {
          adaptacoes: Json | null
          created_at: string | null
          domain: string | null
          estrategia_pedagogica: string | null
          faixa_etaria: string | null
          habilidade_bncc: string | null
          id: string
          materia: string
          micro_habilidade: string | null
          neuro_perfil: Json | null
          nivel_cognitivo: string | null
          nivel_dificuldade: string | null
          objetivo_pedagogico: string | null
          pre_requisitos: string[] | null
          reforco_erro: string | null
          reforco_positivo: string | null
          serie: string | null
          tags: string[] | null
          tempo_medio: number | null
          tipo_resposta: string | null
          tipo_sensorial: Json | null
          titulo: string
          updated_at: string | null
          variacoes: Json | null
        }
        Insert: {
          adaptacoes?: Json | null
          created_at?: string | null
          domain?: string | null
          estrategia_pedagogica?: string | null
          faixa_etaria?: string | null
          habilidade_bncc?: string | null
          id?: string
          materia: string
          micro_habilidade?: string | null
          neuro_perfil?: Json | null
          nivel_cognitivo?: string | null
          nivel_dificuldade?: string | null
          objetivo_pedagogico?: string | null
          pre_requisitos?: string[] | null
          reforco_erro?: string | null
          reforco_positivo?: string | null
          serie?: string | null
          tags?: string[] | null
          tempo_medio?: number | null
          tipo_resposta?: string | null
          tipo_sensorial?: Json | null
          titulo: string
          updated_at?: string | null
          variacoes?: Json | null
        }
        Update: {
          adaptacoes?: Json | null
          created_at?: string | null
          domain?: string | null
          estrategia_pedagogica?: string | null
          faixa_etaria?: string | null
          habilidade_bncc?: string | null
          id?: string
          materia?: string
          micro_habilidade?: string | null
          neuro_perfil?: Json | null
          nivel_cognitivo?: string | null
          nivel_dificuldade?: string | null
          objetivo_pedagogico?: string | null
          pre_requisitos?: string[] | null
          reforco_erro?: string | null
          reforco_positivo?: string | null
          serie?: string | null
          tags?: string[] | null
          tempo_medio?: number | null
          tipo_resposta?: string | null
          tipo_sensorial?: Json | null
          titulo?: string
          updated_at?: string | null
          variacoes?: Json | null
        }
        Relationships: []
      }
      pedagogical_explanations: {
        Row: {
          content: Json
          created_at: string
          id: string
          skill_code: string
          updated_at: string
        }
        Insert: {
          content: Json
          created_at?: string
          id?: string
          skill_code: string
          updated_at?: string
        }
        Update: {
          content?: Json
          created_at?: string
          id?: string
          skill_code?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pedagogical_explanations_skill_code_fkey"
            columns: ["skill_code"]
            isOneToOne: false
            referencedRelation: "bncc_skills"
            referencedColumns: ["code"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      progression: {
        Row: {
          child_id: string | null
          id: string
          last_updated: string | null
          mastery_level: number | null
          skill_code: string | null
        }
        Insert: {
          child_id?: string | null
          id?: string
          last_updated?: string | null
          mastery_level?: number | null
          skill_code?: string | null
        }
        Update: {
          child_id?: string | null
          id?: string
          last_updated?: string | null
          mastery_level?: number | null
          skill_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "progression_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "progression_skill_code_fkey"
            columns: ["skill_code"]
            isOneToOne: false
            referencedRelation: "bncc_skills"
            referencedColumns: ["code"]
          },
        ]
      }
      progresso_aluno: {
        Row: {
          acertos: number | null
          aluno_id: string | null
          codigo_bncc: string | null
          created_at: string | null
          dominio: number | null
          erros: number | null
          id: string
          tentativas: number | null
          updated_at: string | null
        }
        Insert: {
          acertos?: number | null
          aluno_id?: string | null
          codigo_bncc?: string | null
          created_at?: string | null
          dominio?: number | null
          erros?: number | null
          id?: string
          tentativas?: number | null
          updated_at?: string | null
        }
        Update: {
          acertos?: number | null
          aluno_id?: string | null
          codigo_bncc?: string | null
          created_at?: string | null
          dominio?: number | null
          erros?: number | null
          id?: string
          tentativas?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "progresso_aluno_aluno_id_fkey"
            columns: ["aluno_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "progresso_aluno_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "bncc_habilidades"
            referencedColumns: ["codigo_bncc"]
          },
        ]
      }
      reports: {
        Row: {
          child_id: string | null
          data: Json | null
          generated_at: string | null
          id: string
          period_end: string | null
          period_start: string | null
          type: string | null
        }
        Insert: {
          child_id?: string | null
          data?: Json | null
          generated_at?: string | null
          id?: string
          period_end?: string | null
          period_start?: string | null
          type?: string | null
        }
        Update: {
          child_id?: string | null
          data?: Json | null
          generated_at?: string | null
          id?: string
          period_end?: string | null
          period_start?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reports_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      reward_rules: {
        Row: {
          category: string
          coins_reward: number
          id: number
          min_score: number
          xp_reward: number
        }
        Insert: {
          category: string
          coins_reward: number
          id?: number
          min_score: number
          xp_reward: number
        }
        Update: {
          category?: string
          coins_reward?: number
          id?: number
          min_score?: number
          xp_reward?: number
        }
        Relationships: []
      }
      sensory_profiles: {
        Row: {
          auditory_sensitivity: number | null
          child_id: string
          id: string
          preferred_colors: string[] | null
          tactile_sensitivity: number | null
          trigger_sounds: string[] | null
          updated_at: string | null
          visual_sensitivity: number | null
        }
        Insert: {
          auditory_sensitivity?: number | null
          child_id: string
          id?: string
          preferred_colors?: string[] | null
          tactile_sensitivity?: number | null
          trigger_sounds?: string[] | null
          updated_at?: string | null
          visual_sensitivity?: number | null
        }
        Update: {
          auditory_sensitivity?: number | null
          child_id?: string
          id?: string
          preferred_colors?: string[] | null
          tactile_sensitivity?: number | null
          trigger_sounds?: string[] | null
          updated_at?: string | null
          visual_sensitivity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "sensory_profiles_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: true
            referencedRelation: "children_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      spaced_repetition_schedule: {
        Row: {
          activity_id: string | null
          child_id: string
          created_at: string
          ease_factor: number
          id: string
          interval_days: number
          last_performance_score: number | null
          next_review_at: string
          skill_code: string | null
          updated_at: string
        }
        Insert: {
          activity_id?: string | null
          child_id: string
          created_at?: string
          ease_factor?: number
          id?: string
          interval_days?: number
          last_performance_score?: number | null
          next_review_at?: string
          skill_code?: string | null
          updated_at?: string
        }
        Update: {
          activity_id?: string | null
          child_id?: string
          created_at?: string
          ease_factor?: number
          id?: string
          interval_days?: number
          last_performance_score?: number | null
          next_review_at?: string
          skill_code?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "spaced_repetition_schedule_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "pedagogical_activities_base"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaced_repetition_schedule_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      study_agenda: {
        Row: {
          child_id: string
          completed: boolean | null
          created_at: string
          description: string | null
          exam_date: string | null
          id: string
          topic: string
          type: string | null
          updated_at: string
        }
        Insert: {
          child_id: string
          completed?: boolean | null
          created_at?: string
          description?: string | null
          exam_date?: string | null
          id?: string
          topic: string
          type?: string | null
          updated_at?: string
        }
        Update: {
          child_id?: string
          completed?: boolean | null
          created_at?: string
          description?: string | null
          exam_date?: string | null
          id?: string
          topic?: string
          type?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "study_agenda_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      tecnicas_pedagogicas: {
        Row: {
          categoria: string | null
          created_at: string
          descricao: string | null
          id: string
          nome: string
          updated_at: string
        }
        Insert: {
          categoria?: string | null
          created_at?: string
          descricao?: string | null
          id?: string
          nome: string
          updated_at?: string
        }
        Update: {
          categoria?: string | null
          created_at?: string
          descricao?: string | null
          id?: string
          nome?: string
          updated_at?: string
        }
        Relationships: []
      }
      therapist_profiles: {
        Row: {
          created_at: string | null
          crp_crm: string | null
          id: string
          profile_id: string
          specialty: string | null
        }
        Insert: {
          created_at?: string | null
          crp_crm?: string | null
          id?: string
          profile_id: string
          specialty?: string | null
        }
        Update: {
          created_at?: string | null
          crp_crm?: string | null
          id?: string
          profile_id?: string
          specialty?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "therapist_profiles_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      trilhas_aprendizagem: {
        Row: {
          ano: string
          ativa: boolean | null
          created_at: string | null
          descricao: string | null
          disciplina: string
          habilidades_ordenadas: Json
          id: string
          nome: string
          updated_at: string | null
        }
        Insert: {
          ano: string
          ativa?: boolean | null
          created_at?: string | null
          descricao?: string | null
          disciplina: string
          habilidades_ordenadas?: Json
          id?: string
          nome: string
          updated_at?: string | null
        }
        Update: {
          ano?: string
          ativa?: boolean | null
          created_at?: string | null
          descricao?: string | null
          disciplina?: string
          habilidades_ordenadas?: Json
          id?: string
          nome?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user_mascots: {
        Row: {
          affinity: number
          created_at: string
          evolution_stage: string | null
          experience: number
          gender: string | null
          id: string
          inventory: Json | null
          is_active: boolean
          level: number
          mascot_id: string
          metadata: Json | null
          room_metadata: Json | null
          stats: Json | null
          user_id: string
        }
        Insert: {
          affinity?: number
          created_at?: string
          evolution_stage?: string | null
          experience?: number
          gender?: string | null
          id?: string
          inventory?: Json | null
          is_active?: boolean
          level?: number
          mascot_id: string
          metadata?: Json | null
          room_metadata?: Json | null
          stats?: Json | null
          user_id: string
        }
        Update: {
          affinity?: number
          created_at?: string
          evolution_stage?: string | null
          experience?: number
          gender?: string | null
          id?: string
          inventory?: Json | null
          is_active?: boolean
          level?: number
          mascot_id?: string
          metadata?: Json | null
          room_metadata?: Json | null
          stats?: Json | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_mascots_mascot_id_fkey"
            columns: ["mascot_id"]
            isOneToOne: false
            referencedRelation: "mascots"
            referencedColumns: ["id"]
          },
        ]
      }
      user_privacy_settings: {
        Row: {
          analytics_consent: boolean | null
          created_at: string
          data_usage_consent: boolean | null
          id: string
          marketing_consent: boolean | null
          terms_accepted: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          analytics_consent?: boolean | null
          created_at?: string
          data_usage_consent?: boolean | null
          id?: string
          marketing_consent?: boolean | null
          terms_accepted?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          analytics_consent?: boolean | null
          created_at?: string
          data_usage_consent?: boolean | null
          id?: string
          marketing_consent?: boolean | null
          terms_accepted?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_brilhocoins: {
        Args: { amount: number; child_id: string }
        Returns: undefined
      }
      get_auth_user_id: { Args: never; Returns: string }
      reset_daily_coins: { Args: never; Returns: undefined }
    }
    Enums: {
      mascot_emotion:
        | "happy"
        | "calm"
        | "sleepy"
        | "excited"
        | "focused"
        | "proud"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      mascot_emotion: [
        "happy",
        "calm",
        "sleepy",
        "excited",
        "focused",
        "proud",
      ],
    },
  },
} as const

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
          id: string
          last_attempt_at: string | null
          mastery_level: number
          materia: string
          skill_code: string
          success_rate: number
          total_attempts: number
          updated_at: string
        }
        Insert: {
          child_id: string
          created_at?: string
          id?: string
          last_attempt_at?: string | null
          mastery_level?: number
          materia: string
          skill_code: string
          success_rate?: number
          total_attempts?: number
          updated_at?: string
        }
        Update: {
          child_id?: string
          created_at?: string
          id?: string
          last_attempt_at?: string | null
          mastery_level?: number
          materia?: string
          skill_code?: string
          success_rate?: number
          total_attempts?: number
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
          created_at: string
          diagnostico: string | null
          flags: Json | null
          hiperfoco: string | null
          id: string
          idade: number | null
          niveis: Json | null
          nome: string
          observacoes: string | null
          perfil: Json | null
          sensory_mode: string | null
          serie: string | null
          tempo_atencao_min: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          anamnese_completa?: boolean | null
          anamnesis_edit_count?: number | null
          anamnesis_id?: string | null
          avatar?: string | null
          created_at?: string
          diagnostico?: string | null
          flags?: Json | null
          hiperfoco?: string | null
          id?: string
          idade?: number | null
          niveis?: Json | null
          nome: string
          observacoes?: string | null
          perfil?: Json | null
          sensory_mode?: string | null
          serie?: string | null
          tempo_atencao_min?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          anamnese_completa?: boolean | null
          anamnesis_edit_count?: number | null
          anamnesis_id?: string | null
          avatar?: string | null
          created_at?: string
          diagnostico?: string | null
          flags?: Json | null
          hiperfoco?: string | null
          id?: string
          idade?: number | null
          niveis?: Json | null
          nome?: string
          observacoes?: string | null
          perfil?: Json | null
          sensory_mode?: string | null
          serie?: string | null
          tempo_atencao_min?: number | null
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
      get_auth_user_id: { Args: never; Returns: string }
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

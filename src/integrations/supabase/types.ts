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
      anamnese_v2: {
        Row: {
          child_id: string
          completed: boolean
          completed_at: string | null
          created_at: string
          current_step: number
          id: string
          responses: Json
          risk_levels: Json
          scores: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          child_id: string
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          current_step?: number
          id?: string
          responses?: Json
          risk_levels?: Json
          scores?: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          child_id?: string
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          current_step?: number
          id?: string
          responses?: Json
          risk_levels?: Json
          scores?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "anamnese_v2_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: true
            referencedRelation: "children"
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
      assessment_repository: {
        Row: {
          codigo_bncc: string
          created_at: string
          criterios: Json
          descricao: string
          id: string
          instrucoes: string
          nivel: string
          ordem: number
          pontuacao_total: number
          questoes: Json
          tempo_minutos: number
          tipo: Database["public"]["Enums"]["assessment_kind"]
          titulo: string
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          created_at?: string
          criterios?: Json
          descricao?: string
          id?: string
          instrucoes?: string
          nivel?: string
          ordem?: number
          pontuacao_total?: number
          questoes?: Json
          tempo_minutos?: number
          tipo: Database["public"]["Enums"]["assessment_kind"]
          titulo?: string
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          created_at?: string
          criterios?: Json
          descricao?: string
          id?: string
          instrucoes?: string
          nivel?: string
          ordem?: number
          pontuacao_total?: number
          questoes?: Json
          tempo_minutos?: number
          tipo?: Database["public"]["Enums"]["assessment_kind"]
          titulo?: string
          updated_at?: string
        }
        Relationships: []
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
          {
            foreignKeyName: "atividades_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "atividades_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional_missoes"
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
      aulas_bncc: {
        Row: {
          ativo: boolean
          codigo_bncc: string
          created_at: string
          descricao: string | null
          disciplina: string
          eixo: string | null
          etapa: Database["public"]["Enums"]["etapa_escolar"]
          id: string
          ordem: number
          payload: Json
          pre_requisitos: string[]
          serie: string
          tipo_player: Database["public"]["Enums"]["tipo_player"]
          titulo: string
          updated_at: string
          xp: number
        }
        Insert: {
          ativo?: boolean
          codigo_bncc: string
          created_at?: string
          descricao?: string | null
          disciplina: string
          eixo?: string | null
          etapa: Database["public"]["Enums"]["etapa_escolar"]
          id?: string
          ordem?: number
          payload: Json
          pre_requisitos?: string[]
          serie: string
          tipo_player: Database["public"]["Enums"]["tipo_player"]
          titulo: string
          updated_at?: string
          xp?: number
        }
        Update: {
          ativo?: boolean
          codigo_bncc?: string
          created_at?: string
          descricao?: string | null
          disciplina?: string
          eixo?: string | null
          etapa?: Database["public"]["Enums"]["etapa_escolar"]
          id?: string
          ordem?: number
          payload?: Json
          pre_requisitos?: string[]
          serie?: string
          tipo_player?: Database["public"]["Enums"]["tipo_player"]
          titulo?: string
          updated_at?: string
          xp?: number
        }
        Relationships: []
      }
      aulas_geradas_ia: {
        Row: {
          ano: string
          aprovada: boolean
          codigo_bncc: string
          disciplina: string | null
          gerada_em: string
          id: string
          modelo: string
          screens: Json
          titulo: string
          updated_at: string
          versao: number
        }
        Insert: {
          ano: string
          aprovada?: boolean
          codigo_bncc: string
          disciplina?: string | null
          gerada_em?: string
          id?: string
          modelo?: string
          screens: Json
          titulo: string
          updated_at?: string
          versao?: number
        }
        Update: {
          ano?: string
          aprovada?: boolean
          codigo_bncc?: string
          disciplina?: string | null
          gerada_em?: string
          id?: string
          modelo?: string
          screens?: Json
          titulo?: string
          updated_at?: string
          versao?: number
        }
        Relationships: [
          {
            foreignKeyName: "aulas_geradas_ia_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: true
            referencedRelation: "bncc_habilidades"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "aulas_geradas_ia_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: true
            referencedRelation: "vw_biblioteca_nacional"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "aulas_geradas_ia_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: true
            referencedRelation: "vw_biblioteca_nacional_missoes"
            referencedColumns: ["codigo_bncc"]
          },
        ]
      }
      aulas_semana: {
        Row: {
          agenda_horario: string | null
          child_id: string
          concluida: boolean
          created_at: string
          data: string
          editavel: boolean
          habilidade_bncc: string | null
          id: string
          materia: string | null
          midias: Json
          perfil_neuro: string | null
          steps: Json
          titulo: string
          updated_at: string
          user_id: string
        }
        Insert: {
          agenda_horario?: string | null
          child_id: string
          concluida?: boolean
          created_at?: string
          data: string
          editavel?: boolean
          habilidade_bncc?: string | null
          id?: string
          materia?: string | null
          midias?: Json
          perfil_neuro?: string | null
          steps?: Json
          titulo: string
          updated_at?: string
          user_id: string
        }
        Update: {
          agenda_horario?: string | null
          child_id?: string
          concluida?: boolean
          created_at?: string
          data?: string
          editavel?: boolean
          habilidade_bncc?: string | null
          id?: string
          materia?: string | null
          midias?: Json
          perfil_neuro?: string | null
          steps?: Json
          titulo?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "aulas_semana_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      banco_midias_categorias: {
        Row: {
          created_at: string
          emoji: string | null
          id: string
          label: string
          ordem: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          emoji?: string | null
          id: string
          label: string
          ordem?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          emoji?: string | null
          id?: string
          label?: string
          ordem?: number
          updated_at?: string
        }
        Relationships: []
      }
      bncc_anos: {
        Row: {
          codigo: string
          created_at: string
          etapa: string | null
          id: string
          nome: string
          ordem: number
          updated_at: string
        }
        Insert: {
          codigo: string
          created_at?: string
          etapa?: string | null
          id?: string
          nome: string
          ordem?: number
          updated_at?: string
        }
        Update: {
          codigo?: string
          created_at?: string
          etapa?: string | null
          id?: string
          nome?: string
          ordem?: number
          updated_at?: string
        }
        Relationships: []
      }
      bncc_areas: {
        Row: {
          codigo: string
          created_at: string
          descricao: string | null
          id: string
          nome: string
          ordem: number
          updated_at: string
        }
        Insert: {
          codigo: string
          created_at?: string
          descricao?: string | null
          id?: string
          nome: string
          ordem?: number
          updated_at?: string
        }
        Update: {
          codigo?: string
          created_at?: string
          descricao?: string | null
          id?: string
          nome?: string
          ordem?: number
          updated_at?: string
        }
        Relationships: []
      }
      bncc_biblioteca: {
        Row: {
          ano: number
          ativo: boolean
          codigo: string
          componente: string
          created_at: string
          etapa: string
          habilidade: string
          id: string
          objeto_conhecimento: string | null
          ordem: number | null
          palavras_chave: string[] | null
          unidade_tematica: string | null
          updated_at: string
        }
        Insert: {
          ano: number
          ativo?: boolean
          codigo: string
          componente: string
          created_at?: string
          etapa?: string
          habilidade: string
          id?: string
          objeto_conhecimento?: string | null
          ordem?: number | null
          palavras_chave?: string[] | null
          unidade_tematica?: string | null
          updated_at?: string
        }
        Update: {
          ano?: number
          ativo?: boolean
          codigo?: string
          componente?: string
          created_at?: string
          etapa?: string
          habilidade?: string
          id?: string
          objeto_conhecimento?: string | null
          ordem?: number | null
          palavras_chave?: string[] | null
          unidade_tematica?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      bncc_componentes: {
        Row: {
          area_codigo: string | null
          codigo: string
          created_at: string
          descricao: string | null
          id: string
          nome: string
          ordem: number
          updated_at: string
        }
        Insert: {
          area_codigo?: string | null
          codigo: string
          created_at?: string
          descricao?: string | null
          id?: string
          nome: string
          ordem?: number
          updated_at?: string
        }
        Update: {
          area_codigo?: string | null
          codigo?: string
          created_at?: string
          descricao?: string | null
          id?: string
          nome?: string
          ordem?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bncc_componentes_area_codigo_fkey"
            columns: ["area_codigo"]
            isOneToOne: false
            referencedRelation: "bncc_areas"
            referencedColumns: ["codigo"]
          },
        ]
      }
      bncc_conteudo: {
        Row: {
          atividade_imprimir: string | null
          aula_ilustrada: Json | null
          codigo: string
          created_at: string
          criterios_avaliacao: Json | null
          exemplos: Json | null
          exercicios_dificeis: Json | null
          exercicios_faceis: Json | null
          exercicios_medios: Json | null
          explicacao: string | null
          gabarito: Json | null
          habilidades_relacionadas: Json | null
          id: string
          objetivos: Json | null
          titulo: string | null
          updated_at: string
          video_url: string | null
        }
        Insert: {
          atividade_imprimir?: string | null
          aula_ilustrada?: Json | null
          codigo: string
          created_at?: string
          criterios_avaliacao?: Json | null
          exemplos?: Json | null
          exercicios_dificeis?: Json | null
          exercicios_faceis?: Json | null
          exercicios_medios?: Json | null
          explicacao?: string | null
          gabarito?: Json | null
          habilidades_relacionadas?: Json | null
          id?: string
          objetivos?: Json | null
          titulo?: string | null
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          atividade_imprimir?: string | null
          aula_ilustrada?: Json | null
          codigo?: string
          created_at?: string
          criterios_avaliacao?: Json | null
          exemplos?: Json | null
          exercicios_dificeis?: Json | null
          exercicios_faceis?: Json | null
          exercicios_medios?: Json | null
          explicacao?: string | null
          gabarito?: Json | null
          habilidades_relacionadas?: Json | null
          id?: string
          objetivos?: Json | null
          titulo?: string | null
          updated_at?: string
          video_url?: string | null
        }
        Relationships: []
      }
      bncc_habilidades: {
        Row: {
          ano: string | null
          codigo_bncc: string
          created_at: string | null
          disciplina: string | null
          etapa: string | null
          id: string
          nivel: string | null
          objetivo: string | null
          objeto_conhecimento: string | null
          ordem: number | null
          titulo: string | null
          unidade_tematica: string | null
          updated_at: string | null
        }
        Insert: {
          ano?: string | null
          codigo_bncc: string
          created_at?: string | null
          disciplina?: string | null
          etapa?: string | null
          id?: string
          nivel?: string | null
          objetivo?: string | null
          objeto_conhecimento?: string | null
          ordem?: number | null
          titulo?: string | null
          unidade_tematica?: string | null
          updated_at?: string | null
        }
        Update: {
          ano?: string | null
          codigo_bncc?: string
          created_at?: string | null
          disciplina?: string | null
          etapa?: string | null
          id?: string
          nivel?: string | null
          objetivo?: string | null
          objeto_conhecimento?: string | null
          ordem?: number | null
          titulo?: string | null
          unidade_tematica?: string | null
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
      bncc_projects: {
        Row: {
          atividades: Json
          avaliacao: Json
          codigo_bncc: string
          created_at: string
          cronograma: Json
          descricao: string
          duracao_dias: number | null
          id: string
          materiais: Json
          objetivo: string
          observacoes: string | null
          produto_final: string
          titulo: string
          updated_at: string
        }
        Insert: {
          atividades?: Json
          avaliacao?: Json
          codigo_bncc: string
          created_at?: string
          cronograma?: Json
          descricao: string
          duracao_dias?: number | null
          id?: string
          materiais?: Json
          objetivo: string
          observacoes?: string | null
          produto_final: string
          titulo: string
          updated_at?: string
        }
        Update: {
          atividades?: Json
          avaliacao?: Json
          codigo_bncc?: string
          created_at?: string
          cronograma?: Json
          descricao?: string
          duracao_dias?: number | null
          id?: string
          materiais?: Json
          objetivo?: string
          observacoes?: string | null
          produto_final?: string
          titulo?: string
          updated_at?: string
        }
        Relationships: []
      }
      bncc_relationships: {
        Row: {
          codigo_bncc: string
          created_at: string
          id: string
          kind: Database["public"]["Enums"]["bncc_relation_kind"]
          metadata: Json | null
          peso: number
          related_codigo_bncc: string
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          created_at?: string
          id?: string
          kind: Database["public"]["Enums"]["bncc_relation_kind"]
          metadata?: Json | null
          peso?: number
          related_codigo_bncc: string
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          created_at?: string
          id?: string
          kind?: Database["public"]["Enums"]["bncc_relation_kind"]
          metadata?: Json | null
          peso?: number
          related_codigo_bncc?: string
          updated_at?: string
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
      bncc_template_map: {
        Row: {
          bncc_code: string
          created_at: string
          id: string
          priority: number
          template_id: string
          updated_at: string
        }
        Insert: {
          bncc_code: string
          created_at?: string
          id?: string
          priority?: number
          template_id: string
          updated_at?: string
        }
        Update: {
          bncc_code?: string
          created_at?: string
          id?: string
          priority?: number
          template_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bncc_template_map_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "pedagogical_templates"
            referencedColumns: ["id"]
          },
        ]
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
      common_mistakes: {
        Row: {
          atividades_indicadas: Json
          causas: Json
          codigo_bncc: string
          created_at: string
          erro: string
          estrategias_correcao: Json
          id: string
          ordem: number
          severidade: string | null
          updated_at: string
        }
        Insert: {
          atividades_indicadas?: Json
          causas?: Json
          codigo_bncc: string
          created_at?: string
          erro: string
          estrategias_correcao?: Json
          id?: string
          ordem?: number
          severidade?: string | null
          updated_at?: string
        }
        Update: {
          atividades_indicadas?: Json
          causas?: Json
          codigo_bncc?: string
          created_at?: string
          erro?: string
          estrategias_correcao?: Json
          id?: string
          ordem?: number
          severidade?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      daily_routines: {
        Row: {
          category: string | null
          child_id: string
          completed_at: string | null
          created_at: string | null
          icon: string | null
          id: string
          routine_code: string
          time_of_day: string | null
          title: string | null
          updated_at: string
        }
        Insert: {
          category?: string | null
          child_id: string
          completed_at?: string | null
          created_at?: string | null
          icon?: string | null
          id?: string
          routine_code: string
          time_of_day?: string | null
          title?: string | null
          updated_at?: string
        }
        Update: {
          category?: string | null
          child_id?: string
          completed_at?: string | null
          created_at?: string | null
          icon?: string | null
          id?: string
          routine_code?: string
          time_of_day?: string | null
          title?: string | null
          updated_at?: string
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
      didactic_sequences: {
        Row: {
          avaliacao: Json
          codigo_bncc: string
          created_at: string
          descricao: string
          duracao_minutos: number | null
          etapas: Json
          id: string
          nivel: Database["public"]["Enums"]["didactic_level"]
          objetivos: Json
          observacoes: string | null
          recursos: Json
          titulo: string
          updated_at: string
        }
        Insert: {
          avaliacao?: Json
          codigo_bncc: string
          created_at?: string
          descricao: string
          duracao_minutos?: number | null
          etapas?: Json
          id?: string
          nivel: Database["public"]["Enums"]["didactic_level"]
          objetivos?: Json
          observacoes?: string | null
          recursos?: Json
          titulo: string
          updated_at?: string
        }
        Update: {
          avaliacao?: Json
          codigo_bncc?: string
          created_at?: string
          descricao?: string
          duracao_minutos?: number | null
          etapas?: Json
          id?: string
          nivel?: Database["public"]["Enums"]["didactic_level"]
          objetivos?: Json
          observacoes?: string | null
          recursos?: Json
          titulo?: string
          updated_at?: string
        }
        Relationships: []
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
      educational_games: {
        Row: {
          codigo_bncc: string
          created_at: string
          descricao: string | null
          dificuldade: string
          id: string
          objetivo: string
          ordem: number
          pontuacao_maxima: number
          tipo: string | null
          titulo: string
          updated_at: string
          url: string | null
        }
        Insert: {
          codigo_bncc: string
          created_at?: string
          descricao?: string | null
          dificuldade: string
          id?: string
          objetivo: string
          ordem?: number
          pontuacao_maxima?: number
          tipo?: string | null
          titulo: string
          updated_at?: string
          url?: string | null
        }
        Update: {
          codigo_bncc?: string
          created_at?: string
          descricao?: string | null
          dificuldade?: string
          id?: string
          objetivo?: string
          ordem?: number
          pontuacao_maxima?: number
          tipo?: string | null
          titulo?: string
          updated_at?: string
          url?: string | null
        }
        Relationships: []
      }
      escola_progresso: {
        Row: {
          acertos: number
          bloco_atual: number
          child_id: string
          codigo_bncc: string
          concluida: boolean
          concluida_em: string | null
          created_at: string
          diagnostico_acertos: number
          diagnostico_em: string | null
          diagnostico_feito: boolean
          diagnostico_resultado: string | null
          diagnostico_total: number
          erros: number
          estrelas: number
          id: string
          nivel_dominio: Database["public"]["Enums"]["mastery_level"]
          nota: number
          percentual: number
          sessoes_dominadas_consecutivas: number
          tempo_estudado_segundos: number
          tentativas: number
          ultima_visita_em: string
          updated_at: string
        }
        Insert: {
          acertos?: number
          bloco_atual?: number
          child_id: string
          codigo_bncc: string
          concluida?: boolean
          concluida_em?: string | null
          created_at?: string
          diagnostico_acertos?: number
          diagnostico_em?: string | null
          diagnostico_feito?: boolean
          diagnostico_resultado?: string | null
          diagnostico_total?: number
          erros?: number
          estrelas?: number
          id?: string
          nivel_dominio?: Database["public"]["Enums"]["mastery_level"]
          nota?: number
          percentual?: number
          sessoes_dominadas_consecutivas?: number
          tempo_estudado_segundos?: number
          tentativas?: number
          ultima_visita_em?: string
          updated_at?: string
        }
        Update: {
          acertos?: number
          bloco_atual?: number
          child_id?: string
          codigo_bncc?: string
          concluida?: boolean
          concluida_em?: string | null
          created_at?: string
          diagnostico_acertos?: number
          diagnostico_em?: string | null
          diagnostico_feito?: boolean
          diagnostico_resultado?: string | null
          diagnostico_total?: number
          erros?: number
          estrelas?: number
          id?: string
          nivel_dominio?: Database["public"]["Enums"]["mastery_level"]
          nota?: number
          percentual?: number
          sessoes_dominadas_consecutivas?: number
          tempo_estudado_segundos?: number
          tentativas?: number
          ultima_visita_em?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "escola_progresso_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      escola_revisoes_historico: {
        Row: {
          child_id: string
          codigo_bncc: string
          created_at: string
          desempenho: number
          id: string
          registrado_em: string
          tipo: string
        }
        Insert: {
          child_id: string
          codigo_bncc: string
          created_at?: string
          desempenho: number
          id?: string
          registrado_em?: string
          tipo?: string
        }
        Update: {
          child_id?: string
          codigo_bncc?: string
          created_at?: string
          desempenho?: number
          id?: string
          registrado_em?: string
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "escola_revisoes_historico_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
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
          tipo: string
          updated_at: string
        }
        Insert: {
          child_id: string
          created_at?: string
          exam_date: string
          id?: string
          notes?: string | null
          subject: string
          tipo?: string
          updated_at?: string
        }
        Update: {
          child_id?: string
          created_at?: string
          exam_date?: string
          id?: string
          notes?: string | null
          subject?: string
          tipo?: string
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
      exercises: {
        Row: {
          alternativas: Json
          codigo_bncc: string | null
          competencia: string
          created_at: string
          dificuldade: string
          enunciado: string
          explicacao: string
          id: string
          imagem: string | null
          metadata: Json
          nivel_pedagogico: Database["public"]["Enums"]["nivel_pedagogico"]
          pontuacao: number
          resposta: string
          tempo_segundos: number
          tipo: string
          titulo: string
          updated_at: string
        }
        Insert: {
          alternativas?: Json
          codigo_bncc?: string | null
          competencia?: string
          created_at?: string
          dificuldade?: string
          enunciado: string
          explicacao?: string
          id?: string
          imagem?: string | null
          metadata?: Json
          nivel_pedagogico?: Database["public"]["Enums"]["nivel_pedagogico"]
          pontuacao?: number
          resposta?: string
          tempo_segundos?: number
          tipo: string
          titulo: string
          updated_at?: string
        }
        Update: {
          alternativas?: Json
          codigo_bncc?: string | null
          competencia?: string
          created_at?: string
          dificuldade?: string
          enunciado?: string
          explicacao?: string
          id?: string
          imagem?: string | null
          metadata?: Json
          nivel_pedagogico?: Database["public"]["Enums"]["nivel_pedagogico"]
          pontuacao?: number
          resposta?: string
          tempo_segundos?: number
          tipo?: string
          titulo?: string
          updated_at?: string
        }
        Relationships: []
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
          {
            foreignKeyName: "explicacoes_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "explicacoes_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional_missoes"
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
      homework_tasks: {
        Row: {
          child_id: string
          created_at: string
          dica_revelada: number
          dicas_ia: Json | null
          due_date: string
          enunciado: string | null
          foto_texto: string | null
          foto_url: string | null
          ia_resumo: Json | null
          id: string
          materia: string | null
          status: string
          titulo: string
          updated_at: string
          user_id: string
        }
        Insert: {
          child_id: string
          created_at?: string
          dica_revelada?: number
          dicas_ia?: Json | null
          due_date?: string
          enunciado?: string | null
          foto_texto?: string | null
          foto_url?: string | null
          ia_resumo?: Json | null
          id?: string
          materia?: string | null
          status?: string
          titulo: string
          updated_at?: string
          user_id: string
        }
        Update: {
          child_id?: string
          created_at?: string
          dica_revelada?: number
          dicas_ia?: Json | null
          due_date?: string
          enunciado?: string | null
          foto_texto?: string | null
          foto_url?: string | null
          ia_resumo?: Json | null
          id?: string
          materia?: string | null
          status?: string
          titulo?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "homework_tasks_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      inclusive_education_adaptations: {
        Row: {
          ajustes_avaliacao: Json
          codigo_bncc: string
          condition: Database["public"]["Enums"]["inclusive_condition"]
          created_at: string
          descricao: string
          estrategias: Json
          id: string
          observacoes: string | null
          recursos: Json
          titulo: string
          updated_at: string
        }
        Insert: {
          ajustes_avaliacao?: Json
          codigo_bncc: string
          condition: Database["public"]["Enums"]["inclusive_condition"]
          created_at?: string
          descricao: string
          estrategias?: Json
          id?: string
          observacoes?: string | null
          recursos?: Json
          titulo: string
          updated_at?: string
        }
        Update: {
          ajustes_avaliacao?: Json
          codigo_bncc?: string
          condition?: Database["public"]["Enums"]["inclusive_condition"]
          created_at?: string
          descricao?: string
          estrategias?: Json
          id?: string
          observacoes?: string | null
          recursos?: Json
          titulo?: string
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
      knowledge_objects: {
        Row: {
          codigo_bncc: string
          created_at: string
          descricao: string | null
          id: string
          objeto_conhecimento: string
          ordem: number | null
          palavras_chave: string[] | null
          unidade_tematica: string | null
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          created_at?: string
          descricao?: string | null
          id?: string
          objeto_conhecimento: string
          ordem?: number | null
          palavras_chave?: string[] | null
          unidade_tematica?: string | null
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          created_at?: string
          descricao?: string | null
          id?: string
          objeto_conhecimento?: string
          ordem?: number | null
          palavras_chave?: string[] | null
          unidade_tematica?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      learning_objectives: {
        Row: {
          codigo_bncc: string
          created_at: string
          descricao: string | null
          id: string
          objetivo: string
          ordem: number | null
          tipo: string | null
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          created_at?: string
          descricao?: string | null
          id?: string
          objetivo: string
          ordem?: number | null
          tipo?: string | null
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          created_at?: string
          descricao?: string | null
          id?: string
          objetivo?: string
          ordem?: number | null
          tipo?: string | null
          updated_at?: string
        }
        Relationships: []
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
      lesson_activities: {
        Row: {
          codigo_bncc: string
          created_at: string
          dica: string | null
          enunciado: string
          id: string
          instrucao: string | null
          metadata: Json
          ordem: number
          resposta: string | null
          tipo: string
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          created_at?: string
          dica?: string | null
          enunciado: string
          id?: string
          instrucao?: string | null
          metadata?: Json
          ordem?: number
          resposta?: string | null
          tipo: string
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          created_at?: string
          dica?: string | null
          enunciado?: string
          id?: string
          instrucao?: string | null
          metadata?: Json
          ordem?: number
          resposta?: string | null
          tipo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_activities_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "bncc_habilidades"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lesson_activities_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lesson_activities_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional_missoes"
            referencedColumns: ["codigo_bncc"]
          },
        ]
      }
      lesson_adaptations: {
        Row: {
          ajustes_atividade: Json
          codigo_bncc: string
          created_at: string
          estrategias: Json
          id: string
          lesson_id: string
          objetivo: string
          observacoes: string
          orientacoes_familia: string
          perfil: string
          recursos: Json
          updated_at: string
        }
        Insert: {
          ajustes_atividade?: Json
          codigo_bncc: string
          created_at?: string
          estrategias?: Json
          id?: string
          lesson_id: string
          objetivo?: string
          observacoes?: string
          orientacoes_familia?: string
          perfil: string
          recursos?: Json
          updated_at?: string
        }
        Update: {
          ajustes_atividade?: Json
          codigo_bncc?: string
          created_at?: string
          estrategias?: Json
          id?: string
          lesson_id?: string
          objetivo?: string
          observacoes?: string
          orientacoes_familia?: string
          perfil?: string
          recursos?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_adaptations_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lesson_content"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_assessments: {
        Row: {
          codigo_bncc: string
          created_at: string
          descricao: string
          id: string
          lesson_id: string
          questoes: Json
          tipo: string
          titulo: string
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          created_at?: string
          descricao?: string
          id?: string
          lesson_id: string
          questoes?: Json
          tipo: string
          titulo?: string
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          created_at?: string
          descricao?: string
          id?: string
          lesson_id?: string
          questoes?: Json
          tipo?: string
          titulo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_assessments_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lesson_content"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_cache: {
        Row: {
          cache_key: string
          codigo_bncc: string
          created_at: string
          expira_em: string | null
          id: string
          payload: Json
          updated_at: string
        }
        Insert: {
          cache_key: string
          codigo_bncc: string
          created_at?: string
          expira_em?: string | null
          id?: string
          payload: Json
          updated_at?: string
        }
        Update: {
          cache_key?: string
          codigo_bncc?: string
          created_at?: string
          expira_em?: string | null
          id?: string
          payload?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_cache_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "bncc_habilidades"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lesson_cache_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lesson_cache_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional_missoes"
            referencedColumns: ["codigo_bncc"]
          },
        ]
      }
      lesson_challenges: {
        Row: {
          codigo_bncc: string
          created_at: string
          descricao: string
          explicacao: string
          id: string
          lesson_id: string | null
          material: string[]
          nivel: string
          objetivo: string
          ordem: number
          pontuacao: number
          resposta: string
          titulo: string
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          created_at?: string
          descricao?: string
          explicacao?: string
          id?: string
          lesson_id?: string | null
          material?: string[]
          nivel?: string
          objetivo?: string
          ordem?: number
          pontuacao?: number
          resposta?: string
          titulo?: string
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          created_at?: string
          descricao?: string
          explicacao?: string
          id?: string
          lesson_id?: string | null
          material?: string[]
          nivel?: string
          objetivo?: string
          ordem?: number
          pontuacao?: number
          resposta?: string
          titulo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_challenges_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lesson_content"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_content: {
        Row: {
          analogia: string
          ano: string
          atividade_guiada: Json
          atividade_pratica: Json
          audit_report: Json
          audited_at: string | null
          codigo_bncc: string
          contextualizacao: string
          created_at: string
          curiosidade: string
          desafio: Json
          disciplina: string
          erro_comum: string
          exemplo1: string
          exemplo2: string
          explicacao: string
          id: string
          imagem: string
          introducao: string
          is_complete: boolean
          materiais: Json
          missing_sections: string[]
          nivel: string
          objetivo: string
          palavras_chave: Json
          passo_a_passo: Json
          quiz: Json
          respostas: Json
          resumo: string
          revisao: string
          tags: Json
          tempo_estimado: number
          titulo: string
          unidade_tematica_id: string | null
          updated_at: string
          video: string
        }
        Insert: {
          analogia: string
          ano: string
          atividade_guiada: Json
          atividade_pratica: Json
          audit_report?: Json
          audited_at?: string | null
          codigo_bncc: string
          contextualizacao: string
          created_at?: string
          curiosidade: string
          desafio: Json
          disciplina: string
          erro_comum: string
          exemplo1: string
          exemplo2: string
          explicacao: string
          id?: string
          imagem: string
          introducao: string
          is_complete?: boolean
          materiais: Json
          missing_sections?: string[]
          nivel: string
          objetivo: string
          palavras_chave: Json
          passo_a_passo: Json
          quiz: Json
          respostas: Json
          resumo: string
          revisao: string
          tags: Json
          tempo_estimado: number
          titulo: string
          unidade_tematica_id?: string | null
          updated_at?: string
          video: string
        }
        Update: {
          analogia?: string
          ano?: string
          atividade_guiada?: Json
          atividade_pratica?: Json
          audit_report?: Json
          audited_at?: string | null
          codigo_bncc?: string
          contextualizacao?: string
          created_at?: string
          curiosidade?: string
          desafio?: Json
          disciplina?: string
          erro_comum?: string
          exemplo1?: string
          exemplo2?: string
          explicacao?: string
          id?: string
          imagem?: string
          introducao?: string
          is_complete?: boolean
          materiais?: Json
          missing_sections?: string[]
          nivel?: string
          objetivo?: string
          palavras_chave?: Json
          passo_a_passo?: Json
          quiz?: Json
          respostas?: Json
          resumo?: string
          revisao?: string
          tags?: Json
          tempo_estimado?: number
          titulo?: string
          unidade_tematica_id?: string | null
          updated_at?: string
          video?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_content_unidade_tematica_id_fkey"
            columns: ["unidade_tematica_id"]
            isOneToOne: false
            referencedRelation: "thematic_units"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_curiosities: {
        Row: {
          codigo_bncc: string
          conteudo: string
          created_at: string
          fonte: string
          id: string
          imagem_url: string
          lesson_id: string | null
          ordem: number
          titulo: string
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          conteudo?: string
          created_at?: string
          fonte?: string
          id?: string
          imagem_url?: string
          lesson_id?: string | null
          ordem?: number
          titulo?: string
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          conteudo?: string
          created_at?: string
          fonte?: string
          id?: string
          imagem_url?: string
          lesson_id?: string | null
          ordem?: number
          titulo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_curiosities_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lesson_content"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_drafts: {
        Row: {
          ano: string | null
          codigo_bncc: string
          created_at: string
          disciplina: string | null
          generated_by: string | null
          id: string
          model: string | null
          notes: string | null
          payload: Json
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          titulo: string | null
          tokens_used: number | null
          updated_at: string
        }
        Insert: {
          ano?: string | null
          codigo_bncc: string
          created_at?: string
          disciplina?: string | null
          generated_by?: string | null
          id?: string
          model?: string | null
          notes?: string | null
          payload: Json
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          titulo?: string | null
          tokens_used?: number | null
          updated_at?: string
        }
        Update: {
          ano?: string | null
          codigo_bncc?: string
          created_at?: string
          disciplina?: string | null
          generated_by?: string | null
          id?: string
          model?: string | null
          notes?: string | null
          payload?: Json
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          titulo?: string | null
          tokens_used?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      lesson_examples: {
        Row: {
          categoria:
            | Database["public"]["Enums"]["lesson_example_categoria"]
            | null
          codigo_bncc: string
          contexto: string
          created_at: string
          enunciado: string
          explicacao: string
          id: string
          imagem: string | null
          lesson_id: string
          ordem: number
          resolucao: string
          resposta: string
          titulo: string
          updated_at: string
        }
        Insert: {
          categoria?:
            | Database["public"]["Enums"]["lesson_example_categoria"]
            | null
          codigo_bncc: string
          contexto?: string
          created_at?: string
          enunciado: string
          explicacao?: string
          id?: string
          imagem?: string | null
          lesson_id: string
          ordem?: number
          resolucao?: string
          resposta?: string
          titulo?: string
          updated_at?: string
        }
        Update: {
          categoria?:
            | Database["public"]["Enums"]["lesson_example_categoria"]
            | null
          codigo_bncc?: string
          contexto?: string
          created_at?: string
          enunciado?: string
          explicacao?: string
          id?: string
          imagem?: string | null
          lesson_id?: string
          ordem?: number
          resolucao?: string
          resposta?: string
          titulo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_examples_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lesson_content"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_experiments: {
        Row: {
          codigo_bncc: string
          created_at: string
          cuidados: Json
          id: string
          materiais: Json
          nivel: string | null
          objetivo: string
          ordem: number
          passos: Json
          resultado_esperado: string
          titulo: string
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          created_at?: string
          cuidados?: Json
          id?: string
          materiais?: Json
          nivel?: string | null
          objetivo: string
          ordem?: number
          passos?: Json
          resultado_esperado: string
          titulo: string
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          created_at?: string
          cuidados?: Json
          id?: string
          materiais?: Json
          nivel?: string | null
          objetivo?: string
          ordem?: number
          passos?: Json
          resultado_esperado?: string
          titulo?: string
          updated_at?: string
        }
        Relationships: []
      }
      lesson_explanations: {
        Row: {
          codigo_bncc: string
          conteudo: string
          created_at: string
          exemplos: Json
          id: string
          lesson_id: string
          nivel: Database["public"]["Enums"]["lesson_explanation_nivel"]
          ordem: number
          titulo: string
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          conteudo: string
          created_at?: string
          exemplos?: Json
          id?: string
          lesson_id: string
          nivel: Database["public"]["Enums"]["lesson_explanation_nivel"]
          ordem?: number
          titulo?: string
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          conteudo?: string
          created_at?: string
          exemplos?: Json
          id?: string
          lesson_id?: string
          nivel?: Database["public"]["Enums"]["lesson_explanation_nivel"]
          ordem?: number
          titulo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_explanations_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lesson_content"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_library: {
        Row: {
          ano_codigo: string | null
          area_codigo: string | null
          codigo_bncc: string
          componente_codigo: string | null
          created_at: string
          id: string
          metadata: Json
          resumo: string | null
          status: string
          subtitulo: string | null
          titulo: string
          updated_at: string
        }
        Insert: {
          ano_codigo?: string | null
          area_codigo?: string | null
          codigo_bncc: string
          componente_codigo?: string | null
          created_at?: string
          id?: string
          metadata?: Json
          resumo?: string | null
          status?: string
          subtitulo?: string | null
          titulo: string
          updated_at?: string
        }
        Update: {
          ano_codigo?: string | null
          area_codigo?: string | null
          codigo_bncc?: string
          componente_codigo?: string | null
          created_at?: string
          id?: string
          metadata?: Json
          resumo?: string | null
          status?: string
          subtitulo?: string | null
          titulo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_library_ano_codigo_fkey"
            columns: ["ano_codigo"]
            isOneToOne: false
            referencedRelation: "bncc_anos"
            referencedColumns: ["codigo"]
          },
          {
            foreignKeyName: "lesson_library_area_codigo_fkey"
            columns: ["area_codigo"]
            isOneToOne: false
            referencedRelation: "bncc_areas"
            referencedColumns: ["codigo"]
          },
          {
            foreignKeyName: "lesson_library_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "bncc_habilidades"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lesson_library_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lesson_library_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional_missoes"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lesson_library_componente_codigo_fkey"
            columns: ["componente_codigo"]
            isOneToOne: false
            referencedRelation: "bncc_componentes"
            referencedColumns: ["codigo"]
          },
        ]
      }
      lesson_progress: {
        Row: {
          acertos: number
          child_id: string | null
          codigo_bncc: string
          concluida_em: string | null
          created_at: string
          erros: number
          id: string
          iniciada_em: string
          metadata: Json
          passo_atual: number
          pontuacao: number
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          acertos?: number
          child_id?: string | null
          codigo_bncc: string
          concluida_em?: string | null
          created_at?: string
          erros?: number
          id?: string
          iniciada_em?: string
          metadata?: Json
          passo_atual?: number
          pontuacao?: number
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          acertos?: number
          child_id?: string | null
          codigo_bncc?: string
          concluida_em?: string | null
          created_at?: string
          erros?: number
          id?: string
          iniciada_em?: string
          metadata?: Json
          passo_atual?: number
          pontuacao?: number
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_progress_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_progress_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "bncc_habilidades"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lesson_progress_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lesson_progress_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional_missoes"
            referencedColumns: ["codigo_bncc"]
          },
        ]
      }
      lesson_quizzes: {
        Row: {
          codigo_bncc: string
          created_at: string
          descricao: string | null
          id: string
          metadata: Json
          questoes: Json
          titulo: string | null
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          created_at?: string
          descricao?: string | null
          id?: string
          metadata?: Json
          questoes?: Json
          titulo?: string | null
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          created_at?: string
          descricao?: string | null
          id?: string
          metadata?: Json
          questoes?: Json
          titulo?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_quizzes_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "bncc_habilidades"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lesson_quizzes_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lesson_quizzes_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional_missoes"
            referencedColumns: ["codigo_bncc"]
          },
        ]
      }
      lesson_resources: {
        Row: {
          created_at: string
          descricao: string | null
          duracao_segundos: number | null
          id: string
          lesson_id: string
          metadata: Json
          mime_type: string | null
          ordem: number
          tamanho_bytes: number | null
          thumbnail_url: string | null
          tipo: string
          titulo: string | null
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          descricao?: string | null
          duracao_segundos?: number | null
          id?: string
          lesson_id: string
          metadata?: Json
          mime_type?: string | null
          ordem?: number
          tamanho_bytes?: number | null
          thumbnail_url?: string | null
          tipo: string
          titulo?: string | null
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          descricao?: string | null
          duracao_segundos?: number | null
          id?: string
          lesson_id?: string
          metadata?: Json
          mime_type?: string | null
          ordem?: number
          tamanho_bytes?: number | null
          thumbnail_url?: string | null
          tipo?: string
          titulo?: string | null
          updated_at?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_resources_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lesson_content"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_reviews: {
        Row: {
          codigo_bncc: string
          conteudo: string
          created_at: string
          id: string
          metadata: Json
          ordem: number
          titulo: string | null
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          conteudo: string
          created_at?: string
          id?: string
          metadata?: Json
          ordem?: number
          titulo?: string | null
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          conteudo?: string
          created_at?: string
          id?: string
          metadata?: Json
          ordem?: number
          titulo?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_reviews_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "bncc_habilidades"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lesson_reviews_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lesson_reviews_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional_missoes"
            referencedColumns: ["codigo_bncc"]
          },
        ]
      }
      lesson_reviews_full: {
        Row: {
          codigo_bncc: string
          created_at: string
          dicas: Json
          erros_comuns: Json
          id: string
          lesson_id: string | null
          mapa_mental: Json
          palavras_chave: string[]
          resumo_completo: string
          resumo_curto: string
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          created_at?: string
          dicas?: Json
          erros_comuns?: Json
          id?: string
          lesson_id?: string | null
          mapa_mental?: Json
          palavras_chave?: string[]
          resumo_completo?: string
          resumo_curto?: string
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          created_at?: string
          dicas?: Json
          erros_comuns?: Json
          id?: string
          lesson_id?: string | null
          mapa_mental?: Json
          palavras_chave?: string[]
          resumo_completo?: string
          resumo_curto?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_reviews_full_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lesson_content"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_sections: {
        Row: {
          codigo_bncc: string
          conteudo: string
          created_at: string
          id: string
          metadata: Json
          ordem: number
          tipo: string
          titulo: string | null
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          conteudo: string
          created_at?: string
          id?: string
          metadata?: Json
          ordem?: number
          tipo: string
          titulo?: string | null
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          conteudo?: string
          created_at?: string
          id?: string
          metadata?: Json
          ordem?: number
          tipo?: string
          titulo?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_sections_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "bncc_habilidades"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lesson_sections_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lesson_sections_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional_missoes"
            referencedColumns: ["codigo_bncc"]
          },
        ]
      }
      lesson_steps: {
        Row: {
          created_at: string | null
          display_text: string | null
          elements: Json | null
          id: string
          interaction: Json | null
          lesson_id: string | null
          mascot: string
          order_index: number
          phase: string
          speech_text: string
          step_id_internal: string
          type: string
        }
        Insert: {
          created_at?: string | null
          display_text?: string | null
          elements?: Json | null
          id?: string
          interaction?: Json | null
          lesson_id?: string | null
          mascot: string
          order_index: number
          phase: string
          speech_text: string
          step_id_internal: string
          type: string
        }
        Update: {
          created_at?: string | null
          display_text?: string | null
          elements?: Json | null
          id?: string
          interaction?: Json | null
          lesson_id?: string | null
          mascot?: string
          order_index?: number
          phase?: string
          speech_text?: string
          step_id_internal?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_steps_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons_legacy"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_versions: {
        Row: {
          ano: string | null
          author: string | null
          change_reason: string | null
          codigo_bncc: string
          created_at: string
          disciplina: string | null
          draft_id: string | null
          id: string
          is_current: boolean
          lesson_id: string | null
          payload: Json
          published_at: string
          reviewer: string | null
          titulo: string | null
          updated_at: string
          version: number
        }
        Insert: {
          ano?: string | null
          author?: string | null
          change_reason?: string | null
          codigo_bncc: string
          created_at?: string
          disciplina?: string | null
          draft_id?: string | null
          id?: string
          is_current?: boolean
          lesson_id?: string | null
          payload: Json
          published_at?: string
          reviewer?: string | null
          titulo?: string | null
          updated_at?: string
          version: number
        }
        Update: {
          ano?: string | null
          author?: string | null
          change_reason?: string | null
          codigo_bncc?: string
          created_at?: string
          disciplina?: string | null
          draft_id?: string | null
          id?: string
          is_current?: boolean
          lesson_id?: string | null
          payload?: Json
          published_at?: string
          reviewer?: string | null
          titulo?: string | null
          updated_at?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "lesson_versions_draft_id_fkey"
            columns: ["draft_id"]
            isOneToOne: false
            referencedRelation: "lesson_drafts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_versions_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lesson_content"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          ano: string
          codigo_bncc: string
          conteudo_json: Json
          contextualizacao: string
          created_at: string
          disciplina: string
          etapa: string
          explicacao: string
          id: string
          introducao: string
          missao: string
          nivel: string
          objetivo: string
          resumo: string
          tempo_estimado: number
          titulo: string
          updated_at: string
        }
        Insert: {
          ano: string
          codigo_bncc: string
          conteudo_json?: Json
          contextualizacao?: string
          created_at?: string
          disciplina: string
          etapa: string
          explicacao?: string
          id?: string
          introducao?: string
          missao?: string
          nivel?: string
          objetivo?: string
          resumo?: string
          tempo_estimado?: number
          titulo: string
          updated_at?: string
        }
        Update: {
          ano?: string
          codigo_bncc?: string
          conteudo_json?: Json
          contextualizacao?: string
          created_at?: string
          disciplina?: string
          etapa?: string
          explicacao?: string
          id?: string
          introducao?: string
          missao?: string
          nivel?: string
          objetivo?: string
          resumo?: string
          tempo_estimado?: number
          titulo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lessons_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: true
            referencedRelation: "bncc_habilidades"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lessons_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: true
            referencedRelation: "vw_biblioteca_nacional"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "lessons_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: true
            referencedRelation: "vw_biblioteca_nacional_missoes"
            referencedColumns: ["codigo_bncc"]
          },
        ]
      }
      lessons_legacy: {
        Row: {
          bncc_field: string | null
          category: string
          created_at: string | null
          id: string
          skill_bncc: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          bncc_field?: string | null
          category: string
          created_at?: string | null
          id?: string
          skill_bncc?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          bncc_field?: string | null
          category?: string
          created_at?: string | null
          id?: string
          skill_bncc?: string | null
          title?: string
          updated_at?: string | null
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
      mastery_records: {
        Row: {
          attempts: number
          bncc_code: string
          child_id: string | null
          created_at: string
          id: string
          last_attempt_at: string | null
          score: number
          status: string
          template_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          attempts?: number
          bncc_code: string
          child_id?: string | null
          created_at?: string
          id?: string
          last_attempt_at?: string | null
          score?: number
          status?: string
          template_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          attempts?: number
          bncc_code?: string
          child_id?: string | null
          created_at?: string
          id?: string
          last_attempt_at?: string | null
          score?: number
          status?: string
          template_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mastery_records_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "pedagogical_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      missoes_pendentes: {
        Row: {
          codigo_bncc: string
          created_at: string
          id: string
          primeira_tentativa_em: string
          tentativas: number
          ultima_crianca: string | null
          ultima_tentativa_em: string
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          created_at?: string
          id?: string
          primeira_tentativa_em?: string
          tentativas?: number
          ultima_crianca?: string | null
          ultima_tentativa_em?: string
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          created_at?: string
          id?: string
          primeira_tentativa_em?: string
          tentativas?: number
          ultima_crianca?: string | null
          ultima_tentativa_em?: string
          updated_at?: string
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
      parental_consents: {
        Row: {
          accepted_at: string
          created_at: string
          id: string
          ip_address: string | null
          revocation_reason: string | null
          revoked_at: string | null
          user_agent: string | null
          user_id: string
          version: string
        }
        Insert: {
          accepted_at?: string
          created_at?: string
          id?: string
          ip_address?: string | null
          revocation_reason?: string | null
          revoked_at?: string | null
          user_agent?: string | null
          user_id: string
          version: string
        }
        Update: {
          accepted_at?: string
          created_at?: string
          id?: string
          ip_address?: string | null
          revocation_reason?: string | null
          revoked_at?: string | null
          user_agent?: string | null
          user_id?: string
          version?: string
        }
        Relationships: []
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
      pedagogical_lessons_cache: {
        Row: {
          bncc_code: string
          created_at: string
          id: string
          lesson: Json
          template_id: string | null
          updated_at: string
          version: number
        }
        Insert: {
          bncc_code: string
          created_at?: string
          id?: string
          lesson: Json
          template_id?: string | null
          updated_at?: string
          version?: number
        }
        Update: {
          bncc_code?: string
          created_at?: string
          id?: string
          lesson?: Json
          template_id?: string | null
          updated_at?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "pedagogical_lessons_cache_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "pedagogical_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      pedagogical_templates: {
        Row: {
          avaliacao: Json
          created_at: string
          desafio: Json
          disciplina: string
          erros_comuns: Json
          exemplos: Json
          exercicios: Json
          id: string
          metodo: string
          name: string
          pratica_guiada: Json
          revisao: Json
          sequencia_didatica: Json
          serie: string | null
          slug: string
          tags: string[]
          updated_at: string
        }
        Insert: {
          avaliacao?: Json
          created_at?: string
          desafio?: Json
          disciplina: string
          erros_comuns?: Json
          exemplos?: Json
          exercicios?: Json
          id?: string
          metodo: string
          name: string
          pratica_guiada?: Json
          revisao?: Json
          sequencia_didatica?: Json
          serie?: string | null
          slug: string
          tags?: string[]
          updated_at?: string
        }
        Update: {
          avaliacao?: Json
          created_at?: string
          desafio?: Json
          disciplina?: string
          erros_comuns?: Json
          exemplos?: Json
          exercicios?: Json
          id?: string
          metodo?: string
          name?: string
          pratica_guiada?: Json
          revisao?: Json
          sequencia_didatica?: Json
          serie?: string | null
          slug?: string
          tags?: string[]
          updated_at?: string
        }
        Relationships: []
      }
      pei_aulas: {
        Row: {
          atividades: Json
          bncc_codigos: string[]
          child_id: string
          concluida_em: string | null
          created_at: string
          data_prevista: string
          desempenho: Json | null
          id: string
          objetivo: string | null
          ordem: number
          plano_id: string
          status: string
          tempo_total_min: number
          titulo: string
          updated_at: string
        }
        Insert: {
          atividades?: Json
          bncc_codigos?: string[]
          child_id: string
          concluida_em?: string | null
          created_at?: string
          data_prevista: string
          desempenho?: Json | null
          id?: string
          objetivo?: string | null
          ordem: number
          plano_id: string
          status?: string
          tempo_total_min?: number
          titulo: string
          updated_at?: string
        }
        Update: {
          atividades?: Json
          bncc_codigos?: string[]
          child_id?: string
          concluida_em?: string | null
          created_at?: string
          data_prevista?: string
          desempenho?: Json | null
          id?: string
          objetivo?: string | null
          ordem?: number
          plano_id?: string
          status?: string
          tempo_total_min?: number
          titulo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pei_aulas_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pei_aulas_plano_id_fkey"
            columns: ["plano_id"]
            isOneToOne: false
            referencedRelation: "pei_planos"
            referencedColumns: ["id"]
          },
        ]
      }
      pei_planos: {
        Row: {
          anamnese_id: string | null
          aulas_concluidas: number
          child_id: string
          created_at: string
          id: string
          perfil_snapshot: Json
          status: string
          tempo_aula_min: number
          total_aulas: number
          trimestre_fim: string
          trimestre_inicio: string
          updated_at: string
        }
        Insert: {
          anamnese_id?: string | null
          aulas_concluidas?: number
          child_id: string
          created_at?: string
          id?: string
          perfil_snapshot?: Json
          status?: string
          tempo_aula_min?: number
          total_aulas?: number
          trimestre_fim: string
          trimestre_inicio: string
          updated_at?: string
        }
        Update: {
          anamnese_id?: string | null
          aulas_concluidas?: number
          child_id?: string
          created_at?: string
          id?: string
          perfil_snapshot?: Json
          status?: string
          tempo_aula_min?: number
          total_aulas?: number
          trimestre_fim?: string
          trimestre_inicio?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "pei_planos_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      pei_relatorios: {
        Row: {
          child_id: string
          created_at: string
          evolucao: Json
          id: string
          periodo_fim: string
          periodo_inicio: string
          plano_id: string
          pontos_atencao: string[]
          pontos_fortes: string[]
          recomendacoes: string | null
          resumo: Json
          updated_at: string
          visualizado_em: string | null
        }
        Insert: {
          child_id: string
          created_at?: string
          evolucao?: Json
          id?: string
          periodo_fim: string
          periodo_inicio: string
          plano_id: string
          pontos_atencao?: string[]
          pontos_fortes?: string[]
          recomendacoes?: string | null
          resumo?: Json
          updated_at?: string
          visualizado_em?: string | null
        }
        Update: {
          child_id?: string
          created_at?: string
          evolucao?: Json
          id?: string
          periodo_fim?: string
          periodo_inicio?: string
          plano_id?: string
          pontos_atencao?: string[]
          pontos_fortes?: string[]
          recomendacoes?: string | null
          resumo?: Json
          updated_at?: string
          visualizado_em?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pei_relatorios_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pei_relatorios_plano_id_fkey"
            columns: ["plano_id"]
            isOneToOne: false
            referencedRelation: "pei_planos"
            referencedColumns: ["id"]
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
          {
            foreignKeyName: "progresso_aluno_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "progresso_aluno_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional_missoes"
            referencedColumns: ["codigo_bncc"]
          },
        ]
      }
      progresso_aluno_aula: {
        Row: {
          acertos: number
          aula_id: string
          child_id: string
          concluida_em: string | null
          created_at: string
          dominio: number
          erros: number
          id: string
          tentativas: number
          ultima_tentativa_em: string | null
          updated_at: string
        }
        Insert: {
          acertos?: number
          aula_id: string
          child_id: string
          concluida_em?: string | null
          created_at?: string
          dominio?: number
          erros?: number
          id?: string
          tentativas?: number
          ultima_tentativa_em?: string | null
          updated_at?: string
        }
        Update: {
          acertos?: number
          aula_id?: string
          child_id?: string
          concluida_em?: string | null
          created_at?: string
          dominio?: number
          erros?: number
          id?: string
          tentativas?: number
          ultima_tentativa_em?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "progresso_aluno_aula_aula_id_fkey"
            columns: ["aula_id"]
            isOneToOne: false
            referencedRelation: "aulas_bncc"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "progresso_aluno_aula_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      push_subscriptions: {
        Row: {
          auth: string
          child_id: string | null
          created_at: string
          endpoint: string
          id: string
          last_sent_at: string | null
          p256dh: string
          updated_at: string
          user_agent: string | null
          user_id: string
        }
        Insert: {
          auth: string
          child_id?: string | null
          created_at?: string
          endpoint: string
          id?: string
          last_sent_at?: string | null
          p256dh: string
          updated_at?: string
          user_agent?: string | null
          user_id: string
        }
        Update: {
          auth?: string
          child_id?: string | null
          created_at?: string
          endpoint?: string
          id?: string
          last_sent_at?: string | null
          p256dh?: string
          updated_at?: string
          user_agent?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "push_subscriptions_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_atividades_relacionadas: {
        Row: {
          atividade_id: string
          created_at: string
          habilidade_id: string
          id: string
          modulo: string | null
          ordem: number
          rota: string | null
          titulo: string | null
          updated_at: string
        }
        Insert: {
          atividade_id: string
          created_at?: string
          habilidade_id: string
          id?: string
          modulo?: string | null
          ordem?: number
          rota?: string | null
          titulo?: string | null
          updated_at?: string
        }
        Update: {
          atividade_id?: string
          created_at?: string
          habilidade_id?: string
          id?: string
          modulo?: string | null
          ordem?: number
          rota?: string | null
          titulo?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_atividades_relacionadas_habilidade_id_fkey"
            columns: ["habilidade_id"]
            isOneToOne: false
            referencedRelation: "rb_habilidades"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_aulas: {
        Row: {
          created_at: string
          faixa_etaria: string | null
          habilidade_id: string
          id: string
          imagem_capa_url: string | null
          nivel: string
          objetivo: string | null
          ordem: number
          titulo: string
          updated_at: string
          video_url: string | null
        }
        Insert: {
          created_at?: string
          faixa_etaria?: string | null
          habilidade_id: string
          id?: string
          imagem_capa_url?: string | null
          nivel?: string
          objetivo?: string | null
          ordem?: number
          titulo: string
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          created_at?: string
          faixa_etaria?: string | null
          habilidade_id?: string
          id?: string
          imagem_capa_url?: string | null
          nivel?: string
          objetivo?: string | null
          ordem?: number
          titulo?: string
          updated_at?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rb_aulas_habilidade_id_fkey"
            columns: ["habilidade_id"]
            isOneToOne: false
            referencedRelation: "rb_habilidades"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_aulas_ia: {
        Row: {
          area: string
          conteudo: Json
          created_at: string
          id: string
          idade: number | null
          semana_numero: number
          serie: string | null
          tema: string
        }
        Insert: {
          area: string
          conteudo: Json
          created_at?: string
          id?: string
          idade?: number | null
          semana_numero: number
          serie?: string | null
          tema: string
        }
        Update: {
          area?: string
          conteudo?: Json
          created_at?: string
          id?: string
          idade?: number | null
          semana_numero?: number
          serie?: string | null
          tema?: string
        }
        Relationships: []
      }
      rb_categorias: {
        Row: {
          cor: string | null
          created_at: string
          descricao: string | null
          icone: string | null
          id: string
          nome: string
          ordem: number
          updated_at: string
        }
        Insert: {
          cor?: string | null
          created_at?: string
          descricao?: string | null
          icone?: string | null
          id?: string
          nome: string
          ordem?: number
          updated_at?: string
        }
        Update: {
          cor?: string | null
          created_at?: string
          descricao?: string | null
          icone?: string | null
          id?: string
          nome?: string
          ordem?: number
          updated_at?: string
        }
        Relationships: []
      }
      rb_dicas: {
        Row: {
          created_at: string
          habilidade_id: string
          id: string
          ordem: number
          publico: string
          texto: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          habilidade_id: string
          id?: string
          ordem?: number
          publico?: string
          texto: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          habilidade_id?: string
          id?: string
          ordem?: number
          publico?: string
          texto?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_dicas_habilidade_id_fkey"
            columns: ["habilidade_id"]
            isOneToOne: false
            referencedRelation: "rb_habilidades"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_dominio_habilidade: {
        Row: {
          created_at: string
          habilidade_id: string
          id: string
          observacoes: string | null
          percentual: number
          status: string
          ultima_atualizacao: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          habilidade_id: string
          id?: string
          observacoes?: string | null
          percentual?: number
          status?: string
          ultima_atualizacao?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          habilidade_id?: string
          id?: string
          observacoes?: string | null
          percentual?: number
          status?: string
          ultima_atualizacao?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_dominio_habilidade_habilidade_id_fkey"
            columns: ["habilidade_id"]
            isOneToOne: false
            referencedRelation: "rb_habilidades"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_habilidade_prerequisitos: {
        Row: {
          created_at: string
          habilidade_id: string
          pre_requisito_id: string
        }
        Insert: {
          created_at?: string
          habilidade_id: string
          pre_requisito_id: string
        }
        Update: {
          created_at?: string
          habilidade_id?: string
          pre_requisito_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_habilidade_prerequisitos_habilidade_id_fkey"
            columns: ["habilidade_id"]
            isOneToOne: false
            referencedRelation: "rb_habilidades"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rb_habilidade_prerequisitos_pre_requisito_id_fkey"
            columns: ["pre_requisito_id"]
            isOneToOne: false
            referencedRelation: "rb_habilidades"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_habilidade_relacionadas: {
        Row: {
          created_at: string
          habilidade_id: string
          relacionada_id: string
        }
        Insert: {
          created_at?: string
          habilidade_id: string
          relacionada_id: string
        }
        Update: {
          created_at?: string
          habilidade_id?: string
          relacionada_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_habilidade_relacionadas_habilidade_id_fkey"
            columns: ["habilidade_id"]
            isOneToOne: false
            referencedRelation: "rb_habilidades"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rb_habilidade_relacionadas_relacionada_id_fkey"
            columns: ["relacionada_id"]
            isOneToOne: false
            referencedRelation: "rb_habilidades"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_habilidade_tags: {
        Row: {
          created_at: string
          habilidade_id: string
          tag_id: string
        }
        Insert: {
          created_at?: string
          habilidade_id: string
          tag_id: string
        }
        Update: {
          created_at?: string
          habilidade_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_habilidade_tags_habilidade_id_fkey"
            columns: ["habilidade_id"]
            isOneToOne: false
            referencedRelation: "rb_habilidades"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rb_habilidade_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "rb_tags"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_habilidades: {
        Row: {
          ano_escolar: string | null
          atividades_recomendadas: string | null
          categoria_id: string
          como_avaliar_evolucao: string | null
          como_ensinar: string | null
          como_identificar: string | null
          created_at: string
          descricao: string | null
          dicas_familia: string | null
          dicas_professores: string | null
          exemplos_praticos: string | null
          faixa_etaria: string | null
          id: string
          nivel_dificuldade: string | null
          nome: string
          o_que_e: string | null
          ordem: number
          palavras_chave: string[]
          por_que_importante: string | null
          proximo_passo: string | null
          subcategoria: string | null
          updated_at: string
        }
        Insert: {
          ano_escolar?: string | null
          atividades_recomendadas?: string | null
          categoria_id: string
          como_avaliar_evolucao?: string | null
          como_ensinar?: string | null
          como_identificar?: string | null
          created_at?: string
          descricao?: string | null
          dicas_familia?: string | null
          dicas_professores?: string | null
          exemplos_praticos?: string | null
          faixa_etaria?: string | null
          id?: string
          nivel_dificuldade?: string | null
          nome: string
          o_que_e?: string | null
          ordem?: number
          palavras_chave?: string[]
          por_que_importante?: string | null
          proximo_passo?: string | null
          subcategoria?: string | null
          updated_at?: string
        }
        Update: {
          ano_escolar?: string | null
          atividades_recomendadas?: string | null
          categoria_id?: string
          como_avaliar_evolucao?: string | null
          como_ensinar?: string | null
          como_identificar?: string | null
          created_at?: string
          descricao?: string | null
          dicas_familia?: string | null
          dicas_professores?: string | null
          exemplos_praticos?: string | null
          faixa_etaria?: string | null
          id?: string
          nivel_dificuldade?: string | null
          nome?: string
          o_que_e?: string | null
          ordem?: number
          palavras_chave?: string[]
          por_que_importante?: string | null
          proximo_passo?: string | null
          subcategoria?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_habilidades_categoria_id_fkey"
            columns: ["categoria_id"]
            isOneToOne: false
            referencedRelation: "rb_categorias"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_indicadores: {
        Row: {
          created_at: string
          descricao: string | null
          habilidade_id: string
          id: string
          ordem: number
          texto: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          descricao?: string | null
          habilidade_id: string
          id?: string
          ordem?: number
          texto: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          descricao?: string | null
          habilidade_id?: string
          id?: string
          ordem?: number
          texto?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_indicadores_habilidade_id_fkey"
            columns: ["habilidade_id"]
            isOneToOne: false
            referencedRelation: "rb_habilidades"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_midia_vinculos: {
        Row: {
          created_at: string
          entidade_id: string
          entidade_tipo: string
          id: string
          midia_id: string
          ordem: number
        }
        Insert: {
          created_at?: string
          entidade_id: string
          entidade_tipo: string
          id?: string
          midia_id: string
          ordem?: number
        }
        Update: {
          created_at?: string
          entidade_id?: string
          entidade_tipo?: string
          id?: string
          midia_id?: string
          ordem?: number
        }
        Relationships: [
          {
            foreignKeyName: "rb_midia_vinculos_midia_id_fkey"
            columns: ["midia_id"]
            isOneToOne: false
            referencedRelation: "rb_midias"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_midias: {
        Row: {
          altura: number | null
          categoria: string | null
          created_at: string
          descricao: string | null
          duracao_seg: number | null
          id: string
          largura: number | null
          tags: string[]
          tamanho_bytes: number | null
          thumbnail_url: string | null
          tipo: string
          titulo: string | null
          updated_at: string
          url: string
        }
        Insert: {
          altura?: number | null
          categoria?: string | null
          created_at?: string
          descricao?: string | null
          duracao_seg?: number | null
          id?: string
          largura?: number | null
          tags?: string[]
          tamanho_bytes?: number | null
          thumbnail_url?: string | null
          tipo: string
          titulo?: string | null
          updated_at?: string
          url: string
        }
        Update: {
          altura?: number | null
          categoria?: string | null
          created_at?: string
          descricao?: string | null
          duracao_seg?: number | null
          id?: string
          largura?: number | null
          tags?: string[]
          tamanho_bytes?: number | null
          thumbnail_url?: string | null
          tipo?: string
          titulo?: string | null
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      rb_orientacoes_familia: {
        Row: {
          como_ajudar: string | null
          created_at: string
          dicas_praticas: Json
          erros_comuns: Json
          habilidade_id: string
          id: string
          materiais: Json
          sinais_progresso: Json
          tempo_recomendado: string | null
          updated_at: string
        }
        Insert: {
          como_ajudar?: string | null
          created_at?: string
          dicas_praticas?: Json
          erros_comuns?: Json
          habilidade_id: string
          id?: string
          materiais?: Json
          sinais_progresso?: Json
          tempo_recomendado?: string | null
          updated_at?: string
        }
        Update: {
          como_ajudar?: string | null
          created_at?: string
          dicas_praticas?: Json
          erros_comuns?: Json
          habilidade_id?: string
          id?: string
          materiais?: Json
          sinais_progresso?: Json
          tempo_recomendado?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_orientacoes_familia_habilidade_id_fkey"
            columns: ["habilidade_id"]
            isOneToOne: true
            referencedRelation: "rb_habilidades"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_paginas_aula: {
        Row: {
          aula_id: string
          conteudo: Json
          created_at: string
          id: string
          ordem: number
          tipo: string
          titulo: string | null
          updated_at: string
        }
        Insert: {
          aula_id: string
          conteudo?: Json
          created_at?: string
          id?: string
          ordem?: number
          tipo?: string
          titulo?: string | null
          updated_at?: string
        }
        Update: {
          aula_id?: string
          conteudo?: Json
          created_at?: string
          id?: string
          ordem?: number
          tipo?: string
          titulo?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_paginas_aula_aula_id_fkey"
            columns: ["aula_id"]
            isOneToOne: false
            referencedRelation: "rb_aulas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rb_paginas_aula_aula_id_fkey"
            columns: ["aula_id"]
            isOneToOne: false
            referencedRelation: "rb_aulas_premium_status"
            referencedColumns: ["aula_id"]
          },
        ]
      }
      rb_planos_intervencao: {
        Row: {
          atividades_sugeridas: Json
          aulas_concluidas: Json
          created_at: string
          dificuldade: string
          habilidade_id: string
          id: string
          objetivo: string | null
          observacoes: string | null
          progresso: number
          sequencia_aulas: Json
          status: string
          tempo_estimado_min: number
          updated_at: string
          user_id: string
        }
        Insert: {
          atividades_sugeridas?: Json
          aulas_concluidas?: Json
          created_at?: string
          dificuldade: string
          habilidade_id: string
          id?: string
          objetivo?: string | null
          observacoes?: string | null
          progresso?: number
          sequencia_aulas?: Json
          status?: string
          tempo_estimado_min?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          atividades_sugeridas?: Json
          aulas_concluidas?: Json
          created_at?: string
          dificuldade?: string
          habilidade_id?: string
          id?: string
          objetivo?: string | null
          observacoes?: string | null
          progresso?: number
          sequencia_aulas?: Json
          status?: string
          tempo_estimado_min?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_planos_intervencao_habilidade_id_fkey"
            columns: ["habilidade_id"]
            isOneToOne: false
            referencedRelation: "rb_habilidades"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_planos_semanais: {
        Row: {
          area: string
          created_at: string
          id: string
          progresso: number
          semana_atual: number
          semanas: Json
          semanas_concluidas: Json
          status: string
          titulo: string
          updated_at: string
          user_id: string
        }
        Insert: {
          area: string
          created_at?: string
          id?: string
          progresso?: number
          semana_atual?: number
          semanas?: Json
          semanas_concluidas?: Json
          status?: string
          titulo: string
          updated_at?: string
          user_id: string
        }
        Update: {
          area?: string
          created_at?: string
          id?: string
          progresso?: number
          semana_atual?: number
          semanas?: Json
          semanas_concluidas?: Json
          status?: string
          titulo?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      rb_progresso_indicadores: {
        Row: {
          atingido: boolean
          child_id: string
          created_at: string
          id: string
          indicador_id: string
          marcado_em: string | null
          observacao: string | null
          updated_at: string
        }
        Insert: {
          atingido?: boolean
          child_id: string
          created_at?: string
          id?: string
          indicador_id: string
          marcado_em?: string | null
          observacao?: string | null
          updated_at?: string
        }
        Update: {
          atingido?: boolean
          child_id?: string
          created_at?: string
          id?: string
          indicador_id?: string
          marcado_em?: string | null
          observacao?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_progresso_indicadores_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rb_progresso_indicadores_indicador_id_fkey"
            columns: ["indicador_id"]
            isOneToOne: false
            referencedRelation: "rb_indicadores"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_recursos_externos: {
        Row: {
          conteudo: string | null
          created_at: string
          descricao: string | null
          expires_at: string
          fonte: string
          habilidade_id: string | null
          id: string
          idioma: string | null
          ordem: number | null
          query_normalizada: string
          thumbnail: string | null
          titulo: string
          url: string
        }
        Insert: {
          conteudo?: string | null
          created_at?: string
          descricao?: string | null
          expires_at?: string
          fonte: string
          habilidade_id?: string | null
          id?: string
          idioma?: string | null
          ordem?: number | null
          query_normalizada: string
          thumbnail?: string | null
          titulo: string
          url: string
        }
        Update: {
          conteudo?: string | null
          created_at?: string
          descricao?: string | null
          expires_at?: string
          fonte?: string
          habilidade_id?: string | null
          id?: string
          idioma?: string | null
          ordem?: number | null
          query_normalizada?: string
          thumbnail?: string | null
          titulo?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_recursos_externos_habilidade_id_fkey"
            columns: ["habilidade_id"]
            isOneToOne: false
            referencedRelation: "rb_habilidades"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_sinais_alerta: {
        Row: {
          created_at: string
          descricao: string
          habilidade_id: string
          id: string
          severidade: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          descricao: string
          habilidade_id: string
          id?: string
          severidade?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          descricao?: string
          habilidade_id?: string
          id?: string
          severidade?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_sinais_alerta_habilidade_id_fkey"
            columns: ["habilidade_id"]
            isOneToOne: false
            referencedRelation: "rb_habilidades"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_tags: {
        Row: {
          created_at: string
          id: string
          nome: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          nome: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          nome?: string
          slug?: string
        }
        Relationships: []
      }
      rb_trabalhos: {
        Row: {
          blocos: Json
          child_id: string
          concluido: boolean
          created_at: string
          data_entrega: string | null
          fontes: Json
          id: string
          instrucoes_professor: string | null
          materia: string | null
          tema: string
          titulo: string
          updated_at: string
        }
        Insert: {
          blocos?: Json
          child_id: string
          concluido?: boolean
          created_at?: string
          data_entrega?: string | null
          fontes?: Json
          id?: string
          instrucoes_professor?: string | null
          materia?: string | null
          tema: string
          titulo: string
          updated_at?: string
        }
        Update: {
          blocos?: Json
          child_id?: string
          concluido?: boolean
          created_at?: string
          data_entrega?: string | null
          fontes?: Json
          id?: string
          instrucoes_professor?: string | null
          materia?: string | null
          tema?: string
          titulo?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_trabalhos_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      rb_trilha_anual: {
        Row: {
          ano: number
          aulas: Json | null
          aulas_geradas: boolean
          bimestre: number | null
          child_id: string
          componente: string
          created_at: string
          habilidade_codigo: string
          habilidade_descricao: string
          id: string
          objeto_conhecimento: string | null
          ordem: number | null
          status: string
          unidade_tematica: string | null
          updated_at: string
        }
        Insert: {
          ano: number
          aulas?: Json | null
          aulas_geradas?: boolean
          bimestre?: number | null
          child_id: string
          componente: string
          created_at?: string
          habilidade_codigo: string
          habilidade_descricao: string
          id?: string
          objeto_conhecimento?: string | null
          ordem?: number | null
          status?: string
          unidade_tematica?: string | null
          updated_at?: string
        }
        Update: {
          ano?: number
          aulas?: Json | null
          aulas_geradas?: boolean
          bimestre?: number | null
          child_id?: string
          componente?: string
          created_at?: string
          habilidade_codigo?: string
          habilidade_descricao?: string
          id?: string
          objeto_conhecimento?: string | null
          ordem?: number | null
          status?: string
          unidade_tematica?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rb_trilha_anual_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      recovery_lessons: {
        Row: {
          atividade_simplificada: Json | null
          aula_simplificada: Json | null
          codigo_bncc: string
          created_at: string
          explicacao_alternativa: Json | null
          id: string
          nova_revisao: Json | null
          novo_exemplo: Json | null
          novo_quiz: Json | null
          updated_at: string
        }
        Insert: {
          atividade_simplificada?: Json | null
          aula_simplificada?: Json | null
          codigo_bncc: string
          created_at?: string
          explicacao_alternativa?: Json | null
          id?: string
          nova_revisao?: Json | null
          novo_exemplo?: Json | null
          novo_quiz?: Json | null
          updated_at?: string
        }
        Update: {
          atividade_simplificada?: Json | null
          aula_simplificada?: Json | null
          codigo_bncc?: string
          created_at?: string
          explicacao_alternativa?: Json | null
          id?: string
          nova_revisao?: Json | null
          novo_exemplo?: Json | null
          novo_quiz?: Json | null
          updated_at?: string
        }
        Relationships: []
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
      stories: {
        Row: {
          age_max: number
          age_min: number
          ai_generated: boolean | null
          cover_image: string | null
          created_at: string
          description: string | null
          difficulty: number
          id: string
          reading_level: string
          theme: string
          title: string
          updated_at: string
        }
        Insert: {
          age_max?: number
          age_min?: number
          ai_generated?: boolean | null
          cover_image?: string | null
          created_at?: string
          description?: string | null
          difficulty?: number
          id?: string
          reading_level?: string
          theme: string
          title: string
          updated_at?: string
        }
        Update: {
          age_max?: number
          age_min?: number
          ai_generated?: boolean | null
          cover_image?: string | null
          created_at?: string
          description?: string | null
          difficulty?: number
          id?: string
          reading_level?: string
          theme?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      story_pages: {
        Row: {
          audio_url: string | null
          created_at: string
          highlight_words: Json | null
          id: string
          image_url: string | null
          page_number: number
          story_id: string
          text: string
        }
        Insert: {
          audio_url?: string | null
          created_at?: string
          highlight_words?: Json | null
          id?: string
          image_url?: string | null
          page_number: number
          story_id: string
          text: string
        }
        Update: {
          audio_url?: string | null
          created_at?: string
          highlight_words?: Json | null
          id?: string
          image_url?: string | null
          page_number?: number
          story_id?: string
          text?: string
        }
        Relationships: [
          {
            foreignKeyName: "story_pages_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "stories"
            referencedColumns: ["id"]
          },
        ]
      }
      story_progress: {
        Row: {
          child_id: string
          completed: boolean | null
          completed_at: string | null
          created_at: string
          current_page: number | null
          id: string
          score: number | null
          story_id: string
          updated_at: string
        }
        Insert: {
          child_id: string
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string
          current_page?: number | null
          id?: string
          score?: number | null
          story_id: string
          updated_at?: string
        }
        Update: {
          child_id?: string
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string
          current_page?: number | null
          id?: string
          score?: number | null
          story_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "story_progress_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "story_progress_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "stories"
            referencedColumns: ["id"]
          },
        ]
      }
      story_questions: {
        Row: {
          correct_answer: string
          created_at: string
          difficulty: number
          id: string
          option_a: string
          option_b: string
          option_c: string
          question: string
          story_id: string
        }
        Insert: {
          correct_answer: string
          created_at?: string
          difficulty?: number
          id?: string
          option_a: string
          option_b: string
          option_c: string
          question: string
          story_id: string
        }
        Update: {
          correct_answer?: string
          created_at?: string
          difficulty?: number
          id?: string
          option_a?: string
          option_b?: string
          option_c?: string
          question?: string
          story_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "story_questions_story_id_fkey"
            columns: ["story_id"]
            isOneToOne: false
            referencedRelation: "stories"
            referencedColumns: ["id"]
          },
        ]
      }
      student_progress: {
        Row: {
          acertos: number
          atividades_concluidas: number
          child_id: string
          codigo_bncc: string | null
          created_at: string
          erros: number
          habilidades_dominadas: string[]
          habilidades_pendentes: string[]
          id: string
          metadata: Json
          nota: number
          tempo_estudado_seg: number
          updated_at: string
          user_id: string
        }
        Insert: {
          acertos?: number
          atividades_concluidas?: number
          child_id: string
          codigo_bncc?: string | null
          created_at?: string
          erros?: number
          habilidades_dominadas?: string[]
          habilidades_pendentes?: string[]
          id?: string
          metadata?: Json
          nota?: number
          tempo_estudado_seg?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          acertos?: number
          atividades_concluidas?: number
          child_id?: string
          codigo_bncc?: string | null
          created_at?: string
          erros?: number
          habilidades_dominadas?: string[]
          habilidades_pendentes?: string[]
          id?: string
          metadata?: Json
          nota?: number
          tempo_estudado_seg?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_progress_child_id_fkey"
            columns: ["child_id"]
            isOneToOne: false
            referencedRelation: "children"
            referencedColumns: ["id"]
          },
        ]
      }
      study_agenda: {
        Row: {
          category: string | null
          child_id: string
          completed: boolean | null
          created_at: string
          description: string | null
          exam_date: string | null
          id: string
          time_of_day: string | null
          topic: string
          type: string | null
          updated_at: string
        }
        Insert: {
          category?: string | null
          child_id: string
          completed?: boolean | null
          created_at?: string
          description?: string | null
          exam_date?: string | null
          id?: string
          time_of_day?: string | null
          topic: string
          type?: string | null
          updated_at?: string
        }
        Update: {
          category?: string | null
          child_id?: string
          completed?: boolean | null
          created_at?: string
          description?: string | null
          exam_date?: string | null
          id?: string
          time_of_day?: string | null
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
      teacher_lesson_plans: {
        Row: {
          adaptacoes: Json | null
          avaliacao: Json | null
          codigo_bncc: string
          competencias: Json | null
          created_at: string
          desenvolvimento: Json | null
          fechamento: Json | null
          habilidades: Json | null
          id: string
          metodologia: Json | null
          objetivos: Json | null
          recursos: Json | null
          updated_at: string
        }
        Insert: {
          adaptacoes?: Json | null
          avaliacao?: Json | null
          codigo_bncc: string
          competencias?: Json | null
          created_at?: string
          desenvolvimento?: Json | null
          fechamento?: Json | null
          habilidades?: Json | null
          id?: string
          metodologia?: Json | null
          objetivos?: Json | null
          recursos?: Json | null
          updated_at?: string
        }
        Update: {
          adaptacoes?: Json | null
          avaliacao?: Json | null
          codigo_bncc?: string
          competencias?: Json | null
          created_at?: string
          desenvolvimento?: Json | null
          fechamento?: Json | null
          habilidades?: Json | null
          id?: string
          metodologia?: Json | null
          objetivos?: Json | null
          recursos?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      teaching_strategies: {
        Row: {
          codigo_bncc: string
          created_at: string
          descricao: string
          id: string
          kind: Database["public"]["Enums"]["teaching_strategy_kind"]
          materiais: Json
          nivel: string | null
          observacoes: string | null
          passos: Json
          titulo: string
          updated_at: string
        }
        Insert: {
          codigo_bncc: string
          created_at?: string
          descricao: string
          id?: string
          kind: Database["public"]["Enums"]["teaching_strategy_kind"]
          materiais?: Json
          nivel?: string | null
          observacoes?: string | null
          passos?: Json
          titulo: string
          updated_at?: string
        }
        Update: {
          codigo_bncc?: string
          created_at?: string
          descricao?: string
          id?: string
          kind?: Database["public"]["Enums"]["teaching_strategy_kind"]
          materiais?: Json
          nivel?: string | null
          observacoes?: string | null
          passos?: Json
          titulo?: string
          updated_at?: string
        }
        Relationships: []
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
      thematic_units: {
        Row: {
          created_at: string
          descricao: string | null
          disciplina: string
          id: string
          nome: string
          ordem: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          descricao?: string | null
          disciplina: string
          id?: string
          nome: string
          ordem?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          descricao?: string | null
          disciplina?: string
          id?: string
          nome?: string
          ordem?: number | null
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
      trilha_anual: {
        Row: {
          ano: string
          codigo_bncc: string
          created_at: string
          dia: number
          id: string
          ordem_no_dia: number
          semana: number
        }
        Insert: {
          ano: string
          codigo_bncc: string
          created_at?: string
          dia: number
          id?: string
          ordem_no_dia?: number
          semana: number
        }
        Update: {
          ano?: string
          codigo_bncc?: string
          created_at?: string
          dia?: number
          id?: string
          ordem_no_dia?: number
          semana?: number
        }
        Relationships: [
          {
            foreignKeyName: "trilha_anual_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "bncc_habilidades"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "trilha_anual_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional"
            referencedColumns: ["codigo_bncc"]
          },
          {
            foreignKeyName: "trilha_anual_codigo_bncc_fkey"
            columns: ["codigo_bncc"]
            isOneToOne: false
            referencedRelation: "vw_biblioteca_nacional_missoes"
            referencedColumns: ["codigo_bncc"]
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
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      bncc_biblioteca_por_ano: {
        Row: {
          ano: number | null
          componente: string | null
          habilidades: Json | null
          rotulo: string | null
          total_codigos: number | null
        }
        Relationships: []
      }
      rb_aulas_premium_status: {
        Row: {
          aula_id: string | null
          etapas_faltantes: string[] | null
          etapas_obrigatorias: number | null
          etapas_presentes: number | null
          etapas_presentes_list: string[] | null
          habilidade_id: string | null
          is_premium_completa: boolean | null
          pct_premium: number | null
          titulo: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rb_aulas_habilidade_id_fkey"
            columns: ["habilidade_id"]
            isOneToOne: false
            referencedRelation: "rb_habilidades"
            referencedColumns: ["id"]
          },
        ]
      }
      vw_biblioteca_nacional: {
        Row: {
          ano: string | null
          aula_atualizada_em: string | null
          aula_id: string | null
          aula_titulo: string | null
          codigo_bncc: string | null
          disciplina: string | null
          nivel: string | null
          objetivo_habilidade: string | null
          ordem: number | null
          status: string | null
          tem_aula: boolean | null
          titulo_habilidade: string | null
        }
        Relationships: []
      }
      vw_biblioteca_nacional_missoes: {
        Row: {
          ano: string | null
          codigo_bncc: string | null
          disciplina: string | null
          etapa: string | null
          missao_id: string | null
          objetivo: string | null
          objeto_conhecimento: string | null
          status: string | null
          titulo: string | null
          unidade_tematica: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      activate_user_mascot: {
        Args: { p_mascot_id: string }
        Returns: undefined
      }
      add_brilhocoins: {
        Args: { amount: number; child_id: string }
        Returns: undefined
      }
      approve_lesson_draft: { Args: { _draft_id: string }; Returns: string }
      calcular_nivel_dominio: {
        Args: { _desempenho: number; _sessoes_consec: number }
        Returns: Database["public"]["Enums"]["mastery_level"]
      }
      gain_active_mascot_xp: {
        Args: { p_amount: number }
        Returns: {
          leveled_up: boolean
          new_experience: number
          new_level: number
        }[]
      }
      get_auth_user_id: { Args: never; Returns: string }
      grant_first_admin: { Args: never; Returns: string }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      pode_avancar_habilidade: {
        Args: { _child_id: string; _codigo_bncc: string }
        Returns: boolean
      }
      publish_lesson_with_version: {
        Args: { _change_reason?: string; _draft_id: string }
        Returns: {
          lesson_id: string
          version: number
          version_id: string
        }[]
      }
      rb_etapas_faltantes: { Args: { _aula_id: string }; Returns: string[] }
      recomendar_revisoes: {
        Args: { _child_id: string }
        Returns: {
          codigo_bncc: string
          motivo: string
          proxima_revisao: string
          ultimo_desempenho: number
          variacao: number
        }[]
      }
      registrar_conclusao_aula: {
        Args: {
          _child_id: string
          _codigo_bncc: string
          _desempenho: number
          _tipo?: string
        }
        Returns: string
      }
      registrar_missao_pendente: {
        Args: { _child_id?: string; _codigo_bncc: string }
        Returns: undefined
      }
      reset_daily_coins: { Args: never; Returns: undefined }
      restore_lesson_version: {
        Args: { _change_reason?: string; _version_id: string }
        Returns: string
      }
      show_limit: { Args: never; Returns: number }
      show_trgm: { Args: { "": string }; Returns: string[] }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      assessment_kind:
        | "pre_teste"
        | "diagnostica"
        | "formativa"
        | "final"
        | "simulado"
        | "recuperacao"
      bncc_relation_kind:
        | "similar"
        | "anterior"
        | "futuro"
        | "competencia"
        | "objeto_conhecimento"
        | "unidade_tematica"
        | "complementar"
      didactic_level:
        | "muito_facil"
        | "facil"
        | "intermediario"
        | "dificil"
        | "avancado"
      etapa_escolar: "infantil" | "fundamental1" | "fundamental2"
      inclusive_condition:
        | "tea"
        | "tdah"
        | "dislexia"
        | "discalculia"
        | "deficiencia_intelectual"
        | "deficiencia_auditiva"
        | "deficiencia_visual"
        | "altas_habilidades"
      lesson_example_categoria:
        | "cotidiano"
        | "escola"
        | "familia"
        | "brincadeira"
        | "natureza"
        | "ciencia"
        | "matematica"
      lesson_explanation_nivel: "infantil" | "intermediaria" | "detalhada"
      mascot_emotion:
        | "happy"
        | "calm"
        | "sleepy"
        | "excited"
        | "focused"
        | "proud"
      mastery_level:
        | "nao_iniciada"
        | "em_aprendizagem"
        | "parcialmente_dominada"
        | "dominada"
      nivel_pedagogico:
        | "muito_facil"
        | "facil"
        | "medio"
        | "dificil"
        | "avancado"
      teaching_strategy_kind:
        | "visual"
        | "concreta"
        | "jogos"
        | "investigativa"
        | "colaborativa"
        | "auditiva"
        | "cinestesica"
        | "projetos"
        | "resolucao_problemas"
        | "narrativa"
      tipo_player: "early" | "b" | "c" | "legacy"
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
      app_role: ["admin", "moderator", "user"],
      assessment_kind: [
        "pre_teste",
        "diagnostica",
        "formativa",
        "final",
        "simulado",
        "recuperacao",
      ],
      bncc_relation_kind: [
        "similar",
        "anterior",
        "futuro",
        "competencia",
        "objeto_conhecimento",
        "unidade_tematica",
        "complementar",
      ],
      didactic_level: [
        "muito_facil",
        "facil",
        "intermediario",
        "dificil",
        "avancado",
      ],
      etapa_escolar: ["infantil", "fundamental1", "fundamental2"],
      inclusive_condition: [
        "tea",
        "tdah",
        "dislexia",
        "discalculia",
        "deficiencia_intelectual",
        "deficiencia_auditiva",
        "deficiencia_visual",
        "altas_habilidades",
      ],
      lesson_example_categoria: [
        "cotidiano",
        "escola",
        "familia",
        "brincadeira",
        "natureza",
        "ciencia",
        "matematica",
      ],
      lesson_explanation_nivel: ["infantil", "intermediaria", "detalhada"],
      mascot_emotion: [
        "happy",
        "calm",
        "sleepy",
        "excited",
        "focused",
        "proud",
      ],
      mastery_level: [
        "nao_iniciada",
        "em_aprendizagem",
        "parcialmente_dominada",
        "dominada",
      ],
      nivel_pedagogico: [
        "muito_facil",
        "facil",
        "medio",
        "dificil",
        "avancado",
      ],
      teaching_strategy_kind: [
        "visual",
        "concreta",
        "jogos",
        "investigativa",
        "colaborativa",
        "auditiva",
        "cinestesica",
        "projetos",
        "resolucao_problemas",
        "narrativa",
      ],
      tipo_player: ["early", "b", "c", "legacy"],
    },
  },
} as const

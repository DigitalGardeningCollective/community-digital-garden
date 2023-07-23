export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      growth_stage: {
        Row: {
          id: number
          title: string
        }
        Insert: {
          id?: number
          title: string
        }
        Update: {
          id?: number
          title?: string
        }
        Relationships: []
      }
      moderator: {
        Row: {
          avatar_url: string | null
          created_at: string
          id: string
          modified_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          id: string
          modified_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          modified_at?: string | null
        }
        Relationships: []
      }
      piece_type: {
        Row: {
          id: number
          title: string
        }
        Insert: {
          id?: number
          title: string
        }
        Update: {
          id?: number
          title?: string
        }
        Relationships: []
      }
      published_piece: {
        Row: {
          content: string
          cover_url: string | null
          created_at: string
          description: string | null
          growth_stage_id: number
          id: string
          open_to_collab: boolean
          piece_type_id: number
          title: string
          updated_at: string | null
          url_key: string
        }
        Insert: {
          content: string
          cover_url?: string | null
          created_at?: string
          description?: string | null
          growth_stage_id: number
          id: string
          open_to_collab: boolean
          piece_type_id: number
          title: string
          updated_at?: string | null
          url_key: string
        }
        Update: {
          content?: string
          cover_url?: string | null
          created_at?: string
          description?: string | null
          growth_stage_id?: number
          id?: string
          open_to_collab?: boolean
          piece_type_id?: number
          title?: string
          updated_at?: string | null
          url_key?: string
        }
        Relationships: [
          {
            foreignKeyName: "published_piece_growth_stage_id_fkey"
            columns: ["growth_stage_id"]
            referencedRelation: "growth_stage"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "published_piece_piece_type_id_fkey"
            columns: ["piece_type_id"]
            referencedRelation: "piece_type"
            referencedColumns: ["id"]
          }
        ]
      }
      submission: {
        Row: {
          change_details: Json
          created_at: string
          id: number
          submission_status_id: number
          submission_type_id: number
          updated_at: string | null
        }
        Insert: {
          change_details: Json
          created_at?: string
          id?: number
          submission_status_id?: number
          submission_type_id: number
          updated_at?: string | null
        }
        Update: {
          change_details?: Json
          created_at?: string
          id?: number
          submission_status_id?: number
          submission_type_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "submission_submission_status_id_fkey"
            columns: ["submission_status_id"]
            referencedRelation: "submission_status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submission_submission_type_id_fkey"
            columns: ["submission_type_id"]
            referencedRelation: "submission_type"
            referencedColumns: ["id"]
          }
        ]
      }
      submission_status: {
        Row: {
          created_at: string
          id: number
          title: string
        }
        Insert: {
          created_at?: string
          id?: number
          title: string
        }
        Update: {
          created_at?: string
          id?: number
          title?: string
        }
        Relationships: []
      }
      submission_type: {
        Row: {
          created_at: string
          id: number
          title: string
        }
        Insert: {
          created_at?: string
          id?: number
          title: string
        }
        Update: {
          created_at?: string
          id?: number
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      submission_view: {
        Row: {
          change_details: Json | null
          created_at: string | null
          id: number | null
          status: string | null
          type: string | null
          updated_at: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

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
      [_ in never]: never
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

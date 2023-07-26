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
      contributor: {
        Row: {
          avatar_url: string
          bio: string
          created_at: string
          full_name: string
          id: string
          updated_at: string | null
          username: string
        }
        Insert: {
          avatar_url: string
          bio: string
          created_at?: string
          full_name: string
          id: string
          updated_at?: string | null
          username: string
        }
        Update: {
          avatar_url?: string
          bio?: string
          created_at?: string
          full_name?: string
          id?: string
          updated_at?: string | null
          username?: string
        }
        Relationships: []
      }
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
      piece_tag: {
        Row: {
          id: number
          published_piece_id: string
          tag_id: number
        }
        Insert: {
          id?: number
          published_piece_id: string
          tag_id: number
        }
        Update: {
          id?: number
          published_piece_id?: string
          tag_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "piece_tag_published_piece_id_fkey"
            columns: ["published_piece_id"]
            referencedRelation: "published_piece"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "piece_tag_published_piece_id_fkey"
            columns: ["published_piece_id"]
            referencedRelation: "published_piece_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "piece_tag_tag_id_fkey"
            columns: ["tag_id"]
            referencedRelation: "tag"
            referencedColumns: ["id"]
          }
        ]
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
      submission_moderator: {
        Row: {
          id: number
          moderator_id: string
          submission_id: number
        }
        Insert: {
          id?: number
          moderator_id: string
          submission_id: number
        }
        Update: {
          id?: number
          moderator_id?: string
          submission_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "submission_moderator_moderator_id_fkey"
            columns: ["moderator_id"]
            referencedRelation: "moderator"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submission_moderator_submission_id_fkey"
            columns: ["submission_id"]
            referencedRelation: "submission"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submission_moderator_submission_id_fkey"
            columns: ["submission_id"]
            referencedRelation: "submission_view"
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
      tag: {
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
      temp_piece_contributor: {
        Row: {
          contributor_id: string
          id: number
          published_piece_id: string
        }
        Insert: {
          contributor_id: string
          id?: number
          published_piece_id: string
        }
        Update: {
          contributor_id?: string
          id?: number
          published_piece_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "temp_piece_contributor_contributor_id_fkey"
            columns: ["contributor_id"]
            referencedRelation: "contributor"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "temp_piece_contributor_published_piece_id_fkey"
            columns: ["published_piece_id"]
            referencedRelation: "published_piece"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "temp_piece_contributor_published_piece_id_fkey"
            columns: ["published_piece_id"]
            referencedRelation: "published_piece_view"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      published_piece_view: {
        Row: {
          content: string | null
          cover_url: string | null
          created_at: string | null
          description: string | null
          growth_stage: string | null
          id: string | null
          title: string | null
          type: string | null
          updated_at: string | null
          url_key: string | null
        }
        Relationships: []
      }
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

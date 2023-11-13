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
          id?: string
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
      contributor_type: {
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
          first_name: string | null
          id: string
          last_name: string | null
          modified_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          first_name?: string | null
          id: string
          last_name?: string | null
          modified_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          modified_at?: string | null
        }
        Relationships: []
      }
      published_piece: {
        Row: {
          content: string
          copyright_agreement: string | null
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
          copyright_agreement?: string | null
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
          copyright_agreement?: string | null
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
            isOneToOne: false
            referencedRelation: "growth_stage"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "published_piece_piece_type_id_fkey"
            columns: ["piece_type_id"]
            isOneToOne: false
            referencedRelation: "published_piece_type"
            referencedColumns: ["id"]
          }
        ]
      }
      published_piece_contributor: {
        Row: {
          contributor_id: string
          contributor_type_id: number
          id: number
          published_piece_id: string
        }
        Insert: {
          contributor_id: string
          contributor_type_id: number
          id?: number
          published_piece_id: string
        }
        Update: {
          contributor_id?: string
          contributor_type_id?: number
          id?: number
          published_piece_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "published_piece_contributor_contributor_id_fkey"
            columns: ["contributor_id"]
            isOneToOne: false
            referencedRelation: "contributor"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "published_piece_contributor_contributor_type_id_fkey"
            columns: ["contributor_type_id"]
            isOneToOne: false
            referencedRelation: "contributor_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "published_piece_contributor_published_piece_id_fkey"
            columns: ["published_piece_id"]
            isOneToOne: false
            referencedRelation: "published_piece"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "published_piece_contributor_published_piece_id_fkey"
            columns: ["published_piece_id"]
            isOneToOne: false
            referencedRelation: "published_piece_view"
            referencedColumns: ["id"]
          }
        ]
      }
      published_piece_tag: {
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
            foreignKeyName: "published_piece_tag_published_piece_id_fkey"
            columns: ["published_piece_id"]
            isOneToOne: false
            referencedRelation: "published_piece"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "published_piece_tag_published_piece_id_fkey"
            columns: ["published_piece_id"]
            isOneToOne: false
            referencedRelation: "published_piece_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "published_piece_tag_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tag"
            referencedColumns: ["id"]
          }
        ]
      }
      published_piece_type: {
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
      submission: {
        Row: {
          change_details: Json
          created_at: string
          decision_moderator_id: string | null
          id: number
          rejection_reason: string | null
          source_id: string
          submission_status_id: number
          submission_type_id: number
          updated_at: string | null
        }
        Insert: {
          change_details: Json
          created_at?: string
          decision_moderator_id?: string | null
          id?: number
          rejection_reason?: string | null
          source_id: string
          submission_status_id?: number
          submission_type_id: number
          updated_at?: string | null
        }
        Update: {
          change_details?: Json
          created_at?: string
          decision_moderator_id?: string | null
          id?: number
          rejection_reason?: string | null
          source_id?: string
          submission_status_id?: number
          submission_type_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "submission_decision_moderator_id_fkey"
            columns: ["decision_moderator_id"]
            isOneToOne: false
            referencedRelation: "moderator"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submission_submission_status_id_fkey"
            columns: ["submission_status_id"]
            isOneToOne: false
            referencedRelation: "submission_status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submission_submission_type_id_fkey"
            columns: ["submission_type_id"]
            isOneToOne: false
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
      submission_viewing: {
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
            foreignKeyName: "submission_viewing_moderator_id_fkey"
            columns: ["moderator_id"]
            isOneToOne: false
            referencedRelation: "moderator"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submission_viewing_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "submission"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submission_viewing_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "submission_view"
            referencedColumns: ["id"]
          }
        ]
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
      total_published_pieces: {
        Row: {
          created_at: string
          id: number
          updated_at: string | null
          value: number
        }
        Insert: {
          created_at?: string
          id?: number
          updated_at?: string | null
          value?: number
        }
        Update: {
          created_at?: string
          id?: number
          updated_at?: string | null
          value?: number
        }
        Relationships: []
      }
      version: {
        Row: {
          change_diff: Json
          change_title: string | null
          created_at: string
          id: number
          published_piece_id: string
        }
        Insert: {
          change_diff: Json
          change_title?: string | null
          created_at?: string
          id?: number
          published_piece_id: string
        }
        Update: {
          change_diff?: Json
          change_title?: string | null
          created_at?: string
          id?: number
          published_piece_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "version_published_piece_id_fkey"
            columns: ["published_piece_id"]
            isOneToOne: false
            referencedRelation: "published_piece"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "version_published_piece_id_fkey"
            columns: ["published_piece_id"]
            isOneToOne: false
            referencedRelation: "published_piece_view"
            referencedColumns: ["id"]
          }
        ]
      }
      version_contributor: {
        Row: {
          contributor_id: string
          contributor_type_id: number
          id: number
          version_id: number
        }
        Insert: {
          contributor_id: string
          contributor_type_id: number
          id?: number
          version_id: number
        }
        Update: {
          contributor_id?: string
          contributor_type_id?: number
          id?: number
          version_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "version_contributor_contributor_id_fkey"
            columns: ["contributor_id"]
            isOneToOne: false
            referencedRelation: "contributor"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "version_contributor_contributor_type_id_fkey"
            columns: ["contributor_type_id"]
            isOneToOne: false
            referencedRelation: "contributor_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "version_contributor_version_id_fkey"
            columns: ["version_id"]
            isOneToOne: false
            referencedRelation: "version"
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

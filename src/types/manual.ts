import { Session } from "@supabase/supabase-js";
import { Database, Json } from "./generated";

export type Submission = Database['public']['Tables']['submission']['Row'];

export type Submission_View = Database['public']['Views']['submission_view']['Row'];

export type Published_Piece = Database['public']['Tables']['published_piece']['Row'];

export type Published_Piece_View = Database['public']['Views']['published_piece_view']['Row'];

export type Contributor = Database['public']['Tables']['contributor']['Row'];

export type Tag = Database['public']['Tables']['tag']['Row'];

export type Moderator = Database['public']['Tables']['moderator']['Row'];

export type Version = Database['public']['Tables']['version']['Row'];

export interface Auth {
    session: Session | undefined;
    moderator: Moderator | undefined;
}

export interface ContributorDetails {
    full_name: string;
    bio: string;
    id: string;
    username: string;
    avatar_url: string;
}

export interface MetadataDetails {
    title: string;
    url_key: string;
    description: string;
    tags: string[];
    piece_type: string;
    growth_stage: string;
    open_to_collab: boolean;
    cover_url: string;
    permission_check: boolean;
}

export interface ChangeDetails {
    contributor: Contributor & Json;
    metadata: MetadataDetails & Json;
    content: string;
}
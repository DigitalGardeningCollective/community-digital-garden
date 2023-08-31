import { Database } from "./generated";

export type Submission = Database['public']['Tables']['submission']['Row'];

export type Published_Piece = Database['public']['Tables']['published_piece']['Row'];

export type Published_Piece_View = Database['public']['Views']['published_piece_view']['Row'];

export type Temp_Piece_Contributor = Database['public']['Tables']['temp_piece_contributor']['Row'];

export type Contributor = Database['public']['Tables']['contributor']['Row'];

export type Tag = Database['public']['Tables']['tag']['Row'];

export type Moderator = Database['public']['Tables']['moderator']['Row'];

export type Leading_Contributors = Database['public']['Tables']['piece_leading_contributor']['Row'];

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
    contributor: ContributorDetails;
    metadata: MetadataDetails;
    content: string;
}
import { Database } from "./generated";

export type Submission = Database['public']['Tables']['submission']['Row'];

export type Published_Piece = Database['public']['Tables']['published_piece']['Row'];


export interface ContributorDetails {
    name: string;
    avatar_url: string;
}

export interface MetadataDetails {
    title: string;
    url_key: string;
    description: string;
    tags: string[];
    piece_type_id: number;
    growth_stage_id: number;
    open_to_collab: boolean;
    cover_url: string;
}

export interface ChangeDetails {
    contributor: ContributorDetails;
    metadata: MetadataDetails;
    content: string;
}
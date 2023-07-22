import { Database } from "./generated";

export type Submission = Database['public']['Tables']['submission']['Row'];

export interface ContributorDetails {
    name: string;
    avatar_url: string;
}

export interface MetadataDetails {
    title: string;
    description: string;
    tags: string[];
    type_id: number;
    growth_stage_id: number;
    open_to_collab: boolean;
    cover_url: string;
}

export interface ChangeDetails {
    contributor: ContributorDetails;
    metadata: MetadataDetails;
    content: string;
}
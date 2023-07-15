import { Json } from "./generated";

export interface Submission {
    change_details: Json;
    created_at: string;
    id: number;
    submission_status_id: number;
    submission_type_id: number;
    updated_at: string | null;
}

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
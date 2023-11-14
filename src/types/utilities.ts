import { UniformDataFormat } from "@/components/PieceCard/PieceCard";
import { Json } from "./generated";
import { ChangeDetails, Contributor, Published_Piece_View } from "./manual";

// General

export const isObject = (value: unknown): value is Record<string, unknown> => {
    return value !== null && typeof value === 'object';
};

// Type-specific

export const isChangeDetails = (data: unknown): data is ChangeDetails & Json => {
    if (isObject(data) && data.contributor) {
        return true;
    } else {
        return false
    }
}

export const isPublishedPiece = (data: unknown): data is Published_Piece_View & Json => {
    if (isObject(data) && data.url_key) {
        return true;
    } else {
        return false;
    }
}

export const isContributor = (data: unknown): data is Contributor & Json => {
    if (isObject(data) && data.username) {
        return true;
    } else {
        return false;
    }
}

// Data's type was Published_Piece_View originally
export const pieceUniformDataRetrieval = (data: any): UniformDataFormat => {
    if (!data.id || !data.cover_url || !data.title || !data.growth_stage) {
        throw Error("Data properties aren't valid");
    }
    
    const contributorName = data.version && data.version.length != 0 ? 
        data.version[0].version_contributor[0].contributor.full_name : 
        "Unknown";

    return {
        id: data.id,
        imageURL: data.cover_url,
        mainText: data.title,
        subText:  contributorName,
        extraText: data.growth_stage
    };
}
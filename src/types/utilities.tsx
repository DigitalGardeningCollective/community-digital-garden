import { Json } from "./generated";
import { ChangeDetails, Contributor, Published_Piece_View, Submission } from "./manual";
import { PieceCard } from '@/components/PieceCard/PieceCard';

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

export const isSubmission = (data: unknown): data is Submission & Json => {
    if (isObject(data) && data.source_id) {
        return true;
    } else {
        return false;
    }
}

export const renderPieceCard = (data: Record<string, unknown>): JSX.Element => {
    if (isPublishedPiece(data)) {
        return <PieceCard key={data.id} data={data} />;
    } else {
        throw Error("data is not a published piece");
    }
}
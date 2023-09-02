import { Json } from '../types/generated';
import { useState } from 'react';
import { ChangeDetails, Contributor } from '@/types/manual';
import { useInsertNewPiece } from './useInsertNewPiece';
import * as Diff from 'diff';
import { useInsertVersion } from './useInsertVersion';
import { useInsertContributor } from './useInsertContributor';
import { useInsertVersionContributor } from './useInsertVersionContributor';
import { useInsertLeadingContributors } from './useInsertLeadingContributors';
import { useAddTags } from './useAddTags';

const getPieceTypeID = (pieceType: string) => {
    switch (pieceType) {
        case 'Note':
            return 1;
        case 'Essay':
            return 2;
        default:
            throw Error('Piece type is not valid.');
    }
}

const getGrowthStageID = (growthStage: string) => {
    switch (growthStage) {
        case 'Seedling':
            return 1;
        case 'Budding':
            return 2;
        case 'Evergreen':
            return 3;
        default:
            throw Error('Growth stage is not valid.');
    }
}

export const useAcceptPiece = () => {
    const [isLoading, setIsLoading] = useState(false);

    const { insertPiece } = useInsertNewPiece();
    const { insertVersion } = useInsertVersion();
    const { insertContributor } = useInsertContributor();
    const { insertVersionContributor } = useInsertVersionContributor();
    const { insertLeadingContributorRow } = useInsertLeadingContributors();
    const { addTagsToPiece } = useAddTags();

    const acceptPiece = async (changeDetails: ChangeDetails & Json, isExistingContributor: boolean | undefined, existingContributor: Contributor | undefined | null) => {
        setIsLoading(true);
        
        const createdPiece = await insertPiece({ 
            title: changeDetails.metadata.title,
            description: changeDetails.metadata.description,
            url_key: changeDetails.metadata.url_key,
            piece_type_id: getPieceTypeID(changeDetails.metadata.piece_type),
            growth_stage_id: getGrowthStageID(changeDetails.metadata.growth_stage),
            cover_url: changeDetails.metadata.cover_url,
            open_to_collab: changeDetails.metadata.open_to_collab,
            content: changeDetails.content,
        });

        if (createdPiece) {
            // Create the associated version
            const changeDiff: Json = {
                metadata: changeDetails.metadata,
                content: Diff.diffChars('', changeDetails.content).map<Json>(c => {

                    let result = { value: c.value, count: c.count ?? 0 };

                    if (c.added) {
                        return { ...result, added: c.added, removed: undefined };
                    } else if (c.removed) {
                        return { ...result, removed: c.removed, added: undefined };
                    } else {
                        return result;
                    }
                })
            };

            const createdVersion = await insertVersion(createdPiece.id, null, changeDiff);
            let contributor = existingContributor;

            if (isExistingContributor != null && !isExistingContributor) {
                contributor = await insertContributor(changeDetails.contributor);
            }

            if (createdVersion && contributor) {
                await insertVersionContributor(createdVersion.id, contributor.id, 1);
            }

            await insertLeadingContributorRow(createdPiece.id, changeDetails.contributor.id);

            // TODO: Insert any new tags and add the piece_tag relationships
            if (changeDetails.metadata.tags.length > 0) {
                await addTagsToPiece(changeDetails.metadata.tags, createdPiece.id);
            }

            setIsLoading(false);
        }
    }

    return { acceptPiece, isLoading };
}
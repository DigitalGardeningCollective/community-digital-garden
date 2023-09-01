import { ReactElement } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from '../_app';
import { ModeratorLayout } from '@/components/layouts/ModeratorLayout';
import { Avatar, Box, Button, Container, Grid, GridItem, HStack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useFetchSubmission } from '@/hooks/useFetchSubmission';
import { isChangeDetails } from '@/types/utilities';
import { useInsertNewPiece } from '@/hooks/useInsertNewPiece';
import { ChangeDetails, Published_Piece, Submission } from '@/types/manual';
import { Json } from '@/types/generated';
import { v4 as uuidv4 } from 'uuid';
import { PieceHeader } from '@/components/PieceHeader/PieceHeader';
import PieceContent from '@/components/PieceContent/PieceContent';
import { useInsertLeadingContributors } from '@/hooks/useInsertLeadingContributors';
import { useInsertVersion } from '@/hooks/useInsertVersion';
import * as Diff from 'diff';
import { useCheckIfNewContributor } from '@/hooks/useCheckIfNewContributor';
import { useInsertContributor } from '@/hooks/useInsertContributor';
import { useInsertVersionContributor } from '@/hooks/useInsertVersionContributor';

const SubmissionPage: NextPageWithLayout = () => {
    const router = useRouter();
    
    console.log('router.query.id -', router.query.id);

    if (Array.isArray(router.query.id)) {
        throw Error();
    }

    const { submissionView } = useFetchSubmission(router.query.id);

    const { isExistingContributor, existingContributor } = useCheckIfNewContributor(submissionView);

    console.log('isExistingContributor -', isExistingContributor);

    // Methods
    const { insertPiece } = useInsertNewPiece();
    const { insertLeadingContributorRow } = useInsertLeadingContributors();
    const { insertVersion } = useInsertVersion();
    const { insertContributor } = useInsertContributor();
    const { insertVersionContributor } = useInsertVersionContributor();

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

    // Edit Update - TODO: Check for the type of submission
    const handleAccept = async (changeDetails: Json) => {
        if (isChangeDetails(changeDetails)) {
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
            }

            
        }
    }

    return (
    <>
      <Head>
        <title>Submission</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={'4xl'} padding={0}>
        { isExistingContributor != null && submissionView && submissionView.created_at && isChangeDetails(submissionView.change_details) &&
            <Grid 
                h='100vh'
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(2, 1fr)'
                gap={5}
            >
                <GridItem rowSpan={3} colSpan={1} border='1px' borderColor='gray.200' padding={4}>
                    <PieceHeader
                        header={{
                            title: submissionView.change_details.metadata.title,
                            description: submissionView.change_details.metadata.description,
                            cover_url: null, // TODO: Need to deal with this
                            growth_stage: submissionView.change_details.metadata.growth_stage,
                            created_at: submissionView.created_at,
                            updated_at: null, // TODO: May not need since this is the creation step
                            contributor: {
                                id: submissionView.change_details.contributor.id,
                                full_name: submissionView.change_details.contributor.full_name,
                                avatar_url: submissionView.change_details.contributor.avatar_url,
                                bio: submissionView.change_details.contributor.bio,
                                created_at: '2023-07-23 21:05:28.699666+00', // TODO: Think about
                                updated_at: '2023-07-24 21:05:28.699666+00', // // TODO: Think about
                                username: submissionView.change_details.contributor.username
                            },
                            tags: submissionView.change_details.metadata.tags,
                          }}
                        isPreview
                    />
                    <PieceContent 
                        body={submissionView.change_details.content}
                    />
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Box width={'100%'} mb={4} /*border='1px' borderColor='gray.200'*/ bgColor={'#2e3637'} padding={2}>
                        <Text fontWeight={'bold'} color='white'>Assigned Moderator</Text>
                    </Box>
                    <HStack>
                        <Avatar size="sm" name={'John Doe'} src={'https://randomuser.me/api/portraits/men/35.jpg'}  />
                        <Text>John Doe</Text>
                    </HStack>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Box width={'100%'} mb={4} bgColor={'#2e3637'} padding={2}>
                        <Text fontWeight={'bold'} color='white'>Approve?</Text>
                    </Box>
                    <HStack>
                        <Button width={'100%'} height='40' colorScheme='green' disabled={ !submissionView.change_details } onClick={
                            () => handleAccept(submissionView.change_details)
                            }>Accept</Button>
                        <Button width={'100%'} height='40' colorScheme='gray'>Reject</Button>
                    </HStack>
                </GridItem>
                <GridItem rowSpan={1} colSpan={1}>
                    <Box width={'100%'} mb={4} bgColor={'#2e3637'} padding={2}>
                        <Text fontWeight={'bold'} color='white'>Submission Details</Text>
                    </Box>
                    <VStack width='100%' padding={4} border='1px' borderColor='gray.200'>
                        <Avatar size="sm" name={submissionView.change_details.contributor.full_name} src={'https://joshwin.dev/img/joshwin-linkedin-photo.JPG'} />
                        <Text>{ submissionView.change_details.contributor.full_name }</Text>
                        <Text fontWeight={'bold'}>{ isExistingContributor ? 'Existing Contributor' : 'New Contributor' }</Text>
                    </VStack>
                    <Container overflow={'scroll'} padding={0} maxWidth={'lg'}>
                        <TableContainer>
                            <Box>
                                <Table variant='striped' colorScheme='gray' size={'sm'}>
                                    <Thead>
                                    <Tr>
                                        <Th>Property</Th>
                                        <Th>Value</Th>
                                    </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Title</Td>
                                            <Td>{ submissionView.change_details.metadata.title }</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Description</Td>
                                            <Td>{ submissionView.change_details.metadata.description }</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Tags</Td>
                                            <Td>{ submissionView.change_details.metadata.tags.join(", ") }</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Type</Td>
                                            <Td>{ submissionView.change_details.metadata.piece_type }</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Growth Stage</Td>
                                            <Td>{ submissionView.change_details.metadata.growth_stage }</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Open to Collaboration</Td>
                                            <Td>{ submissionView.change_details.metadata.open_to_collab }</Td>
                                        </Tr>
                                        <Tr>
                                            <Td>Cover URL</Td>
                                            <Td>{ submissionView.change_details.metadata.cover_url }</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </Box>
                        </TableContainer>
                    </Container>
                </GridItem>
            </Grid>
        }
      </Container>
    </>
  )
}

SubmissionPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ModeratorLayout>
      {page}
    </ModeratorLayout>
  )
}

export default SubmissionPage;

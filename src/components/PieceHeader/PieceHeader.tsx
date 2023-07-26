import { Avatar, Box, Heading, HStack, Image, Tag, Text, VStack } from "@chakra-ui/react";
import { FiSpeaker } from 'react-icons/fi';
import { FaTree, FaLeaf, FaSeedling } from 'react-icons/fa';
import { FC } from 'react';
import { format } from 'date-fns';
import { Contributor } from "@/types/manual";

interface HeaderData {
  title: string;
  growth_stage: string;
  created_at: string;
  updated_at: string | null;
  description: string | null;
  cover_url: string | null;
  contributor: Contributor;
  tags: string[];
  isPreview?: boolean;
}

interface Props {
  header: HeaderData;
}

export const PieceHeader: FC<Props> = ({ header: {
  title,
  growth_stage,
  description,
  cover_url,
  created_at,
  updated_at,
  contributor,
  tags,
  isPreview, // I think this was to indicate whether this component was being rendered on the submit page or the piece page
}}) => {

  const getGrowthStageIcon = (growthStage: string) => {
    console.log('growthStage:', growthStage);

    switch (growthStage) {
        case 'Seedling':
            return <FaSeedling />
        case 'Budding':
            return <FaLeaf />
        case 'Evergreen':
            return <FaTree />
        case 'Announcement':
            return <FiSpeaker />
        default:
            throw Error("The given growth stage isn't supported at this time.");
    }
  }

  return (
    <Box pb={4} mb={8} /*borderBottom="1px solid"*/ /*borderColor={useColorModeValue('gray.200', 'gray.700')}*/>
      <HStack spacing={2}>
        { getGrowthStageIcon(growth_stage) }
        <Text style={{ fontWeight: 'normal' }}>{ `${growth_stage[0].toUpperCase()}${growth_stage.substring(1)}`}</Text>
      </HStack>
      <Heading>{title}</Heading>
      {description && (
        <Text fontSize="lg" opacity={0.5} mt={2}>
          {description}
        </Text>
      )}
      <HStack spacing={3} mt={2}>
        {tags.map((item, index) => <Tag borderRadius='30px' key={index} variant='solid' colorScheme='gray'>{ item }</Tag>)}
      </HStack>
      <HStack justify='space-between' mt={2}>
        <VStack>
            <HStack>
                <Avatar size="sm" name={contributor.full_name} src={contributor.avatar_url}  />
                <Text>{ contributor.full_name }</Text>
            </HStack>
        </VStack>
        { !isPreview && created_at &&
            <VStack alignItems='flex-start' spacing={1}>
              <Text fontSize={'xs'}><span style={{ fontWeight: 'bold' }}>Published: </span>{format(new Date(created_at), "MMM do, yyyy, h:mm a")}</Text>
              { updated_at &&
                <>
                  <Text fontSize={'xs'}><span style={{ fontWeight: 'bold' }}>Last Edited: </span>{format(new Date(updated_at), "MMM do, yyyy, h:mm a")}</Text>
                  {/* <Link fontSize={'sm'} textDecoration='underline'>View History</Link> */}
                </>
               }
            </VStack>
        }
      </HStack>
      { cover_url &&
        <Image mt={8} style={{ width: '100%', borderRadius: '30px' }} src={ cover_url } fit='fill' alt='Co-x3 Cover Photo' />
      }
    </Box>
  );
}
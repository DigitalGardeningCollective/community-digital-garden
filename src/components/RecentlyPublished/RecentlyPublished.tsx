import { FiSpeaker } from 'react-icons/fi'
import { FaTree, FaLeaf, FaSeedling } from 'react-icons/fa';
import { useFetchPieces } from "../../hooks/useFetchPieces"
import { 
    Card, 
    CardHeader, 
    CardBody, 
    Center,
    Heading, 
    Stack,
    Icon,
    Flex
  } from "@chakra-ui/react";
  
const getGrowthStageIcon = (stage: string | null) => {
  switch (stage) {
    case 'Seedling':
      return FaSeedling
    case 'Budding':
      return FaLeaf
    case 'Evergreen':
      return FaTree
    case 'Announcement':
      return FiSpeaker
    default:
      throw Error("The given growth stage isn't supported at this time.")
  }
}

/* The recently published Component */
export const RecentlyPublished = () => {
  const { pieces } = useFetchPieces()
  const latest = [...(pieces || [])].sort((a, b) => 
    (a.created_at || 0) > (b.created_at || 0) ? -1 : 1)
  const latest_three = latest.slice(0, 3)
  return <Stack>
    <Heading marginBottom='8'>Recently Published</Heading>
    {latest_three.length > 0 ? latest_three.map((piece, index) => 
      <Card key={index} variant='unstyled'>
        <Flex>
          <Center>
            <Icon w='16' h='16'
              as={getGrowthStageIcon(piece.growth_stage)}
              margin='20px'
              padding='8px'/>
          </Center>
          <Stack>
            <CardHeader>
              <Heading>{piece.title}</Heading>
            </CardHeader>
            <CardBody>{piece.description}</CardBody>
          </Stack>
        </Flex>
      </Card>) : <Card variant='unstyled'>
        <CardHeader>
          <Heading>No Pieces Found</Heading>
        </CardHeader>
        <CardBody>Sorry there are no published pieces.</CardBody>
      </Card>
    }
  </Stack>
}
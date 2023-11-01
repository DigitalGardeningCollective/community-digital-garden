import { LuGraduationCap } from 'react-icons/lu'
import { RiMedalLine } from 'react-icons/ri'
import { IoPeopleOutline } from 'react-icons/io5'
import { FaRegNewspaper } from 'react-icons/fa'
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
            as={FaRegNewspaper} 
            margin='20px'
            padding='8px'/>
            {/* background='#00A3C4' 
            borderRadius='full'
            color='white' */}
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
    {/* <Card variant='unstyled'>
      <Flex>
        <Center>
          <Icon 
            padding='8px'
            margin='20px'
            w='16' h='16'
            borderRadius='full'
            background='#00A3C4' 
            color='white' 
            as={LuGraduationCap} />
        </Center>
        <Stack>
          <CardHeader>
            <Heading as='h4' size='md'>
              Example Article 1
            </Heading>
          </CardHeader>
          <CardBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </CardBody>
        </Stack>
      </Flex>
    </Card>
    <Card variant='unstyled'>
      <Flex>
        <Center>
          <Icon 
            padding='8px'
            margin='20px'
            w='16' h='16'
            borderRadius='full'
            background='#F0FFF4' 
            color='#48BB78' 
            as={RiMedalLine} />
        </Center>
        <Stack>
          <CardHeader>
            <Heading as='h4' size='md'>
              Example Article 2
            </Heading>
          </CardHeader>
          <CardBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </CardBody>
        </Stack>
      </Flex>
    </Card>
    <Card variant='unstyled'>
      <Flex>
        <Center>
          <Icon 
            padding='2'
            margin='5'
            w='16' h='16'
            borderRadius='full'
            background='#EBF8FF' 
            color='#63B3ED' 
            as={IoPeopleOutline} />
        </Center>
        <Stack>
          <CardHeader>
            <Heading as='h4' size='md'>
              Example Article 3
            </Heading>
          </CardHeader>
          <CardBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </CardBody>
        </Stack>
      </Flex>
    </Card> */}
  </Stack>
}
import { LuGraduationCap } from 'react-icons/lu'
import { RiMedalLine } from 'react-icons/ri'
import { IoPeopleOutline } from 'react-icons/io5'
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
export const RecentlyPublished = () => <Stack>
<Heading marginBottom='8'>Recently Published</Heading>
<Card variant='unstyled'>
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
</Card>
</Stack>
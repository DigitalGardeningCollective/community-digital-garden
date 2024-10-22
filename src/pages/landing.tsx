import { ReactElement } from 'react'
import Head from 'next/head'
import { LuGraduationCap } from 'react-icons/lu'
import { RiMedalLine } from 'react-icons/ri'
import { IoPeopleOutline } from 'react-icons/io5'
import { NextPageWithLayout } from './_app'
import { Layout } from '@/components/layouts/Layout'
import { 
  Avatar,
  AvatarGroup,
  Button,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter, 
  Center, 
  Heading, 
  SimpleGrid, 
  Stack, 
  Flex,
  Text, 
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Box,
  Divider,
  // useMediaQuery, 
} from '@chakra-ui/react'

const Landing: NextPageWithLayout = () => <>
  <Head>
    <title>Home</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Stack spacing='16'>
    <Card size='sm' 
      bg='#111' 
      align='left' 
      padding={8} 
      borderRadius={20} 
      color='white'
      direction={{base: 'column', sm: 'row'}}>
      <Stack>
        <CardHeader>
          <Heading>Never Stop Learning<br/>and Never Stop Sharing</Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing='8' width='500px'>
            <Text>This is our digital garden, where we are publishing single and multi-author pieces of knowledge and sharing them with the world.</Text>
            <InputGroup size='md'>
              <Input variant='filled' placeholder='I am interested in...' borderRadius='full'/>
              <InputRightElement width='4.5rem'>
                <Button size='sm' h='1.75rem' marginRight='10px'
                  onClick={()=>console.log('searching')}
                  borderRadius='full'
                  colorScheme='cyan' 
                  color='white'>
                  Search
                </Button>
              </InputRightElement>
            </InputGroup>
            <Flex>
              <AvatarGroup size='md' max={4}>
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
              </AvatarGroup>
              <Center>
                <Text marginLeft='10px'>120K+ Contributors</Text>
              </Center>
            </Flex>
          </Stack>
        </CardBody>          
      </Stack>
      <Center marginLeft='100px'>
        <Image objectFit='cover' alt='Image'
          // maxW={{base: '100%', sm: '800px'}}     
          boxSize='300px'  
          borderRadius='full'  
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpaDka6f73wv23c7_QcIGSTWQ8YGagIJSdZ8hGJntVe3IqObG'>
        </Image>
      </Center>
    </Card>
    <Divider/>
    <Card variant='unstyled'>
      <CardHeader>
        <Heading>What is a Digital Garden?</Heading>
      </CardHeader>
      <CardBody>
        <Text>
        A digital garden is a collection of ideas, opinions, and notes that evolve over time. Like Wikipedia, you will be able to link to other pieces that are a part of the digital garden.
        </Text>
      </CardBody>
    </Card>
    <Divider/>  
    <SimpleGrid columns={3} spacing={4}>
      <Card>
        <Image alt='Notes' src='https://wallpapers.com/images/high/bank-page-student-notebook-caz8w7ly9ojyj9dg.webp'/>
        <CardHeader>
          <Heading size='md'>Notes</Heading>
        </CardHeader>
        <CardFooter>Browse →</CardFooter>
      </Card>
      <Card>
        <Image alt='Essays' src='https://www.qinprinting.com/blog/wp-content/uploads/2022/08/Stunning-photo-and-text-book.jpg'/>
        <CardHeader>
          <Heading size='md'>Essays</Heading>
        </CardHeader>
        <CardFooter>Browse →</CardFooter>
      </Card>
      <Card>
        <Image alt='Contributors' src='https://resilienceyouthnetwork.org/wp-content/uploads/2022/07/Community-Gathering-2048x1474.png'/>
        <CardHeader>
          <Heading size='md'>Contributors</Heading>
        </CardHeader>
        <CardFooter>Browse →</CardFooter>
      </Card>
    </SimpleGrid>
    <Divider/>
    <Stack>
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
    <Divider/>
    <Card marginBottom='50px' direction={{ base: 'column', sm: 'row' }}>
      <Center paddingLeft='1cm'>
        <Heading>Co-x3 Logo + greenery</Heading>
      </Center>
      <Stack>
        <CardHeader>
          <Heading>
            Weekly Digest is Coming Soon!
          </Heading>
        </CardHeader>
        <CardBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </CardBody>
      </Stack>
    </Card>
  </Stack>
</>

Landing.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
  
export default Landing
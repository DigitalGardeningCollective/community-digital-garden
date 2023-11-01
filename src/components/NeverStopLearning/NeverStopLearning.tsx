import React, { ChangeEvent, useState } from 'react';
import { 
    AspectRatio,
    Avatar,
    AvatarGroup,
    Card, 
    CardHeader, 
    CardBody, 
    Center,
    Heading, 
    Text, 
    Image, 
    Stack,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Flex
} from "@chakra-ui/react";
import { useSearchModal } from "../SearchModal/SearchModal"
// import Search from '@/components/Search/Search'
import { useFetchContributors } from '@/hooks/useFetchContributors'


// interface Props {}

/* The Never Stop Learning Component */
export const NeverStopLearning = () => {
  const { onOpen, setSearchTerm, searchModal } = useSearchModal()
  const [ searchText, setSearchText ] = useState('')
  const { contributors } = useFetchContributors()
  const members = contributors.length
  const performSearch = () => {
    setSearchTerm(searchText)
    onOpen()
    setSearchText('')
  }

  return <Card size='sm' 
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
          {/* <Search /> */}
          <InputGroup size='md'>
            <Input variant='filled' 
              placeholder='I am interested in...' 
              onChange={event => setSearchText(event.target.value)}
              value={searchText}
              borderRadius='full'/>
            {searchModal}
            <InputRightElement width='4.5rem'>
              <Button size='sm' h='1.75rem' marginRight='10px'
                onClick={performSearch}
                borderRadius='full'
                colorScheme='cyan' 
                color='white'>
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
          <Flex>
            <AvatarGroup size='md' max={3}>
              <Avatar name='Joshwin Greene' src='/images/joshwin.png' />
              <Avatar name='Ashley Crouch' src='/images/ashley.jpeg' />
              <Avatar name='Benjamin Covington' src='/images/ben.jpeg' />
              {/* <Avatar name='Conrad Lin' src='/images/conrad.png' /> */}
            </AvatarGroup>
            <Center>
              {
                members > 0 &&
                <Text marginLeft='10px'>{members} Contributors</Text>
              }
            </Center>
          </Flex>
        </Stack>
      </CardBody>          
    </Stack>
    <Center marginLeft='100px'>
        {/* objectFit='cover' 
        maxW={{base: '100%', sm: '800px'}}*/}     
          {/* src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVpaDka6f73wv23c7_QcIGSTWQ8YGagIJSdZ8hGJntVe3IqObG'> */}
      <Image alt='Image'
          fit='contain'
          boxSize='300px'  
          borderRadius='full'  
          src='/images/pen.png'>
      </Image>
    </Center>
  </Card>
}
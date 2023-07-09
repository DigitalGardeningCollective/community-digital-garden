import {
    Avatar,
    Image,
    Link,
    Flex,
    Box,
    Badge,
    Tag,
    TagLabel,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    useBoolean,
    useDisclosure
} from '@chakra-ui/react'

// const src = 'https://media.licdn.com/dms/image/C5603AQFY4clHxNJG5w/profile-displayphoto-shrink_800_800/0/1660670542956?e=2147483647&v=beta&t=WfrJiwPN9tojfgiXEWl11GIPafX_jRrjjjudRQ721qs'
// const containerStyle = {width: '2in'}
// const imgStyle = { borderRadius: '20px', width: '40px', height: '40px', display: 'inline-block'}

const AccountInfoCard = ({
    src='https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png', 
    name='John', 
    fullName='John Doe', 
    link='@johndoe', 
    bio='Software Developer @ Acme Inc. -- Loves to write about Programming, Politics, and Productivity.'
}) =>
<Popover trigger="hover" placement="auto">
    <PopoverTrigger>
        <Tag size='lg' borderRadius='full'>
            <Avatar size='xs' ml={-1} mr={2} src={src} name={name}/>
            <TagLabel>{name}</TagLabel>
        </Tag>
    </PopoverTrigger>
    <PopoverContent borderRadius='5mm'>
        <PopoverHeader>
            <Flex>
                <Avatar src={src} />
                <Box ml='3'>
                    <Text fontWeight='bold'>{fullName}</Text>
                    <Link>{link}</Link>
                </Box>
            </Flex>
        </PopoverHeader>
        <PopoverBody>
            <Text fontSize='sm'>{bio}</Text>
        </PopoverBody>
    </PopoverContent>
</Popover>

export default AccountInfoCard

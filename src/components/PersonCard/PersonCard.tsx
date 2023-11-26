import {
    Avatar,
    Link,
    Flex,
    Box,
    Text,
    Card,
    CardBody,
    CardHeader,
    Divider,
} from '@chakra-ui/react'
import { Contributor } from '@/types/manual'

interface Props { contributor: Contributor }

const PersonCard = ({ contributor: { avatar_url, full_name, username, bio } }: Props) => 
<Card>
    <CardHeader>
        <Flex>
            <Avatar src={avatar_url} />
            <Box ml='3'>
                <Text fontWeight='bold'>{full_name}</Text>
                {/* <Link>@{contributor.username}</Link> */}
                <Text>@{username}</Text>
            </Box>
        </Flex>
    </CardHeader>
    <Divider color='silver' />
    <CardBody>
        <Text fontSize='sm'>{bio}</Text>
    </CardBody>
</Card>    

export default PersonCard
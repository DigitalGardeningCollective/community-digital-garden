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
    Container,
} from '@chakra-ui/react'
import { Contributor } from '@/types/manual'
import Contributors from '@/pages/contributors'

interface Props { contributor: Contributor }

const PersonCard = ({ contributor }: Props) => 
<Card size='sm' width='sm'>
    <CardHeader>
        <Flex>
            <Avatar src={contributor.avatar_url} />
            <Box ml='3'>
                <Text fontWeight='bold'>{contributor.full_name}</Text>
                {/* <Link>@{contributor.username}</Link> */}
                <Text>@{contributor.username}</Text>
            </Box>
        </Flex>
    </CardHeader>
    <Divider color='silver' />
    <CardBody>
        <Text fontSize='sm'>{contributor.bio}</Text>
    </CardBody>
</Card>    

export default PersonCard
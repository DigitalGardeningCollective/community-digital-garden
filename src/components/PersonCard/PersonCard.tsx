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
import { UniformDataFormat } from '../PieceCard/PieceCard'

interface Props { data: UniformDataFormat }

const PersonCard = ({ data: { imageURL, mainText, subText, extraText } }: Props) => 
<Card>
    <CardHeader>
        <Flex>
            <Avatar src={imageURL} />
            <Box ml='3'>
                <Text fontWeight='bold'>{mainText}</Text>
                {/* <Link>@{contributor.username}</Link> */}
                <Text>@{subText}</Text>
            </Box>
        </Flex>
    </CardHeader>
    <Divider color='silver' />
    <CardBody>
        <Text fontSize='sm'>{extraText}</Text>
    </CardBody>
</Card>    

export default PersonCard
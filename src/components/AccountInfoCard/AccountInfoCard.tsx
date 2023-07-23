import {
    Avatar,
    Link,
    Flex,
    Box,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
} from '@chakra-ui/react'

interface Props {
    avatarSource: string;
    name: string;
    fullName: string;
    linkText: string;
    linkSource: string;
    description: string;
}

const AccountInfoCard = ({avatarSource, name, fullName, linkText, linkSource, description}: Props) =>
<Popover trigger="hover" placement="bottom-start">
    <PopoverTrigger>
        <Flex>
            <Avatar size='xs' ml={-1} mr={2} src={avatarSource} name={name}/>
            <Text>{name}</Text>
        </Flex>
    </PopoverTrigger>
    <PopoverContent>
        <PopoverHeader>
            <Flex>
                <Avatar src={avatarSource} />
                <Box ml='3'>
                    <Text fontWeight='bold'>{fullName}</Text>
                    <Link href={linkSource}>{linkText}</Link>
                </Box>
            </Flex>
        </PopoverHeader>
        <PopoverBody>
            <Text fontSize='sm'>{description}</Text>
        </PopoverBody>
    </PopoverContent>
</Popover>

export default AccountInfoCard

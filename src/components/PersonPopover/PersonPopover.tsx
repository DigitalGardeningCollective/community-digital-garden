import {
    Avatar,
    Flex,
    Text,
    Popover,
    PopoverTrigger,
    PopoverContent,
} from '@chakra-ui/react'
import { Contributor } from '@/types/manual'
import PersonCard from '../PersonCard/PersonCard'

interface Props { contributor: Contributor }

const PersonPopover = ({contributor: {avatar_url, bio, full_name, username}}: Props) =>
<Popover trigger="hover" placement="bottom-start">
    <PopoverTrigger>
        <Flex>
            <Avatar size='xs' ml={-1} mr={2} src={avatar_url} name={username}/>
            <Text>{full_name}</Text>
        </Flex>
    </PopoverTrigger>
    <PopoverContent>
        <PersonCard contributor={{avatar_url, bio, full_name, username}}></PersonCard>
    </PopoverContent>
</Popover>

export default PersonPopover

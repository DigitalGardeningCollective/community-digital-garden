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

const PersonPopover = ({contributor}: Props) => 
<Popover trigger="hover" placement="bottom-start">
    <PopoverTrigger>
        <Flex>
            <Avatar size='xs' ml={-1} mr={2} 
                src={contributor.avatar_url} 
                name={contributor.username}/>
            <Text>{`${contributor.full_name}`}</Text>
        </Flex>
    </PopoverTrigger>
    <PopoverContent>
        <PersonCard contributor={contributor}></PersonCard>
    </PopoverContent>
</Popover>

export default PersonPopover

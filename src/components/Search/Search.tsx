import React, { useState } from "react";
import { useFetchPieces } from "../../hooks/useFetchPieces";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { 
    IconButton, 
    Input, 
    InputGroup, 
    InputLeftElement, 
    InputRightElement,
    List,
    ListItem,
} from "@chakra-ui/react";

export const useSearch = (search: string = '') => {
    const { pieces } = useFetchPieces()
    const [searchTerm, setSearchTerm] = useState(search)
    const clearSearch = () => setSearchTerm('')
    const filteredPieces = (pieces || []).filter(
        entry => `${entry.title}`.toLowerCase()
            .includes(searchTerm.toLowerCase()))
            
    const searchBar = <InputGroup>
        <InputLeftElement pointerEvents='none'>
            <SearchIcon color='gray.300' />
        </InputLeftElement>
        <InputRightElement>
            {searchTerm && <IconButton
                onClick={clearSearch}
                outline="none"
                background="transparent"
                aria-label="clear search"
                _hover={{ backgroundColor: "transparent" }}
                icon={<CloseIcon color="gray.300" />}
                />}
        </InputRightElement>
        <Input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search by title'
            marginBottom={'5'} />
    </InputGroup>

    const resultsList = <List>{searchTerm && 
        filteredPieces.map((entry, index) => 
            <ListItem key={index}>{entry.title}</ListItem>)
    }</List>

    return { searchTerm, setSearchTerm, clearSearch, searchBar, resultsList }
}

export const Search = () => {
    const { searchBar, resultsList } = useSearch()
    return [searchBar, resultsList]
}

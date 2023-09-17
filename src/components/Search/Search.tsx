import React, { useState } from "react";
import {IconButton, Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react";
import {useFetchPieces} from "../../hooks/useFetchPieces";
import {SearchIcon, SmallCloseIcon} from "@chakra-ui/icons";

interface Props {
    search: String;
}

const Search = ({ search }: Props) => {
    const fetchResult = useFetchPieces();
    const fetchedEntries = fetchResult?.pieces || []; // Extract the array or provide an empty array as a default

    const [searchTerm, setSearchTerm] = useState(search || "");

    const filteredEntries = fetchedEntries.filter(entry =>
        entry.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const clearSearch = () => {
        setSearchTerm("");
    };

    return (
        <div className="search-component">
            <div className="search-input-container">

                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputLeftElement>
                    <InputRightElement>
                        {searchTerm && (
                            <IconButton
                                onClick={clearSearch}
                                outline="none"
                                background="transparent"
                                aria-label="clear search"
                                _hover={{ backgroundColor: "transparent" }}
                                icon={<SmallCloseIcon color="gray.300" />}
                            />
                        )}
                    </InputRightElement>
                    <Input
                        type='text'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='Search by title'
                        marginBottom={'5'}/>
                </InputGroup>

            </div>
            <ul>
                {filteredEntries.map((entry, index) => (
                    <li key={index}>{entry.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;

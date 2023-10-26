import {
    IconButton, 
    Input, 
    InputGroup, 
    InputLeftElement, 
    InputRightElement,
    List,
    ListItem,
    ListIcon,
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { FiSearch } from "react-icons/fi";
// import SearchComponent from "../Search/Search";
import { useFetchPieces } from "../../hooks/useFetchPieces";
import { useState } from "react";

{/* Modal for the SearchComponent */}
export const useSearchModal = (search: string = '') => {
    //search state
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { pieces } = useFetchPieces()
    const [searchTerm, setSearchTerm] = useState(search)
    const clearSearch = () => setSearchTerm('')
    const filteredPieces = (pieces || []).filter(
        entry => `${entry.title}`.toLowerCase()
            .includes(searchTerm.toLowerCase()))

    const searchButton = <IconButton
        display={{ base: "flex"}}
        onClick={onOpen}
        outline="none"
        background={"white"}
        aria-label="open search"
        _hover={{ backgroundColor: "transparent" }}
        icon={<FiSearch />}
    /> 

    const searchModal = <Modal {...{isOpen, onClose, 
        size: 'lg', scrollBehavior: 'inside'}}>
        <ModalOverlay />
        <ModalContent>
            {/* <ModalCloseButton /> */}
            <ModalBody>
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
                    {/* variant='flushed' */}
                    <Input
                        type='text'
                        value={searchTerm}
                        borderColor='transparent'
                        focusBorderColor='transparent'
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder='Search by title'
                        marginBottom={'5'} />
                </InputGroup>
                <List>
                    {searchTerm && filteredPieces.map((entry, index) => 
                        <ListItem key={index}>{entry.title}</ListItem>)}
                </List>
            </ModalBody>
        </ModalContent>
    </Modal>

    return { isOpen, onOpen, onClose, setSearchTerm, searchButton, searchModal }
}

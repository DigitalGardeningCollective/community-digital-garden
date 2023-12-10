import {
    IconButton, 
    Modal, 
    ModalOverlay, 
    ModalContent, 
    ModalBody,
    useDisclosure,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { useSearch } from "../Search/Search";

{/* Modal for the SearchComponent */}
export const useSearchModal = (search: string = '') => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { setSearchTerm, searchBar, resultsList } = useSearch(search)

    const searchButton = <IconButton
        display={{ base: "flex"}}
        onClick={onOpen}
        outline="none"
        background={"white"}
        aria-label="open search"
        _hover={{ backgroundColor: "transparent" }}
        icon={<FiSearch />}/> 

    const searchModal = <Modal {...{isOpen, onClose, 
        size: 'lg', scrollBehavior: 'inside'}}>
        <ModalOverlay />
        <ModalContent>
            <ModalBody>
                {searchBar}
                {resultsList}
            </ModalBody>
        </ModalContent>
    </Modal>

    return { isOpen, onOpen, onClose, setSearchTerm, searchButton, searchModal }
}

export const SearchModal = () => {
    const { searchButton, searchModal } = useSearchModal()
    return <> {searchButton} {searchModal} </>
}

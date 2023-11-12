import {NavigationTabs} from "../NavigationTabs/NavigationTabs";
import {FiMenu, FiSearch} from "react-icons/fi";
import {LinkItem} from "../CustomNavLink/CustomNavLink";
import {Logo} from "../Logo/Logo";
import {useUser} from "@supabase/auth-helpers-react";
import {SignOutBtn} from "../SideOutBtn/SignOutBtn";
import SearchComponent from "../Search/Search";
import {useState} from "react";

import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    Link,
} from "@chakra-ui/react";

interface Props {
    linkItems: LinkItem[];
    onOpen: () => void;
    search: string;
}

export const Header = ({linkItems, onOpen, search}: Props) => {
    const user = useUser();

    //search state
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearchOpen = () => {
        setIsSearchOpen(true);
    };

    const handleSearchClose = () => {
        setIsSearchOpen(false);
    };

    return (
        <Flex
            position="sticky"
            height="20"
            zIndex="1"
            alignItems="center"
            bg="white"
            justifyContent="space-between"
        >
            <IconButton
                display={{base: "flex", md: "none"}}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <Logo user={user} isDark/>
            <Box display={{base: "flex", md: "none"}}/>
            <NavigationTabs user={user} linkItems={linkItems} isInSidebar={false} hasCenteredTabs/>


            {user ? (
                <SignOutBtn />
            ) : (
                <HStack>
                    <IconButton
                        display={{ base: "flex"}}
                        onClick={handleSearchOpen}
                        outline="none"
                        background={"white"}
                        aria-label="open search"
                        _hover={{ backgroundColor: "transparent" }}
                        icon={<FiSearch />}
                    />

                    {/* Modal for the SearchComponent */}
                    <Modal isOpen={isSearchOpen} onClose={handleSearchClose} size="lg">
                        <ModalOverlay />
                        <ModalContent>
                            <ModalBody>
                               <SearchComponent search={search} />
                            </ModalBody>
                        </ModalContent>
                    </Modal>

                    <Link
                        href="https://the.x3.family/"
                        isExternal
                        >
                        <Button colorScheme="cyan" color="white">Join Co-x3</Button>
                    </Link>
                </HStack>
            )}
        </Flex>
    )
}
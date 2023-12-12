import {NavigationTabs} from "../NavigationTabs/NavigationTabs";
import {FiMenu} from "react-icons/fi";
import {LinkItem} from "../CustomNavLink/CustomNavLink";
import {Logo} from "../Logo/Logo";
import {SignOutBtn} from "../SideOutBtn/SignOutBtn";
import {SearchModal} from "../SearchModal/SearchModal";
import {useContext} from "react";
import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Link
} from "@chakra-ui/react";
import { AuthContext } from "@/hooks/local/context";

interface Props {
    linkItems: LinkItem[];
    onOpen: () => void;
}

export const Header = ({linkItems, onOpen}: Props) => {
    const { auth } = useContext(AuthContext);
  
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
            <Logo auth={auth} isDark/>
            <Box display={{base: "flex", md: "none"}}/>
            <NavigationTabs auth={auth} linkItems={linkItems} isInSidebar={false} hasCenteredTabs/>

            {auth ? (
                <SignOutBtn />
            ) : (
                <HStack>
                    <SearchModal />
                    <Link href="https://the.x3.family/" isExternal>
                        <Button colorScheme="cyan" color="white">Join Co-x3</Button>
                    </Link>
                </HStack>
            )
          }
        </Flex>
    )
}
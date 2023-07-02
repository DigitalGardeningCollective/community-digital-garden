import { Box, ChakraProvider, Drawer, DrawerContent, Flex, useDisclosure, extendTheme } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { FiHome, FiStar } from "react-icons/fi";
import { LinkItem } from "../CustomNavLink";
import * as theme from "../../../.chakra/chakra.config";

const extendedTheme = extendTheme(theme)

export const Layout = ({ children }: PropsWithChildren) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const items: LinkItem[] = [
    { label: "Home", icon: FiHome, href: "/" },
    { label: "Tab 2", icon: FiStar, href: "/" },
    { label: "Tab 3", icon: FiStar, href: "/" },
    { label: "Tab 4", icon: FiStar, href: "/" },
  ];
  return (
    <ChakraProvider theme={extendedTheme}>
      <Box minH="100vh" bg='white' >
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <Sidebar linkItems={items} onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <Header linkItems={items} onOpen={onOpen} />
        <Flex direction={'column'} align={'center'} pt="4">
          {children}
        </Flex>
      </Box>
    </ChakraProvider>
  )
}
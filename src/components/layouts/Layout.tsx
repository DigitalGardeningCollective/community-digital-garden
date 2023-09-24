import { ChakraProvider, Drawer, DrawerContent, Flex, useDisclosure, extendTheme, Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import { FiHome, FiStar } from "react-icons/fi";
import { LinkItem } from "../CustomNavLink/CustomNavLink";
import * as theme from "../../../.chakra/chakra.config";
import { Footer } from "../Footer/Footer";

const extendedTheme = extendTheme(theme)

export const Layout = ({ children }: PropsWithChildren) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const items: LinkItem[] = [
    { label: "Notes", href: "/" },
    { label: "Essays", href: "/" },
    { label: "Contributors", href: "/" },
  ];
  
  return (
    <ChakraProvider theme={extendedTheme}>
      <Flex minH="100vh" bg='white' flexDirection={'column'}>
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
        <Container
          maxW={'5xl'}
          >
          <Header linkItems={items} onOpen={onOpen} />
          <Flex direction={'column'} align={'center'} pt="4">
            {children}
          </Flex>
        </Container>
        <Footer />
      </Flex>
    </ChakraProvider>
  )
}
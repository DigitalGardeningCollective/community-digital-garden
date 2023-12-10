import { ChakraProvider, Drawer, DrawerContent, Flex, useDisclosure, extendTheme, Container, Text, CloseButton, Link } from "@chakra-ui/react";
import { PropsWithChildren, useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import { LinkItem } from "../CustomNavLink/CustomNavLink";
import * as theme from "../../../.chakra/chakra.config";
import { Footer } from "../Footer/Footer";

const extendedTheme = extendTheme(theme)

export const Layout = ({ children }: PropsWithChildren) => {
  const [isStickyHeaderShown, setIsStickyHeaderShown] = useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const items: LinkItem[] = [
    { label: "Notes", href: "/notes" },
    { label: "Essays", href: "/essays" },
    { label: "Contributors", href: "/contributors" },
  ];
  
  return (
    <ChakraProvider theme={extendedTheme}>
      <Flex minH="100vh" bg='white' flexDirection={'column'}>
        { isStickyHeaderShown &&
          <Flex width='100%' justify={'space-between'} px={2} align={'center'} bg='#2e3637' style={{ position: 'sticky', top: '0', zIndex: 5 }}>
            <Text></Text>
            <Text color='white' fontSize='sm' py={2}>You can submit content by getting early access to the DGC. <Link isExternal style={{ textDecoration: 'underline' }} href='https://www.producthunt.com/upcoming/the-digital-gardening-collective'>Join the waiting list.</Link></Text>
            <CloseButton onClick={() => setIsStickyHeaderShown(false)} size='sm' color='white' />
          </Flex>
        }
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
import { Box, ChakraProvider, Drawer, DrawerContent, Flex, useDisclosure, extendTheme, Container } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import { LinkItem } from "../CustomNavLink/CustomNavLink";
import { useFetchAllSubmissions } from '@/hooks/useFetchAllSubmissions';
import * as theme from "../../../.chakra/chakra.config";

const extendedTheme = extendTheme(theme)

export const ModeratorLayout = ({ children }: PropsWithChildren) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const items: LinkItem[] = [
    { label: "Submissions", href: "/submissions" },
  ];

  const { submissions } = useFetchAllSubmissions();
  // console.log(submissions);

  return (
        // <div>
        //     {submissions && (
        //         <ul>
        //             {submissions.map((submission) => (
        //                 <li key={submission.id}>{/* Render submission data */}</li>
        //             ))}
        //         </ul>
        //     )}
        // </div>
    
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
        <Container
          maxW={'4xl'}>
          <Header linkItems={items} onOpen={onOpen} />
          <Flex direction={'column'} align={'center'} pt="4">
            {children}
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  )
}
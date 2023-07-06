import { Box, CloseButton, Flex, Text, VStack } from "@chakra-ui/react"
import { NavigationTabs } from "./NavigationTabs"
import { LinkItem } from "./CustomNavLink";
import { AuthOptions } from "./AuthOptions";
import { useUser } from "@/context/AuthContext";

interface Props {
    linkItems: LinkItem[];
    onClose: () => void;
}

export const Sidebar = ({ linkItems, onClose }: Props) => {
    const { session } = useUser();
    return (
      <Box
        transition="3s ease"
        bg="white"
        borderRight="1px"
        borderRightColor="gray"
        w="full"
        pos="fixed"
        h="full"
      >
        <Flex
          h="20"
          alignItems="center"
          mx="8"
          justifyContent="space-between"
        >
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Logo
          </Text>
          <CloseButton display="flex" onClick={onClose} />
        </Flex>
        <NavigationTabs linkItems={linkItems} isInSidebar/>
        <AuthOptions session={session} isInSideBar />
      </Box>
    )
  }
import { Box, CloseButton, Flex, Text } from "@chakra-ui/react"
import { NavigationTabs } from "./NavigationTabs"
import { LinkItem } from "./CustomNavLink";

interface Props {
    linkItems: LinkItem[];
    onClose: () => void;
}

export const Sidebar = ({ linkItems, onClose }: Props) => {
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
      </Box>
    )
  }
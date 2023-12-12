import { Box, CloseButton, Flex } from "@chakra-ui/react"
import { NavigationTabs } from "../NavigationTabs/NavigationTabs"
import { LinkItem } from "../CustomNavLink/CustomNavLink";
import { AuthOptions } from "../AuthOptions/AuthOptions";
import { Logo } from "../Logo/Logo";
import { useUser } from "@supabase/auth-helpers-react";
import { useContext } from "react";
import { AuthContext } from "@/hooks/local/context";

interface Props {
    linkItems: LinkItem[];
    onClose: () => void;
}

export const Sidebar = ({ linkItems, onClose }: Props) => {
  const { auth } = useContext(AuthContext);
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
          <Logo auth={auth} isDark />
          <CloseButton display="flex" onClick={onClose} />
        </Flex>
        <NavigationTabs auth={auth} linkItems={linkItems} isInSidebar hasCenteredTabs={false} />
        <AuthOptions auth={auth} isInSideBar />
      </Box>
    )
  }
import { Box, Flex, HStack, IconButton } from "@chakra-ui/react";
import { NavigationTabs } from "./NavigationTabs";
import { AuthOptions } from "./AuthOptions";
import { FiMenu } from "react-icons/fi";
import { LinkItem } from "./CustomNavLink";
import { Logo } from "./Logo/Logo";
import { useUser } from "@supabase/auth-helpers-react";

interface Props {
    linkItems: LinkItem[];
    onOpen: () => void;
}

export const Header = ({ linkItems, onOpen }: Props) => {
    const user = useUser();

    return (
      <Flex
        px="4"
        position="sticky"
        height="20"
        zIndex="1"
        alignItems="center"
        bg="white"
        justifyContent="space-between"
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <Logo user={user} isDark />
        <Box display={{ base: "flex", md: "none" }} />
        <NavigationTabs linkItems={linkItems} isInSidebar={false} />
        <AuthOptions user={user} isInSideBar={false} />
      </Flex>
    )
  }
import { Box, Flex, IconButton, Text, useMediaQuery } from "@chakra-ui/react";
import { NavigationTabs } from "./NavigationTabs";
import { AuthOptions } from "./AuthOptions";
import { FiMenu } from "react-icons/fi";
import { LinkItem } from "./CustomNavLink";
import { useUser } from "@/context/AuthContext";
import { Logo } from "./Logo";

interface Props {
    linkItems: LinkItem[];
    onOpen: () => void;
}

export const Header = ({ linkItems, onOpen }: Props) => {
    const { session } = useUser();
    return (
      <Flex
        px="4"
        position="sticky"
        height="20"
        zIndex="1"
        alignItems="center"
        bg="white"
        borderBottomWidth="1px"
        borderBottomColor="gray"
        justifyContent="space-between"
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
        <Logo />
        <Box display={{ base: "flex", md: "none" }} />
        <NavigationTabs linkItems={linkItems} isInSidebar={false} />
        <AuthOptions session={session} isInSideBar={false} />
      </Flex>
    )
  }
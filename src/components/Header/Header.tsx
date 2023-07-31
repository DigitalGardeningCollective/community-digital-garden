import { Box, Button, Flex, IconButton, Tooltip } from "@chakra-ui/react";
import { NavigationTabs } from "../NavigationTabs/NavigationTabs";
import { FiMenu } from "react-icons/fi";
import { LinkItem } from "../CustomNavLink/CustomNavLink";
import { Logo } from "../Logo/Logo";
import { useUser } from "@supabase/auth-helpers-react";
import { SignOutBtn } from "../SideOutBtn/SignOutBtn";

interface Props {
  linkItems: LinkItem[];
  onOpen: () => void;
}

export const Header = ({ linkItems, onOpen }: Props) => {
  const user = useUser();

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
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <Logo user={user} isDark />
      <Box display={{ base: "flex", md: "none" }} />
      <NavigationTabs
        user={user}
        linkItems={linkItems}
        isInSidebar={false}
        hasCenteredTabs
      />
      {user ? (
        <SignOutBtn />
      ) : (
        <Tooltip label="Coming Soon!">
          <Button colorScheme={"cyan"} color={"white"}>
            Submit Content
          </Button>
        </Tooltip>
      )}
    </Flex>
  );
};

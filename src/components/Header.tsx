import { Flex, IconButton, Text } from "@chakra-ui/react";
import { NavigationTabs } from "./NavigationTabs";
import { Navigation } from "./Navigation";
import { FiMenu } from "react-icons/fi";
import { LinkItem } from "./CustomNavLink";

interface Props {
    linkItems: LinkItem[];
    onOpen: () => void;
}

export const Header = ({ linkItems, onOpen }: Props) => {
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
        <Text
          display={{ base: "flex", md: "flex" }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Logo
        </Text>
        <NavigationTabs linkItems={linkItems} isInSidebar={false} />
        <Navigation />
      </Flex>
    )
  }
import { Box } from "@chakra-ui/react";
import { FiHome, FiStar } from "react-icons/fi";
import { LinkItem, CustomNavLink } from "./CustomNavLink";

interface Props {
  isInSidebar: boolean;
}

const LinkItems: LinkItem[] = [
  { label: "Home", icon: FiHome, href: "/" },
  { label: "Tab 2", icon: FiStar, href: "/" },
  { label: "Tab 3", icon: FiStar, href: "/" },
  { label: "Tab 4", icon: FiStar, href: "/" },
]

export const NavigationTabs = ({ isInSidebar }: Props) => {
  return (
    <Box
      display={{ base: (isInSidebar ? "flex" : "none"), md: "flex" }}
      zIndex={2}
      position="absolute"
      ml={(isInSidebar ? 8 : 60)}
      bg="white"
    >
      { isInSidebar ?
        <ul>
            {LinkItems.map((link, i) => (
            <ol><CustomNavLink key={i} link={link} /></ol>
          ))}
        </ul> :
        LinkItems.map((link, i) => (
          <CustomNavLink key={i} link={link} />
        ))
      }
    </Box>
  )
}
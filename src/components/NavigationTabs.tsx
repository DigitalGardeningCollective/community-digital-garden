import { Box } from "@chakra-ui/react";
import { LinkItem, CustomNavLink } from "./CustomNavLink";

interface Props {
  linkItems: LinkItem[];
  isInSidebar: boolean;
}

export const NavigationTabs = ({ linkItems, isInSidebar }: Props) => {
  return (
    <Box
      display={{ base: (isInSidebar ? "flex" : "none"), md: "flex" }}
      ml={(isInSidebar ? 8 : 0)}
      bg="white"
    >
      { isInSidebar ?
        <ul>
            {linkItems.map((link, i) => (
            <ol key={i}><CustomNavLink key={i} link={link} /></ol>
          ))}
        </ul> :
        linkItems.map((link, i) => (
          <CustomNavLink key={i} link={link} />
        ))
      }
    </Box>
  )
}
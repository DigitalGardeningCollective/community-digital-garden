import { Flex } from "@chakra-ui/react";
import { LinkItem, CustomNavLink } from "../CustomNavLink/CustomNavLink";
import { User } from "@supabase/supabase-js";

interface Props {
  user: User | null;
  linkItems: LinkItem[];
  isInSidebar: boolean;
  hasCenteredTabs: boolean;
}

export const NavigationTabs = ({ user, linkItems, isInSidebar, hasCenteredTabs }: Props) => {
  return (
    <Flex
      display={{ base: (isInSidebar ? "flex" : "none"), md: "flex" }}
      ml={(isInSidebar ? 8 : 4)}
      flex={user && hasCenteredTabs ? 1 : 0}
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
    </Flex>
  )
}
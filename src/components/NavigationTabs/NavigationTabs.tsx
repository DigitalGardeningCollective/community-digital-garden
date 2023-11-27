import { Flex } from "@chakra-ui/react";
import { LinkItem, CustomNavLink } from "../CustomNavLink/CustomNavLink";
import { Auth } from "@/types/manual";

interface Props {
  auth: Auth | null;
  linkItems: LinkItem[];
  isInSidebar: boolean;
  hasCenteredTabs: boolean;
}

export const NavigationTabs = ({ auth, linkItems, isInSidebar, hasCenteredTabs }: Props) => {
  return (
    <Flex
      display={{ base: (isInSidebar ? "flex" : "none"), md: "flex" }}
      ml={(isInSidebar ? 8 : 4)}
      flex={auth && hasCenteredTabs ? 1 : 0}
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
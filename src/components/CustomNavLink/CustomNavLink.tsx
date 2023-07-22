import NextLink from "next/link";
import { Flex, Icon, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface LinkItem {
  label: string;
  icon: IconType;
  href: string;
}

interface Props {
  link: LinkItem;
}

export const CustomNavLink = ({ link }: Props & { children?: ReactNode }) => {
  const { label, icon, href } = link;
  return (
    <NextLink href={href} passHref>
      <Flex
        align="center"
        pr="4"
        py="4"
        borderRadius="log"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan",
          color: "white"
        }}
      >
        {
          icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white"
              }}
              as={icon}
            />

          )}
          <Text fontSize="1.2rem">{label}</Text>
      </Flex>
    </NextLink>
  )
}
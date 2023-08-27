import { Avatar } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/react";

interface Backlink {
  avatarUrl: string;
  title: string;
  description: string;
  fullUrl: string;
}

interface Props {
  backlink: Backlink;
}

export const Backlink = ({
  backlink: { avatarUrl, title, description, fullUrl },
}: Props) => {
  
  const urlShortener = (fullUrl: string) => {
    const domainRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/;
    const urlMatches = fullUrl.match(domainRegex);

    if (!urlMatches) {
      throw Error('Backlink - match returned null')
    }

    return urlMatches[1]; // gets the origin domain, ex. google.com
  };

  return (
    <Box maxW="md" borderRadius="lg">
      <HStack alignItems="flex-start">
        <Avatar src={avatarUrl} />
        <VStack alignItems="flex-start">
          <Heading size="sm">{title}</Heading>
          <Text>{description}</Text>
          <Link color="teal.500" href="#">
            {urlShortener(fullUrl)}
          </Link>
        </VStack>
      </HStack>
    </Box>
  );
};
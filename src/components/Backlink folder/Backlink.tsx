import { Avatar } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/react";

interface Backlink {
  avatarUrl: String;
  title: String;
  description: String;
  fullUrl: String;
}

interface Props {
  backlink: Backlink;
}

const Backlink = ({
  backlink: { avatarUrl, title, description, fullUrl },
}: Props) => {
  const urlShortener = (fullUrl: string) => {
    const domainRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/;
    const originDomain = fullUrl.match(domainRegex)[1];
    return originDomain;
  };

  //come back to this

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

export default Backlink;

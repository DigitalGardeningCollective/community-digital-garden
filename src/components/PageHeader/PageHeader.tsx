import { Heading, VStack, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  subtitle: string;
}

export const PageHeader = ({ title, subtitle }: Props) => {
  return (
    <VStack align='flex-start' mb={4}>
      <Heading as='h4' size='lg'>{ title }</Heading>
      <Text fontSize='2xl'>{ subtitle }</Text>
    </VStack>
  )
}
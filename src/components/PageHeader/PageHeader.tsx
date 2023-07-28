import { Heading, VStack, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  subtitle: string;
}

export const PageHeader = ({ title, subtitle }: Props) => {
  return (
    <VStack align='flex-start'>
      <Heading as='h3' size='lg'>{ title }</Heading>
      <Text fontSize='4xl'>{ subtitle }</Text>
    </VStack>
  )
}
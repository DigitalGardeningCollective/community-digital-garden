import { Box, HStack, VStack, Text, Heading } from '@chakra-ui/react';

interface Props {
  icon: JSX.Element;
  color: string;
  title: string;
  text: string;
}

export const CalloutWithIcon = ({ icon, color, title, text }: Props) => {
  return (
    <Box bg={color} w='100%' p={4} color='white' style={{ borderRadius: '15px' }}>
      <VStack>
        <HStack align='center' w='100%' justify='space-between'>
          { icon }
          <Box bg={color} w='100%' color='white'>
            <Heading size='md'>{ title }</Heading>
          </Box>
        </HStack>
        <Box bg={color} w='100%' pt={4} pl={0}  color='white'>
          <Text>{ text }</Text>
        </Box>
      </VStack>
    </Box>
  )
}
import { Box, VStack, HStack, Image, Heading } from '@chakra-ui/react'

interface Props {
  coverUrl: string;
  name: string;
  quote: string;
  color: string;
}

export const PersonalizedQuote = ({ coverUrl, name, quote, color }: Props) => {
  return (
    <Box bg={color} w='100%' p={4} color='white' style={{ borderRadius: '15px' }}>
      <VStack>
        <HStack align='center' w='100%'>
          <Image style={{ borderRadius: '30px', width: '50px', height: '50px' }} src={ coverUrl } alt='Avatar Photo' />
          <Box bg={color} w='100%' pl={2} color='white'>
            <Heading size='md'>{ name }</Heading>
          </Box>
        </HStack>
        <Box bg={color} w='100%' pt={3} color='white'>
          &quot;{ quote }&quot;
        </Box>
      </VStack>
    </Box>
  )
}
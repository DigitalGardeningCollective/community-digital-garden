import { ReactNode } from 'react';
import { Box, Container, Link as ChakraLink, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { Logo } from '../Logo/Logo';
import { AuthOptions } from '../AuthOptions/AuthOptions';
import { useUser } from '@supabase/auth-helpers-react';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2} color='white'>
      {children}
    </Text>
  );
};

export const Footer = () => {
  const user = useUser();

  return (
    <Box
      mt={'auto'}
      bg={'footerBrown'}
      width={'100%'}
      >
      <Container as={Stack} maxW={'4xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo isDark={false} user={user} />
            </Box>
            <Text fontSize={'sm'} color='white'>
              A non-profit community of co-creators and collaborators.
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Co-x3</ListHeader>
            <ChakraLink href={'https://co-x3.com/'} color={'gray.100'}>Co-x3 Website</ChakraLink>
            <ChakraLink href={'https://thex3family.notion.site/'} color={'gray.100'}>Co-x3 Directory</ChakraLink>
            <ChakraLink href={'https://academy.co-x3.com/'} color={'gray.100'}>Co-x3 Academy</ChakraLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Contact</ListHeader>
            <ChakraLink href='mailto:contact@dgc.rocks' color={'gray.100'}>contact@dgc.rocks</ChakraLink>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Moderators</ListHeader>
            <AuthOptions user={user} isInSideBar={false} />
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
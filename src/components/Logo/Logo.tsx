import { Box, HStack, Text, Image } from "@chakra-ui/react";
import { User } from "@supabase/auth-helpers-react";

interface Props {
  user: User | null;
  isDark: boolean;
}

export const Logo = ({ user, isDark }: Props) => {

  return (
    <HStack>
      <Text
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        >
        <Image width={20} src={isDark ? "/co-x3-logo-dark.png" : "/co-x3-logo-white.png"} alt='Co-x3 Logo' />
      </Text>
      { user && 
        <Box
          as='button'
          p={2}
          color='white'
          fontWeight='bold'
          borderRadius='md'
          bgGradient='linear(to-r, teal.500, green.500)'
          >
            Moderators
        </Box>
      }
    </HStack>
    
  )
}
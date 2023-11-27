import { Auth } from "@/types/manual";
import { Box, HStack, Text, Image } from "@chakra-ui/react";

interface Props {
  auth: Auth | null;
  isDark: boolean;
}

export const Logo = ({ auth, isDark }: Props) => {

  return (
    <HStack>
      <Image width={20} src={isDark ? "/co-x3-logo-dark.png" : "/co-x3-logo-white.png"} alt='Co-x3 Logo' />
      { auth && 
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
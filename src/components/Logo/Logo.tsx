import { Box, HStack, Text } from "@chakra-ui/react";
import { User, useUser } from "@supabase/auth-helpers-react";
import Image from "next/image";

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
        <Image height={90} width={90} src={isDark ? "/images/co-x3-logo-dark.png" : "/images/co-x3-logo-white.png"} alt='Co-x3 Logo' />
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
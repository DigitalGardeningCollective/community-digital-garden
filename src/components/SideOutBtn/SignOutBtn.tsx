import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { Database  } from '../../types/generated';


export const SignOutBtn = () => {
  const router = useRouter();
  const supabaseClient = useSupabaseClient<Database>();

  const onClick = async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        console.log('Sign Out Failed - Error -', error);
    } else {
        router.push('/signin');
    }
  }

  return <Button colorScheme="blue" onClick={() => onClick()}>Sign Out</Button>
}
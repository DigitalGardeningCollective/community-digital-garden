import { useUpdateUserSession } from '../hooks/useUpdateUserSession';
import { supabaseClient } from '../pages/api/auth';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const SignOutBtn = () => {
  const router = useRouter();
  const { deleteSession } = useUpdateUserSession();

  const onClick = async () => {
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        console.log('Sign Out Failed - Error -', error);
    } else {
        deleteSession();
        router.push('/signin');
    }
  }

  return <Button colorScheme="blue" onClick={() => onClick()}>Sign Out</Button>
}
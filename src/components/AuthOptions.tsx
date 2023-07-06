import Link from 'next/link'
import { SignOutBtn } from './SignOutBtn';
import { Session } from '@supabase/supabase-js';
import { Stack } from '@chakra-ui/layout';

interface Props {
  session: Session | null;
  isInSideBar: boolean;
}

export const AuthOptions = ({ session, isInSideBar }: Props) => {
    return (
      <Stack
        display={{ base: (isInSideBar ? "flex" : "none"), md: "flex" }}
        direction={ isInSideBar ? 'column' : 'row' }
        ml={(isInSideBar ? 8 : 0)}
        mr={(isInSideBar ? 8 : 0)}
      >
        { !session ? 
          <>
            <Link href="/signup">Sign Up</Link>
            <Link href="/signin">Sign In</Link>
          </> : 
          <>
            <SignOutBtn />
          </>
        }
      </Stack>
    )
  }
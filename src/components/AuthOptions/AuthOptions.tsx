import Link from 'next/link'
import { SignOutBtn } from '../SideOutBtn/SignOutBtn';
import { User } from '@supabase/supabase-js';
import { Stack } from '@chakra-ui/layout';

interface Props {
  user: User | null;
  isInSideBar: boolean;
}

export const AuthOptions = ({ user, isInSideBar }: Props) => {
    return (
      <Stack
        display={{ base: (isInSideBar ? "flex" : "none"), md: "flex" }}
        direction={ isInSideBar ? 'column' : 'row' }
        ml={(isInSideBar ? 8 : 0)}
        mr={(isInSideBar ? 8 : 0)}
      >
        { !user ? 
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
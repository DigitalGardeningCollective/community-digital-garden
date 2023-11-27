import Link from 'next/link'
import { SignOutBtn } from '../SideOutBtn/SignOutBtn';
import { Stack } from '@chakra-ui/layout';
import { Auth } from '@/types/manual';

interface Props {
  auth: Auth | null;
  isInSideBar: boolean;
}

export const AuthOptions = ({ auth, isInSideBar }: Props) => {
    return (
      <Stack
        display={{ base: (isInSideBar ? "flex" : "none"), md: "flex" }}
        direction={ isInSideBar ? 'column' : 'row' }
        ml={(isInSideBar ? 8 : 0)}
        mr={(isInSideBar ? 8 : 0)}
      >
        { !auth ? 
          <>
            {/* <Link href="/signup" style={{ color: 'white' }}>Sign Up</Link> */}
            <Link href="/signin" style={{ color: 'white' }}>Sign In</Link>
          </> : 
          <>
            <SignOutBtn />
          </>
        }
      </Stack>
    )
  }
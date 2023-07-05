import Link from 'next/link'
import { SignOutBtn } from './SignOutBtn';

interface Props {
  session: any;
}

export const AuthOptions = ({ session }: Props) => {
    return (
      <nav>
        { !session ? 
          <>
            <Link href="/signup">Sign Up</Link>
            <Link href="/signin">Sign In</Link>
          </> : 
          <>
            <SignOutBtn />
          </>
        }
      </nav>
    )
  }
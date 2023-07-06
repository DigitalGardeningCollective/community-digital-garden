import Link from 'next/link'
import { SignOutBtn } from './SignOutBtn';
import { Session } from '@supabase/supabase-js';

interface Props {
  session: Session | null;
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
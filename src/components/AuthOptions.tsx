import Link from 'next/link'

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
            <Link href="/signup">Sign Out</Link>
          </>
        }
      </nav>
    )
  }
import Link from 'next/link'

export const Navigation = () => {
    return (
      <nav>
        <Link href="/signup">Sign Up</Link>
        <Link href="/signin">Sign In</Link>
      </nav>
    )
  }
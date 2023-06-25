import { PropsWithChildren } from "react";

export const UserLayout = ({ children }: PropsWithChildren) => {
    return (
      <>
        {/* <Navbar /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </>
    )
  }
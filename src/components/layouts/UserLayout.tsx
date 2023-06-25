import { PropsWithChildren } from "react";

export const UserLayout = ({ children }: PropsWithChildren) => {
    return (
      <>
        <p>Navbar</p>
        <main>{children}</main>
        {/* <Footer /> */}
      </>
    )
  }
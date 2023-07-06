import { Session } from "@supabase/gotrue-js";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

const UserContext = createContext<{
  session: Session | null,
  setSession: Dispatch<SetStateAction<Session | null>>
}>({
  session: null,
  setSession: () => {}
});

export default function AuthContext({children}: PropsWithChildren) {  
  const [ session, setSession ] = useState<Session | null>(null);

  return (
    <UserContext.Provider value={{ session, setSession }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
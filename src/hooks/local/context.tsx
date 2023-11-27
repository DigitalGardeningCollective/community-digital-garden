import { Auth, Moderator } from '@/types/manual';
import { createContext, FC, PropsWithChildren } from 'react';
import { useAuth } from './useAuth';

export const AuthContext = createContext<{
  auth: Auth | null,
  authEmail: string | undefined,
  moderator: Moderator | null,
  setAuth: (auth: Auth) => void,
  updateModerator: (moderator: Moderator) => void,
  resetAuth: () => void
}>({
  auth: null,
  authEmail: undefined,
  moderator: null,
  setAuth: () => {},
  updateModerator: (moderator: Moderator) => {},
  resetAuth: () => {}
});

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const authProviderValue = useAuth();

  return <AuthContext.Provider value={authProviderValue}>{children}</AuthContext.Provider>;
};

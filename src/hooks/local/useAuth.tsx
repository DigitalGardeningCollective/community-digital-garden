import { Auth, Moderator } from "@/types/manual";
import { useCallback, useEffect, useMemo, useReducer } from "react";
import { useLocalStorage } from "./useLocalStorage";

type State = {
  auth: Auth | null
};

const initialState: State = {
  auth: null
};

type Action =
  | { type: 'save'; auth: Auth | null }
  | { type: 'update-moderator'; moderator: Moderator }
  | { type: 'reset' };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'save':
      return { auth: action.auth };
    case 'update-moderator':
      return { auth: { session: state.auth?.session, moderator: action.moderator } };
    case 'reset':
      return { ...initialState };
    default:
      return { ...initialState };
  }
};

export const useAuth = () => {
  const [{ auth }, authDispatch] = useReducer(
    reducer,
    initialState,
  );
  const { addToLocalStorage, retrieveFromLocalStorage, removeFromLocalStorage } = useLocalStorage();
  const AUTH_KEY = 'auth';

  const setAuth = useCallback((auth: Auth | null) => {
    authDispatch({ type: 'save', auth: auth });
    addToLocalStorage<Auth>(AUTH_KEY, auth);
  }, [authDispatch, AUTH_KEY, addToLocalStorage]);

  useEffect(() => {
    setAuth(retrieveFromLocalStorage<Auth>(AUTH_KEY));
    // eslint-disable-next-line
  }, []); // intentionally leaving out the dependencies

  const authEmail = useMemo(() => {
    if (auth && auth.session && auth.session.user) {
      return auth.session.user.email;
    } else {
      return undefined;
    }
  }, [auth]);

  const moderator = useMemo(() => {
    if (auth && auth.moderator) {
      return auth.moderator;
    } else {
      return null;
    }
  }, [auth]);

  const updateModerator = useCallback((moderator: Moderator) => {
    authDispatch({ type: 'update-moderator', moderator: moderator });
    addToLocalStorage<Auth>(AUTH_KEY, { session: auth?.session, moderator: moderator })
  }, [authDispatch, AUTH_KEY, addToLocalStorage, auth?.session]);

  const resetAuth = useCallback(() => {
    authDispatch({ type: 'reset' });
    removeFromLocalStorage(AUTH_KEY);
  }, [authDispatch, AUTH_KEY, removeFromLocalStorage]);

  const authProviderValue = useMemo(() => {
    const result = {
      auth,
      authEmail,
      moderator,
      setAuth,
      updateModerator,
      resetAuth
    };
    return result;
  }, [setAuth, resetAuth, updateModerator, auth, authEmail, moderator]);

  return authProviderValue;
};

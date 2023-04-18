import { createContext, ReactNode, useCallback, useState } from "react";
import { api } from "../../services/api";
import { CredentialsDev } from "../Interfaces/CredentialsDev";
import { useNavigate } from 'react-router-dom';

interface IUser {
  id: string;
  name: string;
  email: string;
  active: string;
  created_at: string;
  updated_at: string;
}

interface IAuthState {
  user: IUser;
  token: string;
}
interface AuthContextType {
  user: IUser;
  token: string;
  signInDev(credentials: CredentialsDev): Promise<void>;
  signOutDev(): void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const navigate = useNavigate();
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@Dev:ProjectManagerToken');
    const user = localStorage.getItem('@Dev:ProjectManagerUser');

    if (token && user) {
      return { token, user: JSON.parse(user) }
    } return {} as IAuthState;
  });

  const signInDev = useCallback(async (credentials: CredentialsDev) => {
    const res = await api.post('/sessions', credentials);
    const { user, token } = res.data;

    localStorage.setItem('@Dev:ProjectManagerToken', token);
    localStorage.setItem('@Dev:ProjectManagerUser', JSON.stringify(user));
    setData(data => ({ ...data, user, token }));
  }, []);

  const signOutDev = useCallback(() => {
    localStorage.removeItem('@Dev:ProjectManagerToken');
    localStorage.removeItem('@Dev:ProjectManagerUser');
    setData({} as IAuthState);
    navigate('/');
  }, [navigate]);


  return (
    <AuthContext.Provider value={{
      user: data.user,
      token: data.token,
      signInDev,
      signOutDev

    }}>
      {children}
    </AuthContext.Provider>
  );
}

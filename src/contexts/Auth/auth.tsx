import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginDB } from "../../service/auth";
import { User, deleteUser } from "firebase/auth";
import { UserCreate } from "../../storage/auth/createUser";
import { UserDelete } from "../../storage/auth/deleteUser";
import { getUser } from "../../storage/auth/getUser";

interface IAuthContext {
  user?: User;
  LogIn(email: string, password: string): Promise<void>;
  LogOut(): void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

type AuthProps = {
  children: JSX.Element;
}

export function AuthProvider({ children }: AuthProps) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    AuthOfflineStorage();
  }, []);

  async function AuthOfflineStorage() {
    const authOffline = await getUser();

    if (authOffline) {
      setUser(authOffline);
    }
  }

  async function LogIn(email: string, password: string) {
    try {
      const userAux = await LoginDB(email, password);
      if (userAux)
        UserCreate(userAux);
      setUser(userAux);
    } catch (error) {
      throw error;
    }
  }

  function LogOut() {
    setUser(undefined);
    UserDelete();
  }

  return (
    <AuthContext.Provider
      value={{ user, LogIn, LogOut }}
    >
      {children}
    </AuthContext.Provider>

  )

}
import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUser } from "../interface";
import { LoginDB } from "../service/auth";
import { User } from "firebase/auth";

interface IAuthContext {
  user?: User;
  LogIn(email: string, password: string): Promise<void>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

type AuthProps = {
  children: JSX.Element;
}

export function AuthProvider({ children }: AuthProps) {
  const [user, setUser] = useState<User>();

  async function LogIn(email: string, password: string) {
    try {
      const userAux = await LoginDB(email, password);
      setUser(userAux);
    } catch (error) {
      throw error;
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, LogIn }}
    >
      {children}
    </AuthContext.Provider>

  )

}
import React, { createContext, useEffect, useState } from "react";
import NetInfo from '@react-native-community/netinfo';
import { Alert } from "react-native";

interface IConnectionContext {
  connection: boolean;
}

export const ConnectionContext = createContext<IConnectionContext>({} as IConnectionContext);

type IConnectionProps = {
  children: JSX.Element;
}

export function ConnectionProvider({ children }: IConnectionProps) {
  const [connection, setConnection] = useState<boolean>(false);

  useEffect(() => {
    workerConnection();
  }, []);

  function workerConnection() {
    NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);

      setConnection(state.isConnected === true);
    });
  }

  return (
    <ConnectionContext.Provider
      value={{ connection }}
    >
      {children}
    </ConnectionContext.Provider>

  )

}
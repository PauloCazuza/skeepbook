import React, { createContext, useEffect, useState } from "react";
import NetInfo from '@react-native-community/netinfo';
import { Alert } from "react-native";
import { sheepGetAll, sheepGetAllNotSend } from "../../storage/sheep/sheepsGetAll";
import { addSheepDB } from "../../service/sheep";
import { sheepDeleteOf4Months } from "../../storage/sheep/sheepDeleteOfLast4Months";
import { sheepCreateSentArray, sheepDeletNotSent } from "../../storage/sheep/sheepCreate";

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

  useEffect(() => {
    if (connection)
      sendSheepsToDB();
  }, [connection]);

  function workerConnection() {
    NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);

      setConnection(state.isConnected === true);
      // setConnection(false);
    });
  }

  async function sendSheepsToDB() {
    const sheepsOffline = await sheepGetAllNotSend();
    try {
      if (sheepsOffline.length > 0) {
        sheepsOffline.forEach(async element => {
          await addSheepDB(element);
        });
      }

      if (sheepsOffline.length > 0) {
        await sheepCreateSentArray(sheepsOffline);
        await sheepDeletNotSent();
      }

      if (sheepsOffline.length > 0) {
        sheepDeleteOf4Months();
      }
    } catch (error) {

    }

  }

  return (
    <ConnectionContext.Provider
      value={{ connection }}
    >
      {children}
    </ConnectionContext.Provider>

  )

}
import { NativeBaseProvider } from 'native-base';
import { useEffect } from 'react';
import Routes from './src/routes';
import { app } from './src/service/configure';

export default function App() {

  useEffect(() => {
    initializeDB();
  }, []);

  async function initializeDB() {
    await app;
  }

  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
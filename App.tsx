import { NativeBaseProvider } from 'native-base';
import { useEffect } from 'react';
import { AuthProvider } from './src/contexts/Auth/auth';
import Routes from './src/routes';
import { app } from './src/service/configure';
import FontsProvider from './src/components/Fonts';
import { ConnectionProvider } from './src/contexts/Connection';

export default function App() {

  useEffect(() => {
    initializeDB();
  }, []);

  async function initializeDB() {
    await app;
  }

  return (
    <ConnectionProvider>
      <AuthProvider>
        <NativeBaseProvider>
          <FontsProvider>
            <Routes />
          </FontsProvider>
        </NativeBaseProvider>
      </AuthProvider>
    </ConnectionProvider>
  );
}
import { NativeBaseProvider } from 'native-base';
import { useEffect } from 'react';
import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';
import { app } from './src/service/configure';
import FontsProvider from './src/components/Fonts';

export default function App() {

  useEffect(() => {
    initializeDB();
  }, []);

  async function initializeDB() {
    await app;
  }

  return (
    <AuthProvider>
      <NativeBaseProvider>
        <FontsProvider>
          <Routes />
        </FontsProvider>
      </NativeBaseProvider>
    </AuthProvider>
  );
}
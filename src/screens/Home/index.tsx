import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Alert, Text, View } from 'react-native';
import Button from '../../components/Button';
import Gradient from '../../components/Gradient';
import { styles } from './styles';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Gradient />
      <Button title="Cadastrar Pesagem" onPress={() => navigation.navigate("NewSheep")} />
      <Button title="Visualizar Pesagens" onPress={() => navigation.navigate("Sheeps")} />
    </View>
  );
}


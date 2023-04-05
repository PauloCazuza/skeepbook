import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Alert, Text, View, useWindowDimensions } from 'react-native';
import Button from '../../components/Button';
import Gradient from '../../components/Gradient';
import { styles } from './styles';
import { Image } from 'native-base';

import Gepov from "../../assets/gepov.png";
import Ovelha from "../../assets/ovelhaNaoVaiPrestar.png";
import OvelhaVermelha from "../../assets/ovelhaNaoVaiQuerSoQueVermelha.png";
import Gramado from "../../assets/gramado.png";
import Background from "../../assets/backgroundOvelha.png";

export default function Home() {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Gradient />
      {/* <Image
        source={Gepov}
        resizeMode="contain"
        alt="Alternate Text"
        position="absolute"
        top="12%"
        size={150}
      /> */}
      <Image
        source={Background}
        resizeMode="cover"
        alt="Alternate Text"
        position="absolute"
        bottom={0}
        width={width}
        height={height}
      />
      <Button title="Cadastrar Pesagem" onPress={() => navigation.navigate("NewSheep")} />
      <Button title="Visualizar Pesagens" onPress={() => navigation.navigate("Sheeps")} />
    </View>
  );
}


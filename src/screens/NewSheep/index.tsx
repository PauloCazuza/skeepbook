import { StatusBar } from 'expo-status-bar';
import { Divider, Heading, ScrollView } from 'native-base';
import { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';
import Button from '../../components/Button';
import Gradient from '../../components/Gradient';
import TextInputCustom from '../../components/TextInput';
import { Sheep } from '../../interface';
import { setSheepDB } from '../../service/sheep';
import { styles } from './styles';

export default function NewSheep() {
  const [numberSheep, setNumberSheep] = useState<string>("");
  const [showCrud, setShowCrud] = useState<boolean>(false);
  const [sheep, setSheep] = useState<Sheep>(generateSheep());

  function generateSheep() {
    return {
      ECC: "",
      famacha: "",
      peso: "",
      variedade: "",
    };
  }

  async function addSheep(newSheep: Sheep) {
    newSheep.numero = Number(numberSheep);
    const test = await setSheepDB(newSheep);

    if (test)
      Alert.alert("Sucesso");
    else
      Alert.alert("Erro");
  }

  return (
    <View style={styles.container}>
      <Gradient />
      {
        !showCrud && (
          <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
            <TextInputCustom
              value={numberSheep}
              label="Insira o número da ovelha"
              keyboardType="decimal-pad"
              onChangeText={(value) => setNumberSheep(value)}
            />
            <Button title="Buscar" onPress={() => setShowCrud(!showCrud)} />
          </View>
        )
      }
      {
        showCrud && (
          <View style={{
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 50,
            padding: 10,
          }}>
            <Heading size="lg" textAlign="center" >
              {`Ovelha número ${numberSheep}`}
            </Heading>
            <Divider my={2} />
            <TextInputCustom
              value={sheep?.variedade}
              label="Variedade"
              onChangeText={(value) => setSheep({ ...sheep, variedade: value })}
            />
            <TextInputCustom
              value={sheep?.famacha}
              label="Famacha"
              onChangeText={(value) => setSheep({ ...sheep, famacha: value })}
            />
            <TextInputCustom
              value={sheep?.ECC}
              label="ECC"
              onChangeText={(value) => setSheep({ ...sheep, ECC: value })}
            />
            <TextInputCustom
              value={sheep?.peso}
              label="Peso"
              onChangeText={(value) => setSheep({ ...sheep, peso: value })}
            />
            <Button title="Cadastrar ovelha" onPress={() => addSheep(sheep)} />
          </View>
        )
      }
    </View>
  );
}


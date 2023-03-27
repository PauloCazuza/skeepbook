import { useState, useCallback } from 'react';
import { Divider, Heading, ScrollView } from 'native-base';
import { RouteProp, useFocusEffect, useRoute } from '@react-navigation/native';
import { Alert, View } from 'react-native';
import Button from '../../components/Button';
import Gradient from '../../components/Gradient';
import TextInputCustom from '../../components/TextInput';
import { Sheep } from '../../interface';
import { addSheepDB } from '../../service/sheep';
import { styles } from './styles';

export default function NewSheep() {
  const [numberSheep, setNumberSheep] = useState<string>("");
  const [showCrud, setShowCrud] = useState<boolean>(false);
  const [sheep, setSheep] = useState<Sheep>({} as Sheep);

  useFocusEffect(
    useCallback(() => {
      generateSheep();
    }, [])
  );

  function generateSheep() {
    setNumberSheep("");
    setShowCrud(false);
    setSheep({
      ECC: "",
      famacha: "",
      peso: "",
      variedade: "",
      dataDaPesagem: new Date(),
    } as Sheep);
  }

  async function addSheep(sheepObj: Sheep) {
    sheepObj.numero = sheepObj.numero || Number(numberSheep);
    const valid = await addSheepDB(sheepObj);

    if (valid)
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
              keyboardType={'decimal-pad'}
              label="Famacha"
              onChangeText={(value) => setSheep({ ...sheep, famacha: value })}
            />
            <TextInputCustom
              value={sheep?.ECC}
              keyboardType={'decimal-pad'}
              label="ECC"
              onChangeText={(value) => setSheep({ ...sheep, ECC: value })}
            />
            <TextInputCustom
              value={sheep?.peso}
              keyboardType={'decimal-pad'}
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


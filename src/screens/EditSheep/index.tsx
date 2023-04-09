import { useState, useCallback, useContext } from 'react';
import { Divider, Heading, ScrollView } from 'native-base';
import { RouteProp, useFocusEffect, useRoute } from '@react-navigation/native';
import { Alert, View } from 'react-native';
import Button from '../../components/Button';
import Gradient from '../../components/Gradient';
import TextInputCustom from '../../components/TextInput';
import { Sheep } from '../../interface';
import { deleteSheepDB, updateSheepDB } from '../../service/sheep';
import { styles } from './styles';
import { ConnectionContext } from '../../contexts/Connection';
import { sheepEditNotSent } from '../../storage/sheep/sheepUpdate';

type TypeDiagnosisParam = { sheep: Sheep };

export default function EditSheep() {
  const { connection } = useContext(ConnectionContext);
  const { params: sheepParam } = useRoute<RouteProp<TypeDiagnosisParam, "sheep">>();
  const [sheep, setSheep] = useState<Sheep>();

  useFocusEffect(
    useCallback(() => {
      generateSheep();
    }, [sheepParam])
  );

  function generateSheep() {
    if (sheepParam) {
      setSheep(sheepParam);
    }
  }

  async function editSheep(sheepObj: Sheep) {
    const valid = await (connection ? updateSheepDB(sheepObj) : sheepEditNotSent(sheepObj));

    if (valid)
      Alert.alert("Sucesso");
    else
      Alert.alert("Erro");
  }

  async function deleteSheep(sheepObj: Sheep) {
    const valid = await deleteSheepDB(sheepObj);

    if (valid)
      Alert.alert("Sucesso");
    else
      Alert.alert("Erro");
  }

  return (
    <View style={styles.container}>
      <Gradient />

      <View style={{
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 50,
        padding: 10,
      }}>
        <Heading size="lg" textAlign="center" >
          {`Ovelha número ${sheep?.numero}`}
        </Heading>
        <Divider my={2} />
        <TextInputCustom
          value={sheep?.variedade}
          label="Variedade"
          onChangeText={(value) => setSheep({ ...sheep!, variedade: value })}
        />
        <TextInputCustom
          value={sheep?.famacha}
          keyboardType={'decimal-pad'}
          label="Famacha"
          onChangeText={(value) => setSheep({ ...sheep!, famacha: value })}
        />
        <TextInputCustom
          value={sheep?.ECC}
          keyboardType={'decimal-pad'}
          label="ECC"
          onChangeText={(value) => setSheep({ ...sheep!, ECC: value })}
        />
        <TextInputCustom
          value={sheep?.peso}
          keyboardType={'decimal-pad'}
          label="Peso"
          onChangeText={(value) => setSheep({ ...sheep!, peso: value })}
        />
        <Button title="Editar ovelha" onPress={() => editSheep(sheep!)} />
        {
          connection && <Button title="Excluir ovelha" onPress={() => deleteSheep(sheep!)} />
        }
      </View>
    </View>
  );
}


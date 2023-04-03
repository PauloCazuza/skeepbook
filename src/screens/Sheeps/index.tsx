import { useState, useCallback } from "react";
import { ActivityIndicator, View } from "react-native";
import { FlatList, Heading, Text } from "native-base";
import Gradient from "../../components/Gradient";
import { styles } from "./styles";
import { Sheep } from "../../interface";
import { getSheepDB } from "../../service/sheep";
import SheepCard from "../../components/SheepCard";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Accordion, { IAccordion } from "../../components/Accordion";
import { formatDateBR } from "../../util/formatDate";



function Sheeps() {
    const navigation = useNavigation();
    const [dataAccordion, setDataAccordion] = useState<IAccordion>();
    const [loading, setLoading] = useState<boolean>(false);

    useFocusEffect(
        useCallback(() => {
            getAllSheeps();
        }, [])
    );

    async function getAllSheeps() {
        setLoading(true);
        const sheepsDB = await getSheepDB();
        const aux: IAccordion = {
            dataSheeps: []
        };

        for (let i = 0; i < sheepsDB.length; i++) {
            const dateAcualy = formatDateBR(sheepsDB[i].dataDaPesagem);
            const indexData = aux.dataSheeps!.findIndex(x => x.date === dateAcualy);
            if (indexData === -1)
                aux.dataSheeps!.push({
                    date: dateAcualy,
                    sheeps: [sheepsDB[i]]
                });
            else
                aux.dataSheeps![indexData].sheeps.push(sheepsDB[i]);
        }

        setDataAccordion(aux);
        setLoading(false);
    }

    function goEditSheep(sheep: Sheep) {
        navigation.navigate("EditSheep", sheep);
    }

    return (
        <>
            <Accordion dataSheeps={dataAccordion?.dataSheeps} />
            {/* <View style={styles.container}>
                <Gradient />
                {
                    loading ? (
                        <ActivityIndicator size="large" />
                    )
                        :
                        <>
                            <Heading my="2">
                                Lista de Pesagens
                            </Heading>
                            <FlatList
                                data={dataAccordion}
                                width="full"
                                renderItem={({ item }) => {
                                    return (
                                        <SheepCard key={item} sheep={item} onPress={() => goEditSheep(item)} />
                                    )
                                }}
                            />
                        </>
                }
            </View> */}
        </>
    );
}

export default Sheeps;
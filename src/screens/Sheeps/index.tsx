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

        try {
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
        }
        catch (error) {
        };

        setLoading(false);
    }

    function goEditSheep(sheep: Sheep) {
        navigation.navigate("EditSheep", sheep);
    }

    return (
        <>
            {
                !loading
                    ?
                    <Accordion
                        dataSheeps={dataAccordion?.dataSheeps}
                    />
                    :
                    <ActivityIndicator size="large" />
            }
        </>
    );
}

export default Sheeps;
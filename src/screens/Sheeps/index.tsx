import { useState, useCallback, useContext } from "react";
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
import { ConnectionContext } from "../../contexts/Connection";
import { sheepGetAll } from "../../storage/sheep/sheepsGetAll";



function Sheeps() {
    const { connection } = useContext(ConnectionContext);
    const [dataAccordion, setDataAccordion] = useState<IAccordion>();
    const [loading, setLoading] = useState<boolean>(false);

    useFocusEffect(
        useCallback(() => {
            getAllSheeps(connection);
        }, [connection])
    );

    async function getAllSheeps(connection: boolean) {
        setLoading(true);

        try {
            const sheepsDB = await (connection ? getSheepDB() : sheepGetAll());
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
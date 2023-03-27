import { useState, useCallback } from "react";
import { ActivityIndicator, View } from "react-native";
import { FlatList, Heading, Text } from "native-base";
import Gradient from "../../components/Gradient";
import { styles } from "./styles";
import { Sheep } from "../../interface";
import { getSheepDB } from "../../service/sheep";
import SheepCard from "../../components/SheepCard";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

function Sheeps() {
    const navigation = useNavigation();
    const [sheeps, setSheeps] = useState<Sheep[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useFocusEffect(
        useCallback(() => {
            getAllSheeps();
        }, [])
    );

    async function getAllSheeps() {
        setLoading(true);
        const sheepsDB = await getSheepDB();
        setSheeps(sheepsDB);
        setLoading(false);
    }

    function goEditSheep(sheep: Sheep) {
        navigation.navigate("EditSheep", sheep);
    }

    return (
        <View style={styles.container}>
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
                            data={sheeps}
                            width="full"
                            renderItem={({ item }) => {
                                return (
                                    <SheepCard key={item.id} sheep={item} onPress={() => goEditSheep(item)} />
                                )
                            }}
                        />
                    </>
            }
        </View>
    );
}

export default Sheeps;
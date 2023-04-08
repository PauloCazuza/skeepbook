import AsyncStorage from "@react-native-async-storage/async-storage";
import { Sheep } from "../../interface";
import { SHEEP_COLLECTION } from "../storageConfig";

export async function sheepGetAll() {
    try {
        let storage = (await AsyncStorage.getItem(SHEEP_COLLECTION));

        let sheep: Sheep[] = storage ? JSON.parse(storage) : [];
        sheep = sheep.map(item => {
            return {
                ...item,
                dataDaPesagem: new Date(item.dataDaPesagem),
                enviada: item.enviada == true
            }
        });

        return sheep;
    } catch (error) {
        throw error;
    }
}

export async function sheepGetAllNotSend() {
    try {
        let storage = await sheepGetAll();

        let sheep: Sheep[] = storage.filter(sheep => sheep.enviada !== true).map(item => {
            return {
                ...item,
                dataDaPesagem: new Date(item.dataDaPesagem),
                enviada: item.enviada == true
            }
        });

        return sheep;
    } catch (error) {
        throw error;
    }
}

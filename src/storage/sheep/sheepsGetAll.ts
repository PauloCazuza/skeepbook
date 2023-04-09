import AsyncStorage from "@react-native-async-storage/async-storage";
import { Sheep } from "../../interface";
import { SHEEP_COLLECTION_NOT_SENT, SHEEP_COLLECTION_SENT } from "../storageConfig";

export async function sheepGetAll() {
    try {
        let storageSent = (await AsyncStorage.getItem(SHEEP_COLLECTION_SENT));
        let storageNotSent = (await AsyncStorage.getItem(SHEEP_COLLECTION_NOT_SENT));

        let sheepSent: Sheep[] = storageSent ? JSON.parse(storageSent) : [];
        let sheepNotSent: Sheep[] = storageNotSent ? JSON.parse(storageNotSent) : [];

        let sheep = sheepSent.concat(sheepNotSent);

        sheep = sheep.map(item => {
            return {
                ...item,
                dataDaPesagem: new Date(item.dataDaPesagem),
                enviada: item.enviada == true
            }
        });

        return sheep.sort((a, b) => (a.numero || 0) - (b.numero || 0));
    } catch (error) {
        throw error;
    }
}

export async function sheepGetAllNotSend() {
    try {
        let storageNotSent = (await AsyncStorage.getItem(SHEEP_COLLECTION_NOT_SENT));
        let sheepNotSent: Sheep[] = storageNotSent ? JSON.parse(storageNotSent) : [];

        let sheep = sheepNotSent;

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

export async function sheepGetAllSend() {
    try {
        let storageSent = (await AsyncStorage.getItem(SHEEP_COLLECTION_SENT));
        let sheepSent: Sheep[] = storageSent ? JSON.parse(storageSent) : [];

        let sheep = sheepSent;

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

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Sheep } from "../../interface";
import { SHEEP_COLLECTION } from "../storageConfig";

export async function sheepGetAll() {
    try {
        const storage = await AsyncStorage.getItem(SHEEP_COLLECTION);

        const sheep: Sheep[] = storage ? JSON.parse(storage) : [];

        return sheep;
    } catch (error) {
        throw error;
    }
}

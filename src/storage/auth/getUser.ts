import AsyncStorage from "@react-native-async-storage/async-storage";
import { Sheep } from "../../interface";
import { AUTH_COLLECTION } from "../storageConfig";
import { User } from "firebase/auth";

export async function getUser() {
    try {
        const storage = await AsyncStorage.getItem(AUTH_COLLECTION);
        const sheep: User | null = storage ? JSON.parse(storage) : null;
        return sheep;
    } catch (error) {
        throw error;
    }
}

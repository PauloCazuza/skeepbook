import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../util/appError";
import { SHEEP_COLLECTION_SENT } from "../storageConfig";
import { sheepGetAll } from "./sheepsGetAll";
import { Sheep } from "../../interface";

export async function sheepDeleteOf4Months() {
    try {
        const last4Month = new Date();
        last4Month.setMonth(-4);
        const storageSheeps = await sheepGetAll();
        const Sheep4Months = storageSheeps.filter(sheep => sheep.dataDaPesagem > last4Month);

        const storage = JSON.stringify(Sheep4Months);
        await AsyncStorage.setItem(SHEEP_COLLECTION_SENT, storage);
        return true;
    } catch (error) {
        throw error;
    }
}



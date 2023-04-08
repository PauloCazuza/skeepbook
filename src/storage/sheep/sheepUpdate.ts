import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../util/appError";
import { SHEEP_COLLECTION } from "../storageConfig";
import { sheepGetAll } from "./sheepsGetAll";
import { Sheep } from "../../interface";

export async function SheepUpdate(editSheep: Sheep) {
    try {
        const storageSheeps = await sheepGetAll();
        const sheepIndex = await storageSheeps.findIndex(sheep => sheep.numero === editSheep.numero && sheep.dataDaPesagem === editSheep.dataDaPesagem);

        if (sheepIndex > -1) {
            storageSheeps[sheepIndex] = editSheep;
        }

        const storage = JSON.stringify(storageSheeps);
        await AsyncStorage.setItem(SHEEP_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}

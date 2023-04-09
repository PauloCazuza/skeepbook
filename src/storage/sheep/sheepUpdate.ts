import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../util/appError";
import { SHEEP_COLLECTION_NOT_SENT, SHEEP_COLLECTION_SENT } from "../storageConfig";
import { sheepGetAll, sheepGetAllNotSend, sheepGetAllSend } from "./sheepsGetAll";
import { Sheep } from "../../interface";
import { formatDateBR } from "../../util/formatDate";

export async function sheepEditNotSent(editSheep: Sheep) {
    try {
        const storageSheeps = await sheepGetAllNotSend();
        const indexStorage = storageSheeps.findIndex(sheep => sheep && editSheep && sheep.numero === editSheep.numero && formatDateBR(sheep.dataDaPesagem) === formatDateBR(sheep.dataDaPesagem));
        if (indexStorage > -1) {
            storageSheeps[indexStorage] = { ...editSheep };
        }
        const storage = JSON.stringify([...storageSheeps]);
        await AsyncStorage.setItem(SHEEP_COLLECTION_NOT_SENT, storage);
        return true;
    } catch (error) {
        console.log("edit offline", error);
        throw error;
    }
}
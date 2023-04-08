import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../util/appError";
import { SHEEP_COLLECTION } from "../storageConfig";
import { sheepGetAll } from "./sheepsGetAll";
import { Sheep } from "../../interface";
import { formatDateBR } from "../../util/formatDate";

export async function sheepUpdate(editSheep: Sheep) {
    try {
        const storageSheeps = await sheepGetAll();
        const sheepIndex = await storageSheeps.findIndex(sheep => sheep.numero === editSheep.numero && formatDateBR(sheep.dataDaPesagem) === formatDateBR(editSheep.dataDaPesagem));

        if (sheepIndex > -1) {
            storageSheeps[sheepIndex] = { ...editSheep };
        }

        console.log("objeto novo ", editSheep);

        console.log("update", sheepIndex, [...storageSheeps]);

        const storage = JSON.stringify([...storageSheeps]);
        await AsyncStorage.setItem(SHEEP_COLLECTION, storage);
    } catch (error) {
        throw error;
    }
}

export async function sheepUpdateOf4Months() {
    try {
        const last4Month = new Date();
        last4Month.setMonth(-4);
        const storageSheeps = await sheepGetAll();
        const Sheep4Months = await storageSheeps.filter(sheep => sheep.dataDaPesagem > last4Month);

        const storage = JSON.stringify(Sheep4Months);
        await AsyncStorage.setItem(SHEEP_COLLECTION, storage);
        return true;
    } catch (error) {
        throw error;
    }
}

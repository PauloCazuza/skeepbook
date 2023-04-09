import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../util/appError";
import { SHEEP_COLLECTION_NOT_SENT, SHEEP_COLLECTION_SENT } from "../storageConfig";
import { sheepGetAll, sheepGetAllNotSend, sheepGetAllSend } from "./sheepsGetAll";
import { Sheep } from "../../interface";
import { formatDateBR } from "../../util/formatDate";

export async function sheepCreateNotSent(newSheep: Sheep) {
    try {
        const storageSheeps = await sheepGetAllNotSend();
        const storage = JSON.stringify([...storageSheeps, newSheep]);
        await AsyncStorage.setItem(SHEEP_COLLECTION_NOT_SENT, storage);
        return true;
    } catch (error) {
        throw error;
    }
}

export async function sheepDeletNotSent() {
    try {
        const storageSheeps: Sheep[] = [];
        const storage = JSON.stringify([...storageSheeps]);
        await AsyncStorage.setItem(SHEEP_COLLECTION_NOT_SENT, storage);
        return true;
    } catch (error) {
        throw error;
    }
}

export async function sheepCreateSent(newSheep: Sheep) {
    try {
        const storageSheeps = await sheepGetAllSend();
        const SheepAlreadyExists = await storageSheeps.filter(sheep => sheep.numero === newSheep.numero && formatDateBR(sheep.dataDaPesagem) === formatDateBR(newSheep.dataDaPesagem)).length > 0;

        if (SheepAlreadyExists) {
            throw new AppError("Já existe uma ovelha com este número nesta data.");
        }

        const storage = JSON.stringify([...storageSheeps, newSheep]);
        await AsyncStorage.setItem(SHEEP_COLLECTION_SENT, storage);
        return true;
    } catch (error) {
        throw error;
    }
}

export async function sheepCreateSentArray(newSheepArray: Sheep[]) {
    try {
        let storageSheeps = await sheepGetAllSend();
        storageSheeps.concat(newSheepArray);

        const storage = JSON.stringify([...storageSheeps]);
        await AsyncStorage.setItem(SHEEP_COLLECTION_SENT, storage);
        return true;
    } catch (error) {
        throw error;
    }
}

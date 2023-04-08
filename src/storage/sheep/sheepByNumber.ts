import AsyncStorage from "@react-native-async-storage/async-storage";
import { Sheep } from "../../interface";
import { SHEEP_COLLECTION } from "../storageConfig";
import { sheepGetAll } from "./sheepsGetAll";

export async function getSheepByNumber(sheepNumber: number) {
    try {
        const storageSheeps = await sheepGetAll();
        const SheepAlreadyExists = await storageSheeps.filter(sheep => sheep.numero === sheepNumber);

        if (SheepAlreadyExists.length === 0)
            return null;

        return SheepAlreadyExists[0];

    } catch (error) {
        throw error;
    }
}

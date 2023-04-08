import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../util/appError";
import { SHEEP_COLLECTION } from "../storageConfig";
import { sheepGetAll } from "./sheepsGetAll";
import { Sheep } from "../../interface";

export async function SheepCreate(newSheep: Sheep) {
    try {
        const storageSheeps = await sheepGetAll();
        const SheepAlreadyExists = await storageSheeps.filter(sheep => sheep.numero === newSheep.numero).length > 0;

        if (SheepAlreadyExists) {
            throw new AppError("Já existe uma ovelha com este número.");
        }

        const storage = JSON.stringify([...storageSheeps, newSheep]);
        await AsyncStorage.setItem(SHEEP_COLLECTION, storage);

    } catch (error) {
        throw error;
    }
}

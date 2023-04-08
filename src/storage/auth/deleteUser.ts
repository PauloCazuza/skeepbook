import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH_COLLECTION } from "../storageConfig";
import { User } from "firebase/auth";

export async function UserDelete() {
  try {
    const storage = JSON.stringify(null);
    await AsyncStorage.setItem(AUTH_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}

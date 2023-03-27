import { Sheep } from "../interface";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            NewSheep: undefined;
            EditSheep: Sheep;
            Sheeps: undefined;
        }
    }
}
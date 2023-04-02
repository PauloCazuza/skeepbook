import { Timestamp } from "firebase/firestore";

export interface Sheep {
    id?: string;
    numero?: number;
    variedade: string;
    peso: string;
    ECC: string;
    famacha: string;
    dataDaPesagem: Date;
}

export interface User {
    id: string;
    online?: boolean;
}
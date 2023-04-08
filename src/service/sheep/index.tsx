import { useContext } from "react";
import { addDoc, collection, doc, getDocs, getFirestore, limit, orderBy, query, setDoc, Timestamp, where } from "firebase/firestore";
import { Sheep } from "../../interface";
import { ConnectionContext } from "../../contexts/Connection";
import { SheepCreate } from "../../storage/sheep/sheepCreate";
import { sheepGetAll } from "../../storage/sheep/sheepsGetAll";
import { getSheepByNumber } from "../../storage/sheep/sheepByNumber";
import { SheepUpdate } from "../../storage/sheep/sheepUpdate";

export async function getSheepDB() {
    const { connection } = useContext(ConnectionContext);

    if (connection) {
        const db = getFirestore();
        const colRef = collection(db, "sheep");
        var sheeps: Sheep[] = [];

        await getDocs(colRef)
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    const data = { ...doc.data() } as Sheep;
                    const timestamp = data.dataDaPesagem as unknown as Timestamp;

                    sheeps.push({ ...doc.data() as Sheep, id: doc.id, dataDaPesagem: timestamp?.toDate() })
                });
            })

        return sheeps.sort((a, b) => a.numero! - b.numero!);
    } else {
        return (await sheepGetAll()).sort((a, b) => a.numero! - b.numero!);
    }

}

export async function getSheepByNumberDB(numberSheep: number) {
    const { connection } = useContext(ConnectionContext);

    if (connection) {
        const db = getFirestore();
        const colRef = collection(db, "sheep");
        var sheeps: Sheep[] = [];

        const q = await query(colRef, where("numero", "==", numberSheep), orderBy("dataDaPesagem", "desc"), limit(1));

        await getDocs(q)
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    const data = { ...doc.data() } as Sheep;
                    const timestamp = data.dataDaPesagem as unknown as Timestamp;

                    sheeps.push({ ...doc.data() as Sheep, id: undefined, dataDaPesagem: timestamp?.toDate() })
                });
            });

        if (sheeps.length > 0)
            return sheeps[0];
        else
            return null;
    } else {
        return getSheepByNumber(numberSheep);
    }


}

export async function addSheepDB(newSheep: Sheep) {
    const { connection } = useContext(ConnectionContext);

    if (connection) {
        const db = getFirestore();
        delete newSheep.id;

        try {
            const docRef = await addDoc(collection(db, "sheep"), newSheep);
            console.log("Document written with ID: ", docRef.id);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    } else {
        SheepCreate(newSheep);
    }
}

export async function updateSheepDB(editSheep: Sheep) {
    const { connection } = useContext(ConnectionContext);

    if (connection) {
        const db = getFirestore();
        const washingtonRef = doc(db, "sheep", editSheep.id!);

        try {
            const docRef = await setDoc(washingtonRef, editSheep);
            console.log("Document written with ID: ", docRef);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    } else {
        SheepUpdate(editSheep);

        return true;
    }

}
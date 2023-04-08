import { useContext } from "react";
import { addDoc, collection, doc, getDocs, getFirestore, limit, orderBy, query, setDoc, Timestamp, where } from "firebase/firestore";
import { Sheep } from "../../interface";

export async function getSheepDB() {

    const db = getFirestore();
    const colRef = collection(db, "sheep");
    console.log("entrou aquio");
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
}

export async function getSheepByNumberDB(numberSheep: number) {

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
}

export async function addSheepDB(newSheep: Sheep) {

    const db = getFirestore();
    delete newSheep.id;
    delete newSheep.enviada;

    try {
        const docRef = await addDoc(collection(db, "sheep"), newSheep);
        console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }

}

export async function updateSheepDB(editSheep: Sheep) {
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
}

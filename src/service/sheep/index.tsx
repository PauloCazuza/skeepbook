import { addDoc, collection, doc, getDocs, getFirestore, setDoc, Timestamp } from "firebase/firestore";
import { Sheep } from "../../interface";

export async function getSheepDB() {
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
}

export async function addSheepDB(newSheep: Sheep) {
    const db = getFirestore();

    try {
        const docRef = await addDoc(collection(db, "sheep"), newSheep);
        console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }

}

export async function updateSheepDB(newSheep: Sheep) {
    const db = getFirestore();
    const washingtonRef = doc(db, "sheep", newSheep.id!);

    try {
        const docRef = await setDoc(washingtonRef, newSheep);
        console.log("Document written with ID: ", docRef);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }

}
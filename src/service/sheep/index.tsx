import { addDoc, collection, getDocs, getFirestore, QuerySnapshot, setDoc } from "firebase/firestore";
import { Sheep } from "../../interface";

export async function getSheepDB() {
    const db = getFirestore();
    const colRef = collection(db, "sheep");
    var sheeps: Sheep[] = [];

    await getDocs(colRef)
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                sheeps.push({ ...doc.data() as Sheep, id: doc.id })
            });
        })

    return sheeps;
}

export async function setSheepDB(newSheep: Sheep) {
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
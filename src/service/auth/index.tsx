import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from "firebase/auth";

export async function LoginDB(email: string, password: string) {
  const auth = getAuth();
  let user: User | undefined = undefined;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("code: " + errorCode + " message: " + errorMessage);
      throw new Error("code: " + errorCode + " message: " + errorMessage);
    });

  return user;
}

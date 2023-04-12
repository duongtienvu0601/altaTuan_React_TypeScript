import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCsuztkr8YieOe75cD_L7Fj_dLW1ERrRo4",
    authDomain: "alta-tuan1-fe744.firebaseapp.com",
    projectId: "alta-tuan1-fe744",
    storageBucket: "alta-tuan1-fe744.appspot.com",
    messagingSenderId: "491621800357",
    appId: "1:491621800357:web:87b9dbe2c04573755e704c",
    measurementId: "G-J9HGNZC35N"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const getUsers = async () => {
  const usersRef = db.collection('Sinhvien');
  const snapshot = await usersRef.get();
  const users = snapshot.docs.map(doc => doc.data());
  return users;
};

export const addUser = async (user: any) => {
  const usersRef = db.collection('Sinhvien');
  await usersRef.add(user);
};

export const updateUser = async (id: string, updatedUser: any) => {
  const userRef = db.collection('Sinhvien').doc(id);
  await userRef.update(updatedUser);
};

export const deleteUser = async (id: string) => {
  const userRef = db.collection('Sinhvien').doc(id);
  await userRef.delete();
};


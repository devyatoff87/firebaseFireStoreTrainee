import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import db from "firebase";

export const onNewHandle = async (payload) => {
  const collectionRef = collection(db, "colors");
  await addDoc(collectionRef, { ...payload, timestamp: serverTimestamp() });
};

export const onEditHandle = async (id, payload) => {
  const docRef = doc(db, "colors", id);
  await updateDoc(docRef, payload);
};

export const onRemoveHandle = async (id) => {
  const docRef = doc(db, "colors", id);
  await deleteDoc(docRef);
};

export const onFilterHandle = async (id) => {
  const docRef = doc(db, "colors", id);
  await deleteDoc(docRef);
};

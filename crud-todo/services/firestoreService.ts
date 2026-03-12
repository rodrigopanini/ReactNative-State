import {
  Firestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore"

export function createFirestoreService<T extends { id?: string }>(
  db: Firestore,
  collectionName: string,
) {
  if (!db) {
    throw new Error("Firestore instance (db) is undefined or null.")
  }
  const colRef = collection(db, collectionName)

  return {
    subscribe(callback: (items: T[]) => void) {
      const q = query(colRef)

      return onSnapshot(
        q,
        (snapshot) => {
          const data = snapshot.docs.map((d) => ({
            id: d.id,
            ...(d.data() as T),
          }))

          callback(data)
        },
        (error) => {
          console.error("Error in onSnapshot:", error)
        },
      )
    },

    async insert(data: Omit<T, "id">) {
      return addDoc(colRef, data)
    },

    async update(id: string, data: any) {
      return updateDoc(doc(db, collectionName, id) as any, data)
    },

    async delete(id: string) {
      return deleteDoc(doc(db, collectionName, id))
    },
  }
}
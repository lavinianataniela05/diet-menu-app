import { db } from "@/lib/firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"
import { getIngredients } from "@/features/ingredients/ingredientService"

export const addIngredient = (name: string, caloriesPerGram: number) =>
  addDoc(collection(db, "ingredients"), {
    name,
    caloriesPerGram
  })

export const getIngredients = async () => {
  const snap = await getDocs(collection(db, "ingredients"))
  return snap.docs.map(d => ({
    id: d.id,
    ...d.data()
  }))
}

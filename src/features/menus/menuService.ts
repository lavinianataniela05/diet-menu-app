import { db } from "@/lib/firebase"
import { addDoc, getDocs, collection } from "firebase/firestore"

export const addMenu = (
  name: string,
  category: string,
  ingredients: { ingredientId: string; grams: number }[],
  totalCalories: number
) =>
  addDoc(collection(db, "menus"), {
    name,
    category,
    ingredients,
    totalCalories
  })

export const getMenus = async () => {
  const snap = await getDocs(collection(db, "menus"))
  return snap.docs.map(d => ({
    id: d.id,
    ...d.data()
  }))
}

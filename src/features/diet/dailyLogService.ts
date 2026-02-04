import { db } from "@/lib/firebase"
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion
} from "firebase/firestore"

export const addMenuToToday = async (
  userId: string,
  date: string,
  menuId: string,
  calories: number
) => {

  const id = `${userId}_${date}`
  const ref = doc(db, "dailyLogs", id)
  const snap = await getDoc(ref)

  if (!snap.exists()) {
    await setDoc(ref, {
      userId,
      date,
      menus: [menuId],
      totalCalories: calories
    })
  } else {
    const d = snap.data()

    await updateDoc(ref, {
      menus: arrayUnion(menuId),
      totalCalories: d.totalCalories + calories
    })
  }
}

export const getTodayLog = async (userId: string, date: string) => {
  const ref = doc(db, "dailyLogs", `${userId}_${date}`)
  const snap = await getDoc(ref)
  if (!snap.exists()) return null
  return snap.data()
}

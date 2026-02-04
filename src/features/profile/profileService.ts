import { db } from "@/lib/firebase"
import { doc, setDoc, getDoc } from "firebase/firestore"

export const setTargetCalories = (userId: string, target: number) => {
  return setDoc(doc(db, "userProfiles", userId), {
    userId,
    dailyTargetCalories: target
  })
}

export const getProfile = async (userId: string) => {
  const snap = await getDoc(doc(db, "userProfiles", userId))
  if (!snap.exists()) return null
  return snap.data()
}

import { Routes, Route } from "react-router-dom"

import LoginPage from "@/pages/loginPage"
import RegisterPage from "@/pages/registerPage"
import IngredientsPage from "@/pages/ingredientsPage"
import MenusPage from "@/pages/menusPage"
import DietPage from "@/pages/dietPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/ingredients" element={<IngredientsPage />} />
      <Route path="/menus" element={<MenusPage />} />
      <Route path="/diet" element={<DietPage />} />
    </Routes>
  )
}

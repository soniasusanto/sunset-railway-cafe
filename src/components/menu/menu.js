import React, { useState } from "react"
import Extras from "./extras"
import Mains from "./mains"
import Toast from "./toast"
import Sweets from "./sweets"
import HotDrinks from "./hot-drinks"
import ColdDrinks from "./cold-drinks"

const Menu = () => {
  const [menuCategory, setMenuCategory] = useState("mains")
  let SelectedCategory
  if (menuCategory === "mains") {
    SelectedCategory = Mains
  } else if (menuCategory === "toast") {
    SelectedCategory = Toast
  } else if (menuCategory === "extras") {
    SelectedCategory = Extras
  } else if (menuCategory === "sweets") {
    SelectedCategory = Sweets
  } else if (menuCategory === "hotDrinks") {
    SelectedCategory = HotDrinks
  } else if (menuCategory === "coldDrinks") {
    SelectedCategory = ColdDrinks
  }

  return (
    <section className="menu">
      <h2>TAKEAWAY MENU</h2>
      <ul className="menu-headers">
        <li className="menu-header" onClick={() => setMenuCategory("mains")}>
          Mains
        </li>
        <li className="menu-header" onClick={() => setMenuCategory("toast")}>
          Toast
        </li>
        <li className="menu-header" onClick={() => setMenuCategory("extras")}>
          Extras
        </li>
        <li className="menu-header" onClick={() => setMenuCategory("sweets")}>
          Sweets
        </li>
        <li
          className="menu-header"
          onClick={() => setMenuCategory("hotDrinks")}
        >
          Hot Drinks
        </li>
        <li
          className="menu-header"
          onClick={() => setMenuCategory("coldDrinks")}
        >
          Cold Drinks
        </li>
      </ul>
      <SelectedCategory />
    </section>
  )
}

export default Menu

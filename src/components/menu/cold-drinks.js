import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ColdDrinks = () => {
  const items = [
    {
      id: 1,
      title: "Kopi O/Teh O",
      price: "4.00",
    },
    { id: 2, title: "Kopi/Teh", price: "4.20" },
    { id: 3, title: "Kopi C/Teh C", price: "4.50" },
    { id: 4, title: "Yin Yang", price: "4.40" },

    { id: 5, title: "Latte", price: "5.80" },
    { id: 6, title: "Mocha Latte(Choc)", price: "6.50" },
    { id: 7, title: "Coco Latte(Coconut)", price: "6.50" },
    { id: 8, title: "Hazelnut Latte", price: "6.50" },
    { id: 9, title: "Cappuccino", price: "6.50" },
    { id: 10, title: "Mochaccino", price: "6.50" },
    { id: 11, title: "Hot Chocolate", price: "6.00" },
    { id: 12, title: "Milo", price: "4.40" },
    { id: 13, title: "Horlicks", price: "4.60" },
    { id: 14, title: "Bandung", price: "4.20" },
    { id: 15, title: "Barley", price: "3.80" },
    { id: 16, title: "Calamansi Juice", price: "4.20" },
    {
      id: 17,
      title:
        "Canned Drinks/Water (Coke, 7-Up, Sprite, 100+, Green Tea, Oolong)",
      price: "2.00",
    },
    { id: 18, title: "Bubble Tea/Oreo Blend", price: "4.50" },
    { id: 19, title: "Lemon Tea", price: "4.20" },
    { id: 20, title: "Peach/Strawberry/Blood Orange", price: "5.50" },
  ]
  return (
    <div>
      <ul className="menu-items-grid">
        {items.map(node => {
          return (
            <li key={node.id} className="menu-item">
              <h3>{node.title}</h3>
              <span>${node.price}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ColdDrinks

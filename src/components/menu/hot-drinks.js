import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const HotDrinks = () => {
  const items = [
    {
      id: 1,
      title: "Kopi O/Teh O",
      price: "2.10",
    },
    { id: 2, title: "Kopi/Teh", price: "2.40" },
    { id: 3, title: "Kopi C/Teh C", price: "2.60" },
    { id: 4, title: "Yin Yang", price: "2.60" },
    { id: 5, title: "Espresso", price: "3.00" },
    { id: 6, title: "Americano", price: "4.30" },
    { id: 7, title: "Flat White", price: "4.30" },
    { id: 8, title: "Latte", price: "4.80" },
    { id: 9, title: "Mocha Latte(Choc)", price: "5.50" },
    { id: 10, title: "Coco Latte(Coconut)", price: "5.50" },
    { id: 11, title: "Hazelnut Latte", price: "5.50" },
    { id: 12, title: "Cappuccino", price: "4.30" },
    { id: 13, title: "Mochaccino", price: "5.50" },
    { id: 14, title: "Hot Chocolate", price: "5.00" },
    { id: 15, title: "Milo", price: "2.60" },
    { id: 16, title: "Horlicks", price: "2.80" },
    { id: 17, title: "Barley", price: "3.80" },
    { id: 18, title: "Chinese Tea", price: "2.00" },
    { id: 19, title: "Lemon Tea", price: "3.10" },
    { id: 20, title: "Rose Vanilla Passion Tea", price: "5.00" },
    { id: 21, title: "Chamomile", price: "4.50" },
    { id: 22, title: "Mint", price: "4.50" },
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

export default HotDrinks

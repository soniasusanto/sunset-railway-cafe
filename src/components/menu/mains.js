import React from "react"

const Mains = () => {
  const items = [
    { id: 1, title: "Chicken Macaroni", price: "5.20" },
    { id: 2, title: "Laksa", price: "7.00" },
    { id: 3, title: "Mee Siam", price: "6.50" },
    { id: 4, title: "Nasi Lemak", price: "8.00" },
    { id: 5, title: "Curry Chicken W Rice/Bread ", price: "7.80/8.00" },
  ]

  return (
    <div>
      {/* <p className="sample">SAMPLE MENU</p> */}
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

export default Mains

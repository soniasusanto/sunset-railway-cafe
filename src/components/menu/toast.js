import React from "react"

const Toast = () => {
  const items = [
    { id: 1, title: "Otah Toast", price: "5.20" },
    { id: 2, title: "Kaya & Butter", price: "2.80" },
    { id: 3, title: "Kaya", price: "2.80" },
    { id: 4, title: "Peanut Butter/Nutella", price: "2.80" },
    { id: 5, title: "Butter & Sugar", price: "2.60" },
    { id: 6, title: "Butter", price: "2.60" },
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

export default Toast

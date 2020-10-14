import React from "react"

const Sweets = () => {
  const items = [
    { id: 1, title: "Whole Sugee Cake", price: "57" },
    { id: 2, title: "Sugee Slice", price: "5.50" },
    { id: 3, title: "Whole Pandan Cake", price: "32" },
    { id: 4, title: "Pandan Slice", price: "3" },
    { id: 5, title: "Pulut Tekan & Kaya", price: "4.50" },
    { id: 6, title: "Kuih Lopes", price: "4.50" },
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

export default Sweets

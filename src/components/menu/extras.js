import React from "react"

const Extras = () => {
  const items = [
    {
      id: 1,
      title: "2 Soft Boiled Eggs (order in advance - 10 mins)",
      price: "2.10",
    },
    { id: 2, title: "1 Serving of Rice (Lemak/White)", price: "1.20/1.00" },
    { id: 3, title: "Plain Toast (2 Slices)", price: "1.80" },
    { id: 4, title: "Chicken Rendang", price: "3.00" },
    { id: 5, title: "Otah (1pc)", price: "1.20" },
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

export default Extras

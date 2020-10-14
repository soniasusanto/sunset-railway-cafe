import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <section id="contact">
        <div className="address">
          <h3>LOCATION</h3>
          <span>41 Sunset Way, #01-02</span>
          <span>Singapore 597071</span>
        </div>
        <div className="hours">
          <h3>HOURS</h3>
          <span>Monday - Wednesday / Closed</span>
          <span>Thursday - Sunday / 8:00am-3:00pm</span>
        </div>
        <div className="contact">
          <h3>CONTACT</h3>
          <span>65 6463 0069</span>
          <Link to="https://www.instagram.com/sunsetrailway_cafe/?hl=en">
            @sunsetrailway_cafe
          </Link>
        </div>
      </section>
      <div className="copyright-container">
        <p>Sonia Susanto &copy; 2020</p>
        <p>
          Disclaimer: This is a front-end UI mockup for a restaurant cafe in
          Singapore.
        </p>
      </div>
    </footer>
  )
}

export default Footer

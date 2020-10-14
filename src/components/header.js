import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Scroll from "../components/scroll"

const Header = ({ siteTitle }) => (
  <header>
    <Scroll>
      <Link to="/">{siteTitle}</Link>
    </Scroll>

    <div className="link-container">
      <Scroll type="id" element="about">
        <Link to="/#about">About</Link>
      </Scroll>
      <Scroll type="id" element="menu">
        <Link to="/#menu">Menu</Link>
      </Scroll>
      <Scroll type="id" element="contact">
        <Link to="/#contact">Contact</Link>
      </Scroll>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

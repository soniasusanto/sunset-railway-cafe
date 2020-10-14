import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Menu from "../components/menu/menu"
import Instagram from "../components/instagram"
import LeafletMap from "../components/leafletMap"
import Footer from "../components/footer"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero">
        <Img
          fluid={data.coffeeShop.childImageSharp.fluid}
          className="hero-image"
        />
      </section>
      <section className="container" id="about">
        <div id="about-container">
          <h2>Sunset Railway Cafe</h2>
          <p>
            A local cafe located in Sunset Way. Expect local Kopi and Teh,
            Gourmet Coffee, Toast, Mee Siam and Laksa. Pulut tekan with kaya,
            Sugee and Pandan cake.
          </p>
        </div>
        <br></br>
        <div className="gallery-grid">
          <Img
            fluid={data.latte.childImageSharp.fluid}
            className="gallery-img1"
          />
          <Img
            fluid={data.food.childImageSharp.fluid}
            className="gallery-img2"
          />
          <Img
            fluid={data.cafeInterior.childImageSharp.fluid}
            className="gallery-img3"
          />
        </div>
      </section>
      <div className="parallax"></div>
      <section className="container" id="menu">
        <Menu />
      </section>
      <section className="container">
        <Instagram />
      </section>
      {typeof window !== "undefined" && (
        <LeafletMap
          position={[1.323684, 103.767521]} // Your Coordinates
          zoom={18} // Zoom Level
          markerText={"Sunset Railway Cafe"} // Icon text
        />
      )}
      <Footer />
    </Layout>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    coffeeShop: file(relativePath: { eq: "homepage-image.jpg" }) {
      ...fluidImage
    }
    cafeInterior: file(relativePath: { eq: "cafe-interior.jpg" }) {
      ...fluidImage
    }
    latte: file(relativePath: { eq: "kopi.jpeg" }) {
      ...fluidImage
    }
    food: file(relativePath: { eq: "nasi-lemak.jpg" }) {
      ...fluidImage
    }
  }
`

export default IndexPage

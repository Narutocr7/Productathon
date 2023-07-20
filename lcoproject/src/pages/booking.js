import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import HeroSection from "../components/reusable/HeroSection"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Infoblock from "../components/reusable/Infoblock"

// const links = [
//   {
//     text: "Book your ride",
//     url: "App",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Chat",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
// ]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const bookingPage = () => (
  <Layout>
    <Infoblock heading="About"/>
    {/* <herosection
      img = {data.img.childImageSharp.fluid}
      title="ride sharing"
      subtitle = "coding"
      heroclass = "hero-background"
    /> */}
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/car.jpg"
        loading="eager"
        width={190}
        height={150}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="car image"
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
      <b> Enter ride details!</b>
      </h1>
    </div>
    {/* <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} */}
          <center>
            <ul className="uklist">
            <li className='nav-item'>
                <Link to="/App" className='nav-link text-black'>
                    <button type="button">Book Now</button>
                </Link>
            </li>
             <li className='nav-item'>
                <Link to="/" className='nav-link text-black'>
                <button type="button">Chat</button>
                </Link>
            </li>
            </ul>
          </center>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

// export const query = graphql`
// {
//    img: file(relativePath: { eq: car.jpg}){
//     childImageSharp{
//       fluid{
//         ...GatsbyImageSharpFluid_tracedSVG
//       }
//     }
//    }
// }
// `

export default bookingPage
import * as React from "react"
import ReactDOM from "react-dom"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import App from "./App"

import Layout from "../components/layout"
import Seo from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css'
import * as styles from "../components/index.module.css"

// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById("root")
// )

const links = [
  {
    text: "DesignerTeam",
    url: "https://www.gatsbyjs.com/docs/tutorial",
    description:
      "People who developed this site: team@pagePerfect",
  },
  {
    text: "Site Objective",
    url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
    description:
      "Save your money and time by sharing your rides.",
  },
  {
    text: "Site features",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Authentication, carpooling etc..",
  },
]

const samplePageLinks = [
  { text: "Login", url: "login" },
  {
    text: "About",
    url: "page-2",
    badge: false,
    description:
      "linking to login page",
  },
  { text: "Booking", url: "booking" },
  { text: "Extra page-1", url: "using-typescript" },
  { text: "Extra page-2", url: "using-dsg" },
]

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Tutorial",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/auto-pic.jpg"
        loading="eager"
        width={200}
        height={150}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Welcome to <b>RideShare!</b>
      </h1>
      <p className={styles.intro}>
        <b>Menu:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
      </p>
    </div>
    <ul className={styles.list}>
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
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
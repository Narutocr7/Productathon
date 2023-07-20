import * as React from "react"
import { Link } from "gatsby"

import DualInfoBlock from "../components/reusable/DualInfoBlock"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const ContactPage = () => (
  <Layout>
    <h1>Hi from the Contact page</h1>
    <center>
    <StaticImage
        src="https://cdn.pixabay.com/photo/2020/11/10/22/28/contact-us-5731121__340.png"
        loading="eager"
        width={1000}
        height={400}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      </center>
    <h1>
        This is <b>the contact page</b>
      </h1>
       <p>
       You can reach out to us either via phone or mail in case of any issue.
      </p>
      <p>
        In case of complaint, reach out to us on <b><i>abc@gmail.com</i></b> or call us on <b><i>9999xxxxxx</i></b>.
      </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Contact page" />

export default ContactPage
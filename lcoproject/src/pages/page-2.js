import * as React from "react"
import { Link } from "gatsby"

import DualInfoBlock from "../components/reusable/DualInfoBlock"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <h1>Hi from the About page</h1>
    <p>Welcome to About page</p>
    <DualInfoBlock heading="Our Team"/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="About page" />

export default AboutPage
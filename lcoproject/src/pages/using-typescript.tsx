// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({
  data,
  location,
}) => (
  <Layout>
    <h1>
      Extra page <b>one</b>
    </h1>
    <p>
      Any additions will go here.
    </p>
    <p>
      Like map functionality to keep a track of the vehicle.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat optio incidunt corporis obcaecati. Beatae qui doloribus iusto quia explicabo nihil.
    </p>
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/">
        documentation about this
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head: HeadFC<DataProps> = () => <Seo title="Using TypeScript" />

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`

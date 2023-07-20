/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import "./bootstrap.min.css"
import "./layout.css"
import Footer from './reusable/Footer'
import Navbar from './reusable/Navbar'

const Layout = ({children}) => (
  <>
   <Navbar/>
   {children}
   <Footer/>
  </>
)

// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//       <div>
//         <main>{children}</main>
//       </div>
//     </>
//   )
// }

export default Layout

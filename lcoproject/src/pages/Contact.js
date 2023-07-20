// import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"

// const ContactPage = () => {
//   return (
//     <Layout>
//       <StaticImage
//         src="../images/contact.jpg"
//         loading="eager"
//         width={200}
//         height={150}
//         quality={95}
//         formats={["auto", "webp", "avif"]}
//         alt=""
//         style={{ marginBottom: `var(--space-3)` }}
//       />
//       <h1>
//         This is <b>the contact page</b>
//       </h1>
//       <p>
//         You can reach out to us either via phone or mail in case of any issue.
//       </p>
//       <br></br>
//       <Link to="/">Go back to the homepage</Link>
//     </Layout>
//   )
// }

// export const Head = () => <Seo title="Contact Page" />

// export default ContactPage
import React, { useRef } from "react"
import { Form, Button, Card } from "react-bootstrap"
// import { useAuth } from '../contexts/AuthContext'

export default function Contact() {
    // const { signup } = useAuth()

    // function handleSubmit(e){
    //     e.preventDefault()

    //     signup(emailRef.current.value, passwordRef.current.value)
    // }

  return (
    <>
      <h3>Contact Page</h3>
      <p>
        In case of complaint, reach out to us on <b><i>abc@gmail.com</i></b> or call us on <b>9999xxxxxx</b>.
      </p>
    </>
  )
}

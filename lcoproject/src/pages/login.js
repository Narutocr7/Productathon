import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Signup from "./Signup"
import Seo from "../components/seo"
import { Container } from 'react-bootstrap'

const LoginPage = () => (
  <Layout>
    <h1>Hi from the login page</h1>
    <p>Welcome to login page</p>
    <Container className="d-flex align-items-center justify-content-center"
    style={{minHeight: "100vh"}}>
      <div className="w-100" style={{ maxWifth: "400px" }}>
      <Signup/>
      </div>
    
    </Container>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Login Page" />

export default LoginPage

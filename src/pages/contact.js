import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Head from '../components/head'
import Form from '../components/contact/form'


const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Head background={require("../images/contact-background.jpg")}
        title="Contact"/>
    <Form/>
  </Layout>
)

export default Contact

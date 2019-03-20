import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Head from "../components/home/head"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`tetrate`, `application`, `react`]} />
    <Head/>
  </Layout>
)

export default IndexPage

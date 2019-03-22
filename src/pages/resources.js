import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Head from '../components/resources/head'
import Tabs from '../components/resources/tabs'

const Resources = () => (
  <Layout>
    <SEO title="Resources" />
    <Head/>
    <Tabs/>
  </Layout>
)

export default Resources

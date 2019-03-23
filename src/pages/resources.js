import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import Head from '../components/head'
import Tabs from '../components/resources/tabs'

const Resources = () => (
  <Layout>
    <SEO title="Resources" />
    <Head background={require("../images/resources/background.jpg")}
        title='Resources' 
        subTitle="Explore Tetrate’s Library of Resources"/>
    <Tabs/>
  </Layout>
)

export default Resources

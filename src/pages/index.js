import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

import Head from "../components/home/head"
import Section from '../components/home/section'

const Sections = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`tetrate`, `application`, `react`]} />
    <Head/>
    <Sections>
        <Section/>
    </Sections>
  </Layout>
)

export default IndexPage

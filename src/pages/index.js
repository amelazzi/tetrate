import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

import Head from "../components/home/head"
import Section from '../components/home/section'
import Team from '../components/home/team'

const Sections = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`tetrate`, `application`, `react`]} />
    <Head/>
    <Sections>
        <Section title="Intelligent Traffic Management" 
            content="Enhance reliability with dynamic, QoS-aware, decentralized routing controls." 
            picture={require("../images/home/intelligent-traffic-management.png")} />
        <Section title="Continuous Security" 
            content="Secure inter-service communications with built-in service identities and powerful AuthN/AuthZ policies." 
            picture={require("../images/home/continuous-security.png")} />
        <Section title="From Edge to Workload" 
            content="From ingress to service, run our infrastructure on any abstraction and any cloud." 
            picture={require("../images/home/from-edge-workload.png")} />
    </Sections>
    <Team/>
  </Layout>
)

export default IndexPage

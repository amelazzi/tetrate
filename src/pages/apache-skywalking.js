import React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

import Head from '../components/apache-skywalking/head'
import Intro from '../components/apache-skywalking/intro'
import Diagram from '../components/apache-skywalking/diagram'

const Content = styled.div`
    padding: 0rem 14rem;
    padding-bottom: 4rem;
`;

const ApacheSkyWalking = () => (
  <Layout>
    <SEO title="News & Events" />
    <Head background={require("../images/news-background.png")}
        title="News"/>
    <Content>   
        <Intro content1="Apache SkyWalking is an Observalibity Analysis and Application Performance Management platform."
            content2="Incubated by Apache, Skywalking provides distributed tracing, service mesh telemetry analysis, metric aggregation and visualization for cloud native workloads."
            content3="The project founder is Tetrate's Sheng Wu."/>
        <Diagram/>
    </Content>
  </Layout>
)

export default ApacheSkyWalking


import React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

import Head from '../components/apache-skywalking/head'
import Intro from '../components/apache-skywalking/intro'
import Diagram from '../components/apache-skywalking/diagram'
import Card from '../components/apache-skywalking/card'
import { bleu, darkBleu } from "../styles/colors";
import SubFooter from "../components/apache-skywalking/subFooter"

const Content = styled.div`
    padding: 0rem 14rem;
    padding-bottom: 4rem;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  padding: 1rem;
  margin-top: 2rem;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    margin-top: 6rem;
    :hover{
        text-decoration: none;
    }
    button{
        border: none;
        background: ${bleu};
        color: white;
        font-size: 1.6rem;
        font-weight: 400;
        letter-spacing: 1px;
        padding: 1rem 4rem;
        :first-child{
          margin-right: 2rem;
        }
        :last-child{
          margin-left: 2rem;
        }
        :hover{
            color: white;
            background: ${darkBleu};
            cursor: pointer;
        }
    }
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
        <Cards>
          <Card background={require("../images/apache-skywalking/tetrate-tools-features-bg1.png")} 
              icon={require("../images/apache-skywalking/searching-tool.png")} 
              title="Service Mesh Observability"
              content="Observe hundreds of microservices all at once by adding distributed tracing to your polyglot system, with service topology mapping, dependency analysis, tracing and context propagation."/>
          <Card background={require("../images/apache-skywalking/tetrate-tools-features-bg2.png")}
              icon={require("../images/apache-skywalking/metrics.png")} 
              title="Multi-format Telemetry"
              content="Get apples-to-apples metrics with Skywalking’s Observability Analysis Platform that works not just for Java, .NET and Node but also for Istio and Zipkin"/>
          <Card background={require("../images/apache-skywalking/tetrate-tools-features-bg1.png")}
              icon={require("../images/apache-skywalking/analytics.png")} 
              title="Performance Analysis & Visualization"
              content="Analyze root causes and optimize performance with metric aggregation and visualization."/>
        </Cards>
        <BtnContainer>
          <StyledLink to='/'>
            <button> READ MORE </button>
          </StyledLink>
          <StyledLink to='/'>
            <button> GET APACHE SKYWALKING </button>
          </StyledLink>
        </BtnContainer>
    </Content>
    <SubFooter/>
  </Layout>
)

export default ApacheSkyWalking
import React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

import Head from '../components/community/head'
import Intro from '../components/community/intro'
import Diagram from '../components/community/diagram'
import Card from '../components/community/card'
import { green, bleu, darkBleu } from "../styles/colors";
import SubFooter from "../components/community/subFooter"

const Content = styled.div`
    padding: 0rem 14rem;
    padding-bottom: 4rem;
    @media (max-width: 35em) {
      padding: 0rem;
    }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  padding: 1rem;
  margin-top: 2rem;
  @media (max-width: 35em) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  @media (max-width: 35em) {
    display: flex;
    flex-direction: column;
    padding: 4rem 0rem;
    padding-top: 0rem;
  }
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
    @media (max-width: 35em) {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
    }
`;

const ApacheSkyWalking = ({location}) => (
  <Layout>
    <SEO title="Skywalking - Observability & App Performance Management" />
    <Head location={location}
        background={require("../images/community/apache-skywalking/background.jpg")}
        title="Apache Skywalking"
        subTitle="Get Service Mesh Observability and Performance Management with Skywalking"
        aboutColor={green}
        about="APACHE SKYWALKING"/>
    <Content>   
        <Intro content1="Apache SkyWalking is an Observalibity Analysis and Application Performance Management platform."
            content2="Incubated by Apache, Skywalking provides distributed tracing, service mesh telemetry analysis, metric aggregation and visualization for cloud native workloads."
            content3="The project founder is Tetrate's Sheng Wu."/>
        <Diagram/>
        <Cards>
          <Card background={require("../images/community/tetrate-tools-features-bg1.png")} 
              icon={require("../images/community/apache-skywalking/searching-tool.png")} 
              title="Service Mesh Observability"
              content="Observe hundreds of microservices all at once by adding distributed tracing to your polyglot system, with service topology mapping, dependency analysis, tracing and context propagation."/>
          <Card background={require("../images/community/tetrate-tools-features-bg2.png")}
              icon={require("../images/community/apache-skywalking/metrics.png")} 
              title="Multi-format Telemetry"
              content="Get apples-to-apples metrics with Skywalking’s Observability Analysis Platform that works not just for Java, .NET and Node but also for Istio and Zipkin"/>
          <Card background={require("../images/community/tetrate-tools-features-bg1.png")}
              icon={require("../images/community/apache-skywalking/analytics.png")} 
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
    <SubFooter link1="/getenvoy" content1="GetEnvoy"
      link2="/tetrate-cloud-map" content2="TETRATE ISTIO CLOUD MAP OPERATOR"
      link3="/tetrateq" content3="TETRATE Q"/>
  </Layout>
)

export default ApacheSkyWalking
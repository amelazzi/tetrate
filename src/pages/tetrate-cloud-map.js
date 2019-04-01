import React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'
import { green, bleu, darkBleu } from "../styles/colors"

import Head from '../components/community/head'
import Intro from '../components/community/intro'
import Card from '../components/community/card'
import SubFooter from "../components/community/subFooter"

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

const TetrateCloudMap = () => (
  <Layout>
    <SEO title="Istio / AWS Cloud Map - Manage Istio on AWS with Cloud Map" />
    <Head background={require("../images/community/cloud-map/background.jpg")}
        title="Tetrate Istio Cloud Map Operator"
        subTitle="Connect AWS Cloud Map with Your Istio Mesh"
        aboutColor={green}
        about="TETRATE ISTIO CLOUD MAP OPERATOR"/>
    <Content>   
        <Intro content1="Tetrate Istio Cloud Map Operator synchronizes with AWS Cloud Map, automatically populating AWS service discovery information into Istio Service Entries. This allows services running in your Kubernetes clusters to communicate with any services registered in AWS Cloud Map, whether they are running in EKS, ECS or any other service integrated with Cloud Map."/>
        <Cards>
          <Card background={require("../images/community/tetrate-tools-features-bg1.png")} 
              icon={require("../images/community/cloud-map/automatic.png")} 
              title="Automatic"
              content="Eliminate the burden of manual scripting & translation. Only configuration is needed."/>
          <Card background={require("../images/community/tetrate-tools-features-bg2.png")}
              icon={require("../images/community/cloud-map/dns-compliant.png")} 
              title="Lightweight & DNS compliant"
              content="Easily map to resources using IP addresses or DNS information."/>
          <Card background={require("../images/community/tetrate-tools-features-bg1.png")}
              icon={require("../images/community/cloud-map/kubernetes.png")} 
              title="Kubernetes Anywhere"
              content="Run Istio Cloud Map Operator anywhere Kubernetes runs, whether the cluster is in AWS or not."/>
        </Cards>
        <BtnContainer>
          <StyledLink to='/'>
            <button> READ MORE </button>
          </StyledLink>
          <StyledLink to='/'>
            <button> GET ISTIO CLOUD MAP OPERATOR </button>
          </StyledLink>
        </BtnContainer>
    </Content>
    <SubFooter link1="/apache-skywalking" content1="APACHE SKYWALKING"
      link2="/getenvoy" content2="GETENVOY"
      link3="/tetrateq" content3="TETRATE Q"/>
  </Layout>
)

export default TetrateCloudMap
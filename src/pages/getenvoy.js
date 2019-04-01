import React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'
import { bleu, darkBleu } from "../styles/colors"

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

const GetEnvoy = () => (
  <Layout>
    <SEO title="News & Events" />
    <Head background={require("../images/community/getEnvoy/background.png")}
        title="GetEnvoy"
        subTitle="Get Certified, Compliant and Conformant Builds of Envoy"
        about="GETENVOY"/>
    <Content>   
        <Intro content1="Getting the latest and reliable Envoy build is not a trivial undertaking. Setting up a Bazel build environment is time and resource intensive. Available packages are also limited. Tetrate solves this problem by distributing tested and certified Envoy builds, for CentOS, Ubuntu, and Mac."/>
        <Cards>
          <Card background={require("../images/community/tetrate-tools-features-bg1.png")} 
              icon={require("../images/community/getEnvoy/reliable.png")} 
              title="Reliable and Tested Builds"
              content="Effortlessly build Envoy proxy with tested and certified packages, binaries & images. No complex Bazel tooling, no manual work"/>
          <Card background={require("../images/community/tetrate-tools-features-bg2.png")}
              icon={require("../images/community/getEnvoy/multiple-os.png")} 
              title="Support for Multiple OS"
              content="Get the right Envoy build for your operating system, including Ubuntu, CentOS, and Mac. Available for Docker and non-Docker environments."/>
          <Card background={require("../images/community/tetrate-tools-features-bg1.png")}
              icon={require("../images/community/getEnvoy/easy-to-use.png")} 
              title="Easy to Use & Always Updated"
              content="Deploy and update confidently with our easy-to-use install scripts specified to your target environment. Keep up with the latest updates"/>
        </Cards>
        <BtnContainer>
          <StyledLink to='/'>
            <button> READ MORE </button>
          </StyledLink>
          <StyledLink to='/'>
            <button> SIGN UP for GETENVOY </button>
          </StyledLink>
        </BtnContainer>
    </Content>
    <SubFooter/>
  </Layout>
)

export default GetEnvoy
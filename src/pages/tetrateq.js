import React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'
import { purple, bleu, darkBleu } from "../styles/colors"

import Head from '../components/community/head'
import Intro from '../components/community/intro'
import Card from '../components/community/card'
import SubFooter from "../components/community/subFooter"

const Content = styled.div`
    padding: 0rem 14rem;
    padding-bottom: 4rem;
    @media (max-width: 76.7em) {
      padding: 0rem;
    }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-around;
  padding: 1rem;
  margin-top: 2rem;
  @media (min-width: 48.1em) and (max-width: 76.7em) {
      padding: 1rem 5rem;
      margin-top: 0;
  }
  @media (min-width: 32em) and (max-width: 48em) {
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
  @media (min-width: 48.1em) and (max-width: 76.7em) {
      padding: 4rem 0rem;
  }
  @media (min-width: 32em) and (max-width: 48em) {
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
    @media (min-width: 48.1em) and (max-width: 76.7em) {
      margin-top: 2rem;
    }
    @media (min-width: 32em) and (max-width: 48em) {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
    }
`;

const TetrateQ = ({location}) => (
  <Layout>
    <SEO title="Tetrate Q - Access Control for Micro Services" />
    <Head location={location}
        background={require("../images/community/tetrateq/background.png")}
        title="Tetrate Q"
        subTitle="Access control and authorization for the modern enterprise"
        aboutColor={purple}
        about="TETRATE Q"/>
    <Content>   
        <Intro content1="Tetrate’s Q is a refreshing new take on access control for modern infrastructure. It is based on the state-of-the-art Next Generation Access Control (NGAC) model from NIST and provides a novel access model representation that empowers a complete authorization framework for distributed and multi-cloud architectures."/>
        <Cards>
          <Card background={require("../images/community/tetrate-tools-features-bg1.png")} 
              icon={require("../images/community/tetrateq/universal-policy-mgmt.png")} 
              title="Universal Policy Management"
              content="Supports universal access control policy definition across public and on-premises clouds. Specify once, and enforce everywhere."/>
          <Card background={require("../images/community/tetrate-tools-features-bg2.png")}
              icon={require("../images/community/tetrateq/expressive-powerful.png")} 
              title="Expressive & Powerful Policies"
              content="Enables sophisticated authorization policies beyond the limitations of traditional systems such as RBAC and ABAC."/>
          <Card background={require("../images/community/tetrate-tools-features-bg1.png")}
              icon={require("../images/community/tetrateq/standards-based.png")} 
              title="Standards based"
              content="Developed based on NIST's NGAC standards, Tetrate Q is easily extensible and well-suited to supporting distributed operations in a cloud environment."/>
        </Cards>
        <BtnContainer>
          <StyledLink to='/'>
            <button> Read the announcement </button>
          </StyledLink>
          <StyledLink to='/'>
            <button> Sign up to get Tetrate Q </button>
          </StyledLink>
        </BtnContainer>
    </Content>
    <SubFooter link1="/apache-skywalking" content1="APACHE SKYWALKING"
      link2="/getenvoy" content2="GETENVOY"
      link3="/tetrate-cloud-map" content3="TETRATE ISTIO CLOUD MAP OPERATOR"/>
  </Layout>
)

export default TetrateQ
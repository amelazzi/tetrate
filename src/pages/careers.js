import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

import Head from '../components/careers/head'
import LeftCareer from '../components/careers/leftCareer'


const Content = styled.div`
  padding: 4rem 18rem;
`;

const CareersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const Careers = () => (
  <Layout>
    <SEO title="Careers" />
    <Head/>
    <Content>
      <CareersContainer>
        <LeftCareer picture={require("../images/home/team/Varun-ceo.png")} 
          career="Envoy and Istio quickly became the building blocks for modern cloud-native computing. Tetrate's mission is to bring the best of open source to help organizations building and managing cloud-native applications and services."
          name="Varun Talwar" role="CEO" detail="Former Google Lead PM, Istio & gRPC"
          github="https://github.com/zinuga"
          linkedin="https://www.linkedin.com/in/varuntalwar"/>
      </CareersContainer>
    </Content>

  </Layout>
)

export default Careers

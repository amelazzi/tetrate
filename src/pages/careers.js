import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

import Head from '../components/careers/head'
import LeftCareer from '../components/careers/leftCareer'
import RightCareer from '../components/careers/rightCareer'


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
        <RightCareer picture={require("../images/home/team/Jeyappragash_Jeyakeerthi.png")} 
            career="Tetrate is on a mission to connect the world's services and create the next generation of cloud networking that is secure, flexible, and QoS aware. "
            name="Jeyappragash Jeyakeerthi" role="CTO" detail="Former cloud platform engineering, Twitter"
            github="https://github.com/pragashj"
            linkedin="https://www.linkedin.com/in/pragashjj"/>
        <LeftCareer picture={require("../images/home/team/Zack-engineer.png")} 
            career="Envoy and Istio are the right tools to solve immediate problems for organizations. I'm excited about what Tetrate is building on top of those projects to address user pain"
            name="Zach Butcher" role="Engineer" detail="Istio Founding engineer"
            github="https://github.com/ZackButcher"
            linkedin="https://www.linkedin.com/in/zachary-butcher-339a2180/"/>
      </CareersContainer>
    </Content>

  </Layout>
)

export default Careers

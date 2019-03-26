import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'
import Slider from 'react-styled-carousel'
import { lightBleu } from "../styles/colors"

import Head from "../components/home/head"
import Section from '../components/home/section'
import Team from '../components/home/team'
import Testimony from '../components/home/testimony'
import Article from '../components/home/article'
import SubFooter from '../components/subFooter'


const Sections = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

const StyledSlider = styled(Slider)`
    margin: 2rem 6rem;
    padding: 0rem 8rem;
`;

const Testimonies = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

const Articles = styled.div`
    background: ${lightBleu};
    padding: 4rem;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
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
    <StyledSlider autoSlide={false} showDots={false} cardsToShow={1}>
        <Testimonies>
            <Testimony content1='" We at NAV are using Istio to migrate workloads to public clouds. It is critical that we do so without impacting reliability or security. We were facing challenges around networking APIs, HTTPS handling and modeling service interactions outside the Istio mesh.'
                strong='With the help of  Tetrate, we’ve adopted Istio incrementally and are now successfully running Istio in production. "'
                name="— Norwegian Labour and Welfare Administration (NAV)"
                logo={require("../images/home/testimonies/nav.png")}/>
            <Testimony content1='"Google Cloud’s leadership in service mesh technologies stems from our goal of making hybrid cloud seamless for customers.'
                strong='The Tetrate team brings strong expertise in this space for cloud-native and brownfield deployments.'
                content2='We look forward to collaborating with Tetrate to help our joint customers harness these technologies for digital transformation."'
                name="— Prajakta Joshi, Senior Product Manager, Google Cloud"
                logo={require("../images/home/testimonies/google-cloud.png")}/>
        </Testimonies>
        <Testimonies>
            <Testimony content1='" As Envoy becomes more widely adopted, we expect to see the emergence of a consistent control plane that manages Envoy across different platforms and abstractions. Interoperability will be a key success factor. '
                strong='Having deep roots within the open source community gives Tetrate instant credibility among cloud-first companies."'
                name="— Matt Klein, Creator of Envoy; Engineer, Lyft"
                logo={require("../images/home/testimonies/lyft.png")}/>
            <Testimony content1='"Service meshes are integral to organizations as they begin cloud native evolution. I’m thrilled to see the launch of Tetrate to bring their broad service mesh expertise to the enterprise.'
                strong='They have been pioneers in the enterprise service mesh space through their contributions to Envoy, Istio and the broader CNCF ecosystem."'
                name="— Chris Aniszczyk, CTO/COO of Cloud Native Computing Foundation"
                logo={require("../images/home/testimonies/GCloud.png")}/>
        </Testimonies>
        <Testimonies>
            <Testimony 
                strong='"Tetrate is at the forefront of the cloud-native movement – managing microservices at scale.'
                content2='The company’s leadership team is responsible for some of the most important innovations within the cloud-native space and we’re fortunate to partner with them to address this significant market need."'
                name="— Deepak Jeevankumar, Managing Director, Dell Technology Capital"
                logo={require("../images/home/testimonies/dell.jpg")}/>
            <Testimony content1='"Tetrate offers enterprises the tools to implement cloud-native architectures in an effective and efficient manner.  Intel Capital believes strongly in the power of open source software to deliver cloud-native solutions at scale, and the '
                strong='Tetrate team’s ongoing contributions to the Istio and Envoy projects continue to solidify them as leading, core community members"'
                name="— Nick Washburn & Mark Rostick, Managing Directors, Intel Capital"
                logo={require("../images/home/testimonies/intel.jpg")}/>
        </Testimonies>
    </StyledSlider>
    <Articles>
        <Article picture={require("../images/home/resources-paper-and-guides-graphic.jpg")}
            type="PAPERS & GUIDES"
            title="Introducing getEnvoy"
            content="Tetrate provides certified, tested builds of Envoy proxy"/>
        <Article picture={require("../images/home/resources-paper-and-guides-graphic.jpg")} 
            type="PAPERS & GUIDES"
            title="Case Study: NAV’s Istio Deployment with Tetrate"
            content="See how Tetrate helps the Norwegian Labour and Welfare Administration (NAV) operationalize Istio."/>
        <Article picture={require("../images/home/graphic-resources-events-servicemeshday.jpg")}
            type="EVENTS"
            title="Service Mesh Day Conference"
            content="Join the first ever industry conference on Service Mesh Technology"/>
    </Articles>
    <SubFooter/>
  </Layout>
)

export default IndexPage

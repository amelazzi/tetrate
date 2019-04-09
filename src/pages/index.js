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
import Events from '../components/home/events'
import SubFooter from '../components/subFooter'


const Sections = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (min-width: 48.1em) and (max-width: 76.7em) {
        padding: 0rem 4rem;
    }

    @media (min-width: 32em) and (max-width: 48em) {
		display: flex;
        flex-direction: column;
        justify-content: center;

        margin-top: -4rem;
    }

`;

const NxtArrowIcon = styled.div`
    position: absolute;
    width: 2.5rem;
    margin-top: -29rem;
    margin-left: 94%;
    img{
        width: 100%;
        object-fit: cover;
    }
    @media (min-width: 48.1em) and (max-width: 76.7em) {
        margin-top: -34.55rem;
        margin-left: 96%;
    }
    @media (min-width: 32em) and (max-width: 48em) {
        display: none;
    }
`;

const BackArrowIcon = styled(NxtArrowIcon)`
    transform: rotate(-180deg);
    float: left;
    z-index: 3;
    margin-top: 20.4rem;
    margin-left: 5.6rem;
    img{
        width: 100%;
        object-fit: cover;
    }
    @media (min-width: 48.1em) and (max-width: 76.7em) {
        margin-top: 26rem;
        margin-left: 0.5rem;
    }
`;

const StyledSlider = styled(Slider)`
    margin: 2rem 6rem;
    margin-top: -3.8rem;
    padding: 2rem 8rem;
    background: white;
    position: relative;
    z-index: 0;
    @media (min-width: 48.1em) and (max-width: 76.7em) {
        margin: 2rem 1rem;
        margin-top: -4rem;
        padding: 2rem;
    }
    @media (min-width: 32em) and (max-width: 48em) {
        display: none;
    }
`;

const ResponsiveSlider = styled(Slider)`
    display: none;
    margin: 0rem;
    padding: 0rem;
    @media (min-width: 32em) and (max-width: 48em) {
        display: block;
    }
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
    justify-content: space-between;
    align-items: center;

    @media (min-width: 48.1em) and (max-width: 76.7em) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 4rem 5rem;
        padding-bottom: 3rem;
    }

    @media (min-width: 32em) and (max-width: 48em) {
        padding: 2rem 0rem;
        margin-top: 2rem;
        flex-wrap: wrap;
        justify-content: center;
    }
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
    <ResponsiveSlider autoSlide={false} showArrows={false} cardsToShow={1}>
        <Testimony content1='" We at NAV are using Istio to migrate workloads to public clouds. It is critical that we do so without impacting reliability or security. We were facing challenges around networking APIs, HTTPS handling and modeling service interactions outside the Istio mesh.'
            strong='With the help of  Tetrate, we’ve adopted Istio incrementally and are now successfully running Istio in production. "'
            name="— Norwegian Labour and Welfare Administration (NAV)"
            logo={require("../images/home/testimonies/nav.png")}/>
        <Testimony content1='"Google Cloud’s leadership in service mesh technologies stems from our goal of making hybrid cloud seamless for customers.'
            strong='The Tetrate team brings strong expertise in this space for cloud-native and brownfield deployments.'
            content2='We look forward to collaborating with Tetrate to help our joint customers harness these technologies for digital transformation."'
            name="— Prajakta Joshi, Senior Product Manager, Google Cloud"
            logo={require("../images/home/testimonies/google-cloud.png")}/>
        <Testimony content1='" As Envoy becomes more widely adopted, we expect to see the emergence of a consistent control plane that manages Envoy across different platforms and abstractions. Interoperability will be a key success factor. '
            strong='Having deep roots within the open source community gives Tetrate instant credibility among cloud-first companies."'
            name="— Matt Klein, Creator of Envoy; Engineer, Lyft"
            logo={require("../images/home/testimonies/lyft.png")}/>
        <Testimony content1='"Service meshes are integral to organizations as they begin cloud native evolution. I’m thrilled to see the launch of Tetrate to bring their broad service mesh expertise to the enterprise.'
            strong='They have been pioneers in the enterprise service mesh space through their contributions to Envoy, Istio and the broader CNCF ecosystem."'
            name="— Chris Aniszczyk, CTO/COO of Cloud Native Computing Foundation"
            logo={require("../images/home/testimonies/GCloud.png")}/>
        <Testimony 
            strong='"Tetrate is at the forefront of the cloud-native movement – managing microservices at scale.'
            content2='The company’s leadership team is responsible for some of the most important innovations within the cloud-native space and we’re fortunate to partner with them to address this significant market need."'
            name="— Deepak Jeevankumar, Managing Director, Dell Technology Capital"
            logo={require("../images/home/testimonies/dell.jpg")}/>
        <Testimony content1='"Tetrate offers enterprises the tools to implement cloud-native architectures in an effective and efficient manner.  Intel Capital believes strongly in the power of open source software to deliver cloud-native solutions at scale, and the '
            strong='Tetrate team’s ongoing contributions to the Istio and Envoy projects continue to solidify them as leading, core community members"'
            name="— Nick Washburn & Mark Rostick, Managing Directors, Intel Capital"
            logo={require("../images/home/testimonies/intel.jpg")}/>
    </ResponsiveSlider>
    <BackArrowIcon>
        <img src={require("../images/slider-next.png")} alt="back" />
    </BackArrowIcon>
    <StyledSlider autoSlide={false}  showDots={false} cardsToShow={1}>
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
                logo={require("../images/home/testimonies/Gcloud.png")}/>
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
    <NxtArrowIcon>
        <img src={require("../images/slider-next.png")} alt="next"/>
    </NxtArrowIcon>
    <Articles>
        <Article picture={require("../images/home/resources-paper-and-guides-graphic.jpg")}
            type="PAPERS & GUIDES"
            title="Introducing getEnvoy"
            content="Tetrate provides certified, tested builds of Envoy proxy"/>
        <Article picture={require("../images/home/resources-paper-and-guides-graphic.jpg")} 
            type="PAPERS & GUIDES"
            title="Case Study: NAV’s Istio Deployment with Tetrate"
            content="See how Tetrate helps the Norwegian Labour and Welfare Administration (NAV) operationalize Istio."/>
        <Events/>
    </Articles>
    <SubFooter title="Join the Movement. Adopt Service Mesh. "
        content="Request a Preview" link='/'/>
  </Layout>
)

export default IndexPage

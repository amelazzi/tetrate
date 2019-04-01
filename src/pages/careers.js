import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'
import { bleu } from "../styles/colors"

import Head from '../components/careers/head'
import LeftCareer from '../components/careers/leftCareer'
import RightCareer from '../components/careers/rightCareer'
import Value from '../components/careers/value'
import Intro from '../components/careers/intro'
import Article from '../components/careers/article'



const Content = styled.div`
  padding: 0rem 10rem;
`;

const CareersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledH1 = styled.h1`
    text-align: center;
    color: ${bleu};
    font-weight: 400;
    margin-bottom: 4rem;
`;

const ValuesContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Values = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    border-right: 2px solid ${bleu};
    :last-child{
        border: none;
    }
`;

const ArticlesContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Careers = () => (
    <Layout>
        <SEO title="Careers" />
        <Head/>
        <Content>
            <CareersContainer>
                <LeftCareer picture={require("../images/home/team/Varun-ceo.png")} 
                    career="Envoy and Istio quickly became the building blocks for modern cloud-native computing. Tetrate's mission is to bring the best of open source to help organizations building and managing cloud-native applications and services."
                    name="Varun Talwar" job="CEO" detail="Former Google Lead PM, Istio & gRPC"
                    github="https://github.com/zinuga"
                    linkedin="https://www.linkedin.com/in/varuntalwar"/>
                <RightCareer picture={require("../images/home/team/Jeyappragash_Jeyakeerthi.png")} 
                    career="Tetrate is on a mission to connect the world's services and create the next generation of cloud networking that is secure, flexible, and QoS aware. "
                    name="Jeyappragash Jeyakeerthi" job="CTO" detail="Former cloud platform engineering, Twitter"
                    github="https://github.com/pragashj"
                    linkedin="https://www.linkedin.com/in/pragashjj"/>
                <LeftCareer picture={require("../images/home/team/Zack-engineer.png")} 
                    career="Envoy and Istio are the right tools to solve immediate problems for organizations. I'm excited about what Tetrate is building on top of those projects to address user pain"
                    name="Zach Butcher" job="Engineer" detail="Istio Founding engineer"
                    github="https://github.com/ZackButcher"
                    linkedin="https://www.linkedin.com/in/zachary-butcher-339a2180/"/>
            </CareersContainer>
            <StyledH1> Core Values </StyledH1>
            <ValuesContainer>
                <Values>
                    <Value title="Open Ethos"
                        content="Apply the open source ethos. Free, open, worldwide collaboration is the font of innovation. Open source is about community, code, and commitment to excellence. We value our people, who join us from many paths and places, whose collaborations dissolve boundaries of role, culture and time zone. We are all continuous learners who solve hard customer problems by combining the best ideas and the best of open source. "/>
                    <Value title="Efficiency"
                        content="Keep it simple. We focus on fundamentals. We favor efficient processes, elegant solutions, and necessity-based execution. We recognize and maximize the resources we have. We act and iterate quickly, supporting a culture of prompt action."/>
                </Values>
                <Values>
                    <Value title="Expressiveness"
                        content="Be friendly. Be real. We bring life and spirit to our work and share the awesome things we encounter in our field. We foster an environment of debate and discourse where no one is afraid to contribute. We speak candidly about mistakes; we expect them to happen and see them as opportunities to learn."/>
                    <Value title="Empathy"
                        content="We set personal ego aside to be in service of what is best for Tetrate, and act as citizens able to put collective interest above our own. We look out for teammates. Best processes and products follow naturally from addressing the needs of others."/>
                </Values>
            </ValuesContainer>
            <ArticlesContainer>
                <Intro/>
                <Article title="Product Manager" 
                    resume="Distill and abstract the complexity of raw Cloud infrastructure, network and distributed systems to create a simple, elegant, visually pleasing product experiences for developers, operators, network admins and security professionals."/>
            </ArticlesContainer>
        </Content>
    </Layout>
)

export default Careers

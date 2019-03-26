import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'
import { bleu } from "../styles/colors"

import Head from '../components/head'
import CardMember from '../components/team/cardMember'

const Content = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    padding: 0rem 3rem 8rem 3rem;
`;

const StyledH1 = styled.h1`
    color: ${bleu};
    font-weight: 400;
    margin: 4rem;
`;

const MembersContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

/*---------------------------- Variables ----------------------------*/
const Members = [ 
    {picture: require("../images/team/members/Try_Ajitiono.png"),
        name:'Try Ajitiono', role: 'Engineer', detail: 'Front-end Developer, Date-fns Contributor',
        github: 'https://github.com/imballinst', 
        linkedin: 'https://www.linkedin.com/in/try-ajitiono/'},
    {picture: require("../images/team/members/Dhi-Aurrahman.jpg"),
        name:'Dhi Aurrahman', role: 'Engineer', detail: 'Random Engineer',
        github: 'https://github.com/dio', 
        linkedin: 'https://www.linkedin.com/in/diorahman/'},
    {picture: require("../images/team/members/Ignasi_Barrera2.jpg"),
        name:'Ignasi Barrera', role: 'Engineer', detail: 'Core Maintainer, Apache Jclouds',
        github: 'https://github.com/nacx', 
        linkedin: 'https://www.linkedin.com/in/ignasibarrera/'},
    {picture: require("../images/team/members/Zack_Butcher.png"),
        name:'Zack Butcher', role: 'Engineer', detail: 'Core Engineer, Istio',
        github: 'https://github.com/ZackButcher', 
        linkedin: 'https://www.linkedin.com/in/zachary-butcher-339a2180'},
    {picture: require("../images/team/members/Hongtao.jpg"),
        name:'Hongtao Gao', role: 'Engineer', detail: 'Core Maintainer, Apache Skywalking',
        github: 'https://github.com/hanahmily', 
        linkedin: ''},
    {picture: require("../images/team/members/jj.png"),
        name:'Jeyappragash Jeyakeerthi ', role: 'CTO', detail: 'Former Cloud Platform Engineer, Twitter',
        github: 'https://github.com/pragashj', 
        linkedin: 'https://www.linkedin.com/in/pragashjj'},
    {picture: require("../images/team/members/taiki_ono.png"),
        name:'Taiki Ono', role: 'Engineer', detail: 'Envoy and Service Mesh Developer',
        github: 'https://github.com/taiki45', 
        linkedin: 'https://www.linkedin.com/in/taiki45/'},
];

const Member = Members.map((mbr) =>
    <CardMember key={mbr.name} picture={mbr.picture} name={mbr.name} role={mbr.role} 
        detail={mbr.detail} github={mbr.github} linkedin={mbr.linkedin} />
);

const Team = () => (
  <Layout>
    <SEO title="Contact" />
    <Head background={require("../images/team/background.jpg")}
        title="Team"
        subTitle='Our Team Is Global and Our Culture Is Borderless'/>
    <Content>
        <StyledH1> Team Members </StyledH1>
        <MembersContainer>
            {Member}
        </MembersContainer>
        <StyledH1> Tetrate Advisors </StyledH1>
        <MembersContainer>
            {Member}
        </MembersContainer>
        <StyledH1> Tetrate Investors </StyledH1>
        <MembersContainer>
            {Member}
        </MembersContainer>
    </Content>
  </Layout>
)

export default Team

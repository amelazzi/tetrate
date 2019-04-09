import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'
import { bleu } from "../styles/colors"

import Head from '../components/head'
import CardMember from '../components/team/cardMember'
import CardAdvisor from '../components/team/cardAdvisor'
import Investor from '../components/team/investor'
import SubFooter from '../components/subFooter'


const Content = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0rem 3rem 4rem 3rem;

    @media (min-width: 32em) and (max-width: 48em) {
      padding: 1rem;
    }
`;

const StyledH1 = styled.h1`
    color: ${bleu};
    font-weight: 400;
    margin: 4rem;

    @media (min-width: 32em) and (max-width: 48em) {
      margin: 2rem;
      font-size: 2.4rem;
      font-weight: 200;
    }
`;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    @media (min-width: 48.1em) and (max-width: 76.7em) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 32em) and (max-width: 48em) {
        justify-content: center;
    }
`;

const InvestorContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    @media (min-width: 48.1em) and (max-width: 76.7em) {
        flex-wrap: nowrap;
    }
    @media (min-width: 32em) and (max-width: 48em) {
        justify-content: center;
    }
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
    {picture: require("../images/team/members/Tevah.jpg"),
        name:'Tevah Platt', role: 'Communications Designer', detail: 'Writer and Journalist',
        github: 'https://github.com/tevahp', 
        linkedin: 'https://www.linkedin.com/in/tevahp'},
    {picture: require("../images/team/members/Adityo.jpg"),
        name:'Adityo Pratomo', role: 'UX Designer', detail: 'Digital Product Enthusiast',
        github: 'https://github.com/lunchboxav'},
    {picture: require("../images/team/members/Shriram.jpg"),
        name:'Shriram Rajagopalan', role: 'Unprincipled Engineer', detail: 'Co-creator, Istio; Contributor, Envoy',
        github: 'https://github.com/rshriram',
        linkedin: 'https://www.linkedin.com/in/rshriram'},
    {picture: require("../images/team/members/Devarajan-Ramaswamy.png"),
        name:'Devarajan Ramaswamy', role: 'Engineer', detail: 'Service Mesh Developer; Contributor, Istio',
        github: 'https://github.com/deva26',
        linkedin: 'https://www.linkedin.com/in/prdeva/'},
    {picture: require("../images/team/members/toad.jpg"),
        name:'Gus Reiber', role: 'UX Lead', detail: 'Expert in UI/UX Vision & Innovation'},
    {picture: require("../images/team/members/Sai.jpg"),
        name:'Sai Sitharaman', role: 'Engineer', detail: 'Back-end and Distributed Systems Expert',
        github: 'https://github.com/saigs',
        linkedin: 'https://www.linkedin.com/in/saigs/'},
    {picture: require("../images/team/members/Varun-Talwar.png"),
        name:'Varun Talwar', role: 'CEO', detail: 'Co-creator, Istio, Founding PM, gRPC',
        github: 'https://github.com/zinuga',
        linkedin: 'https://www.linkedin.com/in/varuntalwar/'},
    {picture: require("../images/team/members/LiamWhite.png"),
        name:'Liam White', role: '¯\\_(ツ)_/¯', detail: 'Core Contributor, Istio',
        github: 'https://github.com/liamawhite'},
    {picture: require("../images/team/members/WuSheng.jpeg"),
        name:'Sheng Wu', role: 'Engineer', detail: 'Founder, Apache Skywalking',
        github: 'https://github.com/wu-sheng',
        linkedin: 'https://www.linkedin.com/in/wusheng1108/'},
    {picture: require("../images/team/members/lizan.jpg"),
        name:'Lizan Zhou', role: 'Engineer', detail: 'Core Maintainer, Envoy; Engineer, Istio, gRPC',
        github: 'https://github.com/lizan'}
];

const Member = Members.map((mbr) =>
    <CardMember key={mbr.name} picture={mbr.picture} name={mbr.name} role={mbr.role} 
        detail={mbr.detail} github={mbr.github} linkedin={mbr.linkedin} />
);


const Advisors = [ 
    {picture: require("../images/team/advisors/Chris-Aniczszyk.png"),
        name:'Chris Aniczszyk', detail: 'COO, CNCF'},
    {picture: require("../images/team/advisors/Mark-Carter.jpeg"),
        name:'Mark Carter', detail: 'Head of Platforms and Security at Tesla'},
    {picture: require("../images/team/advisors/David-Eckstein.jpeg"),
        name:'David Eckstein', detail: 'CFO, Menlo Security'},
    {picture: require("../images/team/advisors/BrianJ-Lg.jpg"),
        name:'Brian Johnson', detail: 'Ex-CISO, Lending Club; Ex-Security Lead, Netflix'},
    {picture: require("../images/team/advisors/MattKlein.jpg"),
        name:'Matt Klein', detail: 'Founder, Envoy'},
    {picture: require("../images/team/advisors/Guru.jpg"),
        name:'Guru Parulkar', detail: 'Executive Director, Stanford Labs'},
    {picture: require("../images/team/advisors/AB.png"),
        name:'A. B. Periasamy', detail: 'CEO, Minio.io'},
    {picture: require("../images/team/advisors/Larry.jpg"),
        name:'Larry Peterson', detail: 'CTO, Open Network Foundation'},
    {picture: require("../images/team/advisors/Zulfiker.jpg"),
        name:'Zulfikar Ramzan', detail: 'CTO, RSA'},
]

const Advisor = Advisors.map((adv) =>
    <CardAdvisor key={adv.name} picture={adv.picture} name={adv.name} detail={adv.detail}/>
);


const Investors = [
    {logo: require("../images/team/investor/dell.jpg"), link: 'https://www.delltechnologies.com/en-us/capital.htm'},
    {logo: require("../images/team/investor/intel.jpg"), link: 'http://www.intelcapital.com'},
    {logo: require("../images/team/investor/samsung-next.jpg"), link: 'https://samsungnext.com'},
    {logo: require("../images/team/investor/8vc.png"), link: 'https://8vc.com'}
];

const Invest = Investors.map((invst)=>
    <Investor key={invst.logo} logo={invst.logo} link={invst.link} />
);

const Team = () => (
  <Layout>
    <SEO title="Contact" />
    <Head background={require("../images/team/background.jpg")}
        title="Team"
        subTitle='Our Team Is Global and Our Culture Is Borderless'/>
    <Content>
        <StyledH1> Team Members </StyledH1>
        <CardsContainer>
            {Member}
        </CardsContainer>
        <StyledH1> Tetrate Advisors </StyledH1>
        <CardsContainer>
            {Advisor}
        </CardsContainer>
        <StyledH1> Tetrate Investors </StyledH1>
        <InvestorContainer>
            {Invest}
        </InvestorContainer>
    </Content>
    <SubFooter title="Interested in a Career with Tetrate?"  content="Submit a Resume" link='/'/>
  </Layout>
)

export default Team


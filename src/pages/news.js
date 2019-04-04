import React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'
import { bleu, darkBleu } from "../styles/colors"

import Head from '../components/head'
import Article from '../components/news/article'


const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  @media (max-width: 48em) {
    padding: 2rem;
    padding-bottom: 4rem;
  }
  padding-top: 0;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 48em) {
    flex-direction: column;
  }
`;

const PreviousBtn = styled(Link)`
    text-decoration: none;
    :hover{
        text-decoration: none;
    }
    button{
      display: flex;
      justify-content: flex-start;
      align-items: center;

      border: none;
      background: ${darkBleu};
      color: white;
      font-size: 1.6rem;
      font-weight: 400;
      letter-spacing: 1px;
      
      padding: 0.8rem 3.5rem;
      padding-left: 1.5rem;
      margin-top: 4rem;
      :hover{
          color: white;
          background: ${bleu};
          cursor: pointer;
      }
      @media (max-width: 48em) {
        width: 100%;
      }
    }
`;

const NextBtn = styled(PreviousBtn)`
  button{
    padding: 0.8rem;
    padding-left: 3.5rem !important;
    margin-top: 2rem !important;
  }
`;

const PrevIcon = styled.div`
  max-width: 0.8rem;
  min-width: 0.8rem;
  
  margin-right: 1.6rem;
  margin-top: 0.3rem;

  img{
    width: 100%;
    object-fit: cover;
  }
`;

const NextIcon = styled(PrevIcon)`
  margin-left: 1.6rem;
`;

const News = () => (
  <Layout>
    <SEO title="News & Events" />
    <Head background={require("../images/news-background.png")}
        title="News"/>
    <ArticleContainer>
      <Article  title="Linux Journal – Tetrate Hosting First Server Mesh Industry Conference"
        date="March 19, 2019"
        resume="Tetrate will be hosting the first-ever Service Mesh Industry Conference in San Francisco on March 28th and 29th. From the press release: “Service Mesh day 2019 is hosted by Tetrate and supported by Google, Juniper Networks, Capital One, and open source foundations including Cloud Native Computing Foundation, Cloud Foundry, OpenStack and ONF. The conference will bring together open source experts, cloud providers, customers and industry influencers to explore the use of service mesh technology in enterprise environments. The conference will explore issues such as managing microservices for any app, at any scale, decentralized security controls and the future evolution of service mesh technologies. Attendees will have a chance to network with users and creators in this space who are pioneering service mesh deployments first-hand and participate in conversations that will shape the direction of the industry.” The full schedule is here, and you can purchase tickets here."/>
      <Article  title="Linux Journal – Tetrate Hosting First Server Mesh Industry Conference"
        date="March 19, 2019"
        resume="Tetrate will be hosting the first-ever Service Mesh Industry Conference in San Francisco on March 28th and 29th. From the press release: “Service Mesh day 2019 is hosted by Tetrate and supported by Google, Juniper Networks, Capital One, and open source foundations including Cloud Native Computing Foundation, Cloud Foundry, OpenStack and ONF. The conference will bring together open source experts, cloud providers, customers and industry influencers to explore the use of service mesh technology in enterprise environments. The conference will explore issues such as managing microservices for any app, at any scale, decentralized security controls and the future evolution of service mesh technologies. Attendees will have a chance to network with users and creators in this space who are pioneering service mesh deployments first-hand and participate in conversations that will shape the direction of the industry.” The full schedule is here, and you can purchase tickets here."/>
      <BtnContainer>
        <PreviousBtn>
          <button>
            <PrevIcon>
              <img src={require("../images/back-arrow.png")} alt="back" />
            </PrevIcon>
            Previous Posts
          </button>
        </PreviousBtn>
        <NextBtn>
          <button>
            Newer Posts
            <NextIcon>
              <img src={require("../images/next-arrow.png")} alt="back" />
            </NextIcon>
          </button>
        </NextBtn>
      </BtnContainer>
    </ArticleContainer>
  </Layout>
)

export default News


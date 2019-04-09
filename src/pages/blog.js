import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import { darkBleu, bleu } from "../styles/colors"

import Head from '../components/head'
import Article from '../components/blog/article'
import SelectBox from '../components/blog/selectBox'
import SearchInput from "../components/blog/searchInput"


const Content = styled.div`
    display: grid;
    grid-template-columns: 2.8fr 1fr;

    padding: 4rem;
    @media (max-width: 76.7em) {
      display: flex;
      flex-direction: column-reverse;
      padding: 4rem;
    }

    @media (min-width: 32em) and (max-width: 48em) {
        display: flex;
        flex-direction: column-reverse;
        padding: 4rem 2rem;
    }
`;

const FilterSearch = styled.div`
    margin-left: 6rem;
    @media (max-width: 76.7em) {
        margin-left: 0;
        margin-bottom: 4rem;
    }
    h3{
        font-size: 1.6rem;
        font-weight: 200;
        color: black;
        opacity: .7;
        margin: 0;
    }
`;

const Articles = styled.div`
    @media (min-width: 32em) and (max-width: 48em) {
        padding: 4rem 0rem;
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
      
      margin: 4rem;
      margin-top: 0;
      padding: 0.8rem 3.5rem;
      padding-left: 1.5rem;
      :hover{
          color: white;
          background: ${bleu};
          cursor: pointer;
      }
      @media (min-width: 32em) and  (max-width: 48em) {
          margin-top: -4rem;
          margin-left: 2rem;
          width: 92%;
      }
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

const Blog = () => (
    <Layout>
        <SEO title="Resources" />
        <Head background={require("../images/blog-background.png")}
            title='Blog' 
            subTitle="Keeping Up with the Latest from Tetrate"/>
        <Content>
            <Articles>
                <Article logo={require("../images/logo/logo.png")}  
                        title="Tetrate Networkless Mesh"
                        company="Tetrate"
                        date="April 1, 2019"
                        resume="Tetrate Networkless Mesh is a revolutionary technology that will change how we perceive and understand communications and will elevate Service Mesh up to the next level. Based on industry proved and well-established standards, we have been able to remove the need for physical network devices that connect the peers on a network."
                        link="/"/>
                <Article logo={require("../images/logo/logo.png")}  
                        title="Tetrate Networkless Mesh"
                        company="Tetrate"
                        date="April 1, 2019"
                        resume="Tetrate Networkless Mesh is a revolutionary technology that will change how we perceive and understand communications and will elevate Service Mesh up to the next level. Based on industry proved and well-established standards, we have been able to remove the need for physical network devices that connect the peers on a network."
                        link="/"/>
            </Articles>
            <FilterSearch>
                <h3> BROWSE BY CATEGORY </h3>
                <SelectBox
                    items={[
                        { value: 'Amazon App Mesh', id: 2 },
                        { value: 'Amazon EKS', id: 3 },
                        { value: 'Apache Skywalking', id: 4 },
                        { value: 'AWS', id: 5 },
                        { value: 'Company news', id: 6 },
                        { value: 'customer case study', id: 7 },
                        { value: 'Istio', id: 8 },
                        { value: 'Multi-Cluster', id: 9 },
                        { value: 'Service Mesh', id: 10 },
                    ]}
                />
                <SearchInput></SearchInput>
            </FilterSearch>
        </Content>
        <PreviousBtn>
          <button>
            <PrevIcon>
              <img src={require("../images/back-arrow.png")} alt="back" />
            </PrevIcon>
            Previous Posts
          </button>
        </PreviousBtn>
        {/*<NextBtn>
          <button>
            Newer Posts
            <NextIcon>
              <img src={require("../images/next-arrow.png")} alt="back" />
            </NextIcon>
          </button>
        </NextBtn>*/}
    </Layout>
)

export default Blog

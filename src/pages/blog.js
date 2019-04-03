import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

import Head from '../components/head'
import Article from '../components/blog/article'



const Articles = styled.div`
    padding: 4rem;
    @media (max-width: 35em) {
        padding: 4rem 2rem;
    }
`;

const Blog = () => (
  <Layout>
    <SEO title="Resources" />
    <Head background={require("../images/blog-background.png")}
        title='Blog' 
        subTitle="Keeping Up with the Latest from Tetrate"/>
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
     </Layout>
)

export default Blog

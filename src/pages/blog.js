import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import styled from 'styled-components'

import Head from '../components/head'
import Article from '../components/blog/article'
import SelectBox from '../components/blog/selectBox'

const Content = styled.div`
    display: grid;
    grid-template-columns: 2.8fr 1fr;

    padding: 4rem;
`;

const FilterSearch = styled.div`
    margin-left: 6rem;
    h3{
        font-size: 1.6rem;
        font-weight: 200;
        color: black;
        opacity: .7;
        margin: 0;
    }
`;

const Articles = styled.div`
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
            </FilterSearch>
        </Content>
    </Layout>
)

export default Blog

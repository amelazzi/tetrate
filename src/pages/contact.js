import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import styled from 'styled-components'

import Head from '../components/head'
import Form from '../components/contact/form'
import { bleu } from "../styles/colors";


const StyledContent = styled.div`
    padding: 4rem 14rem;
`;

const IntroPage = styled.div`
    text-align: center;
    font-size: 1.8rem;
    padding: 0rem 22rem;
    padding-bottom: 4rem;
    box-sizing: border-box;

    h1{
        color: ${bleu};
        font-weight: 400;
        padding-bottom: 1.8rem;
        margin: 0;
    }
    p{
        margin: 0;
        color: black;
        opacity: 0.6;
        font-size: 2.2rem;
        font-weight: 300;
    }
    hr{
        border: 1px solid;
        border-color: lightgray;
        margin-top: 4rem;
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction:  row;
    justify-content: space-between;

    padding: 4rem 2rem;
    padding-bottom: 0rem;
`;

const InfoContainer = styled.div`
    width: 42%;
    p{
        color: black;
        font-weight: 300;
        font-size: 2.4rem;
        margin: 0;
    }
    ul{
        li{
            font-size: 1.2rem;
            color: ${bleu};
            margin-bottom: 2rem;
        }
        span{
            color: black;
            font-weight: 300;
            font-size: 2.2rem;
            margin: 0;
            margin-left: 1rem;
        }
    }
`;

const StyledP = styled.p`
    color: ${bleu} !important;
`;

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Head background={require("../images/contact-background.jpg")}
        title="Contact"/>
    <StyledContent>
        <IntroPage>
            <h1> Contact Tetrate Today </h1>
            <p> Thank you for your interest in Tetrate's tools and technologies. Let us know how we may help you. </p>
        </IntroPage>
        <hr/>
        <FormContainer>
            <InfoContainer>
                <p> Tetrate’s tools are designed to: </p>
                <ul>
                    <li> <span> Simplify your service mesh experience </span> </li>
                    <li> <span> Connect workloads in different clouds and clusters </span> </li>
                    <li> <span> Bridge traditional and modern infrastructure </span> </li>
                    <li> <span> Gain additional visibility for management </span> </li>
                </ul>
                <StyledP> Fill out this form and you’ll hear from us soon. </StyledP>
            </InfoContainer>
            <Form/>
        </FormContainer>
    </StyledContent>
  </Layout>
)

export default Contact

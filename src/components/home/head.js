import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { bleu, lightBleu } from '../../styles/colors';

const backgroundImg = require("../../images/home/head-background.png")

const StyledHead = styled.div`
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 8rem;

    h1{
        margin-top: 2rem !important;
        margin-bottom: 0 !important;
        font-size: 4.5rem;
        font-weight: 400;
        margin: 0;
    }
    h2{
        margin: 0;
        font-size: 3.2rem;
        color: ${bleu};
        font-weight: 400;
    }
    p{
        font-size: 1.6rem;
        font-weight: bold;
    }
    small{
        font-size: 1.6rem;
        font-weight: 200;
    }
`;

const LogoContainer = styled.div`
    width: 20rem;
    margin-top: 3rem;
    img{
        width: 100%;
        object-fit: cover;
    }
`;

const SectionContainer = styled.div`
    background: ${lightBleu};
    width: 100%;
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr;

    padding: 4rem 0rem;
`;

const StyledSection = styled.div`
    text-align: center;
    h3{
        font-size: 3rem;
        margin: 0;
        margin-bottom: 1rem;
        font-weight: 400;
    }
    small{
        line-height: 1.6;
    }
`;

const Head = () => {
    return(
        <StyledHead>
            <LogoContainer>
                <img src={require("../../images/logo/logo.png")} />
            </LogoContainer>
            <h1> Entreprise ready service mesh </h1>
            <h2> for any workland on any environment </h2>
            <p>
                <small> Powered by </small>
                Envoy and Istio
            </p>
            <SectionContainer>
                <StyledSection></StyledSection>
                <StyledSection>
                    <small> Join us at </small>
                    <h3> Service Mesh Day </h3>
                    <small> Fairmont Hotel, San Francisco 
                        <br/> March 29, 2019</small>
                </StyledSection>
                <StyledSection>
                    <small> Download </small>
                    <h3> GetEnvoy </h3>
                    <small> 
                        The easiest way to get started with
                        <br/> Enjoy
                    </small>
                </StyledSection>
                <StyledSection>
                    <small> Contact us to </small>
                    <h3> Request a demo </h3>
                    <small> Let us show you the new way to manage your network </small>
                </StyledSection>
            </SectionContainer>
        </StyledHead>
    );
}

export default Head;
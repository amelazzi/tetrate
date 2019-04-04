import React from 'react'

import styled from 'styled-components'
import { bleu, darkBleu } from '../../styles/colors'
import { Link } from 'gatsby'

const backgroundImg = require("../../images/home/head-background.png")

const StyledHead = styled.div`
    background-image: url(${backgroundImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin-top: 2rem !important;
        margin-bottom: 0 !important;
        font-size: 5rem;
        font-weight: 400;
        margin: 0;
    }
    h2{
        margin: 0;
        font-size: 3.4rem;
        color: ${bleu};
        font-weight: 400;
    }
    p{
        font-size: 2.2rem;
        font-weight: bold;
    }
    small{
        font-size: 2rem;
        font-weight: 200;
    }

    @media (max-width: 48em) {
		text-align: center;
        background-position: center 0rem;

        padding: 4rem 0rem;

        h1{
            font-size: 4.2rem !important;
            font-weight: 300 !important;
        }
        h2{
            margin-top: 1rem !important;
            font-size: 2.5rem  !important;
            color: ${bleu};
            font-weight: 300 !important;
        }
        p{
            font-size: 2.2rem !important;
            font-weight: bold;
        }
        small{
            font-size: 1.8rem !important;
            font-weight: 200;
        }
    }

`;

const LogoContainer = styled.div`
    width: 22rem;
    margin-top: 4.5rem;
    img{
        width: 100%;
        object-fit: cover;
    }
    @media (max-width: 48em) {
		display: none;
    }
`;

const SectionContainer = styled.div`
    background: rgba(190,226,241,.8);
    box-shadow: 0 -40px 40px 16px rgba(190,226,241,.8);

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 10rem;
    padding: 0rem;

    @media (max-width: 48em) {
		display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0rem;
    }
`;

const StyledSection = styled(Link)`
    text-decoration: none;
    text-align: center;
    color: ${darkBleu};
    margin: 4rem;
    margin-top: 0rem;

    h3{
        font-size: 3.2rem;
        margin: 0;
        margin-bottom: 1rem;
        font-weight: 600;
    }
    small{
        font-size: 1.7rem;
        line-height: 1.6;
    }

    :hover{
        text-decoration: none;
        color: ${darkBleu};
        cursor: pointer;
    }

    @media (max-width: 48em) {
		padding: 2rem;
        :first-child{
            padding-top: 0rem;
        }
        :last-child{
            padding-bottom: 4rem;
        }
        margin: 0;
        border-bottom: 2px solid #d3ebf6;

        h3{
            font-size: 2.6rem !important;
            font-weight: 600 !important;
        }

        small{
            font-size: 1.6rem !important;
        }
    }
`;

const Head = () => {
    return(
        <StyledHead>
            <LogoContainer>
                <img src={require("../../images/logo/logo.png")} alt='logo'/>
            </LogoContainer>
            <h1> Entreprise ready service mesh </h1>
            <h2> for any workload on any environment </h2>
            <p>
                <small> Powered by </small> Envoy and Istio
            </p>

            <SectionContainer>
                <StyledSection to='/tetrateq'>
                    <small> Better security </small>
                    <h3> Tetrate Q is here </h3>
                    <small> Learn about the new way 
                        <br/> to do security.</small>
                </StyledSection>
                <StyledSection to='/getenvoy'>
                    <small> Download </small>
                    <h3> GetEnvoy </h3>
                    <small> 
                        The easiest way to get started with
                        <br/> Enjoy
                    </small>
                </StyledSection>
                <StyledSection to='/contact'>
                    <small> Contact us to </small>
                    <h3> Request a demo </h3>
                    <small> Let us show you the new way to
                        <br/> manage your network </small>
                </StyledSection>
            </SectionContainer>
        </StyledHead>
    );
}

export default Head;
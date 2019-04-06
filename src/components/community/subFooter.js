import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import { darkBleu, bleu } from '../../styles/colors'

import SelectBox from './selectBox'



const background = require("../../images/home/footer-background.jpg")

const StyledSubFooter = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    text-align: center;
    padding: 4rem 16rem;

    h1{
        color: white;
        font-size: 3.2rem;
        font-weight: 300;
        margin: 0;
    }
    p{
        color: white;
        line-height: 2.8rem;
        font-weight: 200;
        margin: 0;
        margin-top: 2rem;
    }

    @media (min-width: 48.1em) and (max-width: 76.7em) {
        padding: 4rem 6rem;
    }
    
    @media (min-width: 32em) and (max-width: 48em) {
        padding: 4rem 2rem;
        h1{
            font-size: 2.6rem;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${bleu};
    line-height: 2.8rem;
    font-weight: 400;
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    @media (min-width: 32em) and (max-width: 48em) {
        display: none;
    }
`;

const StyledBtn = styled(Link)`
    text-decoration: none;
    color: white;
    margin: 0rem 1rem;

    button{
        margin-top: 2rem;
        border: none;
        background: ${bleu} ;
        font-size: 1.6rem;
        font-weight: 500;
        padding: 1rem 4rem;
        text-transform: uppercase;
        color: white;

        :hover{
            background: white;
            color: ${darkBleu};
            cursor: pointer;
        }
    }
`;

const subFooter = ({link1, content1, link2, content2, link3, content3}) =>{
    return(
        <StyledSubFooter>
            <h1> Tetrate’s Commitment to Open Source </h1> 
            <p> Tetrate is committed to supporting the open source community. Our team includes founders and core maintainers of 
                <StyledLink to='/'> Istio</StyledLink>, <StyledLink to='/getenvoy'>Envoy</StyledLink>, and
                <StyledLink to='/apache-skywalking'> Apache SkyWalking</StyledLink>.
                The open source projects listed here are the result of our continued innovation in the cloud-native space.
            </p> 
            <SelectBox
                    items={[
                        { value: 'Select tool', id: 1 },
                        { value: 'Get Envoy', id: 2 },
                        { value: 'Tetrate Istio Cloud Map Operator', id: 3 },
                        { value: 'Tetrate Q', id: 3 }
                    ]}
                />
            <LinkContainer>
                <StyledBtn to={link1}>
                    <button> {content1} </button>
                </StyledBtn>
                <StyledBtn to={link2}>
                    <button> {content2} </button>
                </StyledBtn>
                <StyledBtn to={link3}>
                    <button> {content3} </button>
                </StyledBtn>
            </LinkContainer>
        </StyledSubFooter>
    );
}
export default subFooter
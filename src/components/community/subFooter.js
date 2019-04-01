import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'
import { darkBleu, bleu } from '../../styles/colors'



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

const subFooter = () =>{
    return(
        <StyledSubFooter>
            <h1> Tetrate’s Commitment to Open Source </h1> 
            <p> Tetrate is committed to supporting the open source community. Our team includes founders and core maintainers of 
                <StyledLink to='/'> Istio</StyledLink>, <StyledLink to=''>Envoy</StyledLink>, and
                <StyledLink to='/'> Apache SkyWalking</StyledLink>.
                The open source projects listed here are the result of our continued innovation in the cloud-native space.
            </p> 
            <LinkContainer>
                <StyledBtn to='/'>
                    <button> Apache SkyWalking </button>
                </StyledBtn>
                <StyledBtn to='/'>
                    <button> Tetrate Istio Cloud Map Operator </button>
                </StyledBtn>
            </LinkContainer>
        </StyledSubFooter>
    );
}
export default subFooter
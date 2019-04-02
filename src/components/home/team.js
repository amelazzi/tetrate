import React from "react"

import styled from 'styled-components'
import { darkBleu } from '../../styles/colors'

import Member from './member'
import { Link } from "gatsby";


const background = require("../../images/home/team/background.jpg")

const StyledTeam = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0rem;
    
    padding-top: 4rem;
    text-align: center;
    h1{
        margin: 0;
        color: white;
        font-size: 3.3rem;
        font-weight: 300;
    }
    @media (max-width: 35em) {
        background-position: center;
        h1{
            font-size: 2.4rem;
            padding: 0rem 4rem;
        }
    }
`;

const Members = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 35em) {
        padding: 0rem 2rem;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

const ButtonContainer = styled.div`
    background: rgba(0,0,0,.4);
    margin-top: 4rem;
    padding: 2rem;
    button{
        border: 2px solid white;
        background: none;
        padding: 1rem 4rem;
        color: white;
        font-size: 1.8rem;
        opacity: 1 !important;
        :hover{
            background: white;
            color: ${darkBleu};
            cursor: pointer;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    :hover{
        text-decoration: none;
        cursor: pointer;
    }
`;

const Team = () => (
    <StyledTeam>
        <h1> Our Founding Team Comes from Communities of Istio, gRPC, and Envoy </h1>
        <Members>
            <Member picture={require("../../images/home/team/Varun-ceo.png")}
                name="Varun Talwar"
                job="CEO"
                detail="Co-creator, Istio, Founding PM, gRPC"/>
            <Member picture={require("../../images/home/team/jj-cto.png")}
                name="Jeyappragash Jeyakeerthi"
                job="CTO"
                detail="Former Cloud Platform Engineer, Twitter"/> 
            <Member picture={require("../../images/home/team/Zack-engineer.png")}
                name="Zack Butcher"
                job="Engineer"
                detail="Core Engineer, Istio"/> 
            <Member picture={require("../../images/home/team/lizan-engineer.jpg")}
                name="Lizan Zhou"
                job="Engineer"
                detail="Core Maintainer, Envoy; Engineer, Istio, gRPC"/> 
        </Members>
        <ButtonContainer>
            <StyledLink to='/team'>
                <button> Meet the Entire team </button>
            </StyledLink>
        </ButtonContainer>
    </StyledTeam>
)

export default Team

import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components'
import { darkBleu } from '../../styles/colors'

import Member from './member'


const background = require("../../images/home/team/background.jpg")

const StyledTeam = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;

    text-align: center;
    h1{
        padding: 3rem !important;
        color: white;
        font-size: 3.4rem;
        font-weight: 400;
    }
`;

const Members = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 0rem 8rem;
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
            <button> Meet the Entire team </button>
        </ButtonContainer>
    </StyledTeam>
)

export default Team

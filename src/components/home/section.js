import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    border-right: 2px dashed lightgrey;
    :last-child{
        border: none;
    }
    padding: 0rem 2rem;
    margin: 3rem 0rem;

    text-align: center;
    h1{
        color: black !important;
        font-size: 2.5rem;
        font-weight: 300;
    }
    p{
        color: black;
        font-size: 1.6rem;
        font-weight: 300;
        margin: 0;
    }

`;

const ImgContainer = styled.div`
    width: 20rem;
    margin-top: 2rem;
    img{
        width: 100%;
        object-fit: cover;
    }
`;

const Section = () => (
    <StyledSection>
        <h1> Intelligent Traffic Management </h1>
        <p> Enhance reliability with dynamic, QoS-aware, decentralized routing controls. </p>
        <ImgContainer>
            <img src={require("../../images/home/intelligent-traffic-management.png")} />
        </ImgContainer>
    </StyledSection>
)

export default Section

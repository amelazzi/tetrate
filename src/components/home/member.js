import React from "react"

import styled from 'styled-components'

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    margin-top: 4rem;
    p{
        color: black !important;
        font-size: 1.8rem;
        font-weight: 500;
        margin:0;
    }
    small{
        width: 80%;
        color: white;
        font-size: 1.4rem;
        font-weight: 300;
        margin: 0;
        margin-top: 1rem;
    }
    @media (min-width: 32em) and (max-width: 48em) {
        width: 48%;
        small{
            width: 100%;
        }
    }

`;

const ImgContainer = styled.div`
    max-width: 12rem;
    max-height: 12rem;

    min-width: 12rem;
    min-height: 12rem;

    background: white;
    border-radius: 100%;

    padding: 0.6rem;
    margin-bottom: 2rem;
    
    img{
        border-radius: 100%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Member = ({picture, name, job, detail}) => (
    <StyledSection>
        <ImgContainer>
            <img src={picture} alt='profile' />
        </ImgContainer>
        <p> {name} </p>
        <p> {job} </p>
        <small> {detail} </small>
    </StyledSection>
)

export default Member

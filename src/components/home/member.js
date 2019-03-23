import React from "react"

import styled from 'styled-components'

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 23%;

    text-align: center;
    p{
        color: black !important;
        font-size: 1.8rem;
        font-weight: 500;
        margin:0;
    }
    small{
        width: 75%;
        color: white;
        font-size: 1.4rem;
        font-weight: 300;
        margin: 0;
        margin-top: 1rem;
    }

`;

const ImgContainer = styled.div`
    max-width: 12rem;
    max-height: 12rem;

    min-width: 12rem;
    min-height: 12rem;

    background: white;
    border-radius: 100%;

    padding: 0.8rem;
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

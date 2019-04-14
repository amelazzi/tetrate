import React from "react"


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
        padding: 0rem 1rem;
        margin: 0;
    }
    p{
        color: black;
        font-size: 1.6rem;
        line-height: 1.8;
        font-weight: 300;
        margin: 0;
    }
    @media (max-width: 48em) {
        border: none;
        margin: 0rem;
        h1{
            margin-top: 4rem !important;
        }
    }

`;

const ImgContainer = styled.div`
    width: 18rem;
    margin-top: 3rem;
    img{
        width: 100%;
        object-fit: cover;
    }
`;

const Section = ({title, content, picture}) => (
    <StyledSection>
        <h1> {title} </h1>
        <p> {content} </p>
        <ImgContainer>
            <img src={picture} alt='background' />
        </ImgContainer>
    </StyledSection>
)

export default Section

import React from 'react'

import styled from 'styled-components'

import { bleu } from '../../styles/colors'

const StyledSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    border-right: 2px dashed lightgrey;
    :last-child{
        border: none;
    }
    padding: 0rem 4rem;
    margin: 3rem 0rem;
    @media (min-width: 32em) and (max-width: 48em) {
        margin: 0rem;
        margin-top: 4rem;
    }

    color: black;
    line-height: 1.6;
    p{
        font-size: 1.6rem;
        font-weight: 300;
        margin: 0;
    }
    span{
        color: ${bleu};
        font-weight: 200;
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


const Testimony = ({content1, content2, strong, name, logo}) => {
    return(
        <StyledSection>
            <p> {content1} 
                <strong> {strong} </strong>
                {content2}
            </p>
            <span> {name} </span>
            <ImgContainer>
                <img src={logo} alt="Profile" />
            </ImgContainer>
        </StyledSection>
    );
}

export default Testimony;
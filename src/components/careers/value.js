import React from 'react'
import styled from 'styled-components'
import { bleu } from '../../styles/colors';

const StyledValue = styled.div`
    margin: 0rem 4rem;
    margin-top: 1rem;
    padding: 2rem;
    padding-top: 0rem;
    text-align: center;
    height: 30rem;
    border-bottom: 2px solid ${bleu};
    :last-child{
        border: none;
    }
    h1{
        font-size: 2.4rem;
        font-weight: 500;
    }
    p{
        color: black;
        font-weight: 300;
        line-height: 1.8;
    }
`;

const Value = ({title, content}) => {
    return(
        <StyledValue>
            <h1> {title} </h1>
            <p> {content} </p>
        </StyledValue>
    );
}

export default Value;
import React from "react"

import styled from 'styled-components'

const StyledHead = styled.div`
    background-image: url(${props=>props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0rem -12rem;

    padding: 8rem 4rem;

    h1{
        color: white;
        font-size: 5rem;
        font-weight: 400;
        margin: 0;
    }
    h2{
        color: white;
        font-size: 3rem;
        font-weight: 300;
        margin: 0;
        margin-top: 2rem;
    }
`;

const Head = ({background, title, subTitle}) => (
  <StyledHead background={background}>
    <h1> {title} </h1>
    <h2> {subTitle} </h2>
  </StyledHead>
)

export default Head

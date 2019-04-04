import React from "react"

import styled from 'styled-components'

const StyledHead = styled.div`
    background-image: url(${props=>props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0rem;

    @media (max-width: 48em) {
      background-position: -4rem 0rem;
      padding: 8rem 2rem;
    }

    padding: 8.5rem 4rem;

    h1{
        color: white;
        font-size: 5rem;
        font-weight: 300;
        margin: 0;
    }
    h2{
        color: white;
        font-size: 2.6rem;
        font-weight: 200;
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

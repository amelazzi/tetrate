import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

const background = require("../../images/resources/background.jpg")

const StyledHead = styled.div`
    background-image: url(${background});
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

const Head = () => (
  <StyledHead>
    <h1> Resources </h1>
    <h2> Explore Tetrate’s Library of Resources </h2>
  </StyledHead>
)

export default Head

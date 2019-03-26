import React from "react"

import styled from 'styled-components'
import { green, bleu } from "../../styles/colors";

const background = require("../../images/careers/head-background.jpg")

const StyledHead = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0rem -12rem;

    padding: 8rem 4rem;

    h1{
        color: white;
        font-size: 5rem;
        font-weight: 300;
        margin: 0;
    }
    h2{
        color: white;
        font-size: 2.6rem;
        font-weight: 300;
        margin: 0;
        margin-top: 2rem;
    }
	button{
		border: none;
		background: ${green};
		color: white;
		font-size: 1.6rem;
		letter-spacing: 0.1rem;
		font-weight: 400;
		padding: 1rem 4rem;
		margin-top: 4rem;

		:hover{
			background: ${bleu};
			cursor: pointer;
		}
	}
`;

const Head = ({background}) => (
  <StyledHead background={background}>
    <h1> Careers </h1>
    <h2> Join the Team that's Redefining Modern Application Networking </h2>
    <button>
        See Our Opennings
    </button>
  </StyledHead>
)

export default Head

import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components'
import { green, bleu } from "../../styles/colors"

import NavBar from './navBar'

const background = require("../../images/apache-skywalking/background.jpg")

const StyledHead = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0rem;

    position: relative;

    padding: 12rem 38rem 10rem 4rem;

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
`;

const StyledLink = styled(Link)`
	button{
		border: none;
		background: ${green};
		color: white;
		font-size: 1.6rem;
		letter-spacing: 0.1rem;
		font-weight: 400;
		padding: 1rem 4rem;
		margin-top: 4rem;
    margin-bottom: 4rem;

		:hover{
			background: ${bleu};
			cursor: pointer;
		}
	}
`;

const Head = ({background}) => (
  <StyledHead background={background}>
    <h1> Apache Skywalking </h1>
    <h2> Get Service Mesh Observability and Performance Management with Skywalking</h2>
    <StyledLink to='/'>
      <button>
        Contact Us about APACHE SKYWALKING
      </button>
    </StyledLink>
    <NavBar/>
  </StyledHead>
)

export default Head

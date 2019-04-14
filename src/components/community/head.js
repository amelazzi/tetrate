import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components'
import { bleu } from "../../styles/colors"

import NavBar from './navBar'

const StyledHead = styled.div`
    background-image: url(${props=>props.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 0rem;

    position: relative;

    padding: 12rem 38rem 10rem 4rem;
    @media (min-width: 48.1em) and (max-width: 76.7em) {
      padding: 12rem 4rem;
    }
    @media   (max-width: 48em) {
      padding: 12rem 2rem;
      padding-bottom: 10rem;
    }

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
		background: ${props=>props.aboutColor};
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
    @media (min-width: 48.1em) and (max-width: 76.7em) {
        margin-bottom: 2rem;
    }
	}
`;

const Head = ({location, background, title, subTitle,aboutColor, about}) => (
  <StyledHead background={background}>
    <h1> {title} </h1>
    <h2> {subTitle} </h2>
    <StyledLink to='/contact' aboutColor={aboutColor}>
      <button>
        Contact Us about {about}
      </button>
    </StyledLink>
    <NavBar location={location}/>
  </StyledHead>
)

export default Head

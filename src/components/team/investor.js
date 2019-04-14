import React from "react"
import { Link } from 'gatsby'

import styled from 'styled-components'

const ImgContainer = styled.div`
    width: 28.5rem;
    height: 28.5rem;

    margin: 1rem;
    margin-top: -4rem;

    @media (min-width: 48.1em) and (max-width: 76.7em) {
        width: auto;
        margin: -2rem 2rem;
    }
    @media   (max-width: 48em) {
        margin: 0rem;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Investor = ({logo, link}) => (
    <ImgContainer>
        <Link to={link}>
            <img src={logo} alt='investor'/>
        </Link>
    </ImgContainer>
)

export default Investor


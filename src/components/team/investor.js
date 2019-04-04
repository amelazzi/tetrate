import React from "react"
import { Link } from 'gatsby'

import styled from 'styled-components'

const ImgContainer = styled.div`
    max-width: 28.5rem;
    max-height: 28.5rem;
    min-width: 28.5rem;
    min-height: 28.5rem;

    margin: 1rem;
    margin-top: -4rem;
    @media (max-width: 48em) {
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


import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import { bleu } from "../../styles/colors"

const StyledNavBar = styled.nav`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin: 4rem;
    margin-bottom: 3rem;

    a{        
        margin: 0;
        border: none;
        background: none;
        text-decoration: none;
        border-right: 1px solid ${bleu};
        color: ${bleu};

        :last-child{
            border: none;
            padding-right: 0;
        }

        padding: 0rem 2rem;
        font-size: 1.6rem;
        font-weight: 200;

        :hover{
            color: white;
            cursor: pointer;
            text-decoration: none;
        }
    }
`;


const NavBar = () => (
    <StyledNavBar>
        <Link to="/apache-skywalking"> Apache Skywalking </Link>
        <Link to="/getenvoy"> GetEnvoy </Link>
        <Link to="/tetrate-cloud-map"> Tetrate Istio Cloud Map Operator </Link>
        <Link to="/"> Tetrate Q </Link>
    </StyledNavBar>
)

export default NavBar

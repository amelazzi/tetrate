import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { darkBleu, bleu } from '../styles/colors';


const StylesFooter = styled.div`
    background: ${darkBleu};
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    p{
        color: white;
        font-size: 1.8rem;
        font-weight: 200; 
        margin: 1.6rem;
    }
    small{
        color: ${bleu};
        font-size: 1.4rem;
        font-weight: 200;
    }

    @media (max-width: 48em) {
		padding: 3rem 2rem;
        p{
            margin: 0;
            margin-bottom: 1.6rem;
        }
    }
`;

const MenuContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 60%;
    @media (max-width: 48em) {
        width: 100%;
        flex-wrap: wrap;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    text-align: left; 
    h1{
        color: white;
        display: block;
        font-size: 1.6rem;
        font-weight: 600;
    }
    ul{
        list-style: none;
    }
    @media (max-width: 48em) {
        width: 50%;
        margin-top: 3rem !important;
        :first-child, :nth-child(2){
            margin-top: 0 !important;
        }
    }
`;

const StyledLink = styled(Link)`
    color: ${bleu};
    font-size: 1.4rem;
    font-weight: 300;
    margin: 0.6rem 0rem;
    text-decoration: none;
    :first-child{
        margin-top: 0rem;
    }
    :hover{
        color: white;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 2rem;
`;

const IconContainer = styled.div`
    width: 2.2rem;
    height: 2.2rem;
    background: ${bleu};
    margin: 1rem;
    padding: 0.6rem;

    :hover{
        cursor: pointer;
        background: white;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit:contain;
    }
`;

const Footer = () => {
    return(
        <StylesFooter>
            <MenuContent>
                <Content>
                    <h1> Community </h1>
                        <StyledLink to='/apache-skywalking'> Apache Skywalking  </StyledLink> 
                        <StyledLink to='/tetrate-cloud-map'> Tetrate Istio Cloud Map Operator </StyledLink>
                        <StyledLink to='/getenvoy'> GetEnvoy </StyledLink> 
                        <StyledLink to='/tetrateq'> Tetrate Q </StyledLink> 
                </Content>
                <Content>
                    <h1> Resources </h1>
                        <StyledLink to='/'> Papers & Guides  </StyledLink> 
                        <StyledLink to='/'> Talks & Videos</StyledLink>
                        <StyledLink to='/'> Events </StyledLink> 
                        <StyledLink to='/'> Blog </StyledLink> 
                </Content>
                <Content>
                    <h1> About Us </h1>
                        <StyledLink to='/team'> Team </StyledLink> 
                        <StyledLink to='/news'> News</StyledLink>
                        <StyledLink to='/careers'> Careers </StyledLink> 
                </Content>
                <Content>
                    <h1> Connect </h1>
                        <StyledLink to='/contact'> Contact </StyledLink> 
                        <StyledLink to='/terms-of-use'> Terms of Use </StyledLink>
                        <StyledLink to='/'> privacy </StyledLink> 
                </Content>
            </MenuContent>
            <SocialMedia>
                <IconContainer>
                    <Link to='/'> 
                        <img src={require("../images/social-media/twitter.png")} alt='twitter'/> 
                    </Link>
                </IconContainer>
                <IconContainer>
                    <Link to='/'> 
                        <img src={require("../images/social-media/github.png")} alt='github' /> 
                    </Link>
                </IconContainer>
                <IconContainer>
                    <Link to='/'> 
                        <img src={require("../images/social-media/linkedIn.png")} alt='linkedin' /> 
                    </Link>
                </IconContainer>
                <IconContainer>
                    <Link to='/'> 
                        <img src={require("../images/social-media/email.png")} alt='email'/> 
                    </Link>
                </IconContainer>
            </SocialMedia>
            <p> 2 Embarcadero Center, San Francisco, California, 94111, USA </p>
            <small> Copyright © Tetrate 2019. All rights reserved. </small>
        </StylesFooter>
    );
}

export default Footer;
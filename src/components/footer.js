import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { darkBleu, lightBleu, bleu } from '../styles/colors';


const StylesFooter = styled.div`
    background: ${darkBleu};
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;

const MenuContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 1.8fr 1.8fr 1.8fr 1.8fr 2fr;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;  
    h1{
        color: white;
        display: block;
        font-size: 1.6rem;
        padding-bottom: 1rem;
        font-weight: 700;
    }
    ul{
        list-style: none;
    }
`;

const StyledLink = styled(Link)`
    color: ${bleu};
    font-size: 1.4rem;
    font-weight: 300;
    margin: 0.6rem 0rem;
    text-decoration: none;
    :hover{
        color: white;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 6rem;
    margin-bottom: 2rem;
`;

const IconContainer = styled.div`
    width: 2.5rem;
    height: 2rem;
    background: ${bleu};
    margin: 1rem;
    padding: 0.8rem;

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
                <Content></Content>
                <Content>
                    <h1> Community </h1>
                        <StyledLink to='/'> Apache Skywalking  </StyledLink> 
                        <StyledLink to='/'> Tetrate Istio Cloud Map Operator </StyledLink>
                        <StyledLink to='/'> GetEnvoy </StyledLink> 
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
                        <StyledLink to='/'> Team </StyledLink> 
                        <StyledLink to='/'> News</StyledLink>
                        <StyledLink to='/'> Careers </StyledLink> 
                </Content>
                <Content>
                    <h1> Connect </h1>
                        <StyledLink to='/'> Contact </StyledLink> 
                        <StyledLink to='/'> Terms of Use </StyledLink>
                        <StyledLink to='/'> privacy </StyledLink> 
                </Content>
            </MenuContent>
            <SocialMedia>
                <IconContainer>
                    <Link to='/'> 
                        <img src={require("../images/social-media/twitter.png")} /> 
                    </Link>
                </IconContainer>
                <IconContainer>
                    <Link to='/'> 
                        <img src={require("../images/social-media/github.png")} /> 
                    </Link>
                </IconContainer>
                <IconContainer>
                    <Link to='/'> 
                        <img src={require("../images/social-media/linkedIn.png")} /> 
                    </Link>
                </IconContainer>
                <IconContainer>
                    <Link to='/'> 
                        <img src={require("../images/social-media/email.png")} /> 
                    </Link>
                </IconContainer>
            </SocialMedia>
            <p> 2 Embarcadero Center, San Francisco, California, 94111, USA </p>
            <small> Copyright © Tetrate 2019. All rights reserved. </small>
        </StylesFooter>
    );
}

export default Footer;
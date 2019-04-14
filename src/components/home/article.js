import React from 'react'

import styled from 'styled-components'
import { darkBleu, bleu } from '../../styles/colors';
import { Link } from 'gatsby';

const StyledArticle = styled.div`
    position: relative;
    background: white;
    width: 32.5rem;
    height: 42rem;
    padding: 1rem;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    display: flex;
    flex-direction: column;

    img{
        width: 100%;
        object-fit: cover;
    }

    @media (min-width: 48.1em) and (max-width: 76.7em) {
        width: auto;
        height: 43rem;
        margin: 1rem;
        margin-top: 0;
    }

    @media   (max-width: 48em) {
        position: static;
        width: 100%;
        height: 100%;
        margin: 2rem;
    }

`;

const Content = styled.div`
    padding: 1rem;
    h2{
        color: gray;
        text-transform: uppercase;
        font-size: 1.6rem;
        font-weight: 300;
    }
    h1{
        color: black;
        opacity: .65;
        font-size: 2.4rem;
        font-weight: 500;
    }
    p{
        color: gray; 
        font-size: 1.6rem;
        font-weight: 100;
        line-height: 1.8;
    }
`;

const ButtonWrap = styled.div`
    position: absolute;
    bottom: 2rem;
    text-align: center;
    margin-left: -2rem;
    width: 100%;
    button{
        border: none;
        background: ${darkBleu};
        font-size: 1.6rem;
        padding: 1rem 4rem;
        letter-spacing: 1px;
        transition: .2s ease-in-out;

        :hover{
            background: ${bleu};
            cursor: pointer;
        }
    }
    
    @media (min-width: 48.1em) and (max-width: 76.7em) {
        margin-left: -2rem;
    }

    @media   (max-width: 48em) {
        position: static;
        margin-left: 0rem;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

const Article = ({picture, type, title, content}) => {
    return(
        <StyledArticle>
            <img src={picture} alt='icon'/>
            <Content>
                <h2> {type} </h2>
                <h1> {title} </h1>
                <p> {content} </p>
                <ButtonWrap>
                    <button>
                        <StyledLink to='/'> Read </StyledLink>
                    </button>
                </ButtonWrap>
            </Content>
        </StyledArticle>
    );
}

export default Article;
import React from 'react'

import styled from 'styled-components'
import { darkBleu, bleu } from '../../styles/colors';
import { Link } from 'gatsby';

const StyledArticle = styled.div`
    position: relative;
    background: white;
    width: 26rem;
    height: 42rem;
    padding: 1rem;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    @media (max-width: 48em) {
      width: 100%;
    }
    display: flex;
    flex-direction: column;

    margin: 1rem;

    img{
        width: 100%;
        object-fit: cover;
    }

`;

const Content = styled.div`
    padding: 1rem;
    h2{
        color: gray;
        text-transform: uppercase;
        font-size: 1.6rem;
        font-weight: 100;
    }
    h1{
        color: gray;
        font-size: 2.4rem;
        font-weight: bold;
    }
    p{
        color: gray; 
        font-size: 1.6rem;
        font-weight: 100;
        line-height: 1.6;
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
        font-size: 1.8rem;
        padding: 1rem 4rem;
        letter-spacing: 1px;
        transition: .2s ease-in-out;

        :hover{
            background: ${bleu};
            cursor: pointer;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`;

const Card = ({picture, type, title, content}) => {
    return(
        <StyledArticle>
            <img src={picture} alt='article icon' />
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

export default Card;
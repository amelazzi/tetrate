import React from "react"
import styled from "styled-components"
import { darkBleu, bleu } from "../../styles/colors";
import { Link } from "gatsby";

const StyledArticle = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 35em) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    padding: 4rem 0rem;
    :first-child{
        padding-top: 0;
    }
    border-bottom: 2px solid lightgray;
`;

const LogoContainer = styled.div`
    max-width: 22rem;
    min-width: 22rem;

    img{
        width: 100%;
        object-fit: cover;
    }
`;

const Content = styled.div`
    margin-left: 4rem;

    h1{
        margin: 0;
        font-size: 3.2rem;
        font-weight: 300;
        margin-bottom: 1rem;
    }
    small{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        color: ${darkBleu};
        font-size: 1.6rem;
        font-weight: 600;
    }
    span{
        color: lightgray;
        font-size: 2rem;
        font-weight: 400;
        margin: 0rem 1rem;
    }
    p{
        color: black;
        font-weight: 200;
        line-height: 1.6;
    }

    @media (max-width: 35em) {
        margin-left: 0rem;
        h1{
            font-size: 2.4rem;
            margin-top: 2rem;
        }
        small{
            justify-content: center;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    :hover{
        text-decoration: none;
    }
    button{
        border: none;
        background: ${bleu};
        color: white;
        font-size: 1.6rem;
        font-weight: 400;
        letter-spacing: 1px;
        padding: 1rem 4rem;
        :hover{
            color: white;
            background: ${darkBleu};
            cursor: pointer;
        }
    }
`;

const Article = ({logo, title, company, date, resume, link}) => (
  <StyledArticle to={link}>
    <LogoContainer>
        <img src={logo} alt="logo"/>
    </LogoContainer>
    <Content>
        <h1> {title} </h1>
        <small> {company} <span> | </span> {date}  </small>
        <p> {resume} </p>
        <StyledLink to={link}>
            <button> Read </button>
        </StyledLink>
    </Content>
  </StyledArticle>
)

export default Article

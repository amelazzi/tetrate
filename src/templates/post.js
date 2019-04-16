import React from 'react'
import { graphql, Link } from 'gatsby'

import styled from "styled-components"

import Layout from "../components/layout/layout"
import Head from "../components/head"
import { darkBleu, bleu } from '../styles/colors';

const StyledPost = styled.div`
    padding: 4rem 14rem;

    small{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        margin: 1.5rem 0rem;

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
`;

const StyledH1 = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 3.6rem;
    font-weight: 500;
`;


const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const IconContainer = styled.div`
    width: 2.2rem;
    height: 2.2rem;

    background: lightgray;
    margin: 0.5rem;
    padding: 0.6rem;

    :hover{
        cursor: pointer;
        background: ${darkBleu};
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const PreviousBtn = styled(Link)`
    text-decoration: none;
    :hover{
        text-decoration: none;
    }
    button{
      border: none;
      background: ${darkBleu};
      color: white;
      font-size: 1.6rem;
      font-weight: 400;
      letter-spacing: 1px;
      
      margin: 4rem 0rem;
      margin-top: 3rem;
      padding: 1.2rem 4rem;
      :hover{
          color: white;
          background: ${bleu};
          cursor: pointer;
      }
      @media (max-width: 48em) {
          margin-top: -4rem;
          margin-left: 2rem;
          width: 92%;
      }
    }
`;


export default function Template ({data}) {
    const {markdownRemark: post} = data;
    return(
        <Layout>
            <Head background={require("../images/blog-background.png")}
                title='Blog' 
                subTitle={post.frontmatter.title}/>
            <StyledPost> 
                <StyledH1> {post.frontmatter.title} </StyledH1>
                <small> 
                    Lizan Zhou, Tetrate Engineer and Senior Envoy Maintainer 
                    <span> | </span> 
                    April 5, 2019 
                </small>
                <SocialMedia>
                    <IconContainer>
                        <Link to='/'> 
                            <img src={require("../images/social-media/twitter-white.png")} alt='github'/> 
                        </Link>
                    </IconContainer>
                    <IconContainer>
                        <Link to='/'> 
                            <img src={require("../images/social-media/facebook-white.png")} alt='linkedin' /> 
                        </Link>
                    </IconContainer>
                    <IconContainer>
                        <Link to='/'> 
                            <img src={require("../images/social-media/linkedin-white.png")} alt='linkedin' /> 
                        </Link>
                    </IconContainer>
                    <IconContainer>
                        <Link to='/'> 
                            <img src={require("../images/social-media/email-white.png")} alt='linkedin' /> 
                        </Link>
                    </IconContainer>
                </SocialMedia>

                <div dangerouslySetInnerHTML={{__html: post.html}} />
                
                <SocialMedia>
                    <IconContainer>
                        <Link to='/'> 
                            <img src={require("../images/social-media/twitter-white.png")} alt='github'/> 
                        </Link>
                    </IconContainer>
                    <IconContainer>
                        <Link to='/'> 
                            <img src={require("../images/social-media/facebook-white.png")} alt='linkedin' /> 
                        </Link>
                    </IconContainer>
                    <IconContainer>
                        <Link to='/'> 
                            <img src={require("../images/social-media/linkedin-white.png")} alt='linkedin' /> 
                        </Link>
                    </IconContainer>
                    <IconContainer>
                        <Link to='/'> 
                            <img src={require("../images/social-media/email-white.png")} alt='linkedin' /> 
                        </Link>
                    </IconContainer>
                </SocialMedia>

                <PreviousBtn>
                    <button>
                        Back to Blog
                    </button>
                </PreviousBtn>
            </StyledPost>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: {path: {eq: $path} }){
            html
            frontmatter{
                path
                title
            }
        }
    }
`
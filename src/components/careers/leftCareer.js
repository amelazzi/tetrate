
import React from "react"

import styled from 'styled-components'
import { Link } from "gatsby";
import { darkBleu, bleu } from "../../styles/colors";

const StyledCareer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 4rem 8rem;

    p{
        color: black;
        font-size: 1.6rem;
        font-weight: 200;
        line-height: 1.6;
        margin: 0;
        :first-child{
            margin-bottom: 0.8rem;
        }
        
    }
`;

const ProfilePic = styled.div`
    max-width: 12rem;
    max-height: 12rem;
    min-width: 12rem;
    min-height: 12rem;

    border-radius: 50%;
    margin-top: 1rem;
    padding: 0.5rem;
    background: ${bleu};
    position: relative;
    img{
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
    
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 4rem;
    padding-right: 6rem;
`;

const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

const IconContainer = styled.div`
    width: 2rem;
    height: 2rem;
    background: lightgray;
    margin: 0.5rem;
    padding: 0.5rem;

    :first-child{
        margin-left: 0rem;
    }
    :hover{
        cursor: pointer;
        background: ${darkBleu};
    }

    img{
        position: relative;
        width: 100%;
        height: 100%;
        object-fit:contain;
    }
`;

const LeftCareer = ({picture, career, name, role, detail, github, linkedin}) => (
  <StyledCareer >
        <ProfilePic>
            <img src={picture} alt="profile" />
        </ProfilePic>
        <Content>
            <p> "{career}" </p>
            <p> <b> {name}, {role} </b> {detail} </p>
            <SocialMedia>
                <IconContainer>
                    <Link to={github}> 
                        <img src={require("../../images/social-media/github-white.png")} alt='github'/> 
                    </Link>
                </IconContainer>
                <IconContainer>
                    <Link to={linkedin}> 
                        <img src={require("../../images/social-media/linkedin-white.png")} alt='linkedin' /> 
                    </Link>
                </IconContainer>
            </SocialMedia>
        </Content>
  </StyledCareer>
)

export default LeftCareer
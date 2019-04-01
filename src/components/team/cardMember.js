import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import { bleu, darkBleu } from "../../styles/colors";

const StyltedCArd = styled.div`
    position: relative;
    background: white;
    width: 26rem;
    padding: 1rem;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    margin: 1rem;

    img{
        position: absolute;
        width: 93%;
        object-fit: contain;
    }

    h1,h2{
        font-size: 1.6rem;
        font-weight: 600;
        margin:0;
    }

    h1{
        color: black;
        padding: 1.5rem 0 0 0;
    }
    h2{
        color: ${bleu};
    }
    p{
        color: black;
        font-size: 1.4rem;
        padding: 0rem 4rem;
        font-weight: 300;
    }
`;

const ProfilePic = styled.div`
    max-width: 13rem;
    max-height: 13rem;
    min-width: 13rem;
    min-height: 13rem;

    border-radius: 50%;
    margin-top: 1rem;
    padding: 0.5rem;
    background: white;
    position: relative;
    img{
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
    
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
    margin: 1rem 0.5rem;
    padding: 0.5rem;

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



const CardMember = ({picture, name, role, detail, github, linkedin}) => (
    <StyltedCArd>
        <img src={require("../../images/team/member-bg.png")} alt='member background' />
        <ProfilePic>
            <img src={picture} alt="profiles" />
        </ProfilePic>
        <h1> {name} </h1>
        <h2> {role} </h2>
        <p> {detail} </p>
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
    </StyltedCArd>
)

export default CardMember

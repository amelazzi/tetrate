import React from "react"
import styled from 'styled-components'
import { bleu } from "../../styles/colors";

const StyltedCArd = styled.div`
    position: relative;
    background: white;
    width: 26.5rem;
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
    @media (min-width: 48.1em) and (max-width: 76.7em) {
        width: auto;
        margin: 1rem;
    }

    @media    (max-width: 48em) {
        width: 100%;
        margin: 2rem 1rem;
        img{
            width: 97%;
            height: 8rem;
            object-fit: cover;
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



const CardMember = ({picture, name, detail}) => (
    <StyltedCArd>
        <img src={require("../../images/team/member-bg.png")} alt='member background' />
        <ProfilePic>
            <img src={picture} alt="profiles" />
        </ProfilePic>
        <h1> {name} </h1>
        <p> {detail} </p>
    </StyltedCArd>
)

export default CardMember

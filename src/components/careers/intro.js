import React from 'react'
import styled from 'styled-components'
import { bleu } from '../../styles/colors'


const StyledArticle = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    margin: 0rem 4rem;
    padding: 2rem 0rem; 
    text-align: center;
    border-top: 2px solid lightgray;
    
    h1{
        color: ${bleu};
        font-size: 3.3rem;
        font-weight: 300;
    }
    p{
        color: black;
        opacity: 0.7;
        font-size: 1.4rem;
        font-weight: 200;
        line-height: 1.6;
        margin: 0;
    }
`;


const Intro = () => {
    return(
        <StyledArticle>
            <p> This is a living document. Tetrate’s core values should undergo continuous improvement based on the values embraced by our team. </p>
            <h1> We’re tackling some of the hardest problems and defining the future of cloud computing. Join us from wherever you are. Manage your own work schedule & rest when you need it. </h1>
        </StyledArticle>
    );
}

export default Intro
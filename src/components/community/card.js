import React from 'react'

import styled from 'styled-components'

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-image: url(${props=>props.background});
    background-size: cover;
    background-repeat: no-repeat;

    text-align: center;
    padding: 3rem;
    display: flex;
    flex-direction: column;

    margin: 1rem;

    img{
        width: 100%;
        object-fit: cover;
    }

`;

const IconContainer = styled.div`
    max-width: 6.5rem;
    max-height: 6.5rem;
    min-width: 6.5rem;
    min-height: 6.5rem;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Content = styled.div`
    h1{
        color: white;
        font-size: 2.5rem;
        font-weight: 300;
        margin-top: 3rem;
    }
    p{
        color: black; 
        font-size: 1.6rem;
        font-weight: 100;
        line-height: 1.7;
        margin-bottom: 0;
    }
`;


const Card = ({background, icon, title, content}) => {
    return(
        <StyledCard background={background}>
            <IconContainer>
                <img src={icon} alt='article icon'/>
            </IconContainer>
            <Content>
                <h1> {title} </h1>
                <p> {content} </p>
            </Content>
        </StyledCard>
    );
}

export default Card;
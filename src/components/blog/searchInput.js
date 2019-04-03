import React from 'react'
import styled from 'styled-components'
import { bleu } from '../../styles/colors'

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #c8c8c8;

    margin-top: 2rem !important;
    padding: 1rem 0rem;
    padding-right: 1rem;
`;

const StyledSearchInput = styled.input`
    margin: 0;
    box-sizing: border-box;
    border: none;

    color: ${bleu};
    font-size: 1.6rem;
    font-weight: 700;

    outline: none;

    ::placeholder, input[type="text"]{
      font-size: 1.6rem;
      color: black;
      opacity: 0.6;
      font-weight: 300;
      text-transform: uppercase;
    }

    :focus{
        border-color: ${bleu};
    }
`;

const IconContainer = styled.div`
    max-width: 2rem;
    max-height: 2rem;
    min-width: 2rem;
    min-height: 2rem;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const SearchInput = () => {
    return(
        <InputContainer>
            <StyledSearchInput type="text" placeholder="Search" />
            <IconContainer>
                <img src={require("../../images/search-icon.png")} />
            </IconContainer>
        </InputContainer>
    );
}

export default SearchInput
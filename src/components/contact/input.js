import React from "react"
import styled from 'styled-components'
import { bleu } from "../../styles/colors";

const StyledInput = styled.input`
    width: 100%;
    padding: 1.6rem;
    box-sizing: border-box;
    border: 1px solid #c8c8c8;
    color: ${bleu};
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0;
    margin-bottom: 1.5rem;

    outline: none;

    ::placeholder, input[type="text"],input[type="email"]{
      font-size: 1.6rem;
      color: black;
      opacity: 0.6;
      font-weight: 300;
    }

    :focus{
        border-color: ${bleu};
    }

    @media (min-width: 32em) and (max-width: 48em) {
        padding: 0.6rem 1.6rem;
    }
`;

const Input = ({type, placeholder}) => (
    <>
        <StyledInput type={type} placeholder={placeholder}/>
    </>
)

export default Input

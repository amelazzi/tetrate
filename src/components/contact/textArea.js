import React from "react"
import styled from 'styled-components'
import { bleu } from "../../styles/colors";

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 18rem;
    @media (max-width: 48em) {
        height: 12rem;
    }
    padding: 1.6rem;
    box-sizing: border-box;
    border: 1px solid #c8c8c8;
    color: ${bleu};
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0;
    margin-bottom: 1.5rem;

    outline: none;

    ::placeholder{
      font-size: 1.6rem;
      color: black;
      opacity: 0.6;
      font-weight: 300;
    }

    :focus{
        border-color: ${bleu};
    }
`;

const TextArea = ({placeholder}) => (
    <>
        <StyledTextArea placeholder={placeholder}/>
    </>
)

export default TextArea

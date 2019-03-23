import React from "react"
import styled from 'styled-components'

import Input from './input'
import SelectOption from './selectOption'
import SimpleCheckBox from './checkBox'
import TextArea from './textArea'

import { bleu, darkBleu } from "../../styles/colors"

const StyledForm = styled.div`
    width: 45%;
    padding: 4rem 3rem;
    background: #ebebeb;

    h4{
        font-size: 1.6rem;
        color: black;
        font-weight: bold;
        margin: 0;
        margin-bottom: 2.5rem;
    }

    input[type="submit"]{
        border: none;
        background: ${bleu};
        padding: 1rem 4rem;
        margin: 0;
        margin-top: 1rem;
        margin-left: 15.5rem;
        color: white;
        font-size: 1.6rem;
        font-weight: 600;
        letter-spacing: 1px;
        transition: .2s ease-in-out;
        :hover{
            color: white;
            background: ${darkBleu};
            cursor: pointer;
        }
    }
`;

const Form = () => (
  <StyledForm>
    <form>
        <Input type="text" placeholder='First Name*'/>
        <Input type="text" placeholder='Last Name*'/>
        <Input type="text" placeholder='Company Name'/>
        <Input type="email" placeholder='Business Email*'/>
        <Input type="email" placeholder='Business Email*'/>
      <h4> Products and Tools </h4>
        <SimpleCheckBox val="Cloud Map"/>
        <SimpleCheckBox val="Apache Skywalking"/>
        <SimpleCheckBox val="getEnvoy"/>
        <TextArea placeholder="Message" />
      <input type="submit" value="Send" />
    </form>
  </StyledForm>
)

export default Form

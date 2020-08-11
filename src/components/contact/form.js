import React from "react"
import styled from 'styled-components'

import Input from './input'
import SelectBox from './selectOption'
import SimpleCheckBox from './checkBox'
import TextArea from './textArea'

import { bleu, darkBleu } from "../../styles/colors"

const StyledForm = styled.div`
position: relative;
    width: 50%;
    box-sizing: border-box;
    @media   (max-width: 48em) {
        width: 100%;
        margin-top: 4rem;
        padding: 2rem;
    }
    padding: 4rem 3rem;
    background: #ebebeb;

    h4{
        font-size: 1.6rem;
        color: black;
        font-weight: bold;
        margin: 0;
        margin-bottom: 2.5rem;
        margin-top: -19rem;
    }

    input[type="submit"]{
        border: none;
        background: ${bleu};
        padding: 1rem 4rem;
        margin: 0;
        margin-top: 1rem;
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
        @media   (max-width: 48em) {
            width: 100%;
            padding: 2rem 4rem;
            margin-left: 0rem;
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
        <SelectBox
          items={[
            { value: 'Roles', id: 1 },
            { value: 'Dev', id: 2 },
            { value: 'Cloud Platform', id: 3 },
            { value: 'Network Ops', id: 4 },
            { value: 'Security', id: 5 },
            { value: 'Media', id: 6 },
            { value: 'Other', id: 7 }
          ]}
        />
      <h4> Products and Tools </h4>
        <SimpleCheckBox val="Cloud Map"/>
        <SimpleCheckBox val="Apache Skywalking"/>
        <SimpleCheckBox val="getEnvoy"/>
        <SimpleCheckBox val="Tetrate Q"/>
        <TextArea placeholder="Message" />
      <input type="submit" value="Send" />
    </form>
  </StyledForm>
)

export default Form

import React from "react"
import styled from 'styled-components'

import Input from './input'

const StyledForm = styled.form`

`;

const Form = () => (
  <StyledForm>
    <Input type="text" placeholder='First Name'/>
  </StyledForm>
)

export default Form

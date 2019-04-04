import React from "react"

import styled from 'styled-components'


const StyledDiagram = styled.div`
    padding: 0rem;
    text-align: center;
    border-top: 2px solid lightgray;
    border-bottom: 2px solid lightgray;
    img{
        width: 100%;
        object-fit: cover;
    }
    @media (max-width: 48em) {
      padding: 0rem 2rem;
    }
`;


const Diagram = () => (
  <StyledDiagram>
    <img src={require("../../images/community/apache-skywalking/diagram.png")} alt="diagram"/>
  </StyledDiagram>
)

export default Diagram

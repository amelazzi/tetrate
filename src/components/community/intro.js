import React from "react"

import styled from 'styled-components'

const StyledIntro = styled.div`
    padding: 4rem 10rem;
    text-align: center;
    p{
        color: gray;
        font-size: 2.2rem;
        font-weight: 200;
        line-height: 1.4;
        padding: 0rem 8rem;
        :first-child{
          margin-top: 0;
        }
        :last-child{
          margin-bottom: 0;
        }
    }

    @media (min-width: 48.1em) and (max-width: 76.7em) {
      padding: 4rem 16rem;
      p{
        padding: 0rem;
      }
    }

    @media (min-width: 32em) and  (max-width: 48em) {
      padding: 4rem 2rem;
      p{
        padding: 0;
      }
    }
`;


const Intro = ({content1, content2, content3}) => (
  <StyledIntro >
    <p> {content1} </p>
    <p> {content2} </p>
    <p> {content3} </p>
  </StyledIntro>
)

export default Intro

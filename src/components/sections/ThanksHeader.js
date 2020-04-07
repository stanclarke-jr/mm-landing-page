import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const ThanksHeader = () => {
  return (
    <HeaderWrapper id="top">
      <Container>
        <div>
          <h1>Thank You!!</h1>
          <p>We'll let you know as soon as we're live. See you soon!</p>
        </div>
      </Container>
    </HeaderWrapper>
  )
}

export default ThanksHeader

const HeaderWrapper = styled.header`
  background-color: #161b40;
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  margin: 0;

  > div {
    width: 120%;
    padding: 80px 0;

  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.lightAccent};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
    color: ${props => props.theme.color.white.lessdark};
  }

  span {
    color: ${props => props.theme.color.lightAccent};
  }

  @media (max-width: ${props => props.theme.screen.md}) {
  }

`


import React from "react"
import styled from "styled-components"
// import logo from "../../images/logo.png"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>About us</span>
        <p>MuseMasters is a resource. Hopefully one that will help you on your journey as you learn to play your instrument. These carefully curated videos will teach you how to listen, practice and play.</p>

        <p>These videos are the first phase of a broader vision. Our goal is to make it easier to learn and to save you time. We hope to help you focus on what is important — practicing and playing music. And having fun while you do it!</p>

        <p>Let's stay in touch, so we can keep you posted.</p>
      </FooterColumn>
      {/* <FooterColumn>
        <span>Features</span>
        <ul>
          <li>Favourites</li>
          <li>Upvote</li>
          <li>Submissions</li>
          <li>Community</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Resources</span>
        <ul>
          <li>Blog</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Company</span>
        <ul>
          <li>About Us</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Social</span>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </FooterColumn> */}
    </FooterColumnContainer>
    {/*     <BrandContainer>
      <img src={logo} alt="Logo" width="180" height="40" />
    </BrandContainer> */}
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  text-align: center;
  background-color: #111533;
  padding: 40px 0 80px;
`

/* const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 96px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
` */
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  width: 60%;
  @media (max-width: ${props => props.theme.screen.sm}) {
    ${'' /* grid-template-columns: 1fr 1fr; */}
    ${'' /* grid-gap: 32px; */}
    width: 75%;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 18px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.white.lessdark};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.white.lessdark};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
    }
  }
  p {
    line-height: 20px;
    padding: 5px 0;
    font-size: 14px;
    font-family: ${props => props.theme.font.normal};
    color: ${props => props.theme.color.white.darker};
  }
`

export default Footer

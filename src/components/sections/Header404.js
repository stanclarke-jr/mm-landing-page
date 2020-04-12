import React from "react"
import styled from "styled-components"
import VideoPlayer from "../common/VideoPlayer"
import "videojs-youtube/dist/Youtube.min.js"
import { Container } from "../global"

const Header404 = () => {
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    width: 425,
    height: 239.0625,
    sources: [{
      src: 'https://www.youtube.com/embed/OG__SwkV3wg',
      type: 'video/youtube'
    }],
    youtube: {
      modestbranding: 1,
    }
  }

  return (
    <HeaderWrapper id="top">
      <Container>
        <div style={{
          color: `#eef1f0`,
          paddingBottom: `80px`
        }}
        >
          <h1>404 - NOT FOUND</h1>
          <p>Sorry, the page you are looking for doesn&#39;t exist... but since you're here...</p>
        </div>
        <Flex>
          <HeaderTextGroup>
            <h1>
              <span>Learn music</span><br />
              from <span>carefully</span> selected videos
            </h1>
            <p>
              We did the work so you don’t have to. Save hours of searching,
              <em>practice</em> instead.
            </p>
            <HeaderForm
              name="early-access"
              method="post"
              action="/thanks"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            // data-netlify-recaptcha="true"
            >
              <input type="hidden" name="form-name" value="early-access" />
              <input type="hidden" name="bot-field" />
              <HeaderInput
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                required
              />
              <HeaderInput
                type="last-name"
                name="last-name"
                id="last-name"
                placeholder="Last name"
                required
              />
              <HeaderInput
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                required
              />
              <HeaderButton type="submit">Early access</HeaderButton>
            </HeaderForm>
          </HeaderTextGroup>
          <ImageWrapper>
            <div>
              <VideoPlayer {...videoJsOptions} />
            </div>
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header404

const HeaderWrapper = styled.header`
  background-color: #161b40;
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.white.lessdark};
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
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 64px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const HeaderButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.accent};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`
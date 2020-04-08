import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Expertly curated videos</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Favourites</FeatureTitle>
          <FeatureText>
            Bookmark your favourite resources for future reference.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Upvote</FeatureTitle>
          <FeatureText>
            Give your two cents. Vote for the best videos.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Submissions</FeatureTitle>
          <FeatureText>
            Add to the collection! Learned something awesome? Submit it.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Community</FeatureTitle>
          <FeatureText>
            Know you are not alone. Learn music alongside others.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.lightAccent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 80px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`

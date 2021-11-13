import React from 'react'
import {LandingContainer, LandingImage, LandingImageWrapper, LandingTextWrapper,Title,SubTitle,Details} from'./LandingPageStyle.js'
import { SubmitButton } from '../../components/Button/ButtonStyle.js';
const LandingPage = () => {
    return (
      <div>
        <LandingContainer>
          <LandingTextWrapper>
            <Title>
              The next generation <span color="#f72585">social media</span>{" "}
              application is here
            </Title>
            <SubTitle>
              A heaven for content-creators and the devilish meme makers
            </SubTitle>
            <SubTitle>Now earn for your own content</SubTitle>
            <Details>Presenting to you </Details>
            <Title>SOLIGRAM</Title>
            <SubmitButton style={{margin:"0 60px"}}onClick={()=>{window.location.href="/login"}}>GET STARTED</SubmitButton>
          </LandingTextWrapper>
          <LandingImageWrapper>
            <LandingImage src="/assets/3.jpg" />
          </LandingImageWrapper>
        </LandingContainer>
      </div>
    );
}

export default LandingPage

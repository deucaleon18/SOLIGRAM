import React from 'react'
import {LandingContainer, LandingImage, LandingImageWrapper, LandingTextWrapper} from'./LandingPageStyle.js'

// import Navbar from '../../components/Navbar/Navbar'
// import MainSection from '../../components/MainSection/MainSection'
// import Footer from '../../components/Footer/Footer'

const LandingPage = () => {
    return (
      <div>
        <LandingContainer>
          <LandingTextWrapper/>
          <LandingImageWrapper>
            <LandingImage src="/assets/1.jpg"/>
          </LandingImageWrapper>
        </LandingContainer>
      </div>
    );
}

export default LandingPage

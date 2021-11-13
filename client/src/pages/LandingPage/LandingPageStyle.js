import styled from 'styled-components'

export const LandingContainer = styled.div`
  height: 93vh;
  width: 100%;
  background: #190029;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LandingTextWrapper=styled.div`

height:93vh;
width:50%;
align-items:center;
justify-conten:left;

`
export const Title = styled.h1`
  font-size: 4rem;
  color: #f72585;
  margin: 60px;
  font-weight: 800;
`;
export const SubTitle = styled.h2`
  font-size: 2rem;
  color: white;
  margin:15px 60px;
  font-weight: 800;
`;
export const Details = styled.h3`
  text-transform: uppercase;
  font-size: 1.5rem;
  color: #f72585;
  margin: 15px 60px;
  font-weight: 800;
`;
export const LandingImageWrapper = styled.div`
  height: 93vh;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LandingImage=styled.img`
border-radius:50%;
 max-width:100%;
 height:80%;
 margin:20px;

`
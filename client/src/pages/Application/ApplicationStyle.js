import styled from "styled-components"

export const ApplicationWrapper = styled.div`
  color:white;
  position:relative;
  top:-20px;
  height: max-content;
  width: 100%;
  background-color: #190029;
`;

export const PostsWrapper=styled.div`

width:700px;
margin:auto;
`

export const PostContainer = styled.div`
  height: 620px;
  width: 95%;
  margin: 20px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  border: 1px solid rgba(255, 255, 255, 0.18);
`;

//Circular person image , Follow button 


export const PostHeader=styled.div`
display:flex;
align-items:center;
height:50px;
width:100%;
`
export const PostImageWrapper=styled.div`
display:flex;
align-items:center;
justify-content:center;
height:450px;
width:100%;
`

export const PostImage=styled.img`
height:95%;
width:95%;
margin:auto;
`
export const PostCaption = styled.div`
  text-transform: uppercase;
  height: 50px;
  width: 95%;
  margin: auto;
`;


export const PostFooter=styled.div`
display:flex;
align-items:center;
height:70px;
width:100%;
`


import styled from "styled-components"

export const AccountDetailsWrapper=styled.div`
height:93vh;
width:100%;
color:white;
`
export const Heading=styled.h1`
fonts-size:1.5rem;
font-weight:800;
text-align:center;
`
export const AccountWrapper=styled.div`
width:900px;
margin:auto;
color:white;
`
export const AccountProfile=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:95%;
margin:auto;
height:200px;
`
export const AccountPosts=styled.div`
margin:20px;
display:grid;
grid-template-columns:repeat(3,210px);
grid-gap:30px;

`


export const AccountPost=styled.div`
width:100%;
height:400px;
`
export const PostImage=styled.img`
width:200px;
margin:auto;
height:200px;
`
export const PostCaption = styled.div`
  width: 95%;
  margin: auto;
  height: 20px;
`
export const PostStats = styled.div`
  width: 95%;
  margin: auto;
  height: 20px;
`; 
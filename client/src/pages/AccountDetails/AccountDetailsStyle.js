import styled from "styled-components"

export const AccountDetailsWrapper=styled.div`
height:93vh;
width:100%;

`

export const AccountWrapper=styled.div`
width:600px;
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
grid-template-columns:repeat(autofit(minmax(180,auto)))
grid:gap:30px;

`
export const AccountPost=styled.div`
width:100%;
height:400px;
`
export const PostImage=styled.img`
width:95%;
margin:auto;
height:360px;
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
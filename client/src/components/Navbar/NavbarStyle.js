import styled from "styled-components"

export const NavContainer = styled.div`
background-color:#190029;
height:7.5vh;
display:flex;
width:100%;
flex-wrap:wrap;
justify-content:space-between;

`;

export const NavLogoContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&
  family=Montserrat:wght@100;200;300;500&family=Yuji+Mai&display=swap");
  display: flex;
  width: 150px;
  font-family: "Yuji Mai", serif;
  font-weight: 800;
  color: white;
  justify-content: center;
  height: 1vh;
  padding: 0px 50px;
  cursor: pointer;
`;

export const NavLinksContainer=styled.div`

display:flex;
align-items:center;
width:1000px;
`

export const NavMenu=styled.ul`
list-style:none;
display:flex;
flex-wrap:wrap;
cursor:pointer;
`
export const NavLink = styled.a`
text-decoration:none;
color:white;
transition:400ms ease-in-out;
&:hover{
    background:color:red;
    color:#190029;
}
`;
export const NavElement = styled.li`
  color: white;
  padding: 20px;
`;


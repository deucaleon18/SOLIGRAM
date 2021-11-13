import styled from "styled-components"

export const SubmitButton=styled.button`

outline:none;
border:none;
border-radius:15px;
background-color:${({theme})=>theme.colors.buttonBg};
color:${({theme})=>theme.colors.buttonText};
cursor:pointer;
height:40px;
width:100px;

`
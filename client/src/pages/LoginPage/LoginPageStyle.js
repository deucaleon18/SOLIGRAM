import styled from "styled-components"
export const LoginWrapper=styled.div `

height:90%;
width:100%;

`

export const FormName=styled.h1`

font-size:60px;
font-weight:800;
text-align:center;
margin-top:100px;
`
export const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: 450px;
  width: 450px;
  margin: 50px auto;
  display:flex;
  flex-direction:column;
  justify-content;center;
`;

export const FormUserInput = styled.input.attrs({
  type: "text",
  placeholder: "USERNAME",
})`

outline:none;
height:40px;
width:80%;
margin:50px 50px 25px 50px;
border-radius:10px;
`;

export const FormPasswordInput = styled.input.attrs({
  type: "password",
  placeholder: "PASSWORD",
})`
  outline: none;
  height: 40px;
  width: 80%;
  margin: 50px 50px 25px 50px;
  border-radius: 10px;
`;


;


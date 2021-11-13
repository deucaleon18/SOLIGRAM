import styled from "styled-components"
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { SubmitButton } from "../../components/Button/ButtonStyle";

export const NewPostWrapper=styled.div`

height:90%;
width:100%;

`

export const NewPostCreate = styled.div`
  &:hover ${SubmitButton} {
    transition: 400ms ease-in-out;
    
  }
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  height: 600px;
  width: 900px;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const AddImage=styled.div`

height:600px;
width:50%;
padding:20px;
`
export const ImageInput = styled.input`
  cursor:pointer;
  outline: none;
  height: 40px;
  width: 80%;
  border-radius:10px;
`;

export const DisplayImage=styled.img`
 height:500px;
 width:90%;
 margin:auto;
`
export const AddCaption=styled.div`
 height:600px;
 width:50%;
 padding:20px;

`
export const CaptionInputContainer = styled.div`
  height: 400px;
  outline: none;
  width: 100%;
`;
export const CaptionInput = styled(TextareaAutosize)`
  outline: none;
  width: 80%;
  border-radius: 10px;

`;

export const ButtonContainer=styled.div`
height:150px;
width:100%;
`
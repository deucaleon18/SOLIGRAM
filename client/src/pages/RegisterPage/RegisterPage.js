import React,{useState,useEffect} from 'react'

import {RegisterWrapper,FormName,FormContainer,FormUserInput,FormPasswordInput,FormNameInput} from "./RegisterPageStyle"
import { SubmitButton } from "../../components/Button/ButtonStyle";
import axios from "axios";

const RegisterPage = () => {

  const[name,setName]=useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser=async(e)=>{
  e.preventDefault()
  await axios.post(`${process.env.REACT_APP_BACKEND_URL}register`,{
    name,
    username,
    password
  })
  }
  // useEffect(()=>{
  //   console.log(name,username,password,process.env.REACT_APP_BACKEND_URL)
  // },[name,username,password])


    return (
      <>
        <RegisterWrapper>
          <FormName>Register</FormName>
          <FormContainer>
            <FormNameInput
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <FormUserInput
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <FormPasswordInput
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <SubmitButton onClick={registerUser}>REGISTER</SubmitButton>
          </FormContainer>
        </RegisterWrapper>
      </>
    );
}

export default RegisterPage

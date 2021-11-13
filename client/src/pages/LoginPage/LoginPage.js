import React, { useState, useEffect } from "react";
import {
  LoginWrapper,
  FormName,
  FormContainer,
  FormUserInput,
  FormPasswordInput,
} from "./LoginPageStyle";
import { SubmitButton } from "../../components/Button/ButtonStyle";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    await axios.post(`${process.env.REACT_APP_BACKEND_URL}login`, {
      username,
      password
    })
    .then((res)=>{
      console.log(res)
      // localStorage.setItem("user",res.user)
      window.location.href="/application"
    })
    .catch((err)=>{
      console.log(err)
    })
  };


useEffect(()=>{
  console.log(username,password)
},[username,password])


  return (
    <>
      <LoginWrapper>
        <FormName>Login</FormName>
        <FormContainer>
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
          <SubmitButton onClick={loginUser}>LOGIN</SubmitButton>
        </FormContainer>
      </LoginWrapper>
    </>
  );
};

export default LoginPage;

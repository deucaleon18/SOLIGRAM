// eslint-disable-next-line
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

    await axios
      .post("http://localhost:5000/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("username", res.data.user.username);
        localStorage.setItem("name", res.data.user.name);
        localStorage.setItem("token", res.data.token);
        window.location.href = "/app";
      })
      .catch((err) => {
        window.location.reload();
        console.log(err);
      });
  };

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
          <SubmitButton style={{ margin: "0 50px" }} onClick={loginUser}>
            LOGIN
          </SubmitButton>
        </FormContainer>
      </LoginWrapper>
    </>
  );
};

export default LoginPage;

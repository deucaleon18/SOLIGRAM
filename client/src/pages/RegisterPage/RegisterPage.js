// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import {
  RegisterWrapper,
  FormName,
  FormContainer,
  FormUserInput,
  FormPasswordInput,
  FormNameInput,
} from "./RegisterPageStyle";
import { SubmitButton } from "../../components/Button/ButtonStyle";
import axios from "axios";
import useBasicFetch from "../../hooks/useBasicFetch";

const RegisterPage = () => {
  // eslint-disable-next-line
  const [web3, account, contract] = useBasicFetch();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/register", {
        name,
        username,
        password,
      })
      .then((res) => {
        console.log(res);
        setOpen(true);
        localStorage.setItem("username", res.data.user.username);
        localStorage.setItem("name", res.data.user.name);
        localStorage.setItem("token", res.data.token);
      })
      .then(async () => {
        await contract.methods
          .createNewUser(account, localStorage.getItem("username"))
          .send({ from: account })
          .then((res) => {
            console.log(res);
          })
          .then(() => {
            window.location.href = "/app";
          })
          .catch((err) => {
            window.location.reload()
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <RegisterWrapper>
        <FormName>Register</FormName>
        <FormContainer>
          <FormNameInput
            variant="filled"
            noValidate
            autoComplete="off"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <FormUserInput
            variant="filled"
            noValidate
            autoComplete="off"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <FormPasswordInput
            variant="filled"
            noValidate
            autoComplete="off"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <SubmitButton style={{ margin: "0 50px" }} onClick={registerUser}>
            REGISTER
          </SubmitButton>
        </FormContainer>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Successfully registered!
          </Alert>
        </Snackbar>
      </RegisterWrapper>
    </>
  );
};

export default RegisterPage;

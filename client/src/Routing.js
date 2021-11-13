import React,{useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AccountDetails from "./pages/AccountDetails/AccountDetails";
import Application from "./pages/Application/Application";
import NewPost from "./pages/NewPost/NewPost";
const Routing = () => {
  useEffect(() => {
    console.log(localStorage.getItem("token"))
    
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>

          {localStorage.getItem("token") ? (
            <Route exact path="/new" element={<NewPost />}></Route>
          ) : (
            <Route exact path="/new" element={<LoginPage />}></Route>
          )}

          <Route exact path="/register" element={<RegisterPage />}></Route>

          <Route
            exact
            path="/accounts"
            element={<AccountDetails />}
          ></Route>
          {localStorage.getItem("token") ? (
            <Route exact path="/app" element={<Application />}></Route>
          ) : (
            <Route exact path="/app" element={<LoginPage />}></Route>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;

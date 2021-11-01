import Form from "../elements/form";
import Button from "../elements/button";
import InputField from "../elements/inputField";
import { Link } from "react-router-dom";
import { GiNightSleep } from "react-icons/gi";
import { useContext, useState } from "react";
import { API_URL_CONTEXT } from "../contexts/API_url_context";
import { useHistory } from "react-router";
import axios from "axios";

const SignUpForm = () => {
  //variable
  const API_URL = useContext(API_URL_CONTEXT);
  let history = useHistory();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [userDataEmptyFlag, setUserDataEmptyFlag] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  //functions

  const handleFormChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const postUserData = async () => {
    try {
      const response = await axios({
        method: "post",
        url: `${API_URL}/sign-up`,
        data: {
          ...userData,
        },
      });
      if (response.data.msg === "success") {
        localStorage.setItem("token", `${response.data.token}`);
        history.push("/dashboard");
        setIsEmail("");
        setIsPassword("");
      } else {
        setIsEmail(
          response.data.errors.find((obj) => obj.param === "email")
            ? response.data.errors.find((obj) => obj.param === "email").msg
            : ""
        );
        setIsPassword(
          response.data.errors.find((obj) => obj.param === "password")
            ? response.data.errors.find((obj) => obj.param === "password").msg
            : ""
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validateForm = () => {
    let emptyFlag = false;
    for (const property in userData) {
      if (userData[property] === "") {
        setUserDataEmptyFlag((prevState) => ({
          ...prevState,
          [property]: true,
        }));
        emptyFlag = true;
      } else {
        setUserDataEmptyFlag((prevState) => ({
          ...prevState,
          [property]: false,
        }));
      }
    }
    return emptyFlag;
  };

  const signUp = () => {
    if (!validateForm()) {
      postUserData();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-4 w-11/12">
      <header className="mb-6 flex gap-2 text-primary text-center text-4xl font-bold items-center justify-center">
        <Link to="/">
          <h1 className="md:text-6xl ">Sleep Tracker </h1>
        </Link>
        <GiNightSleep></GiNightSleep>
      </header>
      <Form>
        <label htmlFor="firstName">
          First Name
          <InputField
            className={
              userDataEmptyFlag.firstName
                ? `border-red-700 border-opacity-100`
                : ""
            }
            placeholder="First Name"
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={(e) => handleFormChange(e)}
          ></InputField>
        </label>
        <label htmlFor="lastName">
          Last Name
          <InputField
            className={
              userDataEmptyFlag.lastName
                ? `border-red-700 border-opacity-100`
                : ""
            }
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={(e) => handleFormChange(e)}
          ></InputField>
        </label>
        <label htmlFor="email">
          Email
          <InputField
            className={
              userDataEmptyFlag.email || isEmail
                ? `border-red-700 border-opacity-100`
                : ""
            }
            placeholder="Email"
            type="email"
            name="email"
            value={userData.email}
            onChange={(e) => handleFormChange(e)}
          ></InputField>
          {isEmail && <span className="text-red-500">{isEmail}</span>}
        </label>
        <label htmlFor="password">
          Password
          <InputField
            className={
              userDataEmptyFlag.password || isPassword
                ? `border-red-700 border-opacity-100`
                : ""
            }
            placeholder="Password"
            type="password"
            name="password"
            value={userData.password}
            onChange={(e) => handleFormChange(e)}
          ></InputField>
          {isPassword && <span className="text-red-500">{isPassword}</span>}
        </label>

        <Button
          onClick={signUp}
          className="text-primary shadow-xlxl border border-primary"
        >
          Sign up
        </Button>
      </Form>
      <p className="font-bold text-center capitalize my-4">
        have an account ?{" "}
        <Link to="/log-in" className="text-primary">
          Log in
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;

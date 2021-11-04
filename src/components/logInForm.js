import Form from "../elements/form";
import Button from "../elements/button";
import InputField from "../elements/inputField";
import { Link } from "react-router-dom";
import { GiNightSleep } from "react-icons/gi";
import { useState, useContext } from "react";
import { validateForm } from "../helpers/formValidation";
import { API_URL_CONTEXT } from "../contexts/API_url_context";
import { useHistory } from "react-router";
import { USER_CONTEXT } from "../contexts/USER_context";
import axios from "axios";
const LogInForm = () => {
  //variables
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  let history = useHistory();

  const { setUser } = useContext(USER_CONTEXT);

  const API_URL = useContext(API_URL_CONTEXT);

  const [userDataEmptyFlag, setUserDataEmptyFlag] = useState({
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
        url: `${API_URL}/log-in`,
        data: {
          ...userData,
        },
      });
      if (response.data.msg === "success") {
        localStorage.setItem("token", `${response.data.token}`);
        setUser(response.data.user);
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

  const logIn = () => {
    if (!validateForm(userData, setUserDataEmptyFlag)) {
      postUserData();
    }
  };

  return (
    <div className="max-w-md m-auto w-11/12">
      <header className="mb-6 flex gap-2 text-primary text-center text-4xl font-bold items-center justify-center">
        <Link to="/">
          <h1 className="md:text-6xl ">Sleep Tracker </h1>
        </Link>
        <GiNightSleep></GiNightSleep>
      </header>
      <Form>
        <label htmlFor="email">
          Email
          <InputField
            onChange={handleFormChange}
            placeholder="Email"
            type="email"
            name="email"
            value={userData.email}
            className={
              userDataEmptyFlag.email || isEmail
                ? `border-red-700 border-opacity-100`
                : ""
            }
          ></InputField>
        </label>
        <label htmlFor="password">
          Password
          <InputField
            onChange={handleFormChange}
            placeholder="Password"
            type="password"
            name="password"
            value={userData.password}
            className={
              userDataEmptyFlag.password || isPassword
                ? `border-red-700 border-opacity-100`
                : ""
            }
          ></InputField>
        </label>

        <Button onClick={logIn} className="bg-primary text-white border">
          Log in
        </Button>
      </Form>
      <p className="font-bold text-center capitalize my-4">
        do not have an account ?{" "}
        <Link to="/sign-up" className="text-primary">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LogInForm;

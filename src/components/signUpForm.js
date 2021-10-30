import Form from "../elements/form";
import Button from "../elements/button";
import InputField from "../elements/inputField";
import { Link } from "react-router-dom";
import { GiNightSleep } from "react-icons/gi";
const SignUpForm = () => {
  return (
    <div className="max-w-md m-auto w-11/12">
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
            placeholder="First Name"
            type="text"
            name="firstName"
          ></InputField>
        </label>
        <label htmlFor="lastName">
          Last Name
          <InputField
            placeholder="Last Name"
            type="text"
            name="lastName"
          ></InputField>
        </label>
        <label htmlFor="email">
          Email
          <InputField
            placeholder="Email"
            type="email"
            name="email"
          ></InputField>
        </label>
        <label htmlFor="password">
          Password
          <InputField
            placeholder="Password"
            type="password"
            name="password"
          ></InputField>
        </label>

        <Button className="text-primary shadow-xlxl border border-primary">
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

import Form from "../elements/form";
import Button from "../elements/button";
import InputField from "../elements/inputField";
import { Link } from "react-router-dom";
import { GiNightSleep } from "react-icons/gi";
const LogInForm = () => {
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

        <Button className="bg-primary text-white border">Log in</Button>
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

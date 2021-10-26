import Form from "../elements/form";
import Button from "../elements/button";
import InputField from "../elements/inputField";

const LogInForm = () => {
  return (
    <div className="max-w-md m-auto w-11/12">
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

        <Button text="Log in" className="bg-primary text-white border"></Button>
      </Form>
      <p className="font-bold text-center capitalize my-4">
        do not have an account ? <span className="text-primary"> Sign up</span>
      </p>
    </div>
  );
};

export default LogInForm;
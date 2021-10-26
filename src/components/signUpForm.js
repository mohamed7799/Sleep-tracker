import Form from "../elements/form";
import Button from "../elements/button";
import InputField from "../elements/inputField";
const SignUpForm = () => {
  return (
    <div className="max-w-md m-auto w-11/12">
      <Form>
        <label htmlFor="firstName">
          <InputField
            placeholder="First Name"
            type="text"
            name="firstName"
          ></InputField>
        </label>
        <label htmlFor="lastName">
          <InputField
            placeholder="Last Name"
            type="text"
            name="lastName"
          ></InputField>
        </label>
        <label htmlFor="email">
          <InputField
            placeholder="Email"
            type="email"
            name="email"
          ></InputField>
        </label>
        <label htmlFor="password">
          <InputField
            placeholder="Password"
            type="password"
            name="password"
          ></InputField>
        </label>

        <Button
          text="Sign up"
          className="text-primary shadow-xlxl border border-primary"
        ></Button>
      </Form>
      <p className="font-bold text-center capitalize my-4">
        do not have an account ? <span className="text-primary"> Sign up</span>
      </p>
    </div>
  );
};

export default SignUpForm;

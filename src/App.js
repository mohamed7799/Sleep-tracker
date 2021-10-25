import { GiNightSleep } from "react-icons/gi";
import Button from "./components/button";
import welcome_bg from "./assets/welcome-bg.svg";
import sleep_img from "./assets/sleep_analysis.svg";
import InputField from "./components/inputField";
import Form from "./components/form";
const App = () => {
  return (
    <main className="md:flex">
      <section
        style={{ backgroundImage: `url(${welcome_bg})` }}
        className="md:p-8 p-4 min-h-screen flex flex-col flex-1"
      >
        <header className="mb-6 flex gap-2 text-primary text-center text-4xl font-bold items-center justify-center">
          <h1 className="md:text-6xl ">Sleep Tracker </h1>
          <GiNightSleep></GiNightSleep>
        </header>

        {/*<div className="flex flex-col gap-4 w-4/5 max-w-xs m-auto">
          <Button
            text="Log in"
            className="bg-primary text-white font-bold hover:opacity-50 transition duration-300"
          ></Button>
          <Button
            text="Sign up"
            className="text-primary bg-white border-opacity-50 shadow-2xl border border-primary font-bold hover:opacity-50 transition duration-300"
          ></Button>
  </div>*/}
        <div className="max-w-md m-auto w-11/12">
          {/*
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
        */}
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

            <Button
              text="Log in"
              className="bg-primary text-white border"
            ></Button>
          </Form>
          <p className="font-bold text-center capitalize my-4">
            do not have an account ?{" "}
            <span className="text-primary"> Sign up</span>
          </p>
        </div>
      </section>
      <section className="bg-primary min-h-screen px-6 py-4 text-white flex-1 md:text-center">
        <img
          className="w-4/5 max-w-sm m-auto"
          src={sleep_img}
          alt="sleep_image"
        />
        <hr className="w-3/6 border-2 rounded-sm mx-auto my-10" />
        <h2 className="text-3xl font-bold mb-8">What is sleep tracker ?</h2>
        <p className="capitalize">
          With this sleep app tracker you will be able to track your sleep
          pattern daily.
          <br /> <br /> All you got to do is to enter your sleep time and wake
          up time.
          <br /> <br /> this app also provides graphs to show your sleep
          duration for the last 7 days, 30 days and all time
        </p>
      </section>
    </main>
  );
};

export default App;

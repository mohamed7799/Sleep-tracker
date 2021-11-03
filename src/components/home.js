import { GiNightSleep } from "react-icons/gi";
import Button from "../elements/button";
import welcome_bg from "../assets/welcome-bg.svg";
import sleep_img from "../assets/sleep_analysis.svg";
import { Link, Redirect } from "react-router-dom";

const Home = () => {
  if (localStorage.getItem("token")) {
    return <Redirect to="/dashboard"></Redirect>;
  } else {
    return (
      <section className="md:flex w-full">
        <section
          style={{ backgroundImage: `url(${welcome_bg})` }}
          className="md:p-8 p-4 min-h-screen flex flex-col flex-1"
        >
          <header className="mb-6 flex gap-2 text-primary text-center text-4xl font-bold items-center justify-center">
            <Link to="/">
              <h1 className="md:text-6xl ">Sleep Tracker </h1>
            </Link>
            <GiNightSleep></GiNightSleep>
          </header>

          <div className="flex flex-col gap-4 w-4/5 max-w-xs m-auto">
            <Link to="/log-in">
              <Button className="w-full bg-primary text-white font-bold hover:opacity-50 transition duration-300">
                Log in
              </Button>
            </Link>
            <Link to="/sign-up">
              <Button className="w-full text-primary bg-white border-opacity-50 shadow-2xl border border-primary font-bold hover:opacity-50 transition duration-300">
                Sign up
              </Button>
            </Link>
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
      </section>
    );
  }
};

export default Home;

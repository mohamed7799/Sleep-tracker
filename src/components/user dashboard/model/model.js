import Form from "../../../elements/form";
import InputField from "../../../elements/inputField";
import Button from "../../../elements/button";
import { useState } from "react";

let date = new Date();

const Model = ({ modelOpen, setModelOpen }) => {
  const [formData, setFormData] = useState({
    sleepTime: "00:00",
    wakeUpTime: "00:00",
    SleepDuration: "0",
    Date: `${date.getFullYear()}-${date.getDate()}-${date.getMonth() + 1}`,
  });

  return (
    <section
      className={`absolute py-8 px-4 top-0 left-0 bottom-0 right-0 bg-black bg-opacity-30 flex items-baseline justify-center lg:items-center ${
        modelOpen ? "block" : "hidden"
      }`}
    >
      <Form className="max-w-md">
        <h2 className="text-primary font-bold text-2xl text-center">
          New Entry
        </h2>
        <label htmlFor="sleepTime">
          Sleep time
          <InputField
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            value={formData.sleepTime}
            type="time"
            name="sleepTime"
          ></InputField>
        </label>
        <label htmlFor="wakeUpTime">
          Wake up time
          <InputField
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            value={formData.wakeUpTime}
            type="time"
            name="wakeUpTime"
          ></InputField>
        </label>
        <label htmlFor="SleepDuration">
          Sleep duration
          <InputField
            readOnly={true}
            value={formData.SleepDuration}
            type="text"
            name="SleepDuration"
          ></InputField>
        </label>
        <label htmlFor="Date">
          Date
          <InputField
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
            }}
            value={formData.Date}
            type="date"
            name="Date"
          ></InputField>
        </label>
        <div className="flex mt-4 justify-between">
          <Button
            onClick={() => setModelOpen(false)}
            className="text-white bg-red-500"
          >
            Close
          </Button>
          <Button
            className="bg-gray-400"
            onClick={() => {
              setFormData({
                sleepTime: "00:00",
                wakeUpTime: "00:00",
                SleepDuration: "0",
                Date: `${date.getFullYear()}-${date.getDate()}-${
                  date.getMonth() + 1
                }`,
              });
            }}
          >
            Reset
          </Button>
          <Button className="text-white bg-primary">Add</Button>
        </div>
      </Form>
    </section>
  );
};

export default Model;

import Form from "../../../elements/form";
import InputField from "../../../elements/inputField";
import Button from "../../../elements/button";
import { useEffect, useState } from "react";

let date = new Date();

const Model = ({ modelOpen, setModelOpen }) => {
  //variables

  const [formData, setFormData] = useState({
    sleepTime: "00:00",
    wakeUpTime: "00:00",
    SleepDuration: "0",
    Date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
  });

  //functions
  const changeTime = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateSleepDuration = () => {
    let sleepTimeHours = parseInt(formData.sleepTime.slice(0, 2));
    let sleepTimeMinutes = parseInt(formData.sleepTime.slice(3, 5));

    let wakeUpTimeHours = parseInt(formData.wakeUpTime.slice(0, 2));
    let wakeUpTimeMinutes = parseInt(formData.wakeUpTime.slice(3, 5));

    let sleepDurationHours = 0;
    let sleepDurationMinutes = 0;

    if (wakeUpTimeMinutes < sleepTimeMinutes) {
      wakeUpTimeHours -= 1;
      wakeUpTimeMinutes += 60;
    }

    if (wakeUpTimeHours - sleepTimeHours > 0) {
      sleepDurationHours = wakeUpTimeHours - sleepTimeHours;
    } else {
      sleepDurationHours = 24 + (wakeUpTimeHours - sleepTimeHours);
    }

    sleepDurationMinutes = parseFloat(
      ((wakeUpTimeMinutes - sleepTimeMinutes) / 60).toFixed(1)
    );

    return `${sleepDurationHours + sleepDurationMinutes}`;
  };

  useEffect(() => {
    console.log("just checking");
    setFormData({
      ...formData,
      SleepDuration: calculateSleepDuration(),
    });
  }, [formData.wakeUpTime, formData.sleepTime]);

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
            onChange={changeTime}
            value={formData.sleepTime}
            type="time"
            name="sleepTime"
          ></InputField>
        </label>
        <label htmlFor="wakeUpTime">
          Wake up time
          <InputField
            onChange={changeTime}
            value={formData.wakeUpTime}
            type="time"
            name="wakeUpTime"
          ></InputField>
        </label>
        <label htmlFor="SleepDuration">
          Sleep duration(hours)
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

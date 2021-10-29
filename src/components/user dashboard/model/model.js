import Form from "../../../elements/form";
import InputField from "../../../elements/inputField";
import Button from "../../../elements/button";
const Model = ({ modelOpen, setModelOpen }) => {
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
          <InputField type="time" name="sleepTime"></InputField>
        </label>
        <label htmlFor="wakeUpTime">
          Wake up time
          <InputField
            onChange={(e) => console.log(e.target.value)}
            type="time"
            name="wakeUpTime"
          ></InputField>
        </label>
        <label htmlFor="SleepDuration">
          Sleep duration
          <InputField type="text" name="SleepDuration"></InputField>
        </label>
        <label htmlFor="Date">
          Date
          <InputField
            onChange={(e) => console.log(e.target.value)}
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
          <Button className="bg-gray-400">Reset</Button>
          <Button className="text-white bg-primary">Add</Button>
        </div>
      </Form>
    </section>
  );
};

export default Model;

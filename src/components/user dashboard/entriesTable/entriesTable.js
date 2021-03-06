import Button from "../../../elements/button";
import EntryCell from "./entryCell";

const EntriesTable = ({ entries }) => {
  return (
    <section className="mt-14 lg:mt-0 lg:flex-1">
      <div className="flex justify-between">
        <Button className="selected-btn">Last 7 days</Button>
        <Button className="not-selected-btn">Last 30 days</Button>
      </div>

      {entries.length ? (
        <ul className="flex flex-col gap-3 mt-6 text-gray-500">
          <li className="flex  justify-between gap-2 items-center px-2 text-sm md:text-base font-bold">
            <p className="w-28 text-center capitalize">date</p>
            <p className="w-28 text-center capitalize">Sleep time</p>
            <p className="w-28 text-center capitalize">wake up time</p>
            <p className="w-28 text-center capitalize">sleep duration(hr)</p>
          </li>
          {entries.map((entry) => (
            <EntryCell entry={entry} key={entry._id}></EntryCell>
          ))}
        </ul>
      ) : (
        <p className="my-8 text-center text-gray-600 text-xl">
          Your entries list is empty, Please add an entry
        </p>
      )}
    </section>
  );
};

export default EntriesTable;

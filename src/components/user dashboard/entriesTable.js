import Button from "../../elements/button";
import EntryCell from "./entryCell";

const EntriesTable = () => {
  return (
    <section className="mt-14 lg:mt-0 lg:flex-1">
      <div className="flex justify-between">
        <Button className="selected-btn">Last 7 days</Button>
        <Button className="not-selected-btn">Last 30 days</Button>
      </div>
      <ul className="flex flex-col gap-3 mt-6 text-gray-500">
        <li className="flex  justify-between items-center px-2">
          <p className="w-20 text-center capitalize">date</p>
          <p className="w-20 text-center capitalize">Sleep time</p>
          <p className="w-20 text-center capitalize">wake up time</p>
          <p className="w-20 text-center capitalize">sleep duration</p>
        </li>
        <EntryCell></EntryCell>
        <EntryCell></EntryCell>
        <EntryCell></EntryCell>
        <EntryCell></EntryCell>
        <EntryCell></EntryCell>
        <EntryCell></EntryCell>
      </ul>
    </section>
  );
};

export default EntriesTable;

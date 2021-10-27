import EntryCell from "./entryCell";

const EntriesTable = () => {
  return (
    <ul className="flex flex-col gap-3 mt-4 text-gray-500">
      <li className="flex  justify-between items-center px-2">
        <p className="w-16 md:w-max text-center capitalize">date</p>
        <p className="w-16 md:w-max text-center capitalize">Sleep time</p>
        <p className="w-16 md:w-max text-center capitalize">wake up time</p>
        <p className="w-16 md:w-max text-center capitalize">sleep duration</p>
      </li>
      <EntryCell></EntryCell>
      <EntryCell></EntryCell>
      <EntryCell></EntryCell>
      <EntryCell></EntryCell>
      <EntryCell></EntryCell>
      <EntryCell></EntryCell>
    </ul>
  );
};

export default EntriesTable;

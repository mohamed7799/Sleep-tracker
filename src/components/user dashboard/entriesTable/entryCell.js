const EntryCell = ({ entry }) => {
  return (
    <li className="bg-primary bg-opacity-20 rounded flex gap-2 justify-between items-center p-2 text-xs md:text-base font-bold">
      <p className="w-28 text-center">{entry.date}</p>
      <p className="w-28 text-center">{entry.sleepTime}</p>
      <p className="w-28 text-center">{entry.wakeUpTime}</p>
      <p className="w-28 text-center">{entry.sleepDuration}</p>
    </li>
  );
};

export default EntryCell;

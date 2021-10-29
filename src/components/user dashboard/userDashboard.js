import Button from "../../elements/button";
import { AiOutlinePlus } from "react-icons/ai";
import EntriesTable from "./entriesTable/entriesTable";
import Graph from "./graph";
import HighlightList from "./highlightsList/hgilightsList";
import Model from "./model/model";
import { useState } from "react";
const UserDashBoard = () => {
  //variables
  const [modelOpen, setModelOpen] = useState(false);

  //functions

  return (
    <div className="relative">
      <section className="p-4 max-w-7xl m-auto">
        <div className="flex flex-wrap flex-row-reverse justify-between items-center gap-6">
          <Button className="bg-primary text-white">Log out</Button>
          <h3 className="text-primary font-bold">Hi, Mohamed Amged</h3>
          <Button
            onClick={() => setModelOpen(true)}
            className="m-auto sm:mr-auto sm:ml-0 bg-primary text-white flex items-center gap-2"
          >
            <AiOutlinePlus size="1.5rem"></AiOutlinePlus> Add entry
          </Button>
        </div>
        <div className="lg:flex lg:flex-row-reverse lg:gap-8 lg:mt-16">
          <EntriesTable></EntriesTable>
          <div className="lg:flex-1">
            <Graph></Graph>
            <HighlightList></HighlightList>
          </div>
        </div>
      </section>
      <Model modelOpen={modelOpen} setModelOpen={setModelOpen}></Model>
    </div>
  );
};

export default UserDashBoard;
import Button from "../../elements/button";
import { AiOutlinePlus } from "react-icons/ai";
import EntriesTable from "./entriesTable/entriesTable";
import Graph from "./graph";
import HighlightList from "./highlightsList/hgilightsList";
import Model from "./model/model";
import { useState, useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import axios from "axios";
import { API_URL_CONTEXT } from "../../contexts/API_url_context";
import { USER_CONTEXT } from "../../contexts/USER_context";
const UserDashBoard = () => {
  //variables
  const [modelOpen, setModelOpen] = useState(false);
  const { user, setUser } = useContext(USER_CONTEXT);
  const API_URL = useContext(API_URL_CONTEXT);
  let history = useHistory();

  //functions
  const getUser = async () => {
    const response = await axios({
      method: "get",
      url: `${API_URL}/user`,
      headers: { "Authorization": `${localStorage.getItem("token")}` },
    });
    setUser(response.data);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!localStorage.getItem("token")) {
    return <Redirect to="/"></Redirect>;
  } else {
    return (
      <div className="relative w-full ">
        {user && (
          <section className="p-4 max-w-7xl m-auto min-h-screen">
            <div className="flex flex-wrap flex-row-reverse justify-between items-center gap-6">
              <Button onClick={logOut} className="bg-primary text-white">
                Log out
              </Button>
              <h3 className="text-primary font-bold">
                Hi, {`${user.firstName} ${user.lastName}`}
              </h3>
              <Button
                onClick={() => setModelOpen(true)}
                className="m-auto sm:mr-auto sm:ml-0 bg-primary text-white flex items-center gap-2"
              >
                <AiOutlinePlus size="1.5rem"></AiOutlinePlus> Add entry
              </Button>
            </div>
            <div className="lg:flex lg:flex-row-reverse lg:gap-8 lg:mt-16">
              <EntriesTable entries={user.entries}></EntriesTable>
              <div className="lg:flex-1">
                {user.entries.length < 7 ? (
                  <p className="my-auto text-center text-gray-600 text-xl">
                    Add 7 or more entreis to see the graphs and the highlights
                  </p>
                ) : (
                  <>
                    <Graph entries={user.entries}></Graph>
                    <HighlightList entries={user.entries}></HighlightList>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        <Model modelOpen={modelOpen} setModelOpen={setModelOpen}></Model>
      </div>
    );
  }
};

export default UserDashBoard;

import React from "react";

const Body = () => {
  const navBarItems = ["Profile", "About", "Resume", "Projects", "Contract"];

  return (
    <div className=" ">
      <div>
        <header>
          <div className=" ">
            <ul className=" flex items-center w-fit ml-auto bg-slate-500 rounded-lg">
              {navBarItems.map((Item) => (
                <li
                  key={Math.random()}
                  className=" mx-3 my-1 px-2 py-1 h-8 duration-200 border-[#df4f3e] hover:border-b-4 hover:border-opacity-100 hover:border-[#df4f3e]"
                >
                  {Item}
                </li>
              ))}
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Body;

import React from "react";
import useGeneralStore from "../store/useGeneralStore";

const HeaderNavBar = ( {nav : {id, name, isActive}}) => {
  const { activeNavBar } = useGeneralStore();
  const handleNavBar = () => {
    activeNavBar(id);
  };
  return (
    <li
      onClick={handleNavBar}
      className={` ${
        isActive
        ? " duration-500 after:duration-500 after:inline-block after:w-8 after:h-1 after:rounded after:absolute after:top-9 after:bg-[#df4f3e] bg-zinc-800"
          : " bg-transparent text-stone-400 hover:bg-zinc-700 hover:bg-opacity-50 duration-300"
      } cursor-pointer xl:w-[150px] xl:px-3 xl:py-2 lg:w-[120px] lg:px-3 lg:py-2 relative flex justify-center rounded-t-lg`}
    >
      {name}
    </li>
  );
};

export default HeaderNavBar;

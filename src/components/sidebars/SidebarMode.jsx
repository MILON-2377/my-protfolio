import { MdLightMode } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import { FaLastfm } from "react-icons/fa";


export default function SidebarMode() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className=" flex flex-row lg:flex-col items-center justify-between lg:justify-normal lg:gap-5 px-3 py-2 shadow-sm ">
      <button className=" w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center  ">
        <FaLastfm className=" text-white text-xl " />
      </button>

      <div className=" flex flex-row lg:flex-col items-center gap-3 ">
        <button className=" w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center  ">
          <FaCartPlus className={`text-white`} />
        </button>
        <button
          onClick={() => setIsDark(!isDark)}
          className=" w-8 h-8 rounded-full bg-blue-400 text-2xl flex items-center justify-center "
        >
          <MdLightMode className={isDark ? "  " : " text-white  "} />
        </button>
      </div>
    </div>
  );
}

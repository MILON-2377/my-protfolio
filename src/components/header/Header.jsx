import { Link, useLocation } from "react-router-dom";
import { menus } from "../../data/navbarMenus";
import NavMenu from "./NavMenu";

export default function Header() {
  const location = useLocation();
  return (
    <div className=" w-full mx-auto h-16 flex items-center justify-between  bg-gray-50 px-5 ">
      {/* title */}
      <h1 className=" text-xl sm:text-2xl font-roboto font-bold  ">
        Milon
        <span className="bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text ml-2">
          Miah
        </span>
      </h1>

      {/* nabar links  */}
      <div className=" hidden sm:flex items-center gap-6  ">
        {menus.map((i, idx) => (
          <Link
            key={idx + i.title}
            to={i.path}
            className={` ${
              location.pathname === i.path ? " font-medium text-teal-400 " : ""
            } text-[16px] transition-all duration-300 hover:text-teal-400 font-roboto font-normal text-gray-500 `}
          >
            {i.title}
          </Link>
        ))}
      </div>

      <NavMenu />
    </div>
  );
}

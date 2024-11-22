import { Outlet } from "react-router-dom";
import SidebarMode from "../components/sidebars/SidebarMode";
import SideNavigate from "../components/sidebars/SideNavigate";
import SideProfile from "../components/sidebars/SideProfile";

export default function Root() {
  return (
    <div className="w-full h-full lg:flex ">
      <div className=" z-10 h-12 fixed top-0 w-full lg:w-[20%] lg:h-auto lg:left-0 lg:flex bg-slate-100  ">
        <SidebarMode />

        <div className=" hidden lg:flex flex-col p-5 items-center  w-full border-r ">
          <SideProfile />

          <div className="  mt-8 mb-10 border-b w-full  "></div>

          <SideNavigate />
        </div>
      </div>

      <div className="  min-h-screen w-full lg:w-[80%] lg:ml-[20%] border lg:h-auto mt-10 lg:mt-0 ">
        <Outlet />
      </div>

      {/* sidebar bottom */}
      <div className=" z-50 h-14 w-full fixed bottom-0 lg:hidden ">
        <SideNavigate />
      </div>
    </div>
  );
}

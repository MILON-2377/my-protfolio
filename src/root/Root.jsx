import { Outlet } from "react-router-dom";
import SidebarMode from "../components/sidebars/SidebarMode";
import SideNavigate from "../components/sidebars/SideNavigate";


export default function Root() {
  return (
    <div className=" w-full lg:flex ">
      <div className=" h-14 fixed top-0 w-full lg:static lg:h-screen bg-white  ">
        <SidebarMode />
      </div>

      <Outlet />


      {/* sidebar bottom */}
      <SideNavigate />
    </div>
  )
}

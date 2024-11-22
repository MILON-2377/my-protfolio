import { FaUser } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { FaWallet } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
import { FaBloggerB } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const NavLinks = [
  {
    name: "About me",
    path: "/",
    icon: <FaUser />,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: <GoProjectSymlink />,
  },
  {
    name: "Services & Pricing",
    path: "/services-pricing",
    icon: <FaWallet />,
  },
  {
    name: "Resume",
    path: "/resume",
    icon: <GrResume />,
  },

  {
    name: "Blog",
    path: "/blog",
    icon: <FaBloggerB />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <MdContactMail />,
  },
];

export default function SideNavigate() {
  const location = useLocation();
  return (
    <div className=" bg-slate-50 h-14 sm:text-xl  w-full flex lg:flex-col flex-row lg:h-screen lg:w-full items-center  justify-between lg:items-start lg:justify-normal lg:gap-5 ">
      {NavLinks.map((i, idx) => (
        <Link
          key={i.name + idx}
          to={i.path}
          className={
            `${location.pathname === i.path
              ? " w-8 h-8 rounded-md bg-blue-500 text-white "
              : ""}
              hover:bg-blue-500 hover:text-white w-full px-4 py-2
              flex items-center text-sm rounded-md gap-3 font-[200] font-serif
              transition-all duration-200
              `
          }
        >
          {i.icon}
          <span className=" hidden lg:block ">{i.name}</span>
        </Link>
      ))}
    </div>
  );
}

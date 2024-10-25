import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { menus } from "../../data/navbarMenus";

const Socials = [
  {
    title: "Facebook",
    link: <FaFacebook />,
    path: "",
  },
  {
    title: "Linkdin",
    link: <FaLinkedin />,
    path: "https://www.linkedin.com/in/milon-miah-538959218/",
  },
  {
    title: "Twitter",
    link: <FaTwitter />,
    path: "",
  },
  {
    title: "Instragram",
    link: <FaInstagram />,
    path: "",
  },
  {
    title: "Github",
    link: <FaGithub />,
    path: "https://github.com/dashboard",
  },
];

export default function Footer() {
  return (
    <div className=" mt-5 w-full h-[40vh] flex items-center justify-center flex-col gap-5 ">
      <h1 className=" text-xl sm:text-3xl font-roboto font-bold  ">
        Milon
        <span className="bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text ml-2">
          Miah
        </span>
      </h1>

      <div className=" flex items-center gap-10 ">
        {menus.map((i, idx) => (
          <p
            key={idx + "footer"}
            className=" text-sm text-gray-400 hover:cursor-pointer transform hover:scale-110 transition-all duration-300 hover:text-teal-400 font-roboto "
          >
            {i.title}
          </p>
        ))}
      </div>

      <div className=" flex items-center gap-10 ">
        {Socials.map((i, idx) => (
          <a
            key={i.title + idx}
            href={i?.path}
            className=" text-xl transition-all duration-300 hover:border p-2 rounded-md border-teal-400 hover:cursor-pointer "
          >
            {i.link}
          </a>
        ))}
      </div>
    </div>
  );
}

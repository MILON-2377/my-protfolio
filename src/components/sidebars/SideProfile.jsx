import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../../assets/milon.png";

const social = [
  {
    icon: <FaFacebook />,
  },
  {
    icon: <FaGithub />,
  },
  {
    icon: <FaLinkedinIn />,
  },
  {
    icon: <FaInstagram />,
  },
];

export default function SideProfile() {
  return (
    <div className=" w-full mt-8 ">
      <div className=" w-full flex items-center justify-center flex-col ">
        <div className=" w-20  h-20 rounded-full bg-slate-300 ">
          <img
            src={image}
            alt="my profile"
            className=" w-full h-full rounded-full object-cover "
          />
        </div>

        <p className=" text-2xl font-bold mt-2 ">MILON MIAH</p>
        <p className=" font-serif text-gray-700 text-[16px] mt-1 font-semibold ">
          Full&#45;Stack Developer
          {/* <span>
            &#124; Expert in Next&#46;js & React&#46;js &#124; Building Scalable
            Web Solutions
          </span> */}
        </p>
      </div>

      <div className=" flex items-center justify-between w-[80%] mt-3 mx-auto ">
        {social.map((i, idx) => (
          <Link
            key={i + idx + "social"}
            className=" hover:bg-blue-500 hover:text-white transition-all duration-200 w-8 h-8 flex items-center justify-center border text-blue-500 rounded-full "
          >
            {i.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

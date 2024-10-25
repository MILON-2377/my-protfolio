import { useState } from "react";
import img from "../../assets/_MG_2631_-_Copy-removebg-preview.png";
import HoverCircle from "../hover/HoverCircle";

export default function Banner() {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className=" flex flex-col sm:flex-row rounded-3xl f p-8 w-[90%] lg:w-[50%] sm:w-[95%] mt-10 sm:mt-20 mx-auto bg-white  "
    >
      <div className="bg-gradient-to-r rounded-3xl rounded-tr-none rounded-bl-none from-cyan-100 to-blue-200 lg:h-[35vh] sm:h-[30vh] w-full sm:w-[40%] ">
        <img
          src={img}
          alt="my profile"
          className=" object-cover w-full h-full rounded-3xl rounded-tr-none rounded-bl-none  "
        />
      </div>

      <div className=" flex-1 mt-8 sm:mt-0 sm:ml-8 flex justify-between  ">
        <div>
          <p className=" text-gray-400 text-sm  sm:text-[16px] font-[400] ">
            Full Stack Web Develope || Transforming Concepts into Reality{" "}
          </p>
          <p className=" mt-2 sm:text-2xl font-roboto font-bold ">MILON MIAH</p>
          <p className=" w-[80%] sm:w-auto lg:text-[16px] mt-8 text-xs sm:text-sm text-gray-400 ">
            A detail-oriented developer with expertise in JavaScript frameworks,
            I craft responsive, user-friendly web solutions that engage and
            delight users.
          </p>
        </div>

        <div className=" mt-36 sm:mt-48 lg:mt-[32vh] ">
          <HoverCircle hover={hover} />
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { FaStarOfLife } from "react-icons/fa6";
import HoverCircle from "../hover/HoverCircle";
import { ProfileData } from "../../data/data";
import { useEffect, useState } from "react";
import ProfileIntroduction from "./ProfileIntroduction";

export default function SelfSummary() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isRead, setIsRead] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    return () => {
      removeEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.7 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      className=" w-auto lg:w-[60%] lg:ml-5 "
    >
      <p className=" text-2xl sm:text-3xl flex items-center gap-4 w-[80%] sm:w-[60%] justify-center mx-auto lg:mt-0 mt-14 ">
        <FaStarOfLife className=" text-teal-300 " />
        <span className=" text-2xl sm:text-4xl font-bold font-roboto uppercase ">
          self-summary
        </span>
        <FaStarOfLife className=" text-teal-300 " />
      </p>

      {/*introduction */}
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className=" relative p-8 bg-white w-full rounded-xl mt-10 "
      >
        <HoverCircle
          hover={hover}
          cls={
            " absolute lg:-left-[20vw] lg:-top-[42vh] -left-[30vw] -top-[14.7vh] sm:-left-[39vw] sm:-top-[41vh] transform rotate-[90deg] "
          }
        />

        <h1 className=" text-xl sm:text-3xl mt-16 font-roboto font-bold  ">
          {ProfileData.profile.name.slice(0, 5)}

          <span className="bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text ml-2">
            {ProfileData.profile.name.slice(5, 10)}
          </span>

          <ProfileIntroduction
            isRead={isRead}
            setRead={setIsRead}
            width={width}
          />
        </h1>
      </div>
    </motion.div>
  );
}

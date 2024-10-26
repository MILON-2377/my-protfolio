import { motion } from "framer-motion";
import HoverCircle from "../hover/HoverCircle";
import { useState } from "react";

export default function About({ t1, t2, img }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={` rounded-3xl bg-white p-5 sm:h-[35vh] h-[30vh]
         w-full `}
    >
      <img
        src={img}
        alt="profile image"
        className={` ${
          t2 === "Projects" ? " w-[40%] " : "w-[70%]"
        } object-cover mx-auto  `}
      />
      <div className=" flex sm:flex-row flex-col mt-5 ">
        <div>
          <p className={` uppercase sm:text-xs font-sans text-gray-400 `}>
            {t1}
          </p>
          <p
            className={` ${
              hover ? "text-teal-400" : "text-black"
            } text-2xl  font-bold mt-2 `}
          >
            {t2}
          </p>
        </div>

        <HoverCircle
          cls={
            t2 === "Projects"
              ? " sm:-right-[28vw] lg:-right-[9.5vw] sm:top-6 -top-8 "
              : " -top-8 sm:-right-[23vw] lg:-right-28 sm:top-6 "
          }
          hover={hover}
        />
      </div>
    </motion.div>
  );
}

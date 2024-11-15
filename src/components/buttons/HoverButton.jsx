import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";

const HoverButton = ({ text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      key={text}
      className={` relative mt-5 overflow-hidden px-4 py-3 rounded-3xl text-white ${
        text === "View Projects" ? "bg-blue-500" : "bg-black"
      } `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* The scaling div */}
      <motion.div
        className={` absolute inset-0 ${
          text === "View Projects" ? "bg-black" : "bg-blue-500"
        } `}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }} // Scale the div on hover
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />

      <p className="relative font-semibold z-10 flex items-center gap-1 ">
        {text === "View Projects" ? (
          <FaArrowRightLong className=" text-xl " />
        ) : (
          <FaRegFileAlt />
        )}

        {/* Button Text */}
        <span className=" text-xm sm:text-sm ">{text}</span>
      </p>
    </motion.button>
  );
};

export default HoverButton;

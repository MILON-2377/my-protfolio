import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";

export default function ReadMoreBtn({ text, click }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      onClick={click}
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
        <FaRegFileAlt />

        {/* Button Text */}
        <span className=" text-xm sm:text-sm ">{text}</span>
      </p>
    </motion.button>
  );
}

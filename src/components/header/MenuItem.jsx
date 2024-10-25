import { motion } from "framer-motion";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaRegWindowMinimize } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export default function MenuItem({ i }) {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const style = { border: `2px solid ${colors[i.index % colors.length]}` };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="list-none mb-5 flex flex-col hover:cursor-pointer"
    >
      <div
        onClick={toggleExpand}
        className="flex items-center font-roboto justify-between rounded-[5px] w-full h-5"
        style={style}
      >
        <Link 
        to={i.path}
        className={`${location.pathname === i?.path ? " font-medium text-teal-400 " : "" } transition-all duration-300 hover:text-teal-400 `}>
          {i.title}
        </Link>
      </div>

      <div className={` w-full border-b mt-5 bg-gray-700 `}></div>
    </motion.div>
  );
}

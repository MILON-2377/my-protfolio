import { motion } from "framer-motion";
import { menus } from "../../data/navbarMenus";
import MenuItem from "./MenuItem";
const variants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.01,
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
  };
  

export default function NavigationItem({ open }) {
  return (
    <motion.div
      initial={false}
      animate={open ? "open" : "closed"}
      variants={variants}
      className=" w-[90%] absolute right-5 top-16 z-50 p-5 bg-gray-50 "
    >
      {menus.map((i, idx) => (
        <MenuItem i={i} key={idx} />
      ))}
    </motion.div>
  );
}

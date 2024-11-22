import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaSlash } from "react-icons/fa6";

export default function Details({keyId, endId, dText}) {
  const [count, setCount] = useState(1); // Initial count value

  // Function to start the animation when the component is in view
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = document
        .getElementById("experience")
        .getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setIsInView(true); // Start the animation when the element comes into view
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check immediately in case it's already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      let start = 1;
      const end = endId;
      const duration = 2; // Duration of the counting animation

      const interval = setInterval(() => {
        if (start < end) {
          setCount(start++);
        } else {
          clearInterval(interval);
        }
      }, (duration * 500) / end); // Interval for counting
    }
  }, [isInView]);

  return (
    <motion.div id="experience" 
    key={keyId + "details"}
    className="flex mt-10 flex-row items-center gap-5">
      <motion.div
        className=" text-4xl sm:text-6xl font-bold text-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {count}
      </motion.div>
      <span className=" text-3xl sm:text-4xl ">|</span>
      <span className="text-[16px] sm:text-xl text-slate-500 font-semibold ">
        {dText}
      </span>
    </motion.div>
  );
}

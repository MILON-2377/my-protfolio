import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HoverButton from "../buttons/HoverButton";

const aboutData = {
  name: "Milon Miah",
  profession: "Software Engineer &",
  specialization: "Scalable Web Applications",
  introduction:
    "Hi, I’m Milon Miah, a software engineer and freelancer passionate about crafting scalable and high-performance web applications. Explore my blog for insights, dive into my project portfolio to see innovation in action, and check out my online resume to learn more about my journey.",
  links: {
    blog: "https://example.com/blog",
    portfolio: "https://example.com/portfolio",
    resume: "https://example.com/resume",
  },
};

const AimatedText = () => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Developer", "Engineer"];

  useEffect(() => {
    const fullText = texts[textIndex];
    let charIndex = 0;

    setCurrentText("");

    const intervalId = setInterval(() => {
      setCurrentText((prevText) => prevText + fullText[charIndex]);
      charIndex++;

      if (charIndex === fullText.length) {
        clearInterval(intervalId);
        setTimeout(() => {
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, [textIndex]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2em",
        fontWeight: "bold",
      }}
      className=" w-full h-14 "
    >
      <motion.div
        key={currentText} // Ensures that the animation restarts when the text changes
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {currentText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default function AboutProfile() {
  return (
    <div className=" w-full sm:w-[80%] lg:w-full p-5 mx-auto mt-10 ">
      <p className=" text-[14px] uppercase sm:text-[18px] lg:text-2xl font-serif text-slate-500 ">
        <span>Hi&#44; I am a</span>
        <span className="ml-2 ">{aboutData.profession}</span>
      </p>

      {AimatedText()}

      <p className=" text-xm text-slate-500 font-semibold mt-5 ">
        {aboutData.introduction}
      </p>

      <div className=" flex gap-3 sm:gap-5 ">
        <HoverButton text={"View Projects"} />
        <HoverButton text={"View Resume"} />
      </div>
    </div>
  );
}

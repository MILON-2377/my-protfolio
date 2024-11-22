import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HoverButton from "../buttons/HoverButton";
import ReadMoreBtn from "./ReadMoreBtn";

const names = [
  "Software Engineering Student",
  "Front End Developer",
  "Full Stack Developer",
];

const AimatedText = () => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTextAnimation = () => {
      const fullText = names[textIndex];

      if (!isDeleting) {
        // Add characters one by one
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));

        // Pause when the full name is displayed
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Delete characters one by one
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));

        // Move to the next name after fully deleting the current name
        if (currentText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % names.length);
        }
      }
    };

    const interval = setInterval(handleTextAnimation, 100);

    return () => clearInterval(interval);
  }, [currentText, isDeleting, textIndex]);

  return (
    <div className=" text-xl sm:text-2xl font-bold mt-3 flex items-center ">
      <motion.div key={currentText} className=" text-blue-500 ">
        {currentText}
      </motion.div>
    </div>
  );
};

const myIntro = [
  "Specializing in frontend development using React.js and Next.js",
  "With a strong foundation in JavaScript, HTML, CSS, and tools like Tailwind CSS, Firebase, and Redux, I build user-centric and scalable web applications",
  "Currently pursuing a degree in Software Engineering at China West Normal University, I have developed over 20 real-world projects, including a hospital management system and a barber salon website",
  "My recent work on a hospital management system reflects my ability to build secure, scalable applications with a focus on performance and user experience",
  "Driven by a passion for learning, I am expanding my expertise in backend technologies like Node.js and MySQL while mastering animations with Framer Motion",
  "I am enthusiastic about solving complex technical challenges, continuously learning, and applying cutting-edge technologies to deliver impactful solutions",
];

const introLines = myIntro.flatMap((para) => para.split(/(?<=[/])/g));

const MyIntroduction = () => {
  const [visibleLines, setVisibleLines] = useState(2); // Start with 2 lines visible

  const handleReadMore = () => {
    setVisibleLines((prev) => Math.min(prev + 1, introLines.length)); // Increment one line at a time
  };

  return (
    <div className="my-intro lg:w-[85%] mt-5 sm:text-[16px] font-semibold text-slate-600 ">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {introLines.slice(0, visibleLines).map((line, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {line.trim()}
          </motion.p>
        ))}
      </motion.div>
      {visibleLines < introLines.length && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ReadMoreBtn click={handleReadMore} text={"Read more"} />
        </motion.div>
      )}
    </div>
  );
};

export default function AboutProfile() {
  return (
    <div className=" w-full  mx-auto mt-10 ">
      <div className="w-full ">
        <p className=" text-[15px]  sm:text-2xl lg:text-2xl font-bold text-slate-500 ">
          Hi&#44; I am a
        </p>

        <AimatedText />
      </div>

      <MyIntroduction />

      <div className=" flex gap-3 sm:gap-5 ">
        <HoverButton text={"View Projects"} />
        <HoverButton text={"View Resume"} />
      </div>
    </div>
  );
}

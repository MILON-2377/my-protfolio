import { motion } from "framer-motion";
import { ProfileData } from "../../data/data";

export default function Education() {
  const educations = ProfileData.education;
  return (
    <motion.div
      initial={{ scale: 0.7 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      className="  rounded-xl bg-white p-8 mt-5 "
    >
      <h1 className=" mb-5 sm:text-3xl font-bold ">Educations</h1>

      <h1 className=" text-xl font-semibold ">{educations.institution}</h1>

      <p className=" text-[16px] text-gray-400 mt-5 font-medium  ">
        <span>Start From</span>
        <span className=" ml-5">{educations.start_date}</span>
      </p>

      <p className=" text-xl font-serif font-medium  text-teal-400 mt-5 ">
        {educations.degree}
      </p>

      <p className=" text-[16px] text-gray-400 mt-5 font-medium  ">
        <span>Expected Graduation</span>
        <span className=" ml-5">{educations.expected_graduation}</span>
      </p>
    </motion.div>
  );
}

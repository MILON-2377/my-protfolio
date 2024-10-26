import { motion } from "framer-motion";
import profileImg from "../../assets/_MG_2631_-_Copy-removebg-preview.png";

export default function Profile() {
  return (
    <motion.div
      initial={{ scale: 0.7 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      className=" p-8 bg-white rounded-3xl w-full sm:w-[49vw] lg:w-[25vw] "
    >
      <div className=" rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 w-full sm:w-[40vw] h-[35vh] sm:h-[40vh] lg:h-full lg:w-full ">
        <img
          src={profileImg}
          alt="profile image"
          className=" w-full h-full object-cover rounded-3xl "
        />
      </div>
    </motion.div>
  );
}

import profileImg from "../../assets/milon.png";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <div className="relative sm:w-[50%] mt-5 lg:mt-0 w-[80%] mx-auto bg-slate-100 h-[50vh] lg:mr-5 ">
      {/* Profile Image */}
      <img
        src={profileImg}
        alt="Profile"
        className="absolute inset-0 object-cover w-full h-full z-10"
      />

      {/* Motion div for continuous translation and rotation */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-blue-500"
        initial={{ rotate: 0 }}
        animate={{
          rotate: [-8, 8],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
}

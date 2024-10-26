import { motion, AnimatePresence } from "framer-motion";
import { ProfileData } from "../../data/data";

export default function ProfileIntroduction({ isRead, setRead, width }) {
  const introduction = ProfileData.profile.introduction;

  const words = introduction.split(" ");

  return (
    <p className="sm:text-[16px] text-xs text-gray-600 font-sans mt-5 leading-6">
      {width < 767 ? (
        <AnimatePresence>
          {isRead &&
            words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }} // Delay for line-by-line effect
              >
                {word}{" "}
              </motion.span>
            ))}
        </AnimatePresence>
      ) : (
        introduction
      )}

      {width < 767 && !isRead && (
        <>
          {introduction.slice(0, 299)}
          <button
            onClick={() => setRead(!isRead)}
            className="px-3 py-2 mt-5 text-sm bg-gray-500 text-white"
          >
            Read more
          </button>
        </>
      )}
    </p>
  );
}

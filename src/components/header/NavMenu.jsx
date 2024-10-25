import { useCycle, motion} from "framer-motion";
import MenuToggle from "./MenuToggle";
import NavigationItem from "./NavigationItem";

export default function NavMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className=" block sm:hidden w-[95%] mx-auto  "
    >
      <MenuToggle toggle={() => toggleOpen()} />

      <NavigationItem open={isOpen} />
    </motion.div>
  );
}

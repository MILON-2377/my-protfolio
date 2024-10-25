import { SiPolestar } from "react-icons/si";

export default function HoverCircle({ hover, cls }) {
  return (
    <div className={` ${cls} relative  `}>
      <div
        className={`${
          hover && " bg-teal-300 "
        } absolute top-4 right-5 w-8 h-[1.5px] bg-gray-200 `}
      ></div>
      <div
        className={` ${
          hover && " border-teal-300 "
        } absolute right-0 h-8 w-8  rounded-full border flex items-center justify-center `}
      >
        <SiPolestar
          className={` ${
            hover && "text-teal-300 "
          } text-xl text-gray-300 transform rotate-45 `}
        />
      </div>
    </div>
  );
}

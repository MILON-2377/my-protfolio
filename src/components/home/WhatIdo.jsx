import HoverButton from "../buttons/HoverButton";

export default function WhatIdo() {
  return (
    <div>
      <div className=" lg:w-[70%] ">
        <p className=" flex items-center gap-5 ">
          <span className=" text-4xl sm:text-6xl text-blue-500  ">|</span>
          <span className=" text-2xl sm:text-4xl sm:mt-2 font-bold ">
            What I do
          </span>
        </p>
        <p className=" mt-5 text-slate-500 sm:text-[15px] text-sm ">
          I am a Full Stack Web Developer with a strong focus on frontend
          development, specializing in creating modern and responsive web
          applications. With over 1 year of hands-on experience, I have
          successfully built 20+ real-world projects, including a hospital
          management system and a barber salon website.
        </p>
      </div>

      <HoverButton text={"Services & Pricing"} />
    </div>
  );
}

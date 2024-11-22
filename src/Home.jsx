import AboutProfile from "./components/home/AboutProfile";
import Details from "./components/home/Details";
import LetsWorkTogether from "./components/home/LetsWorkTogether";
import MySkills from "./components/home/MySkills";
import Profile from "./components/home/Profile";
import WhatIdo from "./components/home/WhatIdo";

export default function Home() {
  return (
    <div className="sm:w-[80%] mx-auto lg:w-full p-5 lg:mt-20  ">
      <div className=" flex flex-col lg:flex-row gap-5 lg:justify-between  ">
        <AboutProfile />
        <Profile />
      </div>

      <div className=" flex items-center gap-5 ">
        <Details keyId={24} endId={25} dText={"Project Completed"} />
        <Details keyId={2} endId={1} dText={"Year Experience"} />
      </div>

      <div className=" w-full mt-8 mb-8 border-b "></div>


      {/* what i do section */}
      <WhatIdo />

      {/* my skills */}
      <MySkills />

      {/* lest work togather section */}
      <LetsWorkTogether />
      <div className=" mt-40 "></div>
    </div>
  );
}

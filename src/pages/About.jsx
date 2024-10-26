import Education from "../components/about/Education";
import SelfSummary from "../components/about/SelfSummary";
import Profile from "../components/profile/Profile";

export default function About() {
  return (
    <div
      className="
     sm:w-[95%] w-[90%] lg:w-[80%] mx-auto mt-14 sm:mt-20 lg:mt-24
    "
    >
      <div className=" flex flex-col lg:flex-row ">
        {/* profile */}
        <Profile />

        {/* selft summary section */}
        <SelfSummary />
      </div>

      {/* Education */}
      <div className=" mt-10 ">
        <Education />
      </div>
    </div>
  );
}

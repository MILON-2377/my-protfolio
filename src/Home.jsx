import AboutProfile from "./components/home/AboutProfile";
import Profile from "./components/home/Profile";

export default function Home() {
  return (
    <div className=" w-full lg:mt-20  ">
      <div className=" flex flex-col lg:flex-row gap-5 lg:justify-between  ">
        <AboutProfile />
        <Profile />
      </div>
    </div>
  );
}

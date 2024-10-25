import Banner from "./components/home/Banner";
import About from "./components/home/MoreAboutMe";
import SkillSlider from "./components/home/SkillSlider";
import project from "./assets/Wavy_Tech-09_Single-08.jpg";
import signature from "./assets/1129.jpg";

function App() {
  return (
    <>
      <div className=" w-full flex lg:flex-row flex-col lg:w-[80%] lg:mx-auto ">
        <Banner />

        <div className=" lg:w-[50%] px-5 mt-20 ">
          <SkillSlider />
          <div className=" flex sm:flex-row flex-col gap-5 mt-5 ">
            <About t1={"more about me"} t2={"Credentials"} img={signature} />
            <About t1={"showcase"} t2={"Projects"} img={project} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

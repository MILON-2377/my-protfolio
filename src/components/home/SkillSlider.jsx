import { Skills } from "../../data/data";

const SkillSlider = () => {
  const duplicatedSkills = [...Skills, ...Skills];

  return (
    <div className=" bg-white overflow-hidden whitespace-nowrap rounded-3xl w-[90%] lg:w-full sm:w-full mx-auto mt-5 ">
      <div className="skill-slider-content ">
        {duplicatedSkills.map((i, idx) => (
          <div key={i.title + idx} className="skill-slide">
            <h1 className={` text-[16px] text-teal-400 `}>{i.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSlider;

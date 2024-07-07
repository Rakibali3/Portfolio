import AboutInfo from "./AboutInfo";
import Skillset from "./Skillset";

const AboutMe = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div>
        <AboutInfo />
      </div>
      <div>
        <Skillset />
      </div>
    </div>
  );
};

export default AboutMe;

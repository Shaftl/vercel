import Skill from "./Skill";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <div className={`mb-medium ${styles.sidebarSkills}`}>
      <h3 className="heading-tertairy">Web Design</h3>
      <Skill title="Bootstrap, Tailwind Css" />
      <Skill title="Sass, Styled components" />
      <Skill title="React, Redux, NextJs" />
      <Skill title="NodeJs, ExpressJs, MongoDB" />
      <Skill title="GIT Knowledge" />

      <h3 className="mt-medium heading-tertairy">Graphic Design</h3>
      <Skill title="Logo design, Brochure" />
      <Skill title="Flyer, Business card..." />
      <a href="Aliabbas Rahimi CV.pdf" download={true}>
        <Skill title="Download Cv" cv="cv" />
      </a>
    </div>
  );
}

export default Skills;

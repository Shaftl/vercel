import LanguageInfo from "./sidebar/LanguageInfo";
import Profile from "./sidebar/Profile";
import SelfInfo from "./sidebar/SelfInfo";
import Skills from "./sidebar/Skills";
import SkillsBar from "./sidebar/SkillsBar";
import SocialBox from "./sidebar/SocialBox";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Profile />
      <div className={styles.container}>
        <SelfInfo />
        <LanguageInfo />
        <SkillsBar />
        <Skills />
      </div>
      <SocialBox />
    </div>
  );
}

export default Sidebar;

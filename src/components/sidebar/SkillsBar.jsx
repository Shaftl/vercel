import Progress from "./Progress";

function SkillsBar() {
  return (
    <div className="mb-medium">
      <Progress size="95%" name="Html" />
      <Progress size="95%" name="Css" />
      <Progress size="70%" name="Js" />
      <Progress size="90%" name="React" />
      <Progress size="70%" name="NodeJs" />
      <Progress size="80%" name="Adobe Photoshop" />
      <Progress size="50%" name="Adobe Illustrator" />
    </div>
  );
}

export default SkillsBar;

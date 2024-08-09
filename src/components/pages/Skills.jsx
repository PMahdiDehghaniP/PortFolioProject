import { useState, useEffect } from "react";
import { devSkills } from "../../constants/skills";
import Skill from "./Skill";
const Skills = () => {
  const [javaScript, setJavaScript] = useState(0);
  const [css, setCss] = useState(0);
  const [html, sethtml] = useState(0);
  const [reactJs, setReactJs] = useState(0);
  const [git, setGit] = useState(0);
  const [python, setPython] = useState(0);
  useEffect(() => {
    const progressBarAnimation = setInterval(() => {
      sethtml((oldProgress) => {
        const randomNumber = Math.random() * 10;
        return Math.min(oldProgress + randomNumber, 70);
      });
      setCss((oldProgress) => {
        const randomNumber = Math.random() * 10;
        return Math.min(oldProgress + randomNumber, 45);
      });
      setJavaScript((oldProgress) => {
        const randomNumber = Math.random() * 10;
        return Math.min(oldProgress + randomNumber, 63);
      });
      setReactJs((oldProgress) => {
        const randomNumber = Math.random() * 10;
        return Math.min(oldProgress + randomNumber, 54);
      });
      setGit((oldProgress) => {
        const randomNumber = Math.random() * 10;
        return Math.min(oldProgress + randomNumber, 47);
      });
      setPython((oldProgress) => {
        const randomNumber = Math.random() * 10;
        return Math.min(oldProgress + randomNumber, 69);
      });
    }, 300);
    return () => {
      clearInterval(progressBarAnimation);
    };
  }, []);
  const { htmlSkill, cssSkill, jsSkill, reactSkill, gitSkill, pythonSkill } =
    devSkills;
  return (
    <>
      <Skill
        name={htmlSkill.name}
        icon={htmlSkill.icon}
        value={html}
        color={htmlSkill.color}
      />
      <Skill
        name={cssSkill.name}
        icon={cssSkill.icon}
        value={css}
        color={cssSkill.color}
      />
      <Skill
        name={jsSkill.name}
        icon={jsSkill.icon}
        value={javaScript}
        color={jsSkill.color}
      />
      <Skill
        name={reactSkill.name}
        icon={reactSkill.icon}
        value={reactJs}
        color={reactSkill.color}
      />
      <Skill
        name={gitSkill.name}
        icon={gitSkill.icon}
        value={git}
        color={gitSkill.color}
      />
      <Skill
        name={pythonSkill.name}
        icon={pythonSkill.icon}
        value={python}
        color={pythonSkill.color}
      />
    </>
  );
};
export default Skills;

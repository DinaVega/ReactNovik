import "./SkillSection.css";
import Skill from "../Skill/Skill";
import photoshop from "./skills/ps.jpg";
import illustrator from "./skills/ai.jpg";
import aftereffects from './skills/ae.jpg';
import figma from "./skills/figma.png";

export default function SkillSection() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <p className="descr">I work in such programs as</p>
      <div className="cards">
        <Skill img={photoshop} alt="photoshop" text="Adobe Photoshop" st1="" st2="" st3="" st4="" st5="0" />
        <Skill img={illustrator} alt="Adobe Illustrator" text="Adobe Illustrator" st1="" st2="" st3="" st4="0" st5="0"/>
        <Skill img={aftereffects} alt="Adobe After Effects" text="Adobe After Effects" st1="" st2="" st3="" st4="" st5="0" />
        <Skill img={figma} alt="Figma" text="Figma" st1="" st2="" st3="" st4="" st5="0" />
      </div>
    </section>
  );
}

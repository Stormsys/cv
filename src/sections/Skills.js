import "./Skills.scss";
import skills from "../data/skills";
import Reveal from "../components/Reveal";

function SkillEntry(props) {
    return (
        <Reveal as="div" className="skill-group fade-in">
            <h3>{props.group}
                {/* {props.level && <span className={"skill-level " + props.level.toLowerCase()}>{props.level}</span>} */}
            </h3>
            <ul className='skill-list'>
                {props.skills.map(skill =>
                    <li key={skill}>{skill}</li>
                )}
            </ul>
            {props.examples && props.examples.length &&
                <p>
                        Please see
                    {props.examples.map(example =>
                        <a key={example.name} className={example.type} href={example.url} rel="noreferrer" target="_blank">{example.name}</a>
                    ).reduce((prev, curr) => [prev, ', ', curr])}
                        .
                </p>
            }
        </Reveal>);
}

function Skills() {
    return (
        <section id='skills'>
            <Reveal as="h2"> Skills </Reveal>
            <div className="skill-group-list">
                {skills.map(skill =>
                    <SkillEntry {...skill} key={skill.group} />
                )}
            </div>
        </section>
    );
}

export default Skills;

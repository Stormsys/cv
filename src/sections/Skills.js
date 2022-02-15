import "./Skills.scss";
import skills from "../data/skills";

function SkillEntry(props) {
    return (
        <div className="skill-group">
            <h3>{props.group}
                {props.level && <span className={"skill-level " + props.level.toLowerCase()}>{props.level}</span>}
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
        </div>);
}

function Skills() {
    return (
        <section id='skills'>

            <h2> Skills </h2>

            <div className="skill-group-list">
                {skills.map(skill =>
                    <SkillEntry {...skill} key={skill.group} />
                )}
            </div>

        </section>
    );
}

export default Skills;

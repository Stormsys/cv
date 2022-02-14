import "./Skills.scss";
import skills from "../data/skills";

function SkillEntry(props) {
    return (
        <>
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
                        <a className={example.type} href={example.url} rel="noreferrer" target="_blank">{example.name}</a>
                    ).reduce((prev, curr) => [prev, ', ', curr])}
                        .
                </p>
            }
        </>);
}

function Skills() {
    return (
        <section id='skills'>

            <h2> Skills </h2>

            {skills.map(skill =>
                <SkillEntry {...skill} key={skill.group} />
            )}

        </section>
    );
}

export default Skills;

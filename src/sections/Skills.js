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
        </>);
}

function Skills() {
    return (
        <section id='skills'>

            <h2> Skills </h2>
            {console.log(skills)}
            {skills.map(skill =>console.log(skill))}

            {skills.map(skill =>
                <SkillEntry {...skill} key={skill.group} />
            )}


            {/*<h3>Front-end Web Development <span className="skill-level expert">Expert</span></h3>*/}

            {/*<ul className='skill-list'>*/}
            {/*    <li>HTML 5</li>*/}
            {/*    <li>CSS 3</li>*/}
            {/*    <li>Less/Sass</li>*/}
            {/*    <li>Javascript</li>*/}
            {/*    <li>Angular</li>*/}
            {/*    <li>React</li>*/}
            {/*    <li>Vue</li>*/}
            {/*</ul>*/}

            {/*<h3>Back-end Web Development <span className="skill-level expert">Expert</span></h3>*/}
            {/*<ul className='skill-list'>*/}
            {/*    <li>PHP</li>*/}
            {/*    <li>memcached</li>*/}
            {/*    <li>HHVM</li>*/}
            {/*    <li>Laravel</li>*/}
            {/*    <li>Node.js</li>*/}
            {/*    <li>WebSockets</li>*/}
            {/*    <li>Java</li>*/}
            {/*    <li>Spring</li>*/}
            {/*    <li>MySQL</li>*/}
            {/*    <li>REST</li>*/}
            {/*    <li>HAL</li>*/}
            {/*    <li>C# .Net</li>*/}
            {/*    <li>.Net Core</li>*/}
            {/*</ul>*/}
            {/*<p>*/}
            {/*    Please see*/}
            {/*    <a className="github" href="https://github.com/Stormsys/gscpanel" target="_blank" rel="noreferrer">GSCPanel</a>,*/}
            {/*    <a className="github" href="https://github.com/Stormsys/SimpleHal" target="_blank" rel="noreferrer">SimpleHal</a>*/}
            {/*    .*/}
            {/*</p>*/}

            {/*<h3>Cloud &amp; Distributed <span className="skill-level expert">Expert</span></h3>*/}
            {/*<ul className='skill-list'>*/}
            {/*    <li>AWS</li>*/}
            {/*    <li>S3</li>*/}
            {/*    <li>KMS</li>*/}
            {/*    <li>SQS</li>*/}
            {/*    <li>EC2</li>*/}
            {/*    <li>Lambda</li>*/}
            {/*    <li>Api Gateway</li>*/}
            {/*    <li>ECR</li>*/}
            {/*    <li>CloudFormation</li>*/}
            {/*    <li>CloudFront</li>*/}
            {/*    <li>Terraform</li>*/}
            {/*    <li>Docker</li>*/}
            {/*</ul>*/}

            {/*<h3>Desktop &amp; Services Development <span className="skill-level expert">Expert</span></h3>*/}
            {/*<ul className='skill-list'>*/}
            {/*    <li>C# .Net</li>*/}
            {/*    <li>Silverlight</li>*/}
            {/*</ul>*/}

            {/*<h3>3D Graphics &amp; Games Development <span className="skill-level proficient">Proficient</span></h3>*/}
            {/*<ul className='skill-list'>*/}
            {/*    <li>Unity Game Engine</li>*/}
            {/*    <li>C++</li>*/}
            {/*    <li>OpenGL</li>*/}
            {/*</ul>*/}
            {/*<p>*/}
            {/*    Please see*/}
            {/*    <a className="steam" href="https://steamcommunity.com/sharedfiles/filedetails/?id=183750851"*/}
            {/*       target="_blank"*/}
            {/*       rel="noreferrer">Planet Ardor</a>,*/}
            {/*    <a className="github" href="https://github.com/Stormsys/Spacehoops" target="_blank" rel="noreferrer">Spacehoops</a>*/}
            {/*    .*/}
            {/*</p>*/}

            {/*<h3>Mobile App Development <span className="skill-level proficient">Proficient</span></h3>*/}
            {/*<ul className='skill-list'>*/}
            {/*    <li>Android / Java</li>*/}
            {/*    <li>iOS / Swift</li>*/}
            {/*    <li>React Native</li>*/}
            {/*</ul>*/}

            {/*<h3>General</h3>*/}
            {/*<ul className='skill-list'>*/}
            {/*    <li>Leadership</li>*/}
            {/*    <li>Git</li>*/}
            {/*    <li>Continuous Delivery</li>*/}
            {/*    <li>Dependency Injection</li>*/}
            {/*    <li>Continuous Integration</li>*/}
            {/*    <li>Travis</li>*/}
            {/*    <li>Elastic Search</li>*/}
            {/*    <li>Grafana</li>*/}
            {/*    <li>Kibana</li>*/}
            {/*    <li>Statsd</li>*/}
            {/*    <li>Jenkins</li>*/}
            {/*    <li>Teamcity</li>*/}
            {/*    <li>Bamboo</li>*/}
            {/*    <li>DevOps</li>*/}
            {/*</ul>*/}
        </section>
    );
}

export default Skills;

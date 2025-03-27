import {SKILLS} from "../data/skills";

const Skills = () => (
  <section className="mb-10">
    <h3 className="text-lg font-bold mb-2 whitespace-nowrap text-center md:text-left text-zinc-800 dark:text-zinc-300 font-feature">Technical Skills</h3>
    <div className="text-sm flex flex-col gap-y-4">
      {SKILLS.map((skill) => (
        <div key={skill.type} className="flex flex-col">
          <h4 className="font-bold text-zinc-800 dark:text-zinc-300">{skill.type}</h4>
          <ul className="list-disc ml-5 flex gap-x-4 flex-wrap md:flex-col">
            {skill.items.map((item) => (
              <li key={item} className='list-inside'>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
)

export default Skills;

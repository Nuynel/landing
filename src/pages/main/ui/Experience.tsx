import {Experience} from "../data/experience";

const Experience = ({experience: {position, company, companyLink, period, points} }: {experience: Experience}) => (
  <div className="mb-6">
    {companyLink ? (
      <h4 className="font-bold text-zinc-800 dark:text-zinc-300">
        <span>{position}, </span>
        <a
          className="underline hover:opacity-70 transition-all duration-300"
          href={companyLink}
          target="_blank"
        >{company}</a>
        <span className="font-normal opacity-30"> — {period}</span>
      </h4>
    ) : (
      <h4 className="font-bold text-zinc-800 dark:text-zinc-300">{position}, {company} <span className="font-normal opacity-30">— {period}</span></h4>
    )
    }

    <ul className="list-disc ml-5 text-sm mt-1">
      {points.map((point) => (<li>{point}</li>))}
    </ul>
  </div>
)

export default Experience;

import {ThemeController} from "../../features/themeController/ThemeController";
import portrait from '../../../public/assets/img/alisa.png'

const SKILLS = [
  {
    type: 'Frontend',
    items: [
      'React', 'TypeScript', 'HTML, CSS', 'Tailwind', 'Redux',
      'Zustand', 'Wouter', 'i18n', 'Vite', 'Vike', 'Webpack'
    ]
  },
  {
    type: 'Backend',
    items: [
      'Node.js', 'Express.js', 'MongoDB', 'Nginx',
    ]
  },
  {
    type: 'DevOps & CI/CD',
    items: [
      'Docker', 'GitHub Actions'
    ]
  },
  {
    type: 'Testing',
    items: [
      'Vitest', 'Jest'
    ]
  },
  {
    type: 'Tools',
    items: [
      'Git', 'Jira', 'Figma'
    ]
  },
  {
    type: 'Have experience with',
    items: [
      'Vue.js', 'Next.js', 'React Router', 'Styled Components',
      'Material UI', 'Headless UI', 'Ant Design'
    ]
  }
]

export const HeroPage = ()=> {

  const handleDownload = () => {
    window.print()
  };

  return (
    <main className="max-w-4xl mx-auto p-6 text-zinc-700 dark:text-zinc-400 font-sans">
      <header className="w-dvw items-center fixed top-0 left-0 h-12 md:h-16 bg-zinc-400 dark:bg-zinc-900 flex justify-center print:hidden">
        <div className="max-w-4xl w-full flex justify-between items-center px-4 sm:px-8">
          <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-zinc-300 dark:text-zinc-400 font-feature">KISLOVA ALISA</h3>
          <ThemeController/>
        </div>
      </header>

      <section>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center text-zinc-800 dark:text-zinc-300 hidden print:block font-feature">KISLOVA ALISA</h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold whitespace-pre text-center py-4 mt-6 md:mt-12 print:mt-0 md:mb-6 text-zinc-800 dark:text-zinc-300 lg:hidden font-feature">
          Frontend Developer{'\n'}
          5 years experience
        </h2>
        <h2 className="text-3xl font-bold text-center py-10 mt-10 text-zinc-800 dark:text-zinc-300 hidden lg:inline-block font-feature">
          Frontend Developer | 5 years experience
        </h2>
      </section>

      <section className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-10">
        <div className="flex flex-col gap-8 items-center print:flex-row">
          <img src={portrait} alt="Alisa Kislova" loading='lazy' className="size-40 md:size-64 print:size-64"/>
          <ul className="space-y-1 text-sm flex flex-col justify-center">
            <li>📍 Montenegro ={'>'} Spain</li>
            <li>📞 +7 (911) 029-3933</li>
            <li>📧 <a href="mailto:snezhinka.alisa@gmail.com" className="underline hover:opacity-70 transition-all duration-300">snezhinka.alisa@gmail.com</a></li>
            <li>🔗 <a href="https://linkedin.com/in/alisa-kislova-2533b023b" target="_blank" className="underline hover:opacity-70 transition-all duration-300">linkedin.com/in/alisa-kislova-2533b023b</a></li>
            <li>📌 Telegram: <a href="https://t.me/nuynel" target="_blank" className="underline hover:opacity-70 transition-all duration-300">@nuynel</a></li>
            <li>💼 Citizenship: Russia</li>
            <li>🚀 Open to relocation and business trips</li>
            <li>🗣️ Russian – Native | English – B1</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 justify-between">
          <section className="flex flex-col gap-4">
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-center text-zinc-800 dark:text-zinc-300 font-feature">About Me</h2>
            <p>
              I excel at delivering lean and precise frontends from Figma to production — the perfect choice for rapid hypothesis testing.
            </p>
            <p className="mt-2">
              <span className="font-bold text-zinc-900 dark:text-zinc-300">My stack: </span>
              React, TypeScript, Node.js, Vite/Vike, Express, Tailwind, Docker, Nginx.
            </p>
            <p className="mt-2">
              <span className="font-bold text-zinc-900 dark:text-zinc-300">Soft skills: </span>
              comfortable in distributed or on-site teams, adept at task decomposition and estimation, time tracking, code reviews, and async workflows.
            </p>
          </section>
          <button
            onClick={handleDownload}
            className="bg-orange-400 dark:bg-orange-800 text-zinc-100 dark:text-zinc-300 py-2 px-4 rounded shadow print:hidden font-feature hover:opacity-70 transition-all duration-300"
          >
            Download PDF CV
          </button>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 hidden md:block text-zinc-800 dark:text-zinc-300 font-feature">Professional Experience</h2>
        <div className="md:flex gap-12">
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

          <h2 className="text-3xl font-bold mb-8 md:hidden text-center md:text-left text-zinc-800 dark:text-zinc-300 font-feature">Professional Experience</h2>

          <div>
            <div className="mb-6">
              <h4 className="font-bold text-zinc-800 dark:text-zinc-300">
                <span>Frontend Developer, </span>
                <a
                  className="underline hover:opacity-70 transition-all duration-300"
                  href='https://terrainc.eu/'
                  target="_blank"
                >Terra Incognita</a>
                <span className="font-normal opacity-30"> — Nov 2024 – Present</span>
              </h4>
              <ul className="list-disc ml-5 text-sm mt-1">
                <li>Developed a SEO-optimized marketing website from scratch using React, Vike+Vite (SSG), Tailwind, and Docker, deployed via Nginx on a remote server.</li>
                <li>Built both dev and production Docker environments, reducing final image size to 60 MB for efficient delivery.</li>
                <li>Closely collaborated with the designer on UI/UX; delivered pixel-perfect components with minimal revision cycles.</li>
                <li>Proposed and implemented multiple UI improvements adopted into the final design.</li>
                <li>Took full ownership of the website release process, including infrastructure migration and production deployment.</li>
                <li>Actively supported product momentum by ensuring on-time delivery and stable deployment.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-zinc-800 dark:text-zinc-300">Founder & Full Stack Developer, Vududu <span className="font-normal opacity-30">— Oct 2023 – Aug 2024</span></h4>
              <ul className="list-disc ml-5 text-sm mt-1">
                <li>Designed and developed a full-stack SaaS platform for dog breeders from scratch using React, Express, MongoDB, Tailwind CSS, Docker, and Nginx.</li>
                <li>Set up production deployment with multiple Docker containers (Node.js, MongoDB, Nginx) and configured SSL certificates and custom domain.</li>
                <li>Built authentication and registration via email, and implemented flexible role-based user system (individuals, kennels, organizations).</li>
                <li>Modeled and implemented domain logic for ownership, pedigrees, and breeder associations.</li>
                <li>Designed the initial frontend architecture and UI for document tracking, pedigrees, and dog profiles.</li>
                <li>Gained hands-on experience in full product lifecycle — from feature planning and backend logic to deployment and infrastructure.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-zinc-800 dark:text-zinc-300">
                <span>Frontend Developer, </span>
                <a
                  className="underline hover:opacity-70 transition-all duration-300"
                  href='https://plyo.com/en'
                  target="_blank"
                >PLYO</a>
                <span className="font-normal opacity-30"> — Jul 2022 – Aug 2023</span>
              </h4>
              <ul className="list-disc ml-5 text-sm mt-1">
                <li>Developed new features using React (Functional Components, Redux, CSS Modules) in a legacy codebase.</li>
                <li>Refactored massive class components (1000–1500 lines) into modular functional code.</li>
                <li>Modernized architecture in an environment with no technical documentation or up-to-date designs.</li>
                <li>Investigated business logic through code and user interface due to lack of product requirements.</li>
                <li>Redesigned outdated UIs and created a reusable project icon library.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-zinc-800 dark:text-zinc-300">Frontend Developer, Checkaso <span className="font-normal opacity-30">— Feb 2021 – Jun 2022</span></h4>
              <ul className="list-disc ml-5 text-sm mt-1">
                <li>Maintained and improved a 50+ page SPA built with Vue 2.</li>
                <li>Introduced Composition API to modernize legacy components.</li>
                <li>Initiated the integration of modern tools and workflows as Storybook for UI isolation and Sentry for monitoring.</li>
                <li>Reimplemented Amplitude tracking from scratch across the entire app, including event structure, user properties, and analytics flow.</li>
                <li>Integrated Carrot Quest live chat and user tracking.</li>
                <li>Supported the SSR Nuxt app with responsive design and themes.</li>
                <li>Mentored new developer for 4 months.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-zinc-800 dark:text-zinc-300">Frontend Developer, Web Studio<span className="font-normal opacity-30">— Sep 2020 – Jan 2021</span></h4>
              <ul className="list-disc ml-5 text-sm mt-1">
                <li>Developed browser-side apps for public sector using Vue 2, TypeScript, Vuex, Router.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-zinc-800 dark:text-zinc-300">Frontend Developer, Freelance <span className="font-normal opacity-30">— Jun 2020 – Sep 2020</span></h4>
              <ul className="list-disc ml-5 text-sm mt-1">
                <li>Worked on HTML-to-React conversions and site layouts.</li>
              </ul>
            </div>

            <section className="mb-10 opacity-50">
              <h4 className="text-lg font-bold mb-2">Additional Work Experience</h4>

              <div className="mb-4">
                <h4 className="font-bold">Assistant Cadastral Engineer, MKZ System (Land Surveying, Cadastre and Land Management System) <span className="font-normal">— May 2018 – Jan 2020</span></h4>
                <ul className="list-disc ml-5 text-sm mt-1">
                  <li>Helped prepare boundary plans and documents for cadastre chamber.</li>
                  <li>Worked with GIS MapInfo.</li>
                  <li>Studied Land Cadastre at SPbGASU (2 years).</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-bold">Veterinary Assistant, CityVet <span className="font-normal">— Sep 2015 – Nov 2017</span></h4>
                <ul className="list-disc ml-5 text-sm mt-1">
                  <li>Assisted veterinarians, cared for inpatients, administered meds.</li>
                  <li>Maintained records and prepared medical equipment.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-zinc-400 border-t border-zinc-400 dark:text-zinc-500 dark:border-zinc-500 pt-4 print:hidden">
        <p>
          This resume is hosted on IPFS as a censorship-resistant dApp.{' '}
          <a href="https://ipfs.io" target="_blank" className="underline hover:opacity-70 transition-all duration-300">Learn more</a>
        </p>
        <p>
          This dApp doesn’t use cookies and doesn’t know who you are.
        </p>
        <p className="text-zinc-600 dark:text-zinc-200 text-lg font-bold pt-2 font-feature">
          Enjoy your privacy
        </p>
      </footer>
    </main>
  );
}

import {EXPERIENCE} from "./data/experience";
import Header from "./ui/Header";
import Title from "./ui/Title";
import Hero from "./ui/Hero";
import Skills from "./ui/Skills";
import Experience from "./ui/Experience";
import Footer from "./ui/Footer";

export const HeroPage = ()=> (
  <main className="max-w-4xl mx-auto p-6 text-zinc-700 dark:text-zinc-400 font-sans">
    <Header/>
    <Title/>
    <Hero/>
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 hidden md:block text-zinc-800 dark:text-zinc-300 font-feature">Professional Experience</h2>
      <div className="md:flex gap-12">
        <Skills/>
        <h2
          className="text-3xl font-bold mb-8 md:hidden text-center md:text-left text-zinc-800 dark:text-zinc-300 font-feature"
        >Professional Experience</h2>
        <div>
          {EXPERIENCE.it.map((experience) => <Experience experience={experience}/>)}
          <section className="mb-10 opacity-50">
            <h4 className="text-lg font-bold mb-2">Additional Work Experience</h4>
            {EXPERIENCE.other.map((experience) => <Experience experience={experience}/>)}
          </section>
        </div>
      </div>
    </section>
    <Footer/>
  </main>
)

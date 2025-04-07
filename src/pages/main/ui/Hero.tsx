import portrait from "../../../../public/assets/img/alisa.png";

const Hero = () => {
  const handleDownload = () => {
    window.print()
  };
  return (
    <section className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-10">
      <div className="flex flex-col gap-8 items-center print:flex-row">
        <img src={portrait} alt="Alisa Kislova" loading='lazy' className="size-40 md:size-64 print:size-64"/>
        <ul className="space-y-1 text-sm flex flex-col justify-center">
          <li>📍 Montenegro ={'>'} Spain</li>
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
  )
}

export default Hero

export type Experience = {
  position: string,
  company: string,
  companyLink: string| null,
  period: string,
  points: string[]
}

type Spheres = 'it' | 'other'

export const EXPERIENCE: Record<Spheres, Experience[]> = {
  it: [
    {
      position: 'Frontend Developer',
      company: 'Terra Incognita',
      companyLink: 'https://terrainc.eu/',
      period: 'Nov 2024 – Present',
      points: [
        'Developed a SEO-optimized marketing website from scratch using React, Vike+Vite (SSG), Tailwind, and Docker, deployed via Nginx on a remote server.',
        'Built both dev and production Docker environments, reducing final image size to 60 MB for efficient delivery.',
        'Closely collaborated with the designer on UI/UX; delivered pixel-perfect components with minimal revision cycles.',
        'Proposed and implemented multiple UI improvements adopted into the final design.',
        'Took full ownership of the website release process, including infrastructure migration and production deployment.',
        'Actively supported product momentum by ensuring on-time delivery and stable deployment.',
      ]
    },
    {
      position: 'Founder & Full Stack Developer',
      company: 'Vududu',
      companyLink: null,
      period: 'Oct 2023 – Aug 2024',
      points: [
        'Designed and developed a full-stack SaaS platform for dog breeders from scratch using React, Express, MongoDB, Tailwind CSS, Docker, and Nginx.',
        'Set up production deployment with multiple Docker containers (Node.js, MongoDB, Nginx) and configured SSL certificates and custom domain.',
        'Built authentication and registration via email, and implemented flexible role-based user system (individuals, kennels, organizations).',
        'Modeled and implemented domain logic for ownership, pedigrees, and breeder associations.',
        'Designed the initial frontend architecture and UI for document tracking, pedigrees, and dog profiles.',
        'Gained hands-on experience in full product lifecycle — from feature planning and backend logic to deployment and infrastructure.',
      ]
    },
    {
      position: 'Frontend Developer',
      company: 'PLYO',
      companyLink: 'https://plyo.com/en',
      period: 'Jul 2022 – Aug 2023',
      points: [
        'Developed new features using React (Functional Components, Redux, CSS Modules) in a legacy codebase.',
        'Refactored massive class components (1000–1500 lines) into modular functional code.',
        'Modernized architecture in an environment with no technical documentation or up-to-date designs.',
        'Investigated business logic through code and user interface due to lack of product requirements.',
        'Redesigned outdated UIs and created a reusable project icon library.',
      ]
    },
    {
      position: 'Frontend Developer',
      company: 'Checkaso',
      companyLink: null,
      period: 'Feb 2021 – Jun 2022',
      points: [
        'Maintained and improved a 50+ page SPA built with Vue 2.',
        'Introduced Composition API to modernize legacy components.',
        'Initiated the integration of modern tools and workflows as Storybook for UI isolation and Sentry for monitoring.',
        'Reimplemented Amplitude tracking from scratch across the entire app, including event structure, user properties, and analytics flow.',
        'Integrated Carrot Quest live chat and user tracking.',
        'Supported the SSR Nuxt app with responsive design and themes.',
        'Mentored new developer for 4 months.',
      ]
    },
    {
      position: 'Frontend Developer',
      company: 'Web Studio',
      companyLink: null,
      period: 'Sep 2020 – Jan 2021',
      points: [
        'Developed browser-side apps for public sector using Vue 2, TypeScript, Vuex, Router.'
      ]
    },
    {
      position: 'Frontend Developer',
      company: 'Freelance',
      companyLink: null,
      period: 'Jun 2020 – Sep 2020',
      points: [
        'Worked on HTML-to-React conversions and site layouts.'
      ]
    }
  ],
  other: [
    {
      position: 'Assistant Cadastral Engineer',
      company: 'MKZ System (Land Surveying, Cadastre and Land Management System)',
      companyLink: null,
      period: 'May 2018 – Jan 2020',
      points: [
        'Helped prepare boundary plans and documents for cadastre chamber.',
        'Worked with GIS MapInfo.',
        'Studied Land Cadastre at SPbGASU (2 years).',
      ]
    },
    {
      position: 'Veterinary Assistant',
      company: 'CityVet',
      companyLink: null,
      period: 'Sep 2015 – Dec 2017',
      points: [
        'Assisted veterinarians, cared for inpatients, administered meds.',
        'Maintained records and prepared medical equipment.'
      ]
    }
  ]
}

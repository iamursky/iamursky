export const HEADER: {
  title: string;
  description: string;
  image: string;
} = {
  title: "Ilya Evseev • Senior Frontend Engineer",
  description:
    "Senior Frontend Developer with 12 years of experience building complex, state-heavy web applications with React. Experience in project management, negotiations, and close colaboration with stakeholders to transform business requirements into solutions aligned with industry best practices and standards.",
  image: "/images/avatar.jpg",
};

export const SKILLS: Array<{
  label: string;
  value: string;
}> = [
  {
    label: "Speak",
    value: "English (Advanced, C1), Russian (Native)",
  },
  {
    label: "Languages",
    value: "TypeScript, JavaScript, HTML, CSS",
  },
  {
    label: "Frameworks",
    value: "React, Next.js, Node.js",
  },
  {
    label: "Platforms",
    value: "AWS, GCP, Firebase, Supabase",
  },
  {
    label: "Databases",
    value: "PostgreSQL, MongoDB, Firestore",
  },
  {
    label: "Tools",
    value: "Figma, Photoshop, Illustrator",
  },
];

export const CONTACTS: Array<{
  label: string;
  value: string;
}> = [
  {
    label: "Email",
    value: "ilia.evseev@icloud.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/iamursky/",
  },
  {
    label: "GitHub",
    value: "github.com/iamursky",
  },
];

export const EXPERIENCE: Array<{
  logo: string;
  title: string;
  duration: string;
  location: string;
  bullets: string[];
  techStack: string;
}> = [
  {
    logo: "/images/upwork.jpeg",
    title: "Full-Stack Engineer, Freelance",
    duration: "Mar 2025 - Present · 1 year",
    location: "Spain • Remote · Contract",
    bullets: [
      "Work closely with clients, turning business requirements into modern products, guiding them through the entire process from initial prototypes to market launch and subsequent support",
      "Build products following best practices, with a strong focus on user experience, performance, and long-term maintainability",
    ],
    techStack: "React, Next.js, Node.js, TypeScript",
  },
  {
    logo: "/images/exante.jpeg",
    title: "Senior Frontend Developer, Exante",
    duration: "Feb 2023 - Mar 2025 · 2 years",
    location: "United Kingdom · Remote · Contract",
    bullets: [
      "Redesigned and rebuilt KYC module under strict regulatory deadlines, migrating the solution from Vue to React, reducing completion time by 30%",
      "Delivered a configurable KYC flow with a visual constructor, enabling compliance team to update rules, steps, and validations without developer involvement — reducing changes from weeks to hours",
    ],
    techStack: "React, Redux, TypeScript, Material UI, Storybook",
  },
  {
    logo: "/images/b6cloud.jpeg",
    title: "Founding Frontend Developer, B6 Cloud",
    duration: "Feb 2020 - Jan 2023 · 3 years",
    location: "United States · Remote · Contract",
    bullets: [
      "Worked closely with the founder to shape product strategy and key engineering decisions",
      "Built a rich-text editor with real-time collaboration, version history and policy-management features, helping customers create, review, and approve documents 2x faster",
      "Built a spreadsheet editor that helped customers using them for project management onboard smoothly while modernizing their workflows",
      "Implemented a Kanban board with deep tasks ↔ documents linking, making status updates instant and transparent",
    ],
    techStack: "React, Next.js, TypeScript, Ant Design, Tiptap",
  },
  {
    logo: "/images/stecpoint.jpeg",
    title: "Senior Frontend Developer, StecPoint",
    duration: "Mar 2017 - Feb 2020 · 3 years",
    location: "United Kingdom · Remote · Contract",
    bullets: [
      "Led frontend development of a project management system that increased on-time project delivery by ~25% for a large construction company managing multi-million-dollar projects",
      "Built a real-time dashboard that reduced reporting time from days to minutes and enabled near-instant feedback loops",
    ],
    techStack: "React, Redux, TypeScript, Syncfusion, Storybook",
  },
  // {
  //   logo: "/images/ksf.jpeg",
  //   title: "Software Project Manager, KSF",
  //   duration: "Sep 2016 - Feb 2017 · 6 months",
  //   location: "Russia · On-Site · Contract",
  //   bullets: [
  //     "Secured the contract and led product development of an investment platform for a regional agricultural fund by pitching the project, working directly with stakeholders, and translating business needs into a clear product roadmap",
  //     "Led a small cross-functional team and owned end-to-end frontend delivery from design to launch",
  //     "Delivered a solution that enabled farmers to receive 100M+ RUB in funding and investments",
  //   ],
  //   techStack: "React, Redux, TypeScript",
  // },
  // {
  //   logo: "/images/html-academy.jpeg",
  //   title: "React and JavaScript Mentor, HTML Academy",
  //   duration: "Jan 2014 - Jan 2017 · 3 years",
  //   location: "Russia · Remote · Contract",
  //   bullets: [
  //     "Guided 23 students in mastering complex web development concepts in JavaScript and React.js, helping them successfully pass their final exams and get their first jobs",
  //   ],
  //   techStack: "React, JavaScript, HTML, CSS",
  // },
];

export const EDUCATION: Array<{
  logo: string;
  title: string;
  subtitle: string;
  bullets: string[];
}> = [
  {
    logo: "/images/pnu.jpeg",
    title: "BACs, Information Technology in Physics",
    subtitle: "Pacific National University, 2013 - 2017 · 4 years",
    bullets: [
      "Created a video-game for a robotics festival in partnership with one of the largest mobile network operators in Russia.",
      "Co-founded a student community where mentored over 30 people in web development, helping them secure their first jobs.",
      "Built a self-driving car using Traxxas chassis, Arduino, and Raspberry Pi.",
    ],
  },
];

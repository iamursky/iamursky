import type { Metadata } from "next";
import type { StaticImageData } from "next/image";

import Image from "next/image";

import avatarSrc from "./images/avatar.jpg";
import b6cloudSrc from "./images/b6cloud.jpeg";
import exanteSrc from "./images/exante.jpeg";
import pnuSrc from "./images/pnu.jpeg";
import stecpointSrc from "./images/stecpoint.jpeg";

type TEducationItem = {
  logo: StaticImageData;
  title: string;
  schoolName: string;
  duration: string;
  bullets: string[];
};

type TExperienceItem = {
  logo: StaticImageData;
  position: string;
  companyName: string;
  duration: string;
  location: string;
  bullets: string[];
  techStack: string;
};

export const metadata: Metadata = {
  title: "Ilya Evseev — Senior Frontend Engineer",
  description:
    "Senior frontend engineer with over 12 years of experience in building complex web applications, team leading, project management, and collaboration with stakeholders, resulting in business growth and delivering solutions that meet global standards.",
};

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col p-6">
      <section>
        <div className="flex flex-row-reverse gap-8">
          <div className="relative h-40 w-40 overflow-hidden rounded-sm">
            <Image
              priority
              src={avatarSrc}
              alt="Ilya Evseev's Photo"
              className="absolute"
              objectFit="cover"
              objectPosition="center"
              layout="fill"
            />
          </div>
          <div className="flex-1 py-2">
            <h1 className="mb-4 text-2xl font-bold">Ilya Evseev — Senior Frontend Engineer</h1>

            <h2 className="sr-only">Summary</h2>
            <p className="leading-relaxed">
              Senior frontend engineer with over 12 years of experience in building complex web
              applications, team leading, project management, and collaboration with stakeholders,
              resulting in business growth and delivering solutions that meet global standards.
            </p>

            <h3 className="my-4 text-lg leading-none font-bold">Technical Skills</h3>
            <div className="flex flex-col gap-3">
              <p className="leading-none">
                <span className="font-bold">Languages: </span>
                <span>TypeScript, JavaScript, HTML, CSS</span>
              </p>
              <p className="leading-none">
                <span className="font-bold">Frameworks: </span>
                <span>React, Next.js, Tailwind CSS</span>
              </p>
              <p className="leading-none">
                <span className="font-bold">Databases: </span>
                <span>PostgreSQL, Firestore, MongoDB</span>
              </p>
              <p className="leading-none">
                <span className="font-bold">Platforms: </span>
                <span>AWS, GCP, Supabase, Firebase</span>
              </p>
              <p className="leading-none">
                <span className="font-bold">Tools: </span>
                <span>Figma, Photoshop, Illustrator</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4">
        <h2 className="mb-6 text-2xl leading-none font-bold">Experience</h2>
        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((experience) => (
            <article key={experience.companyName} className="flex gap-4">
              <Image
                src={experience.logo}
                alt=""
                role="presentation"
                loading="lazy"
                className="h-12 w-12"
              />
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg leading-none font-bold">
                    {experience.position}, {experience.companyName}
                  </h3>
                  <p className="leading-none">{experience.location}</p>
                  <p className="leading-none">{experience.duration}</p>
                </div>
                <ul className="flex flex-col gap-1">
                  {experience.bullets.map((item) => (
                    <li className="leading-relaxed" key={item}>
                      • {item}
                    </li>
                  ))}
                </ul>
                {/* <p className="leading-none">
                    <span className="font-bold">Tech Stack: </span>
                    {techStack}
                  </p> */}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-4 break-before-page">
        <h2 className="mb-6 text-2xl leading-none font-bold">Education</h2>
        <div className="flex flex-col gap-8">
          {EDUCATION.map((education) => (
            <article key={education.schoolName} className="flex gap-4">
              <Image
                src={education.logo}
                alt=""
                role="presentation"
                loading="lazy"
                className="h-12 w-12"
              />
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg leading-none font-bold">{education.title}</h3>
                  <p className="leading-none">
                    {education.schoolName}, {education.duration}
                  </p>
                </div>
                <ul className="flex flex-col gap-1">
                  {education.bullets.map((item) => (
                    <li className="leading-relaxed" key={item}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-4">
        <h2 className="mb-6 text-2xl leading-none font-bold">Contacts</h2>
        <div className="ml-6 flex flex-col gap-3">
          <p className="leading-none">
            <span className="font-bold">Email: </span>
            <a href="mailto:ilia.evseev@icloud.com">ilia.evseev@icloud.com</a>
          </p>
          <p className="leading-none">
            <span className="font-bold">Phone: </span>
            <a href="tel:+34696304732">+34696304732</a>
          </p>
          <p className="leading-none">
            <span className="font-bold">Location: </span>
            <span>Barcelona, Spain</span>
          </p>
          <p className="leading-none">
            <span className="font-bold">Languages: </span>
            <span>English (C1), Russian (Native)</span>
          </p>
          <p className="leading-none">
            <span className="font-bold">LinkedIn: </span>
            <a className="underline" href="https://www.linkedin.com/in/iamursky/">
              https://www.linkedin.com/in/iamursky/
            </a>
          </p>
          <p className="leading-none">
            <span className="font-bold">GitHub: </span>
            <a className="underline" href="https://github.com/iamursky">
              https://github.com/iamursky
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

const EXPERIENCE: TExperienceItem[] = [
  {
    logo: exanteSrc,
    position: "Senior Frontend Developer",
    companyName: "Exante",
    duration: "Feb 2023 – Mar 2025 · 2 years",
    location: "United Kingdom · Remote · Contract",
    bullets: [
      "Developed a KYC (Know Your Customer) module with complex question logic using React, Redux, and TypeScript, ensuring compliance with global regulatory standards.",
      "Contributed to the UI component library using Storybook, Material UI, React, and TypeScript.",
    ],
    techStack: "React, Redux, Material UI, TypeScript",
  },
  {
    logo: b6cloudSrc,
    position: "Founding Frontend Developer",
    companyName: "B6 Cloud",
    duration: "Feb 2020 – Jan 2023 · 3 years",
    location: "United States · Remote · Contract",
    bullets: [
      "Actively collaborated with the founder to refine the company's strategy",
      "Developed a rich-text editor using Tiptap, React, and TypeScript",
      "Implemented product UI using React, Ant Design, Zustand and TypeScript",
    ],
    techStack: "Next.js, Zustand, Ant Design, TypeScript",
  },
  {
    logo: stecpointSrc,
    position: "Senior Frontend Developer",
    companyName: "StecPoint",
    duration: "Mar 2017 – Feb 2020 · 3 years",
    location: "United Kingdom · Remote · Contract",
    bullets: [
      "Built a project management platform for a construction company using React and TypeScript",
      "Contributed to the UI component library using Storybook, Syncfusion, React, and TypeScript",
    ],
    techStack: "React, Redux, Syncfusion, TypeScript",
  },
  // {
  //   logo: ksf,
  //   position: "Freelance Web Developer",
  //   companyName: "Regional Agricultural Fund",
  //   duration: "Sep 2016 – Feb 2017 · 6 month",
  //   location: "Russia · On-Site · Contract",
  //   bullets: [
  //     "Secured a contract and led product development of a service for a regional agricultural fund",
  //     "Built the product UI using React, Redux, and TypeScript",
  //     "Built an Excel-like table for tracking household expenses using React and TypeScript",
  //   ],
  //   techStack: "TypeScript, React, Redux, Bootstrap",
  // },
  // {
  //   logo: html_academy,
  //   position: "React.js and JavaScript Mentor",
  //   companyName: "HMTL Academy",
  //   duration: "Jan 2014 – Mar 2017 · 3 years",
  //   location: "Russia · Remote · Contract",
  //   bullets: [
  //     "Secured a contract and led product development of a service for a regional agricultural fund",
  //     "Built the product UI using React, Redux, and TypeScript",
  //     "Built an Excel-like table for tracking household expenses using React and TypeScript",
  //   ],
  //   techStack: "React, Redux, Bootstrap, TypeScript",
  // },
];

const EDUCATION: TEducationItem[] = [
  {
    logo: pnuSrc,
    title: "BACs, Information Technology in Physics",
    schoolName: "Pacific National University",
    duration: "2013 – 2017 · 4 years",
    bullets: [
      "Created a game for a robotics festival in partnership with one of the largest mobile network operators in Russia.",
      "Co-founded a student community where mentored over 30 people in web development, helping them secure their first jobs.",
    ],
  },
];

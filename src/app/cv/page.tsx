import type { Metadata } from "next";

import Image from "next/image";

import photo from "./images/avatar.jpg";
import b6cloud from "./images/b6cloud.jpeg";
import exante from "./images/exante.jpeg";
import ksf from "./images/ksf.jpeg";
import pnu from "./images/pnu.jpeg";
import stecpoint from "./images/stecpoint.jpeg";

export const metadata: Metadata = {
  title: "Ilya Evseev — Senior Frontend Engineer",
  description:
    "Senior frontend engineer with over 12 years of experience in building complex web applications, team leading, project management, and collaboration with stakeholders, resulting in business growth and delivering solutions that meet global standards.",
};

export default function Page() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col p-6">
      <h1 className="text-3xl leading-none font-bold">Ilya Evseev — Senior Frontend Engineer</h1>

      <section className="mt-6 flex items-center gap-8">
        <Image
          priority
          src={photo}
          alt="Ilya Evseev's Photo"
          className="not-sr-only h-44 w-auto overflow-hidden rounded-xl"
        />
        <div className="flex flex-1 flex-col gap-3">
          <h2 className="sr-only">Contacts</h2>
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

      <section className="mt-6">
        <h2 className="mb-4 text-2xl leading-none font-bold">Summary</h2>
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
            <span>Next.js, Vite, Tailwind CSS</span>
          </p>
          <p className="leading-none">
            <span className="font-bold">Platforms: </span>
            <span>AWS, GCP, Firebase, Supabase</span>
          </p>
          <p className="leading-none">
            <span className="font-bold">Databases: </span>
            <span>PostgreSQL, Firestore, MongoDB</span>
          </p>
          <p className="leading-none">
            <span className="font-bold">Tools: </span>
            <span>Figma, Adobe XD, Photoshop, Illustrator</span>
          </p>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-6 text-2xl leading-none font-bold">Experience</h2>

        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <Image src={exante} alt="Exante Logo" loading="lazy" className="h-12 w-12" />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Senior JavaScript Engineer, Exante</h3>
              <p className="leading-none">United Kingdom · Remote · Contract</p>
              <p className="leading-none">Feb 2023 &ndash; Mar 2025 · 2 years</p>
              <p className="leading-relaxed">
                Developed a KYC (Know Your Client) module that is used by thousands of clients and
                allows the company to comply with global regulatory standards in over 100 countries.
              </p>
              <p className="leading-none">
                <span className="font-bold">Tech Stack: </span>TypeScript, React, Redux, Material UI
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Image src={b6cloud} alt="B6 Cloud Logo" loading="lazy" className="h-12 w-12" />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Founding Frontend Engineer, B6 Cloud</h3>
              <p className="leading-none">United States · Remote · Contract</p>
              <p className="leading-none">Feb 2020 &ndash; Jan 2023 · 3 years</p>
              <p className="leading-relaxed">
                Partnered with the founder to refine the company strategy while developing the
                frontend, resulting in partnership with Atlassian.
              </p>
              <p className="leading-none">
                <span className="font-bold">Tech Stack: </span>TypeScript, React, Next.js, Effector,
                Ant Design
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Image src={stecpoint} alt="StecPoint Logo" loading="lazy" className="h-12 w-12" />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Senior Frontend Engineer, StecPoint</h3>
              <p className="leading-none">United Kingdom · Remote · Contract</p>
              <p className="leading-none">Apr 2019 &ndash; Jan 2020 · 1 year</p>
              <p className="leading-relaxed">
                Built a project management platform for a national construction company that built
                historical buildings such as the State Kremlin Palace and the Cathedral of Christ
                the Saviour. The platform increased the efficiency of its construction sites by 30%.
              </p>
              <p className="leading-none">
                <span className="font-bold">Tech Stack: </span>TypeScript, React, Redux, Syncfusion
                UI
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Image
              src={ksf}
              alt="Regional Agricultural Fund Logo"
              loading="lazy"
              className="h-12 w-12"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">
                Software Project Lead, Regional Agricultural Fund
              </h3>
              <p className="leading-none">Russia · On-Site · Contract</p>
              <p className="leading-none">Dec 2018 &ndash; Mar 2019 · 1 year</p>
              <p className="leading-relaxed">
                Built a service for an agricultural fund that enabled farmers to receive over 100
                million rubles in investments for the development of their households.
              </p>
              <p className="leading-none">
                <span className="font-bold">Tech Stack: </span>TypeScript, React, Redux, Bootstrap
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="mb-6 text-2xl leading-none font-bold">Education</h2>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <Image
              src={pnu}
              alt="Pacific National University Logo"
              loading="lazy"
              className="h-12 w-12"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Pacific National University</h3>
              <p className="leading-none">BACs, Information Technology in Physics</p>
              <p className="leading-none">2013 &ndash; 2017 · 4 years</p>
              <p className="leading-relaxed">
                • Created a game for a robotics festival in partnership with one of the largest
                mobile network operators in Russia.
              </p>
              <p className="leading-relaxed">
                • Co-founded a student community where mentored over 30 people in web development,
                helping them secure their first jobs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

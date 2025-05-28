import type { StaticImageData } from "next/image";
import type { FC } from "react";

import Image from "next/image";

export type TExperienceItem = {
  logo: StaticImageData;
  position: string;
  companyName: string;
  duration: string;
  location: string;
  bullets: string[];
  techStack: string;
};

export const ExperienceItem: FC<TExperienceItem> = ({
  logo,
  position,
  companyName,
  duration,
  location,
  bullets,
  // techStack,
}) => (
  <article className="flex gap-4">
    <Image src={logo} alt="" role="presentation" loading="lazy" className="h-12 w-12" />
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg leading-none font-bold">
          {position}, {companyName}
        </h3>
        <p className="leading-none">{location}</p>
        <p className="leading-none">{duration}</p>
      </div>
      <ul className="flex flex-col gap-1">
        {bullets.map((item) => (
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
);

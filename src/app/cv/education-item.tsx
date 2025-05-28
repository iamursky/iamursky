import type { StaticImageData } from "next/image";
import type { FC } from "react";

import Image from "next/image";

export type TEducationItem = {
  logo: StaticImageData;
  title: string;
  schoolName: string;
  duration: string;
  bullets: string[];
};

export const EducationItem: FC<TEducationItem> = ({
  logo,
  title,
  schoolName,
  duration,
  bullets,
}) => (
  <article className="flex gap-4">
    <Image src={logo} alt="" role="presentation" loading="lazy" className="h-12 w-12" />
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg leading-none font-bold">{title}</h3>
        <p className="leading-none">
          {schoolName}, {duration}
        </p>
      </div>
      <ul className="flex flex-col gap-1">
        {bullets.map((item) => (
          <li className="leading-relaxed" key={item}>
            • {item}
          </li>
        ))}
      </ul>
    </div>
  </article>
);

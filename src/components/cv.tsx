"use client";

import type { FC } from "react";

import { Document, Font, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import dynamic from "next/dynamic";

// prettier-ignore
const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false }
);

Font.register({
  family: "Noto Serif",
  fonts: [
    {
      src: "/fonts/NotoSerif-Regular.ttf",
      fontWeight: "normal",
    },
    {
      src: "/fonts/NotoSerif-Bold.ttf",
      fontWeight: "bold",
    },
  ],
});

// Disable hyphenation
Font.registerHyphenationCallback((word) => [word]);

export const CV: FC = () => {
  return (
    <PDFViewer style={styles.viewer}>
      <Document title="Ilya Evseev • Senior Full-Stack Engineer" author="Ilya Evseev">
        <Page size="A4" style={styles.page}>
          <View style={styles.pageHeader}>
            <View style={styles.pageHeaderContent}>
              <Text style={styles.pageTitle}>Ilya Evseev • Senior Full-Stack Engineer</Text>
              <Text>
                Engineer with 10+ years of experience in building web applications, project
                management, and collaboration with stakeholders, resulting in business growth and
                delivering solutions that meet global standards.
              </Text>
            </View>
            <Image src="/images/avatar.jpg" style={styles.pageHeaderImage} />
          </View>

          <View style={styles.skillsAndContacts}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills</Text>
              <View style={styles.skills}>
                <View style={styles.skill}>
                  <Text style={styles.skillLabel}>Speak: </Text>
                  <Text>English (Adanced, C1), Russian (Native)</Text>
                </View>
                <View style={styles.skill}>
                  <Text style={styles.skillLabel}>Languages: </Text>
                  <Text>TypeScript, JavaScript, HTML, CSS</Text>
                </View>
                <View style={styles.skill}>
                  <Text style={styles.skillLabel}>Frameworks: </Text>
                  <Text>React, Next.js, Node.js</Text>
                </View>
                <View style={styles.skill}>
                  <Text style={styles.skillLabel}>Platforms: </Text>
                  <Text>AWS, GCP, Firebase, Supabase</Text>
                </View>
                <View style={styles.skill}>
                  <Text style={styles.skillLabel}>Databases: </Text>
                  <Text>PostgreSQL, MongoDB, Firestore</Text>
                </View>
                <View style={styles.skill}>
                  <Text style={styles.skillLabel}>Tools: </Text>
                  <Text>Figma, Photoshop, Illustrator</Text>
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Contacts</Text>
              <View style={styles.contacts}>
                <View style={styles.contact}>
                  <Text style={styles.contactLabel}>Email: </Text>
                  <Text>ilia.evseev@icloud.com</Text>
                </View>
                <View style={styles.contact}>
                  <Text style={styles.contactLabel}>LinkedIn: </Text>
                  <Text>linkedin.com/in/iamursky/</Text>
                </View>
                <View style={styles.contact}>
                  <Text style={styles.contactLabel}>GitHub: </Text>
                  <Text>github.com/iamursky</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <View style={styles.experiences}>
              {EXPERIENCE.slice(0, 2).map((item) => (
                <ExperienceItem key={item.title} {...item} />
              ))}
            </View>
          </View>
        </Page>

        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={styles.experiences}>
              {EXPERIENCE.slice(2).map((item) => (
                <ExperienceItem key={item.title} {...item} />
              ))}
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <View style={styles.experiences}>
              {EDUCATION.map((item) => (
                <View key={item.title} style={styles.experience}>
                  <Image src={item.logo} style={styles.experienceImage} />
                  <View style={styles.experienceContent}>
                    <Text style={styles.experienceTitle}>{item.title}</Text>
                    <Text style={styles.experienceSubtitle}>{item.subtitle}</Text>
                    <View style={styles.experienceBullets}>
                      {item.bullets.map((bullet, index) => (
                        <Text key={index} style={styles.experienceBullet}>
                          • {bullet}
                        </Text>
                      ))}
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

interface IExperienceItemProps {
  title: string;
  logo: string;
  location: string;
  duration: string;
  bullets: string[];
  techStack: string;
}

const ExperienceItem: FC<IExperienceItemProps> = ({
  title,
  logo,
  location,
  duration,
  bullets,
  techStack,
}) => (
  <View key={title} style={styles.experience}>
    <Image src={logo} style={styles.experienceImage} />
    <View style={styles.experienceContent}>
      <Text style={styles.experienceTitle}>{title}</Text>
      <Text style={styles.experienceSubtitle}>{location}</Text>
      <Text style={styles.experienceSubtitle}>{duration}</Text>
      <View style={styles.experienceBullets}>
        {bullets.map((bullet, index) => (
          <Text key={index} style={styles.experienceBullet}>
            • {bullet}
          </Text>
        ))}
      </View>
      <View style={styles.experienceTechStack}>
        <Text style={styles.experienceTechStackLabel}>Tech Stack: </Text>
        <Text>{techStack}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  viewer: {
    width: "100%",
    height: "100vh",
  },

  /* Page */

  page: {
    backgroundColor: "#fff",
    fontFamily: "Noto Serif",
    fontSize: 12,
    lineHeight: 1.5,
    padding: 24,
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },

  /* Page Header */

  pageHeader: {
    flexDirection: "row",
    gap: 24,
  },
  pageHeaderContent: {
    flex: 1,
  },
  pageHeaderImage: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },

  /* Section */

  section: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },

  /* Skills and Contacts */

  skillsAndContacts: {
    flexDirection: "row",
    gap: 48,
  },

  /* Skills */

  skills: {
    gap: 4,
  },
  skill: {
    flexDirection: "row",
    alignItems: "center",
  },
  skillLabel: {
    fontWeight: "bold",
  },

  /* Contacts */

  contacts: {
    gap: 4,
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactLabel: {
    fontWeight: "bold",
  },

  /* Experience */

  experiences: {
    marginTop: 8,
    gap: 32,
  },
  experience: {
    flexDirection: "row",
    gap: 12,
  },
  experienceImage: {
    width: 40,
    height: 40,
  },
  experienceContent: {
    flex: 1,
    paddingRight: 56,
  },
  experienceTitle: {
    fontWeight: "bold",
  },
  experienceSubtitle: {
    marginTop: 1,
  },
  experienceBullets: {
    marginTop: 4,
    gap: 4,
  },
  experienceBullet: {},
  experienceTechStack: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  experienceTechStackLabel: {
    marginTop: 2,
    fontWeight: "bold",
  },
});

const EXPERIENCE: Array<{
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
      "Partner closely with startup founders, stakeholders, and clients to translate business requirements into scalable architectures, owning delivery from prototypes to polished products",
      "Build applications following best practices, with a strong focus on user experience, performance, and long-term maintainability",
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
  //     "Guided 23 students in mastering complex web development concepts in JavaScript and React.js, helping them successfully pass their final exams and get their first jobs.",
  //   ],
  //   techStack: "React, JavaScript, HTML, CSS",
  // },
];

const EDUCATION: Array<{
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

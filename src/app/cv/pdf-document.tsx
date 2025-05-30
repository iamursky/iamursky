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

export const PDFDocument: FC = () => {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.pageHeader}>
            <View style={styles.pageHeaderContent}>
              <Text style={styles.pageTitle}>Ilya Evseev - Senior Frontend Developer</Text>
              <Text>
                Senior frontend engineer with over 12 years of experience in building complex web
                applications, team leading, project management, and collaboration with stakeholders,
                resulting in business growth and delivering solutions that meet global standards.
              </Text>
            </View>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image src="/images/avatar.jpg" style={styles.pageHeaderImage} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            <View style={styles.techicalSkills}>
              <View style={styles.techicalSkill}>
                <Text style={styles.techicalSkillLabel}>Languages: </Text>
                <Text>TypeScript, JavaScript, HTML, CSS</Text>
              </View>
              <View style={styles.techicalSkill}>
                <Text style={styles.techicalSkillLabel}>Frameworks: </Text>
                <Text>React, Next.js, Tailwind CSS</Text>
              </View>
              <View style={styles.techicalSkill}>
                <Text style={styles.techicalSkillLabel}>Databases: </Text>
                <Text>PostgreSQL, Firestore, MongoDB</Text>
              </View>
              <View style={styles.techicalSkill}>
                <Text style={styles.techicalSkillLabel}>Platforms: </Text>
                <Text>AWS, GCP, Supabase, Firebase</Text>
              </View>
              <View style={styles.techicalSkill}>
                <Text style={styles.techicalSkillLabel}>Tools: </Text>
                <Text>Figma, Photoshop, Illustrator</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <View style={styles.experiences}>
              {EXPERIENCE.map((item) => (
                <View key={item.title} style={styles.experience}>
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <Image src={item.logo} style={styles.experienceImage} />
                  <View style={styles.experienceContent}>
                    <Text style={styles.experienceTitle}>{item.title}</Text>
                    <Text style={styles.experienceSubtitle}>{item.location}</Text>
                    <Text style={styles.experienceSubtitle}>{item.duration}</Text>
                    <View style={styles.experienceBullets}>
                      {item.bullets.map((bullet, index) => (
                        <Text key={index} style={styles.experienceBullet}>
                          • {bullet}
                        </Text>
                      ))}
                    </View>
                    <View style={styles.experienceTechStack}>
                      <Text style={styles.experienceTechStackLabel}>Tech Stack: </Text>
                      <Text>{item.techStack}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </Page>

        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            <View style={styles.experiences}>
              {EDUCATION.map((item) => (
                <View key={item.title} style={styles.experience}>
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
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

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contacts</Text>
            <View style={styles.contacts}>
              <View style={styles.contact}>
                <Text style={styles.contactLabel}>Email: </Text>
                <Text>ilia.evseev@icloud.com</Text>
              </View>
              <View style={styles.contact}>
                <Text style={styles.contactLabel}>Phone: </Text>
                <Text>+34696304732</Text>
              </View>
              <View style={styles.contact}>
                <Text style={styles.contactLabel}>Location: </Text>
                <Text>Barcelona, Spain</Text>
              </View>
              <View style={styles.contact}>
                <Text style={styles.contactLabel}>LinkedIn: </Text>
                <Text>https://www.linkedin.com/in/iamursky/</Text>
              </View>
              <View style={styles.contact}>
                <Text style={styles.contactLabel}>GitHub: </Text>
                <Text>https://github.com/iamursky</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

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
    width: 102,
    height: 102,
    borderRadius: 4,
  },

  /* Section */

  section: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },

  /* Technical Skills */

  techicalSkills: {
    gap: 2,
  },
  techicalSkill: {
    flexDirection: "row",
    alignItems: "center",
  },
  techicalSkillLabel: {
    fontWeight: "bold",
  },

  /* Experience */

  experiences: {
    marginTop: 8,
    gap: 16,
  },
  experience: {
    flexDirection: "row",
    gap: 8,
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

  /* Contacts */

  contacts: {
    gap: 2,
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
  },
  contactLabel: {
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
    logo: "/images/exante.jpeg",
    title: "Senior Frontend Developer, Exante",
    duration: "Feb 2023 – Mar 2025 · 2 years",
    location: "United Kingdom · Remote · Contract",
    bullets: [
      "Developed a KYC module with complex dynamic question logic",
      "Contributed to the UI component library and product UI",
    ],
    techStack: "React.js, Redux, TypeScript, Material UI, Storybook",
  },
  {
    logo: "/images/b6cloud.jpeg",
    title: "Founding Frontend Developer, B6 Cloud",
    duration: "Feb 2020 – Jan 2023 · 3 years",
    location: "United States · Remote · Contract",
    bullets: [
      "Actively collaborated with the founder to refine the company's strategy",
      "Developed a Notion-like rich-text editor",
      "Implemented policy management features",
    ],
    techStack: "React.js, Zustand, TypeScript, Ant Design, Tiptap",
  },
  {
    logo: "/images/stecpoint.jpeg",
    title: "Senior Frontend Developer, StecPoint",
    duration: "Mar 2017 – Feb 2020 · 3 years",
    location: "United Kingdom · Remote · Contract",
    bullets: [
      "Built an ERP system for a large construction company",
      "Contributed to the UI component library and product UI",
    ],
    techStack: "React.js, Redux, TypeScript, Syncfusion, Storybook",
  },
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
    subtitle: "Pacific National University, 2013 – 2017 · 4 years",
    bullets: [
      "Created a video-game for a robotics festival in partnership with one of the largest mobile network operators in Russia.",
      "Co-founded a student community where mentored over 30 people in web development, helping them secure their first jobs.",
      "Built a self-driving car using Traxxas chassis, Arduino, and Raspberry Pi.",
    ],
  },
];

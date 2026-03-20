import type { FC } from "react";

import {
  Document,
  Font,
  Image,
  Link,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

Font.register({
  family: "Noto Serif",
  fonts: [
    { src: "/fonts/NotoSerif-Regular.ttf", fontWeight: "normal" },
    { src: "/fonts/NotoSerif-Bold.ttf", fontWeight: "bold" },
  ],
});

Font.registerHyphenationCallback((word) => [word]);

export const CV: FC = () => (
  <PDFViewer style={styles.viewer}>
    <Document title="Ilya Amursky - Senior Frontend Developer">
      <Page size="A4" style={styles.page}>
        <View style={styles.content}>
          <View style={styles.main}>
            <View style={styles.mainSection}>
              <View style={styles.headerTopRow}>
                <Image src="/images/avatar.jpeg" style={styles.headerAvatar} />
                <View>
                  <Text style={[styles.h1, styles.headerFullName]}>Ilya Amursky</Text>
                  <Text style={[styles.h3, styles.headerRole]}>Senior Frontend Developer</Text>
                </View>
              </View>
              <Text style={styles.bio}>
                Over 12 years of experience building complex, state-heavy applications using React
                and TypeScript. Delivered scalable, high-performance products used by thousands of
                users, improving operational efficiency, reducing processing time, and accelerating
                product delivery in regulated and enterprise environments.
              </Text>
            </View>
            <View style={styles.mainSection}>
              <Text style={[styles.h2, styles.mainSectionTitle]}>Experience</Text>
              <View style={styles.experiences}>
                {EXPERIENCE.map((item) => (
                  <View key={item.title} style={styles.experience}>
                    <Text style={[styles.h3, styles.experienceTitle]}>{item.title}</Text>
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
                      <Text style={styles.experienceTechStackValue}>{item.techStack}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.mainSection}>
              <Text style={[styles.h2, styles.mainSectionTitle]}>Education</Text>
              <View style={styles.educations}>
                {EDUCATION.map((item) => (
                  <View key={item.title} style={styles.education}>
                    <Text style={[styles.h3, styles.educationTitle]}>{item.title}</Text>
                    <Text style={styles.educationSubtitle}>{item.subtitle}</Text>
                    <View style={styles.educationBullets}>
                      {item.bullets.map((bullet, index) => (
                        <Text key={index} style={styles.educationBullet}>
                          • {bullet}
                        </Text>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.aside}>
            <View style={styles.asideSection}>
              <Text style={[styles.h2, styles.asideSectionTitle]}>Contacts</Text>
              <View style={styles.contacts}>
                <View style={styles.contact}>
                  <Text style={styles.contactLabel}>Location: </Text>
                  <Text style={styles.contactValue}>Barcelona, Spain</Text>
                </View>
                <View style={styles.contact}>
                  <Text style={styles.contactLabel}>Email: </Text>
                  <Text>
                    <Link src="mailto:ilya.amursky@icloud.com" style={styles.contactValue}>
                      ilya.amursky@icloud.com
                    </Link>
                  </Text>
                </View>
                <View style={styles.contact}>
                  <Text style={styles.contactLabel}>Phone: </Text>
                  <Text>
                    <Link src="tel:+34696304732" style={styles.contactValue}>
                      +34696304732
                    </Link>
                  </Text>
                </View>
                <View style={styles.contact}>
                  <Text style={styles.contactLabel}>LinkedIn: </Text>
                  <Text>
                    <Link src="https://linkedin.com/in/iamursky" style={styles.contactValue}>
                      linkedin.com/in/iamursky
                    </Link>
                  </Text>
                </View>
                <View style={styles.contact}>
                  <Text style={styles.contactLabel}>GitHub: </Text>
                  <Text>
                    <Link src="https://github.com/iamursky" style={styles.contactValue}>
                      github.com/iamursky
                    </Link>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.asideSection}>
              <Text style={[styles.h2, styles.asideSectionTitle]}>Skills</Text>
              <View style={styles.skills}>
                {SKILLS.map((skill) => (
                  <View key={skill.label} style={styles.skill}>
                    <Text style={styles.skillLabel}>{skill.label}: </Text>
                    <View style={styles.skillValues}>
                      {skill.values.map((value, index) => (
                        <Text key={index} style={styles.skillValue}>
                          {value}
                        </Text>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

const styles = StyleSheet.create({
  viewer: {
    width: "100%",
    height: "100vh",
  },

  // Typography

  h1: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 1,
  },
  h2: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 1,
  },
  h3: {
    fontSize: 12,
    fontWeight: "bold",
    lineHeight: 1,
  },

  page: {
    padding: 16,
    backgroundColor: "#fff",
    fontFamily: "Noto Serif",
    fontSize: 8.5,
    lineHeight: 1.5,
  },

  header: {},
  headerTopRow: {
    marginBottom: 4,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  headerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 2,
    marginRight: 8,
  },
  headerFullName: {
    marginBottom: 6,
  },
  headerRole: {
    marginBottom: 1,
  },

  headerBio: {},
  bio: {
    marginTop: 6,
    marginBottom: 5,
  },

  content: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
  },

  main: {
    width: "65%",
    gap: 8,
  },
  mainSection: {},
  mainSectionTitle: {
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    paddingBottom: 8,
    marginBottom: 8,
  },

  aside: {
    width: "35%",
    gap: 8,
  },
  asideSection: {},
  asideSectionTitle: {
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    paddingBottom: 8,
    marginBottom: 8,
  },

  // Experience

  experiences: {
    gap: 8,
  },
  experienceTitle: {
    marginBottom: 8,
  },
  experience: {},
  experienceSubtitle: {},
  experienceBullets: {
    marginVertical: 4,
    gap: 4,
  },
  experienceBullet: {},
  experienceTechStack: {
    flexDirection: "row",
  },
  experienceTechStackLabel: {
    fontWeight: "bold",
  },
  experienceTechStackValue: {},

  // Education

  educations: {},
  education: {},
  educationTitle: {
    marginBottom: 8,
  },
  educationSubtitle: {},
  educationBullets: {
    marginVertical: 4,
    gap: 4,
  },
  educationBullet: {},

  // Contacts

  contacts: {
    gap: 2,
  },
  contact: {
    display: "flex",
    flexDirection: "row",
  },
  contactLabel: {
    fontWeight: "bold",
  },
  contactValue: {
    textDecoration: "none",
    color: "inherit",
  },

  // Skills

  skills: {
    gap: 8,
  },
  skill: {
    gap: 4,
  },
  skillLabel: {
    fontWeight: "bold",
  },
  skillValues: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  skillValue: {
    padding: "2px 4px",
    borderRadius: 16,
    backgroundColor: "#eee",
  },
});

const SKILLS: {
  label: string;
  values: string[];
}[] = [
  {
    label: "Speak",
    values: ["English (Advanced, C1)", "Russian (Native)"],
  },
  {
    label: "Languages",
    values: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    label: "Frameworks",
    values: [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "Redux",
      "Tailwind",
      "Node.js",
      "Express.js",
      "NestJS",
    ],
  },
  {
    label: "Architectural Patterns",
    values: [
      "PWA (Progressive Web Apps)",
      "SPA (Single Page Applications)",
      "SSR (Server-Side Rendering)",
      "Micro-Frontends, Microservices",
    ],
  },
  {
    label: "UI/UX & Frontend Best Practices",
    values: [
      "Responsive Design",
      "Mobile-First Design",
      "User Interface Design",
      "Design Systems",
      "Cross-Browser Compatibility",
      "Web Vitals",
    ],
  },
  {
    label: "Analytics & Performance Optimization",
    values: [
      "Google Analytics",
      "Amplitude",
      "SEO",
      "A/B Testing",
      "Code Splitting",
      "Lazy Loading",
    ],
  },
  {
    label: "Backend & Databases",
    values: [
      "REST",
      "GraphQL",
      "Microservices",
      "Serverless",
      "SQL",
      "NoSQL",
      "PostgreSQL",
      "Amazon RDS",
      "DynamoDB",
      "Firestore",
    ],
  },
  {
    label: "Cloud Services & DevOps Practices",
    values: ["Firebase", "Supabase", "AWS (Amazon Web Services)", "GCP (Google Cloud Platform)"],
  },
  {
    label: "Tools & Testing Frameworks",
    values: [
      "Git",
      "Docker",
      "Vite",
      "Webpack",
      "Jest",
      "Playwright",
      "Unit Tests",
      "E2E Tests",
      "Integration Tests",
      "Code Review",
      "Storybook",
      "Figma",
      "Adobe XD",
    ],
  },
];

const EXPERIENCE: {
  title: string;
  duration: string;
  location: string;
  bullets: string[];
  techStack: string;
}[] = [
  {
    title: "Senior Frontend Developer, Exante",
    duration: "Feb 2023 - Mar 2025 · 2 years",
    location: "United Kingdom · Remote · B2B Contract",
    bullets: [
      "Migrated KYC module from Vue.js to React under strict regulatory constraints, reducing completion time from 20 minutes to 10 minutes (-50%), based on funnel analysis of user drop-off points",
      "Developed a visual flow constructor for compliance teams, reducing update cycles from 2-3 days to same-day execution (~50%), eliminating developer dependency",
      "Analyzed onboarding funnels and user behavior to improve conversion rates and reduce abandonment across 100+ daily onboarding sessions",
    ],
    techStack: "React, Redux, MUI (Material UI), Storybook",
  },
  {
    title: "Founding Full Stack Developer, B6 Cloud",
    duration: "Feb 2020 - Jan 2023 · 3 years",
    location: "United States · Remote · B2B Contract",
    bullets: [
      "Partnered with the founder to define product strategy and architecture, contributing to product launch used by 150+ teams",
      "Built a collaborative rich-text editor with AI assistance, versioning, and policy tools, reducing document creation and approval time from 2 hours to 30 minutes (4x faster)",
      "Introduced product analytics (feature usage, interaction tracking, etc.) to inform roadmap decisions and optimize core workflows",
      "Improved workflow visibility by replacing manual status tracking with integrated task-document linking, reducing coordination overhead by 40-60% across teams",
    ],
    techStack: "Next.js, TypeScript, Ant Design, Tiptap",
  },
  {
    title: "Senior Frontend Developer, StecPoint",
    duration: "Mar 2017 - Feb 2020 · 3 years",
    location: "United Kingdom · Remote · B2B Contract",
    bullets: [
      "Led frontend development for a project management system used across 10+ concurrent construction projects and teams, improving on-time delivery from 60% to 75% (+25%)",
      "Delivered a real-time dashboard used by project managers and stakeholders, reducing reporting time from 1-2 days to minutes, enabling near real-time decision-making",
      "Defined and implemented key operational metrics and dashboards for cross-functional stakeholders (engineering, operations, management)",
    ],
    techStack: "React, Redux, TypeScript, Syncfusion, Storybook",
  },
];

const EDUCATION: {
  title: string;
  subtitle: string;
  bullets: string[];
}[] = [
  {
    title: "BACs, Information Technology in Physics",
    subtitle: "Russia, Pacific National University, 2013 - 2017 · 4 years",
    bullets: [
      "Co-founded a student community, mentoring 30+ people in web development, helping them secure their first roles",
      "Developed a mobile game in partnership with a major Russian mobile network carrier",
    ],
  },
];

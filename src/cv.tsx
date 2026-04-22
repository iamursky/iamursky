import type { FC } from "react";

import { Document, Font, Link, Page, PDFViewer, StyleSheet, Text, View } from "@react-pdf/renderer";

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
    <Document title="Ilia Evseev - Senior Frontend Developer">
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.h1}>Ilia Evseev</Text>
          <Text style={styles.h3}>Senior Frontend Developer</Text>
          <Text style={styles.bio}>
            Senior frontend engineer, 12 years with React and TypeScript. Rebuilt a KYC flow that
            cut user completion time from 20 to 10 minutes, shipped compliance tooling,
            collaborative editors, and enterprise dashboards. Focused on state-heavy UIs under
            deadlines, regulatory constraints, and legacy code.
          </Text>
        </View>
        <View>
          <Text style={[styles.h2, styles.mainSectionTitle]}>Experience</Text>
          <View style={styles.experiences}>
            {EXPERIENCE.map((item) => (
              <View key={item.title}>
                <Text style={styles.h3}>{item.title}</Text>
                <Text>{item.duration}</Text>
                <Text>{item.location}</Text>
                <View style={styles.experienceBullets}>
                  {item.bullets.map((bullet, index) => (
                    <Text key={index}>• {bullet}</Text>
                  ))}
                </View>
                <View style={styles.experienceTechStack}>
                  <Text style={styles.experienceTechStackLabel}>Tech Stack: </Text>
                  <Text>{item.techStack}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={[styles.h2, styles.mainSectionTitle]}>Education</Text>
          <View style={styles.educations}>
            {EDUCATION.map((item) => (
              <View key={item.title}>
                <Text style={styles.h3}>{item.title}</Text>
                <Text>{item.subtitle}</Text>
                <View style={styles.educationBullets}>
                  {item.bullets.map((bullet, index) => (
                    <Text key={index}>• {bullet}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
        <View>
          <Text style={[styles.h2, styles.mainSectionTitle]}>Skills</Text>
          <View style={styles.skills}>
            {SKILLS.map((skill) => (
              <View key={skill.label}>
                <Text style={styles.skillLabel}>{skill.label}: </Text>
                <Text>{skill.values.join(", ")}</Text>
              </View>
            ))}
          </View>
        </View>
        <View>
          <Text style={[styles.h2, styles.mainSectionTitle]}>Contacts</Text>
          <View style={styles.contacts}>
            <View style={styles.contact}>
              <Text style={styles.contactLabel}>LinkedIn: </Text>
              <Text>
                <Link src="https://linkedin.com/in/ievseev" style={styles.contactValue}>
                  linkedin.com/in/ievseev
                </Link>
              </Text>
            </View>
            <View style={styles.contact}>
              <Text style={styles.contactLabel}>Email: </Text>
              <Text>
                <Link src="mailto:ilia.evseev@icloud.com" style={styles.contactValue}>
                  ilia.evseev@icloud.com
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
              <Text style={styles.contactLabel}>Location: </Text>
              <Text style={styles.contactValue}>Barcelona, Spain</Text>
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

  page: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: "#fff",
    fontFamily: "Noto Serif",
    fontSize: 10.5,
    lineHeight: 1.5,
    color: "#000",
    gap: 16,
  },

  h1: {
    fontSize: 24.87,
    fontWeight: "bold",
    lineHeight: 1,
    marginBottom: 12,
  },

  h2: {
    fontSize: 18.66,
    fontWeight: "bold",
    lineHeight: 1,
    marginBottom: 12,
  },

  h3: {
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 1,
    marginBottom: 6,
  },

  bio: {
    marginTop: 4,
  },

  mainSectionTitle: {
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  // Experience

  experiences: {
    gap: 16,
  },
  experienceBullets: {
    marginTop: 8,
    gap: 4,
  },
  experienceTechStack: {
    marginTop: 8,
    flexDirection: "row",
  },
  experienceTechStackLabel: {
    fontWeight: "bold",
  },

  // Education

  educations: {
    gap: 8,
  },
  educationBullets: {
    marginVertical: 4,
    gap: 4,
  },

  // Skills

  skills: {
    gap: 8,
  },
  skillLabel: {
    fontWeight: "bold",
  },

  // Contacts

  contacts: {
    gap: 4,
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
});

const SKILLS: {
  label: string;
  values: string[];
}[] = [
  {
    label: "Speak",
    values: ["English (Advanced)"],
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
    duration: "Feb 2023 - Present · 3 years",
    location: "Cyprus · Remote",
    bullets: [
      "Migrated KYC module from Vue.js to React under regulatory constraints; analyzed funnel drop-offs and cut user completion time from 20 to 10 minutes",
      "Built a visual flow constructor that lets compliance teams update KYC logic in hours instead of 2-3 days, removing the developer bottleneck",
      "Ran funnel analysis across 100 daily onboarding sessions; findings drove UI changes that cut drop-off at the document upload step by 25%",
    ],
    techStack: "React, Redux, TypeScript, MUI (Material UI), Storybook",
  },
  {
    title: "Senior Frontend Developer, B6 Cloud",
    duration: "Feb 2020 - Jan 2023 · 3 years",
    location: "United States · Remote",
    bullets: [
      "Partnered with the founder on product strategy and architecture; shipped the first release, now used by 150 teams",
      "Built a collaborative rich-text editor with AI assistance, versioning, and policy tools; cut document creation and approval from 2 hours to 30 minutes",
      "Introduced feature-usage and interaction tracking; used the data to prioritize the roadmap and simplify core workflows",
      "Replaced manual status tracking with task-document linking, cutting cross-team coordination overhead by 50%",
    ],
    techStack: "React, Next.js, Node.js, TypeScript, Firebase, Ant Design, Storybook",
  },
  {
    title: "Middle Frontend Developer, StecPoint",
    duration: "Mar 2017 - Feb 2020 · 3 years",
    location: "United Kingdom · Remote",
    bullets: [
      "Led frontend development for a project management system running 10 concurrent construction projects; on-time delivery rose from 60% to 75%",
      "Shipped a real-time dashboard for project managers and stakeholders, cutting reporting time from 1-2 days to minutes",
      "Defined operational metrics and built dashboards for engineering, operations, and management teams",
    ],
    techStack: "React, Redux, TypeScript, Python, Syncfusion",
  },
];

const EDUCATION: {
  title: string;
  subtitle: string;
  bullets: string[];
}[] = [
  {
    title: "BACs, Information Technology in Physics",
    subtitle: "Pacific National University, 2013 - 2017 · 4 years",
    bullets: [
      "Co-founded a student community; mentored 30 people in web development, most of whom landed their first developer roles",
      "Developed a mobile game in partnership with MTS, one of the largest mobile network carriers in Russia",
    ],
  },
];

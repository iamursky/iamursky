import type { FC, ReactNode } from "react";

import { Document, Font, Link, Page, PDFViewer, StyleSheet, Text, View } from "@react-pdf/renderer";

Font.registerHyphenationCallback((word) => [word]);

export const CV: FC = () => (
  <PDFViewer style={styles.viewer}>
    <Document title="Ilia Evseev - Senior Full-Stack Engineer">
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.h1}>Ilia Evseev</Text>
          <Text style={styles.h3}>Senior Full-Stack Engineer</Text>
          <Text style={styles.bio}>
            Senior full-stack engineer, 12+ years with React, React Native, Node.js and TypeScript.
            Shipped KYC, compliance tooling, collaborative editors, and enterprise dashboards for
            products used by thousands of users. Focused on state-heavy UI development under real
            constraints: deadlines, compliance, or legacy code.
          </Text>
        </View>
        <View>
          <Text style={[styles.h2, styles.mainSectionTitle]}>Experience</Text>
          <View style={styles.experiences}>
            {EXPERIENCE.slice(0, 2).map((item) => (
              <View key={item.title}>
                <Text style={styles.h3}>{item.title}</Text>
                <View style={{ gap: 0, marginBottom: 8 }}>
                  <Text style={{ color: "#666", fontSize: 10.5 }}>{item.location}</Text>
                  <Text style={{ color: "#666", fontSize: 10.5 }}>{item.duration}</Text>
                </View>
                <View>{item.description}</View>
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
        <View style={styles.experiences}>
          {EXPERIENCE.slice(2).map((item) => (
            <View key={item.title}>
              <Text style={styles.h3}>{item.title}</Text>
              <View style={{ gap: 0, marginBottom: 8 }}>
                <Text style={{ color: "#666", fontSize: 10.5 }}>{item.location}</Text>
                <Text style={{ color: "#666", fontSize: 10.5 }}>{item.duration}</Text>
              </View>
              <View>{item.description}</View>
              <View style={styles.experienceTechStack}>
                <Text style={styles.experienceTechStackLabel}>Tech Stack: </Text>
                <Text>{item.techStack}</Text>
              </View>
            </View>
          ))}
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
    fontFamily: "Times-Roman",
    fontSize: 13,
    lineHeight: 1.3,
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
  experienceDescription: {
    marginTop: 4,
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
    label: "Spoken Languages",
    values: ["English (Advanced)", "Spanish (Elementary)", "Russian (Native)"],
  },
  {
    label: "Programming Languages",
    values: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    label: "Frameworks",
    values: [
      "React",
      "React Native",
      "Next.js",
      "Expo",
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
      "Serverless",
      "SQL",
      "NoSQL",
      "PostgreSQL",
      "Amazon RDS",
      "DynamoDB",
      "Firestore",
      "OpenAI API",
      "Anthropic Claude API",
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
      "Storybook",
      "Figma",
      "Adobe XD",
    ],
  },
];

const BulletPoints: FC<{ title?: string; items: string[] }> = ({ title, items }) => (
  <View style={{ gap: 4 }}>
    {title && <Text style={{ fontWeight: "bold" }}>{title}:</Text>}
    <View style={{ gap: 4 }}>
      {items.map((item, index) => (
        <Text key={index}>• {item}</Text>
      ))}
    </View>
  </View>
);

const EXPERIENCE: {
  title: string;
  duration: string;
  location: string;
  description: ReactNode;
  techStack: string;
}[] = [
  {
    title: "Senior Full-Stack Engineer",
    location: "Self-employed · Spain · Remote",
    duration: "Feb 2025 - Present · 1 year",
    description: (
      <View style={{ gap: 8 }}>
        <Text>I build full-stack web and mobile apps for early-stage startups.</Text>

        <BulletPoints
          title="Three kinds of work"
          items={[
            "MVPs with hard deadlines. Working software in 2 weeks, full launch in 6 to 10.",
            "Rescue jobs. Codebases inherited from a previous developer who left mid-build.",
            "AI features with real product logic, not thin OpenAI wrappers.",
          ]}
        />

        <View style={{ gap: 4 }}>
          <Text style={{ fontWeight: "bold" }}>Recent work:</Text>
          <View style={{ gap: 4 }}>
            <Text>
              • Mileva — government-facing platform for licensed building managers in Serbia. Two
              React Native apps live on the Google Play and App Store:{" "}
              <Link
                style={{ color: "inherit" }}
                src="https://apps.apple.com/es/app/mileva-stanari/id6755151380?l=en-GB"
              >
                Mileva: Stanari
              </Link>{" "}
              and{" "}
              <Link
                style={{ color: "inherit" }}
                src="https://apps.apple.com/es/app/upravljaj-upravnikom/id6748305732?l=en-GB"
              >
                Upravljaj Upravnikom
              </Link>
              .
            </Text>
            <Text>
              •{" "}
              <Link style={{ color: "inherit" }} src="https://www.gptgirlfriend.online">
                GirlfriendGPT
              </Link>{" "}
              — consumer AI app. Built on Next.js, Node, and custom AI models running on RunPod.
              Scaled to thousands of daily users with conversation memory, prompt logic, and content
              moderation.
            </Text>
          </View>
        </View>

        <Text>
          How I work: fixed-price milestones, not hourly. I read the brief before the call, ask the
          questions that matter, and ship every two weeks. Most engagements run 1 to 3 months.
        </Text>
      </View>
    ),
    techStack: "React, React Native, Next.js, TypeScript, Node.js, Supabase, Firebase, AWS, GCP",
  },
  {
    title: "Senior Frontend Engineer",
    location: "Exante · Cyprus · Remote",
    duration: "Feb 2023 - Feb 2025 · 2 years",
    description: (
      <View>
        <BulletPoints
          items={[
            "Redesigned and rebuilt the KYC module under strict regulatory deadlines, migrating from Vue to React and reducing average completion time by 30%.",
            "Delivered a configurable KYC flow with a visual constructor that lets the compliance team update rules, steps, and validations without engineering. Change cycle dropped from weeks to hours.",
            "Worked under audit-grade release discipline at a UK-regulated brokerage. MiFID II and Market Abuse certified through the role.",
          ]}
        />
      </View>
    ),
    techStack: "React, Redux, TypeScript, MUI (Material UI), Storybook",
  },
  {
    title: "Founding Full-Stack Engineer",
    location: "B6 Cloud · United States · Remote",
    duration: "Feb 2020 - Jan 2023 · 3 years",
    description: (
      <View>
        <BulletPoints
          items={[
            "Joined as a founding engineer. Shipped the product from prototype through acquisition by Atlassian in 2023.",
            "Built a rich-text editor with real-time collaboration, version history, and policy-management workflows. Customers reviewed and approved documents 2x faster.",
            "Built a spreadsheet editor that helped project-management customers migrate off legacy tools and modernize their workflows.",
            "Implemented a Kanban board with bidirectional linking between tasks and documents, making status updates instant and transparent.",
            "Shipped AI features into the editor: structured tagging, summarization, and natural-language commands grounded on customer content.",
            "Worked closely with the founder on product strategy and key engineering decisions.",
          ]}
        />
      </View>
    ),
    techStack: "React, Next.js, Node.js, TypeScript, Firebase, Ant Design, Storybook",
  },
  {
    title: "Middle Frontend Engineer",
    location: "StecPoint · United Kingdom · Remote",
    duration: "Mar 2017 - Feb 2020 · 3 years",
    description: (
      <View>
        <BulletPoints
          items={[
            "Owned frontend development of a project management system used by a large construction company on multi-million-dollar projects. On-time delivery improved by 25%.",
            "Built a real-time dashboard that cut reporting time from days to minutes, enabling near-instant feedback loops.",
            "Led the migration of the legacy frontend to React and Redux, establishing the patterns the team uses today.",
          ]}
        />
      </View>
    ),
    techStack: "React, Redux, TypeScript, Python, Syncfusion",
  },
  {
    title: "Full-Stack Engineer",
    location: "Regional Agricultural Fund · Russia · On-Site",
    duration: "Sep 2016 - Feb 2017 · 6 mos",
    description: (
      <View>
        <BulletPoints
          items={[
            "Won a regional contest by pitching an investment platform concept. Signed the contract and shipped the platform in 2 months.",
            "Owned end-to-end delivery: design, frontend, backend, and stakeholder communication. Led a small cross-functional team.",
            "Platform enabled the fund to disburse 100M+ RUB to farmers in funding and investments.",
          ]}
        />
      </View>
    ),
    techStack: "React, Redux, TypeScript",
  },
];

const EDUCATION: {
  title: string;
  subtitle: string;
  bullets: string[];
}[] = [
  {
    title: "BASc, Information Technology",
    subtitle: "Pacific National University, 2013 - 2018 · 5 years",
    bullets: [
      "Co-founded a student community; mentored 30 people in web development, most of whom landed their first developer roles",
      "Developed a mobile game in partnership with MTS, one of the largest mobile network carriers in Russia",
    ],
  },
];

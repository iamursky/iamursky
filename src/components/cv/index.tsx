"use client";

import type { FC } from "react";

import { Document, Font, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import dynamic from "next/dynamic";

import { CONTACTS, EDUCATION, EXPERIENCE, HEADER, SKILLS } from "./data";

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
      <Document title={HEADER.title} author="Ilya Evseev">
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Text style={styles.headerTitle}>{HEADER.title}</Text>
              <Text style={styles.headerDescription}>{HEADER.description}</Text>
            </View>
            <Image src={HEADER.image} style={styles.headerImage} />
          </View>

          <View style={styles.skillsAndContacts}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills</Text>
              <View style={styles.skills}>
                {SKILLS.map((skill) => (
                  <View key={skill.label} style={styles.skill}>
                    <Text style={styles.skillLabel}>{skill.label}: </Text>
                    <Text style={styles.skillValue}>{skill.value}</Text>
                  </View>
                ))}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Contacts</Text>
              <View style={styles.contacts}>
                {CONTACTS.map((contact) => (
                  <View key={contact.label} style={styles.contact}>
                    <Text style={styles.contactLabel}>{contact.label}: </Text>
                    <Text style={styles.contactValue}>{contact.value}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <View style={styles.experiences}>
              {EXPERIENCE.slice(0, 2).map((item) => (
                <View key={item.title} style={styles.experience}>
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
                      <Text style={styles.experienceTechStackValue}>{item.techStack}</Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </Page>

        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={styles.experiences}>
              {EXPERIENCE.slice(2).map((item) => (
                <View key={item.title} style={styles.experience}>
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
                      <Text style={styles.experienceTechStackValue}>{item.techStack}</Text>
                    </View>
                  </View>
                </View>
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
    padding: 32,
  },
  header: {
    marginBottom: 24,
    flexDirection: "row",
    gap: 24,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.3,
    marginBottom: 16,
  },
  headerDescription: {
    fontSize: 12,
    lineHeight: 1.55,
  },
  headerImage: {
    width: 128,
    height: 128,
    borderRadius: 4,
  },

  /* Section */

  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.3,
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
  skillValue: {},

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
  contactValue: {},

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
  experienceTechStackValue: {},
});

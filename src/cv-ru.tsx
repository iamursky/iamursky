import type { FC, ReactNode } from "react";

import { Document, Font, Link, Page, PDFViewer, StyleSheet, Text, View } from "@react-pdf/renderer";

Font.register({
  family: "Times",
  src: "/times.ttf",
});

Font.registerHyphenationCallback((word) => [word]);

export const CV: FC = () => (
  <PDFViewer style={styles.viewer}>
    <Document title="Илья Евсеев — Senior Full-Stack Engineer">
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.h1}>Илья Евсеев</Text>
          <Text style={styles.h3}>Senior Full-Stack Engineer</Text>
          <Text style={styles.bio}>
            12 лет с React, React Native, Node.js и TypeScript. За плечами — KYC, инструменты для
            compliance-команд, документы с одновременным редактированием в реальном времени и
            корпоративные дашборды; этими продуктами пользуются тысячи людей. Сильнее всего там, где
            интерфейс насыщен состоянием и приходится работать под давлением: дедлайны,
            регуляторика, унаследованный код.
          </Text>
        </View>
        <View>
          <Text style={[styles.h2, styles.mainSectionTitle]}>Опыт</Text>
          <View style={styles.experiences}>
            {EXPERIENCE.slice(0, 2).map((item) => (
              <View key={item.title}>
                <Text style={styles.h3}>{item.title}</Text>
                <View style={{ gap: 0, marginBottom: 8 }}>
                  <Text style={styles.subtitle}>{item.location}</Text>
                  <Text style={styles.subtitle}>{item.duration}</Text>
                </View>
                <View>{item.description}</View>
                <View style={styles.experienceTechStack}>
                  <Text style={styles.experienceTechStackLabel}>Стек: </Text>
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
                <Text style={styles.subtitle}>{item.location}</Text>
                <Text style={styles.subtitle}>{item.duration}</Text>
              </View>
              <View>{item.description}</View>
              <View style={styles.experienceTechStack}>
                <Text style={styles.experienceTechStackLabel}>Стек: </Text>
                <Text>{item.techStack}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={[styles.h2, styles.mainSectionTitle]}>Образование</Text>
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
          <Text style={[styles.h2, styles.mainSectionTitle]}>Навыки</Text>
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
          <Text style={[styles.h2, styles.mainSectionTitle]}>Контакты</Text>
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
              <Text style={styles.contactLabel}>Телефон: </Text>
              <Text>
                <Link src="tel:+34696304732" style={styles.contactValue}>
                  +34696304732
                </Link>
              </Text>
            </View>
            <View style={styles.contact}>
              <Text style={styles.contactLabel}>Локация: </Text>
              <Text style={styles.contactValue}>Барселона, Испания</Text>
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
    fontFamily: "Times",
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

  subtitle: {
    fontSize: 11,
    lineHeight: 1.35,
    color: "#666",
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
    label: "Языки",
    values: ["английский (Advanced)", "испанский (Elementary)", "русский (родной)"],
  },
  {
    label: "Языки программирования",
    values: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    label: "Фреймворки",
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
    label: "Архитектурные паттерны",
    values: [
      "PWA (Progressive Web Apps)",
      "SPA (Single Page Applications)",
      "SSR (Server-Side Rendering)",
      "микрофронтенды, микросервисы",
    ],
  },
  {
    label: "UI/UX и фронтенд",
    values: [
      "адаптивная вёрстка",
      "mobile-first",
      "дизайн-системы",
      "кросс-браузерность",
      "Web Vitals",
    ],
  },
  {
    label: "Аналитика и оптимизация",
    values: ["Google Analytics", "Amplitude", "SEO", "A/B-тесты", "code splitting", "lazy loading"],
  },
  {
    label: "Бэкенд и базы данных",
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
    label: "Облако и DevOps",
    values: ["Firebase", "Supabase", "AWS (Amazon Web Services)", "GCP (Google Cloud Platform)"],
  },
  {
    label: "Инструменты и тестирование",
    values: [
      "Git",
      "Docker",
      "Vite",
      "Webpack",
      "Jest",
      "Playwright",
      "юнит-тесты",
      "E2E-тесты",
      "интеграционные тесты",
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
    location: "Самозанятый · Испания · удалённо",
    duration: "Февраль 2025 — настоящее время · 1 год",
    description: (
      <View style={{ gap: 8 }}>
        <Text>Делаю веб- и мобильные приложения для стартапов на ранних стадиях.</Text>

        <BulletPoints
          title="Беру три типа задач"
          items={[
            "MVP, когда горят сроки. Работающая версия за 2 недели, полноценный запуск — за 6–10.",
            "Спасаю проекты, доставшиеся от прежнего разработчика, который сошёл с дистанции.",
            "Делаю AI-фичи с настоящей продуктовой логикой, а не очередную обёртку над OpenAI.",
          ]}
        />

        <View style={{ gap: 4 }}>
          <Text style={{ fontWeight: "bold" }}>Из недавнего:</Text>
          <View style={{ gap: 4 }}>
            <Text>
              • Mileva — сербская платформа для лицензированных управляющих многоквартирными домами,
              интегрирована с государственными сервисами. Два React Native приложения в Google Play
              и App Store:{" "}
              <Link
                style={{ color: "inherit" }}
                src="https://apps.apple.com/es/app/mileva-stanari/id6755151380?l=en-GB"
              >
                Mileva: Stanari
              </Link>{" "}
              и{" "}
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
              — B2C AI-сервис на Next.js, Node и собственных AI-моделях, развёрнутых на RunPod.
              Вырос до тысяч активных пользователей в день: память диалогов, логика промптов,
              модерация контента.
            </Text>
          </View>
        </View>
      </View>
    ),
    techStack: "React, React Native, Next.js, TypeScript, Node.js, Supabase, Firebase, AWS, GCP",
  },
  {
    title: "Senior Frontend Engineer",
    location: "Exante · Кипр · удалённо",
    duration: "Февраль 2023 — Февраль 2025 · 2 года",
    description: (
      <View>
        <BulletPoints
          items={[
            "Переделал KYC-модуль с нуля под жёсткие регуляторные дедлайны: перевёл с Vue на React, среднее время прохождения проверки сократилось на 30%.",
            "Сделал настраиваемый процесс KYC с визуальным конструктором — compliance-команда обновляет правила, шаги и валидации сама, без разработчиков. Цикл изменений сжался с недель до часов.",
            "Работал в брокере под регуляцией FCA, релизы с аудиторской дисциплиной. По ходу работы получил сертификации MiFID II и Market Abuse.",
          ]}
        />
      </View>
    ),
    techStack: "React, Redux, TypeScript, MUI (Material UI), Storybook",
  },
  {
    title: "Founding Full-Stack Engineer",
    location: "B6 Cloud · США · удалённо",
    duration: "Февраль 2020 — Январь 2023 · 3 года",
    description: (
      <View>
        <BulletPoints
          items={[
            "Пришёл первым инженером, провёл продукт от прототипа до покупки Atlassian в 2023 году.",
            "Сделал rich-text редактор с одновременным редактированием в реальном времени, историей версий и согласованием политик. Клиенты стали согласовывать документы в 2 раза быстрее.",
            "Сделал табличный редактор, благодаря которому клиенты ушли с устаревших инструментов проджект-менеджмента.",
            "Реализовал Kanban-доску с двусторонней связью между задачами и документами — статусы обновляются мгновенно и видны всем.",
            "Встроил в редактор AI: автоматическую разметку тегами, краткое содержание и команды на естественном языке, опирающиеся на содержимое документа пользователя.",
            "Вместе с основателем формировал продуктовую стратегию и принимал ключевые инженерные решения.",
          ]}
        />
      </View>
    ),
    techStack: "React, Next.js, Node.js, TypeScript, Firebase, Ant Design, Storybook",
  },
  {
    title: "Middle Frontend Engineer",
    location: "StecPoint · Великобритания · удалённо",
    duration: "Март 2017 — Февраль 2020 · 3 года",
    description: (
      <View>
        <BulletPoints
          items={[
            "Отвечал за фронтенд системы управления проектами для крупного строительного подрядчика — на ней велись стройки на десятки миллионов долларов. Доля проектов, сданных в срок, выросла на 25%.",
            "Сделал дашборд реального времени: отчётность сократилась с дней до минут, обратная связь — почти мгновенная.",
            "Возглавил перевод легаси-фронтенда на React и Redux. Заложенные тогда архитектурные паттерны команда использует до сих пор.",
          ]}
        />
      </View>
    ),
    techStack: "React, Redux, TypeScript, Python, Syncfusion",
  },
  {
    title: "Full-Stack Engineer",
    location: "Региональный аграрный фонд · Россия · в офисе",
    duration: "Сентябрь 2016 — Февраль 2017 · 6 месяцев",
    description: (
      <View>
        <BulletPoints
          items={[
            "Выиграл региональный конкурс, презентовав концепцию инвестиционной платформы. Подписал контракт и запустил продукт за 2 месяца.",
            "Отвечал за весь проект: дизайн, фронтенд, бэкенд, переговоры со стейкхолдерами. Руководил небольшой кросс-функциональной командой.",
            "Через платформу фонд распределил между фермерами свыше 100 млн рублей в виде финансирования и инвестиций.",
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
    title: "Бакалавр, Информационные технологии",
    subtitle: "Тихоокеанский государственный университет, 2013 — 2018 · 5 лет",
    bullets: [
      "Сооснователь студенческого сообщества; менторил 30 человек по веб-разработке — большинство устроились на свою первую работу разработчиками.",
      "Разработал мобильную игру в партнёрстве с МТС.",
    ],
  },
];

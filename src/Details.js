// Details

// Profile Image
import profile from "./assets/profile.jpg";
// Skills images
import python from "./assets/svg/skills/python.svg";
import javascript from "./assets/svg/skills/javascript.svg";
import django from "./assets/svg/skills/django.svg";
import nodejs from "./assets/svg/skills/nodejs.svg";
import flutter from "./assets/svg/skills/flutter.svg";
import dart from "./assets/svg/skills/dart.svg";
import firebase from "./assets/svg/skills/firebase.svg";
import aws from "./assets/svg/skills/aws.svg";
import azure from "./assets/svg/skills/azure.svg";
import git from "./assets/svg/skills/git.svg";
import react from "./assets/svg/skills/react.svg";
import kotlin from "./assets/svg/skills/kotlin.svg";
import postgresql from "./assets/svg/skills/postgresql.svg";
import mongoDB from "./assets/svg/skills/mongoDB.svg";
import tailwind from "./assets/svg/skills/tailwind.svg";
import html from "./assets/svg/skills/html.svg";
import css from "./assets/svg/skills/css.svg";

// Project Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";



// Enter your Personal Details here
export const personalDetails = {
  name: "Eyitayo",
  tagline: "I am a Backend and Mobile Engineer",
  img: profile,
  about: `I am a Backend and Mobile Developer interested in building scalable systems and seamless mobile experiences. Proficient in Python, Node.js and Flutter. Additionally, I am well versed in React.js, C++, Swift and Kotlin. I have experience with building APIs, managing databases and ensuring perfomance optimisation.`,
  about2: `Passionate about Machine Learning and AI, I am currently working on building projects using machine learning algorithms and learning how to address real-world issues with data-driven approaches. `,
  about3: `I am always eager and willing to learn about new and emerging technologies, and apply my knowledge!    `,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/eyitayo-ayodeji ",
  github: "https://github.com/Tae5567",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Web Developer",
    Company: `Future Software Resources`,
    Location: "Lagos, Nigeria (Remote)",
    Type: "Full Time",
    Duration: "Nov 2023 - Oct 2024",
  },
  {
    Position: "Fellow / Software Engineering Intern",
    Company: `Code2040`,
    Location: "San Francisco, CA, USA",
    Type: "Fellowship",
    Duration: "Sep 2021 - August 2022",
  },
  {
    Position: "Software Engineer Intern",
    Company: `Snapnet Nigeria Limited`,
    Location: "Lekki, Lagos, Nigeria",
    Type: "Internship",
    Duration: "June 2019 - Aug 2019",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of Science in Computer Science",
    Company: `University of Maryland Baltimore County`,
    Location: "Baltimore, MD, USA",
    Type: "Full Time",
    Duration: "Aug 2019 - May 2023",
  },
];

// Tech Stack and Tools
export const skillDetails = {
  python: python,
  javascript:javascript,
  django: django,
  nodejs: nodejs,
  flutter: flutter,
  dart: dart,
  react: react,
  firebase: firebase,
  kotlin: kotlin,
  aws: aws,
  azure: azure,
  postgresql: postgresql,
  mongoDB: mongoDB,
  git: git,
  html: html,
  css: css,
  tailwind: tailwind,

};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "SpeechScribe",
    image: projectImage1,
    description: `This is a mobile app that converts speech to text, designed for easy note-taking and productivity using Flutter for cross-platform functionality and Django for backend support.`,
    techstack: "PyTorch, Flutter, Django",
    previewLink: "#",
    githubLink: "https://github.com/Tae5567/SpeechScribe-Speech-Recognition",
  },
  {
    title: "ImpactMeter",
    image: projectImage2,
    description: `This is a web app forecasting the environmental impact of lifestyle choices, providing users with actionable suggestions for reducing carbon footprints.`,
    techstack: "Kotlin, Android Studio, Firebase",
    previewLink: "#",
    githubLink: "https://github.com/Tae5567/Carbon-Impact-Forecaster-Web",
  },
  {
    title: "KanbanFlow",
    image: projectImage3,
    description: `This is an Android app Project Management tool with Kanban boards and Firebase-authenticated real-time user collaboration`,
    techstack: "Kotlin, Android Studio, Firebase",
    previewLink: "#",
    githubLink: "https://github.com/Tae5567/KanbanFlow-Android",
  },
  {
    title: "rideFinder",
    image: projectImage4,
    description: `This is a ride-sharing web app that aggregates rates from multiple services to help users find the
best ride deals.`,
    techstack: "Django, React.js, MySQL",
    previewLink: "#",
    githubLink: "https://github.com/nickarobinson99/447Pluto",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "eyitayodeji@gmail.com",
};

// Details

// Profile Image
import profile from "./assets/profile.jpg";
// Skills images
import python from "./assets/svg/skills/python.svg";
import java from "./assets/svg/skills/java.svg";
import javascript from "./assets/svg/skills/javascript.svg";
import django from "./assets/svg/skills/django.svg";
import nodejs from "./assets/svg/skills/nodejs.svg";
import flutter from "./assets/svg/skills/flutter.svg";
import dart from "./assets/svg/skills/dart.svg";
import swift from "./assets/svg/skills/swift.svg"
import firebase from "./assets/svg/skills/firebase.svg";
import aws from "./assets/svg/skills/aws.svg";
import gcp from "./assets/svg/skills/gcp.svg"
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
import dashboardUI from "./assets/projects/dashboard.png";



// Enter your Personal Details here
export const personalDetails = {
  name: "Eyitayo",
  tagline: "I am a Backend-focused Software Engineer",
  img: profile,
  about: `I am a Backend Developer interested in building well-functioning, scalable systems that can contribute to enhancing overall user experiences. Proficient in Python, Java, C++ and Node.js. 
  Additionally, I am well versed in React.js, Flutter, Dart, Swift and Kotlin.
   I have experience utilising AWS and the Google Cloud Platform as cloud services to deploy applications. 
   I have experience with RESTful APIs, WebSockets and frameworks including Django, Flask, FastAPI, Express and Spring Boot.`,
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
  java: java,
  javascript:javascript,
  django: django,
  nodejs: nodejs,
  flutter: flutter,
  dart: dart,
  swift: swift,
  react: react,
  firebase: firebase,
  kotlin: kotlin,
  aws: aws,
  gcp: gcp,
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
    title: "CrisisAlert Analytical Dashboard",
    image: dashboardUI,
    description: `This is an analytics dashboard used to track and predict floods and natural disasters in African regions, that can be used to improve emergency preparedness and response coordination.`,
    techstack: "Java (Spring Boot), TensorFlow, FastAPI, AWS, REST APIs",
    githubLink: "https://github.com/Tae5567/CrisisAlert-Analytical-Dashboard",
  },
  {
    title: "SpeechScribe",
    image: projectImage1,
    description: `This is a mobile app that converts speech to text, designed for easy note-taking and productivity using Flutter for cross-platform functionality and Django for backend support.`,
    techstack: "PyTorch, Flutter, Django",
    githubLink: "https://github.com/Tae5567/SpeechScribe-Speech-Recognition",
  },
  {
    title: "Product E-Commerce API",
    image: projectImage2,
    description: `This is a full-stack e-commerce platform using Node.js for backend logic and PostgreSQL for inventory management and designed a responsive UI with React.js and Tailwind CSS to enable seamless product browsing and purchasing.`,
    techstack: "Node.js, React.js, Tailwind CSS, PostgreSQL, APIs: OpenAI, Paystack",
    githubLink: "https://github.com/Tae5567/Product-E-Commerce-API",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "eyitayodeji@gmail.com",
};

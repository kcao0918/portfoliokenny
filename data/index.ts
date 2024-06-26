import {
  SiAndroidstudio,
  SiAzuredevops,
  SiBootstrap,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGmail,
  SiJavascript,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export const navItems = [
  { name: "Home", link: "/" },
  { name: "Skills", link: "#skills" },
  { name: "Experiences", link: "#experiences" },
  { name: "Projects", link: "#projects" },
];

export const ExperiencesList = [
  {
    company: "FlightBridge, LLC",
    role: "Software Engineer Intern",
    techStack: ["ASP.NET", "VueJS", "C#", "HTML/CSS/JS", "Bootstrap", "SQL"],
    descriptionList: [
      `• Developed an online booking and management platform tailored for streamlining private aviation operations`,
      `• Integrated a C# ASP.NET MVC application with a SQL database to maintain a company referral program used by
1000+ pilots and operators allowing for customized logos and descriptions`,
      `• Implemented VueJS and Bootstrap to refactor and modernize user and admin pages through Dashkit Layouts`,
      `• Utilized Agile methodologies through Azure DevOps to support CI/CD pipelines and automation workflows,
reducing deployment time by 45% and increasing release frequency`,
    ],
  },
  {
    company: "Georgia Tech WebDev",
    role: "Software Engineer",
    techStack: ["ReactJS", "ExpressJS", "MongoDB", "NodeJS", "TailwindCSS"],
    descriptionList: [
      `• Collaborated with a 7 other developers on a semester long project involving the creation of a collaborative
whiteboard website, utilizing React and CanvasJS to implement shape drawing and stroke customization`,
      `• Enabled real-time drawing updates by seamlessly integrating web sockets over TCP, capturing and transmitting
JSON-formatted data including new coordinates, stroke attributes, and line color`,
      `• Assigned unique identifiers for each whiteboard using MongoDB, allowing efficient whiteboard saving and retrieval`,
    ],
  },
  {
    company: "Georgia Tech Financial Services and Innovation Lab",
    role: "Undergraduate Researcher",
    techStack: ["Python", "MongoDB"],
    descriptionList: [
      `• Contributed to a neural network for stock prediction using PyTorch and Pandas to automatically discern financially
relevant news by utilizing past stock price movements and the Gigaword Dataset
`,
      `• Trained a Naive Bayes classifier using a parsed text dataset of 210k+ articles to organize news headlines by
category, successfully achieving a 91% accuracy using softmax classification`,
      `• Leveraged BERT within the feedforward layer on 2 million news headlines to generate embeddings from context
and semantic meanings, systematically stored in a MongoDB database for later use`,
    ],
  },
];

export const ProjectItems = [
  {
    title: "Gide",
    description:
      "Flutter application that sends announcements and keeps users informed about their favorite restaurants",
    content: "GideImage.png",
    link: "https://github.com/kcao0918/Gide",
  },
  {
    title: "PomoBuddy",
    description:
      "Time and Task manager website built with React and TailwindCSS to help you study and keep you focused",
    content: "PomoBuddyImage.png",
    link: "https://github.com/Sprihanjay/PomoBuddy",
  },
  {
    title: "SpotifyWrapped",
    description:
      "Android application providing details on your top songs/artists, and providing new recommendations",
    content: "",
    link: "https://github.com/kcao0918/SpotifyWrapped",
  },
];

export const skillsList = [
  {
    text: "React",
    Icon: SiReact,
  },
  {
    text: "Next.js",
    Icon: SiNextdotjs,
  },
  {
    text: "JavaScript",
    Icon: SiJavascript,
  },
  {
    text: "Tailwind",
    Icon: SiTailwindcss,
  },
  {
    text: "Bootstrap",
    Icon: SiBootstrap,
  },
  {
    text: "Firebase",
    Icon: SiFirebase,
  },
  {
    text: "MongoDB",
    Icon: SiMongodb,
  },
  {
    text: "Git",
    Icon: SiGit,
  },
];

export const socials = [
  {
    Icon: SiLinkedin,
    url: "https://www.linkedin.com/in/kennycao4/",
  },
  {
    Icon: SiGmail,
    url: "",
  },
  {
    Icon: SiGithub,
    url: "https://github.com/kcao0918",
  },
];

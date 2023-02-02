import imageProject1 from "../assets/images/project1.webp";
import imageProject2 from "../assets/images/project2.webp";
import imageProject3 from "../assets/images/project3.webp";
import imageStudios from "../assets/images/estudios.webp";
import imageStudios2 from "../assets/images/estudios2.webp";

export const iconWorks = [
  {
    id: 1,
    icon: "https://img.icons8.com/color/48/000000/javascript.png",
    title: "javascript",
    alt: "javascript",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/color/48/000000/react-native.png",
    title: "react",
    alt: "react",
  },
  {
    id: 3,
    icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    title: "html",
    alt: "html",
  },
  {
    id: 4,
    icon: "https://img.icons8.com/color/48/000000/css3.png",
    title: "css",
    alt: "css",
  },
  {
    id: 5,
    icon: "https://img.icons8.com/color/48/000000/sass.png",
    title: "sass",
    alt: "sass",
  },
  {
    id: 6,
    icon: "https://img.icons8.com/color/48/000000/nodejs.png",
    title: "nodejs",
    alt: "nodejs",
  },
  {
    id: 7,
    icon: "https://img.icons8.com/color/48/000000/redux.png",
    title: "redux",
    alt: "redux",
  },
  {
    id: 8,
    icon: "https://img.icons8.com/color/48/000000/git.png",
    title: "git",
    alt: "git",
  },
  {
    id: 9,
    icon: "https://img.icons8.com/color/48/000000/github--v1.png",
    title: "github",
    alt: "github",
  },
  {
    id: 11,
    icon: "https://img.icons8.com/color/48/000000/figma--v1.png",
    title: "figma",
    alt: "figma",
  },
];

export const iconSocial = [
  {
    id: 1,
    icon: "https://img.icons8.com/color/48/000000/linkedin.png",
    title: "Linkedin",
    alt: "linkedin",
    link: "https://www.linkedin.com/in/antonio-delage-cruzado/",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/color/48/000000/github--v1.png",
    title: "Github",
    alt: "github",
    link: "https://github.com/10delin",
  },
];

export const iconContact = [
  {
    id: 1,
    icon: "https://img.icons8.com/color/48/000000/gmail.png",
    title: "Gmail",
    alt: "gmail",
    link: "mailto:delincruzado20@gmail.com",
  },
  {
    id: 2,
    icon: "https://img.icons8.com/color/48/000000/whatsapp--v1.png",
    title: "Whatsapp",
    alt: "whatsapp",
  },
];

export const EXPERIENCES = [
  {
    id: 1,
    position: "experience.item1.position",
    company: "experience.item1.company",
    date: "experience.item1.date",
    description: "experience.item1.description",
    actual: true,
  },
  {
    id: 2,
    position: "experience.item2.position",
    company: "experience.item2.company",
    date: "experience.item2.date",
    description: "experience.item2.description",
    actual: false,
  },
  {
    id: 3,
    position: "experience.item3.position",
    company: "experience.item3.company",
    date: "experience.item3.date",
    description: "experience.item3.description",
    actual: false,
  },
];

export const sendIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path
      fill="currentColor"
      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
    ></path>
  </svg>
);

export const EDUCATION = [
  {
    id: 1,
    title: "education.item1.title",
    center: "education.item1.center",
    date: "education.item1.date",
    image: imageStudios2,
  },
  {
    id: 2,
    title: "education.item2.title",
    center: "education.item2.center",
    date: "education.item2.date",
    image: imageStudios,
  },
];

export const PROJECTS = [
  {
    id: 1,
    image: imageProject1,
    title: "projects.item1.title",
    subtitle: "projects.item1.subtitle",
    description: "projects.item1.description",
    link: "projects.item1.link",
  },
  {
    id: 2,
    image: imageProject2,
    title: "projects.item2.title",
    subtitle: "projects.item2.subtitle",
    description: "projects.item2.description",
    link: "projects.item2.link",
  },
  {
    id: 3,
    image: imageProject3,
    title: "projects.item3.title",
    subtitle: "projects.item3.subtitle",
    description: "projects.item3.description",
    link: "projects.item3.link",
  },
];

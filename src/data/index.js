import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import ContactsIcon from "@mui/icons-material/Contacts";
import html from "../assets/html-5.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwindcss from "../assets/tailwindcss.jpg";
import github from "../assets/github.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";
import nodejs from "../assets/nodejs.jpg";

export const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "portfolio",
  },
  {
    id: 4,
    link: "skills",
  },
  {
    id: 5,
    link: "contact",
  },
];

export const homeLinks = [
  {
    id: 1,
    child: (
      <span>
        Linkedin <LinkedInIcon className="ml-8" />
      </span>
    ),
    href: "https://www.linkedin.com/in/zareel-kalam-2a3a85249/",
    style: "rounded-tr-md",
  },
  {
    id: 2,
    child: (
      <span>
        GitHub <GitHubIcon className="ml-10" />
      </span>
    ),
    href: "https://github.com/Zareel",
  },
  {
    id: 3,
    child: (
      <span>
        Mail <EmailIcon className="ml-16" />
      </span>
    ),
    href: "mailto:zareelbwd@gmail.com",
  },
  {
    id: 4,
    child: (
      <span>
        Resume <ContactsIcon className="ml-8" />
      </span>
    ),
    href: "https://drive.google.com/drive/u/0/my-drive",
    style: "rounded-br-md",
    download: true,
  },
];

export const techs = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: javascript,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: react,
    title: "ReactJS",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: tailwindcss,
    title: "TailwindCSS",
    style: "shadow-orange-500 ",
  },
  {
    id: 6,
    src: github,
    title: "GitHub",
    style: "shadow-gray-500",
  },
];

export const learning = [
  {
    id: 1,
    src: mongodb,
    title: "MongoDB",
  },
  {
    id: 2,
    src: express,
    title: "ExpressJS",
  },
  {
    id: 3,
    src: nodejs,
    title: "NodeJS",
  },
];

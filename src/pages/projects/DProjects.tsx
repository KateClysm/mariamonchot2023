import { FaHtml5, FaCss3Alt, FaSass, FaNodeJs, FaNpm, FaFigma, FaTrello,  FaGithubSquare  } from "react-icons/fa";
import { SiTypescript, SiJira, SiMysql  } from "react-icons/si";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";

import IProject from "../../interfaces/IProject";

const DProjects: IProject[] = [
  {
    id: 1,
    title: "ParaSeekers",
    card_description: "Paranormal Forum",
    description: "ParaSeekers is an interactive forum devoted to exploring the paranormal world. Users can create personalized profiles, share their mysterious encounters, and delve into supernatural experiences. This community-driven space fosters connections among individuals intrigued by the unexplained, providing a supportive environment to contribute unique ghostly stories and explore inexplicable phenomena.",
    key_features: [
      "User Profiles: Users can create personalized profiles, showcasing their interests in the paranormal and their unique experiences.",
      "Interactive Forum: An engaging platform where users can post their haunting stories, encounters with spirits, or inexplicable phenomena they've witnessed.",
      "Filter Posts by Genre: Easily categorize and explore posts based on different genres, allowing seamless access to specific content categories on the platform."],
    my_rol: "During my participation in the Full Stack Developer Junior training program by Empujar SomosCoders, I contributed to ParaSeekers, a collaborative group project. My involvement encompassed a wide-ranging full-stack responsibility, including the development of React components, the implementation of Express.js functionalities, and the management of a MySQL database. Additionally, I provided guidance to my team members in their learning process and assisted in project management.",
    photo: "para_seekers/principal.jpeg",
    mobile_view: "para_seekers/mobile.png",
    secondary_view: "para_seekers/secondary.png",
    technologies: [
      { icon: <GrReactjs />, name: 'React.js' },
      { icon: <SiTypescript />, name: 'TypeScript' },
      { icon: <IoLogoJavascript />, name: 'JavaScript' },
      { icon: <FaHtml5 />, name: 'HTML5' },
      { icon: <FaCss3Alt />, name: 'CSS3' },
      { icon: <FaSass />, name: 'Sass' },
      { icon: <FaNodeJs />, name: 'Node.js' },
      { icon: <FaGithubSquare />, name: 'GitHub' },
      { icon: <SiMysql />, name: 'MySQL' },
      { icon: <FaNpm />, name: 'npm' },
      { icon: <FaFigma />, name: 'Figma' },
      { icon: <SiJira />, name: 'Jira' },
      { icon: <FaTrello />, name: 'Trello' }

    ],
    git: "https://github.com/KateClysm/Foro",
    link: "",
    date: "June 2023",
  },

  {
    id: 2,
    title: "Sakura Calculator",
    card_description: "Simple Calculator Platform",
    description: "The 'Sakura Calculator' is a visually enchanting platform that offers standard arithmetic functions within a Sakura-inspired design.",
    key_features: [
      "Standard Calculator Functions: Offers basic arithmetic operations such as addition, subtraction, multiplication, and division.",
      "Sakura-Inspired Design: Incorporates Sakura (cherry blossom) themed aesthetics or visuals into the calculator's user interface, providing a unique and visually appealing experience.",
      "Touch-Based Animations: Introduces interactive touch-based animations, enhancing the user experience with delightful Sakura-themed animations triggered by touch events."
    ],
    my_rol: "Led the creation of a Sakura-themed calculator, handling both the visual design and technical implementation. Utilized HTML, CSS, and raw JavaScript to craft an engaging interface, ensuring seamless interactivity and an aesthetically pleasing user experience.",
    photo: "sakura_calculator/principal.png",
    mobile_view: "sakura_calculator/mobile.png",
    secondary_view: "sakura_calculator/secondary.png",
    technologies: [
      { icon: <FaHtml5 />, name: 'HTML5' },
      { icon: <FaCss3Alt />, name: 'CSS3' },
      { icon: <FaGithubSquare />, name: 'GitHub' },
      { icon: <FaFigma />, name: 'Figma' },
      { icon: <IoLogoFirebase />, name: 'Firebase' }

    ],
    git: "https://github.com/KateClysm/SakuraCalculator",
    link: "https://sakuracalculatorbykate.web.app",
    date: "June 2023",
  },
];

export default DProjects;

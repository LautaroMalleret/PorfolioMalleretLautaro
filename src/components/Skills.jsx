import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faNodeJs,
  faReact,
  faBootstrap,
  faAngular,
  faGitAlt,
  faLinux,
  faHtml5,
  faCss3Alt,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

// iconos de habilidades
const skills = [
  { type: "fa", icon: faJava, label: "Java" },
  { type: "fa", icon: faNodeJs, label: "Node.js" },
  { type: "fa", icon: faReact, label: "React" },
  { type: "fa", icon: faDatabase, label: "SQL" },
  { type: "svg", icon: "/PorfolioMalleretLautaro/icons/mongodb.svg", label: "MongoDB" },
  { type: "svg", icon: "/PorfolioMalleretLautaro/icons/springboot.svg", label: "Spring Boot" },
  { type: "svg", icon: "/PorfolioMalleretLautaro/icons/typescript.svg", label: "TypeScript" },
  { type: "fa", icon: faBootstrap, label: "Bootstrap" },
  { type: "fa", icon: faAngular, label: "Angular" },
  { type: "fa", icon: faGitAlt, label: "Git" },
  { type: "fa", icon: faLinux, label: "Linux" },
  { type: "fa", icon: faHtml5, label: "HTML" },
  { type: "fa", icon: faCss3Alt, label: "CSS" },
  { type: "fa", icon: faJsSquare, label: "JavaScript" },
];

function Skills() {
  return (
    <section id="skills" className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Mis Habilidades
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map(({ type, icon, label }, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-gray-700 dark:text-gray-300"
          >
            {type === "fa" ? (
              <FontAwesomeIcon
                icon={icon}
                size="3x"
                className="mb-2 text-blue-600"
              />
            ) : (
              <img src={icon} alt={label} className="w-10 h-10 mb-2" />
            )}
            <p className="text-lg">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

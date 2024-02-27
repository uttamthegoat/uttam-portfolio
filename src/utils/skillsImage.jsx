import html from "../assets/svg/skills/html.svg";
import css from "../assets/svg/skills/css.svg";
import angular from "../assets/svg/skills/angular.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import nextJS from "../assets/svg/skills/nextJS.svg";
import react from "../assets/svg/skills/react.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import tailwind from "../assets/svg/skills/tailwind.svg";
import vitejs from "../assets/svg/skills/vitejs.svg";
import c from "../assets/svg/skills/c.svg";
import java from "../assets/svg/skills/java.svg";
import python from "../assets/svg/skills/python.svg";
import git from "../assets/svg/skills/git.svg";
import materialui from "../assets/svg/skills/materialui.svg";
import wordpress from "../assets/svg/skills/wordpress.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "c":
      return c;
    case "java":
      return java;
    case "python":
      return python;
    case "git":
      return git;
    case "materialui":
      return materialui;
    case "wordpress":
      return wordpress;
    default:
      break;
  }
};

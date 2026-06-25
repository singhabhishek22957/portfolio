import {
SiHtml5,
SiCss,
SiJavascript,
SiTypescript,
SiReact,
SiNextdotjs,
SiTailwindcss,
SiNodedotjs,
SiExpress,
SiMongodb,
SiMysql,
SiRedux,
SiZod,
SiJest,
SiJsonwebtokens,
SiCloudinary,
SiGit,
SiGithub,
SiPostman,
SiVercel,
SiRender,
SiFirebase,
SiSupabase,
SiFreelancer,
} from "react-icons/si";

import { IconType } from "react-icons";

export const getSkillIcon = (skill: string): IconType => {
switch (skill.toLowerCase()) {
case "html":
return SiHtml5;


case "css":
  return SiCss;

case "javascript":
  return SiJavascript;

case "typescript":
  return SiTypescript;

case "react":
case "react.js":
  return SiReact;

case "next js":
case "next.js":
case "nextjs":
  return SiNextdotjs;

case "tailwind":
case "tailwind css":
  return SiTailwindcss;

case "node js":
case "node.js":
case "nodejs":
  return SiNodedotjs;

case "express":
case "express.js":
  return SiExpress;

case "mongodb":
  return SiMongodb;

case "mysql":
  return SiMysql;

case "redux":
  return SiRedux;

case "zod":
  return SiZod;

case "jest":
  return SiJest;

case "jwt":
  return SiJsonwebtokens;

case "cloudinary":
  return SiCloudinary;

case "git":
  return SiGit;

case "github":
  return SiGithub;

case "postman":
  return SiPostman;

case "vercel":
  return SiVercel;

case "render":
  return SiRender;

case "firebase":
  return SiFirebase;

case "supabase":
  return SiSupabase;

default:
  return SiFreelancer;


}
};

export const getSkillColor = (skill: string): string => {
switch (skill.toLowerCase()) {
case "html":
return "#E34F26";

case "css":
  return "#1572B6";

case "javascript":
  return "#F7DF1E";

case "typescript":
  return "#3178C6";

case "react":
case "react.js":
  return "#61DAFB";

case "next js":
case "next.js":
  return "#FFFFFF";

case "node js":
case "node.js":
  return "#339933";

case "express":
case "express.js":
  return "#FFFFFF";

case "mongodb":
  return "#47A248";

case "mysql":
  return "#4479A1";

case "tailwind":
case "tailwind css":
  return "#06B6D4";

case "git":
  return "#F05032";

case "github":
  return "#FFFFFF";

case "firebase":
  return "#FFCA28";

case "vercel":
  return "#FFFFFF";

default:
  return "#ef4444";

}
};

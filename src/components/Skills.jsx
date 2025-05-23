import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaPython,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiPrisma,
  SiCanva,
  SiFigma,
  SiPostman,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { RiFileExcel2Fill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { PiStepsFill } from "react-icons/pi";
import { FaNode } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

const skills = [
  { name: "Java", icon: <FaJava />, color: "text-red-600" },
  { name: "Python", icon: <FaPython />, color: "text-blue-600" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React.js", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "Node.js", icon: <FaNode />, color: "text-green-600" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-700" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-700" },
  { name: "SQL", icon: <SiMysql />, color: "text-blue-500" },
  { name: "Prisma ORM", icon: <SiPrisma />, color: "text-indigo-500" },
  {
    name: "Power BI",
    icon: <PiStepsFill />,
    color: "text-yellow-600",
  },
  { name: "Excel", icon: <RiFileExcel2Fill />, color: "text-green-700" },
  { name: "VS Code", icon: <VscVscode />, color: "text-blue-500" },
  { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-gray-800 dark:text-white",
  },
  { name: "Figma", icon: <SiFigma />, color: "text-pink-600" },
  { name: "Canva", icon: <SiCanva />, color: "text-blue-400" },
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "text-blue-500",
  },
];

export default function Skills() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-4" id="skills">
      ``
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="relative w-full max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center group`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div
                className={`text-5xl mb-3 ${skill.color} transition-transform group-hover:scale-110`}
              >
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-indigo-500 transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-700" },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-gray-800 dark:text-white",
  },
  { name: "Python", icon: <FaPython />, color: "text-blue-600" },
];

export default function Skills() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-4">
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

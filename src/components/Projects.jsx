import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="bg-white dark:bg-gray-900 py-16 px-6 md:px-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Projects
      </h2>

      <div className="grid gap-10 max-w-5xl mx-auto md:grid-cols-2">
        {/* Project 1 */}
        <motion.div
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            Automated Penetration Testing
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Developed a web app that automates vulnerability scanning with{" "}
            <strong>ZAP</strong> and <strong>Nmap</strong>, generating detailed
            security reports for proactive identification and remediation of
            weaknesses.
          </p>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
          whileHover={{ scale: 1.03 }}
        >
          <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            E-Buddy E-Commerce App
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Developed a user-friendly interface and a dedicated vendor dashboard
            for efficient product management and sales tracking. Built with{" "}
            <strong>React.js</strong>, <strong>MongoDB</strong>,{" "}
            <strong>Node.js</strong>, <strong>Express.js</strong>, and{" "}
            <strong>Tailwind CSS</strong> to enhance the shopping experience.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

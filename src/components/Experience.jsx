import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="bg-white dark:bg-gray-800 shadow p-6"
      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Full-Time Experience (slide from left) */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow p-6"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            Associate Software Development Engineer
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            QuarkSek Technologies | April 2025 – Ongoing
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Promoted from intern to full-time based on performance.</li>
            <li>
              Built scalable web apps using React.js, TypeScript, Express.js,
              PostgreSQL, and Prisma.
            </li>
            <li>Worked on real-time projects in an Agile environment.</li>
            <li>
              Received a Spot Award for the successful release of the Pengate
              application.
            </li>
          </ul>
        </motion.div>

        {/* Internship Experience (slide from right) */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl shadow p-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            Software Development Engineer Intern
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            QuarkSek Technologies | Internship
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Worked on frontend using React.js and TypeScript.</li>
            <li>
              Contributed to backend with Express.js, PostgreSQL, and Prisma.
            </li>
            <li>
              Gained hands-on experience in building scalable applications.
            </li>
            <li>Enhanced skills in modern full-stack development practices.</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}

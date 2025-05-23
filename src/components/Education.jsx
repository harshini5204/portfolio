import { motion } from "framer-motion";

const educationList = [
  {
    degree:
      "Bachelor of Technology in Artificial Intelligence and Data Science",
    institution: "Kamaraj College of Engineering and Technology",
    duration: "2021 - 2025",
    description:
      "Successfully completed B.Tech in AI and Data Science. CGPA: 8.9/10.",
  },
  {
    degree: "6th to 12th Grade",
    institution: "Kshatriya Girls Higher Secondary School",
    duration: "2013 - 2021",
    description:
      "Gained a strong academic background in Mathematics, Science, and Computer Science. Scored 87% in both 10th and 12th board exams.",
  },
  {
    degree: "Pre-KG to 5th Grade",
    institution:
      "V.M.G.Sri Saradha Sakthi Matriculation Higher Secondary School",
    duration: "2007 - 2013",
    description:
      "Completed foundational education with a focus on basic literacy, numeracy, and social skills.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900"
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Education
        </h2>
        <div className="space-y-10">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-indigo-500 hover:shadow-xl transition-all duration-300"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                {edu.degree}
              </h3>
              <p className="text-md text-gray-700 dark:text-gray-300">
                {edu.institution} &nbsp;|&nbsp;{" "}
                <span className="italic">{edu.duration}</span>
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="relative px-6 py-16 bg-gradient-to-br dark:from-gray-800 dark:to-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Get In Touch
      </h2>

      <form className="max-w-2xl mx-auto bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl shadow-xl p-8 space-y-6">
        <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 p-3 rounded">
          <FiUser className="text-gray-500 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-500"
          />
        </div>

        <div className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 p-3 rounded">
          <FiMail className="text-gray-500 dark:text-gray-300" />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-500"
          />
        </div>

        <div className="flex gap-3 bg-gray-100 dark:bg-gray-700 p-3 rounded">
          <FiMessageSquare className="mt-2 text-gray-500 dark:text-gray-300" />
          <textarea
            placeholder="Your Message"
            className="w-full bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-500 resize-none h-32"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all"
        >
          Send Message
        </button>
      </form>
    </motion.section>
  );
}

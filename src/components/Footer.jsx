import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: <FaEnvelope />,
    link: "mailto:bharshini2004@gmail.com",
    label: "Email",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/harshini5204/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/harshini5204",
    label: "GitHub",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/h_a_a_s_i_p_a_p_a/",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 border-t dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
        {/* Heading */}
        <motion.h3
          className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Connect
        </motion.h3>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {socialLinks.map(({ icon, link, label }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-transform"
              whileHover={{ scale: 1.25 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}

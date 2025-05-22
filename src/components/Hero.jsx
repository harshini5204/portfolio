import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="h-screen flex items-center bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Profile Photo with Glow */}
        <motion.div
          className="relative rounded-full shadow-2xl w-64 h-64 overflow-hidden border-8 border-indigo-500 animate-pulse-slow"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            // src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-indigo-300 animate-ping-slow" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hello, I'm Harshini
          </h1>

          <TypeAnimation
            sequence={["Full Stack Developer", 2000, "Creative Coder 💡", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-2xl font-semibold text-indigo-600 dark:text-indigo-400"
          />

          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-lg">
            I'm passionate about building interactive and beautiful web
            experiences. I blend creativity with code to bring designs to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

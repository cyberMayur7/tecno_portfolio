import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Portfolio */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <a
                href="https://github.com/cyberMayur7/portfolio"
                target="_blank"
                className="text-2xl hover:text-accent"
              >
                <FaGithub />
              </a>
            </div>

            <h3 className="text-xl font-semibold">Portfolio</h3>
            <p className="text-gray-400 mt-2">
              Personal portfolio website showcasing projects, skills, and experience.
            </p>

            <div className="flex gap-2 mt-4 text-xs">
              <span className="px-2 py-1 bg-accent text-black rounded">React</span>
              <span className="px-2 py-1 bg-white/20 rounded">Tailwind</span>
              <span className="px-2 py-1 bg-white/20 rounded">Vite</span>
            </div>
          </motion.div>

          {/* TecnoShadowCrypt */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <a
                href="https://github.com/cyberMayur7/TecnoShadowCrypt"
                target="_blank"
                className="text-2xl hover:text-accent"
              >
                <FaGithub />
              </a>
            </div>

            <h3 className="text-xl font-semibold">TecnoShadowCrypt</h3>
            <p className="text-gray-400 mt-2">
              Python-based encryption and decryption tool with Auto CTF features.
            </p>

            <div className="flex gap-2 mt-4 text-xs">
              <span className="px-2 py-1 bg-accent text-black rounded">Python</span>
              <span className="px-2 py-1 bg-white/20 rounded">Cryptography</span>
              <span className="px-2 py-1 bg-white/20 rounded">Security</span>
            </div>
          </motion.div>

          {/* Phishing Tool */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <a
                href="https://github.com/cyberMayur7/Phishing_tool_by_tecno"
                target="_blank"
                className="text-2xl hover:text-accent"
              >
                <FaGithub />
              </a>
            </div>

            <h3 className="text-xl font-semibold">Phishing Tool</h3>
            <p className="text-gray-400 mt-2">
              Educational phishing simulation tool for cybersecurity awareness.
            </p>

            <div className="flex gap-2 mt-4 text-xs">
              <span className="px-2 py-1 bg-accent text-black rounded">Python</span>
              <span className="px-2 py-1 bg-white/20 rounded">Cybersecurity</span>
              <span className="px-2 py-1 bg-white/20 rounded">OSINT</span>
            </div>
          </motion.div>

          {/* Password Strength Checker */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <a
                href="https://github.com/cyberMayur7/PasswordStrengthChecker_by_Tecno"
                target="_blank"
                className="text-2xl hover:text-accent"
              >
                <FaGithub />
              </a>
            </div>

            <h3 className="text-xl font-semibold">Password Strength Checker</h3>
            <p className="text-gray-400 mt-2">
              Tool to evaluate password strength based on security rules.
            </p>

            <div className="flex gap-2 mt-4 text-xs">
              <span className="px-2 py-1 bg-accent text-black rounded">Python</span>
              <span className="px-2 py-1 bg-white/20 rounded">Security</span>
              <span className="px-2 py-1 bg-white/20 rounded">CLI</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Projects;

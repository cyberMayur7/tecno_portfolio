import { motion } from "framer-motion";
import {
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaPython,
  FaJava,
  FaAws,
  FaNetworkWired,
} from "react-icons/fa";

import {
  SiBurpsuite,
  SiMysql,
  SiGithub,
} from "react-icons/si";

const skills = [
  {
    title: "Cloud",
    items: ["AWS", "EC2", "S3", "IAM", "VPC"],
    icon: <FaAws />,
  },
  {
    title: "DevOps",
    items: ["Linux", "Docker", "Git", "GitHub"],
    icon: <FaDocker />,
  },
  {
    title: "Cyber Security",
    items: ["Web Security", "VAPT", "SQL Injection", "XSS", "Burp Suite"],
    icon: <SiBurpsuite />,
  },
  {
    title: "Programming (Basic)",
    items: ["Python", "Java", "MySQL"],
    icon: <FaPython />,
  },
  {
    title: "Networking",
    items: ["Computer Networks", "TCP/IP", "DNS", "HTTP/HTTPS", "Ports & Protocols"],
    icon: <FaNetworkWired />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 bg-gradient-to-b from-[#0b0f19] to-[#020617]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white">
            Skills & Expertise
          </h2>
          <p className="mt-2 text-gray-400 max-w-xl">
            Core technologies and domains I actively work with in Cloud,
            DevOps and Cybersecurity.
          </p>
          <div className="mt-4 h-[3px] w-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="
                relative bg-[#0f1629] rounded-2xl p-7
                border border-white/10
                shadow-lg hover:shadow-blue-500/10
                transition
              "
            >
              {/* Top Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-2xl text-blue-400">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {skill.title}
                </h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1 text-xs rounded-full
                      bg-white/5 border border-white/10
                      text-gray-300 hover:text-white
                      hover:border-blue-400/40
                      transition
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Subtle glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-cyan-400/5 opacity-0 hover:opacity-100 transition pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

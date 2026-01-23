import { motion } from "framer-motion";

const experiences = [
  {
    role: "Cyber Security Intern",
    company: "CyberZero Club",
    time: "Aug 2025 – Oct 2025",
    desc: "Worked on cybersecurity fundamentals, threat analysis, and security operations in a remote internship environment."
  },
  {
    role: "Cybersecurity Intern",
    company: "Hacktify Cyber Security LLP",
    time: "Feb 2025 – Mar 2025",
    desc: "Performed Web Application VAPT on DVWA & OWASP Juice Shop. Identified SQL Injection, XSS, and insecure authentication vulnerabilities."
  },
  {
    role: "Cyber Security Intern",
    company: "The Red Users",
    time: "Jan 2025 – Mar 2025",
    desc: "Hands-on experience in Network Security, Vulnerability Assessment and Penetration Testing (VAPT)."
  },
  {
    role: "Intern",
    company: "ShadowFox",
    time: "Aug 2024 – Feb 2025",
    desc: "Worked on vulnerability assessment and vulnerability management with practical exposure to real-world security scenarios."
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-12">
          Experience
        </h2>

        <div className="border-l border-white/20 pl-6 space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold">
                {exp.role}
              </h3>
              <p className="text-sm text-accent">
                {exp.company}
              </p>
              <p className="text-xs text-gray-400">
                {exp.time}
              </p>
              <p className="text-gray-400 mt-2 max-w-2xl">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

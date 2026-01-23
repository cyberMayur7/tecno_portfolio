import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#0b0f19]"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          About Me
        </motion.h2>

        {/* Divider */}
        <div className="mt-3 h-[2px] w-16 bg-blue-500 rounded"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-8 text-gray-400 text-lg leading-relaxed space-y-6"
        >
          <p>
            I am a Cloud and Cybersecurity enthusiast with a strong interest in
            building secure, scalable, and reliable systems. I enjoy working on
            cloud infrastructure, Linux environments, and understanding how
            real-world cyber attacks work.
          </p>

          <p>
            I have hands-on experience with cloud platforms, particularly AWS,
            web application security. My focus is on learning industry best
            practices for cloud security, automation, and vulnerability
            assessment while continuously improving my problem-solving skills.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

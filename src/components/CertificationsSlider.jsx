import { motion } from "framer-motion";
import { FaCertificate, FaCloud } from "react-icons/fa";

const certs = [
  { title: "Journey to Cloud: Envisioning Your Solution – IBM", icon: <FaCloud /> },
  { title: "Security Analyst Certificate Programme – Reliance Foundation", icon: <FaCertificate /> },
  { title: "Certified Cybersecurity Educator Professional (CCEP)", icon: <FaCertificate /> },
  { title: "Threat Intelligence Fundamentals for SOC Analysts – Securonix", icon: <FaCertificate /> },
  { title: "Neo4j Certified Professional", icon: <FaCertificate /> },
  { title: "Quick Heal – VAPT Analyst", icon: <FaCertificate /> },
  { title: "Quick Heal – Network Security Analyst", icon: <FaCertificate /> },
  { title: "Mastercard Cybersecurity Job Simulation – Forage", icon: <FaCertificate /> },
  { title: "Foundation Level Threat Intelligence Analyst – arcX", icon: <FaCertificate /> },
  { title: "EnigmaXplore 2.0 CTF – TantraFiesta’24", icon: <FaCertificate /> },
];

const CertificationsSlider = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-8">
          Certifications Highlights
        </h2>

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...certs, ...certs].map((cert, i) => (
            <div
              key={i}
              className="min-w-[260px] bg-white/10 border border-white/10 backdrop-blur rounded-xl p-6 flex items-center gap-4"
            >
              <div className="text-3xl text-accent">{cert.icon}</div>
              <p className="font-semibold text-sm">{cert.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSlider;

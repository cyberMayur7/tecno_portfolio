import { useState } from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaCloud } from "react-icons/fa";
import CertificateModal from "./CertificateModal";

const certifications = [
  {
    title: "Journey to Cloud: Envisioning Your Solution",
    org: "IBM",
    year: "2026",
    icon: <FaCloud />,
    file: "/cert-ibm-cloud.pdf",
    verify: "https://www.linkedin.com/in/mayur-girase-7060b6286/details/certifications/"
  },
  {
    title: "Security Analyst Certificate Programme",
    org: "Reliance Foundation",
    year: "2025",
    icon: <FaCertificate />,
    file: "/cert-reliance.pdf",
    verify: "https://www.linkedin.com/in/mayur-girase-7060b6286/details/certifications/"
  },
  {
    title: "Certified Cybersecurity Educator Professional (CCEP)",
    org: "CyberZero Council",
    year: "2025",
    icon: <FaCertificate />,
    file: "/cert-ccep.pdf",
    verify: "https://www.linkedin.com/in/mayur-girase-7060b6286/details/certifications/"
  },
  {
    title: "Threat Intelligence Fundamentals for SOC Analysts",
    org: "Securonix",
    year: "2025",
    icon: <FaCertificate />,
    file: "/cert-soc.pdf",
    verify: "https://www.linkedin.com/in/mayur-girase-7060b6286/details/certifications/"
  }
];

const Certifications = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-accent mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur border border-white/10 p-6 rounded-xl"
            >
              <div className="text-4xl text-accent mb-4">
                {cert.icon}
              </div>

              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.org}</p>
              <p className="text-xs text-gray-500 mt-1">{cert.year}</p>

              <div className="flex gap-4 mt-4 text-sm">
                <button
                  onClick={() => { setCurrent(cert); setOpen(true); }}
                  className="text-accent hover:underline"
                >
                  View
                </button>

                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Verify
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {current && (
        <CertificateModal
          open={open}
          onClose={() => setOpen(false)}
          src={current.file}
          title={current.title}
        />
      )}
    </section>
  );
};

export default Certifications;

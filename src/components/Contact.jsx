import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y4x84q3",
        "template_1mrqpzd",
        form.current,
        "gLgJf6zMdt6bP6yWZ"
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message ❌");
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">

      {/* 🔥 Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple-500/10 to-cyan-500/10 blur-3xl -z-10" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-accent">
          Contact Me
        </h2>

        <p className="text-gray-400 mt-3">
          Let’s discuss Cloud, DevOps & Cyber Security opportunities
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative max-w-md mx-auto mt-12 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl space-y-5 shadow-xl"
      >
        {/* Gradient border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent via-purple-500 to-cyan-400 opacity-20 blur pointer-events-none" />

        <motion.input
          whileFocus={{ scale: 1.03 }}
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="relative w-full p-3 rounded-lg bg-black/50 border border-white/20 outline-none focus:border-accent transition"
        />

        <motion.input
          whileFocus={{ scale: 1.03 }}
          type="email"
          name="reply_to"
          placeholder="Your Email"
          required
          className="relative w-full p-3 rounded-lg bg-black/50 border border-white/20 outline-none focus:border-accent transition"
        />

        <motion.textarea
          whileFocus={{ scale: 1.03 }}
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="relative w-full p-3 rounded-lg bg-black/50 border border-white/20 outline-none focus:border-accent transition resize-none"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="relative w-full py-3 rounded-lg font-semibold text-black
                     bg-gradient-to-r from-accent via-purple-400 to-cyan-400
                     shadow-lg hover:shadow-accent/40 transition"
        >
          Send Message 🚀
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;

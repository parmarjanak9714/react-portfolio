import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact({ darkMode }) {
  const form = useRef();
  const [status, setStatus] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const wordCount = message.trim().split(/\s+/).filter(Boolean).length;

    if (wordCount < 50) {
      setStatus("Message must contain at least 50 words.");
      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        "service_vown5aj",
        "template_b0nfgzw",
        {
          name,
          email,
          subject,
          message,
        },
        {
          publicKey: "8F7_bnGnLkAoImTvM",
        },
      )
      .then(() => {
        setStatus("Message sent successfully! ✅");
        form.current.reset();
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
      });
  };
  return (
    <div
      id="contact"
      className={`min-h-screen pt-28 pb-24 px-6 transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className={`font-semibold uppercase tracking-widest text-sm mb-3 ${
              darkMode ? "text-cyan-400" : "text-cyan-600"
            }`}
          >
            Get in touch
          </p>

          <h1
            className={`text-4xl md:text-5xl font-extrabold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Contact <span className="text-cyan-400">Me</span>
          </h1>

          <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mt-5" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`max-w-2xl mx-auto text-lg leading-8 mb-14 ${
            darkMode ? "text-gray-400" : "text-slate-600"
          }`}
        >
          I'm currently open to job opportunities, internships, and
          collaborations. If you have a project or opportunity you'd like to
          discuss, feel free to reach out.
        </motion.p>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="text-left"
          >
            <h2
              className={`text-3xl md:text-4xl font-bold mb-5 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Let's work <span className="text-cyan-400">together.</span>
            </h2>

            <p
              className={`text-lg leading-8 mb-8 ${
                darkMode ? "text-gray-400" : "text-slate-600"
              }`}
            >
              Have a project, job opportunity, or collaboration in mind? I'd
              love to hear from you. Send me a message and I'll get back to you
              as soon as possible.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:janakparmar9714@gmail.com"
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                  darkMode
                    ? "border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                    : "border-gray-200 bg-white hover:border-cyan-400/50 hover:bg-cyan-50"
                }`}
              >
                <FaEnvelope className="text-2xl text-cyan-400" />

                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p
                    className={`font-medium ${
                      darkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    janakparmar9714@gmail.com
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/parmarjanak9714"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                  darkMode
                    ? "border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                    : "border-gray-200 bg-white hover:border-cyan-400/50 hover:bg-cyan-50"
                }`}
              >
                <FaGithub className="text-2xl text-cyan-400" />

                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p
                    className={`font-medium ${
                      darkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    github.com/parmarjanak9714
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/janak-parmar08111997"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                  darkMode
                    ? "border-white/10 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-400/5"
                    : "border-gray-200 bg-white hover:border-cyan-400/50 hover:bg-cyan-50"
                }`}
              >
                <FaLinkedin className="text-2xl text-cyan-400" />

                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p
                    className={`font-medium ${
                      darkMode ? "text-white" : "text-slate-800"
                    }`}
                  >
                    linkedin.com/in/janak-parmar08111997
                  </p>
                </div>
              </a>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-3 mt-7">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-slate-600"
                }`}
              >
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`rounded-2xl border p-6 md:p-8 ${
              darkMode
                ? "border-white/10 bg-white/5"
                : "border-gray-200 bg-white shadow-sm"
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Send me a message
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className={`w-full rounded-xl border px-4 py-2.5 outline-none transition-all duration-300 ${
                    darkMode
                      ? "border-white/10 bg-black/30 text-white placeholder:text-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                      : "border-gray-200 bg-slate-50 text-slate-900 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                  }`}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className={`w-full rounded-xl border px-4 py-2.5 outline-none transition-all duration-300 ${
                    darkMode
                      ? "border-white/10 bg-black/30 text-white placeholder:text-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                      : "border-gray-200 bg-slate-50 text-slate-900 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                  }`}
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="What would you like to discuss?"
                  className={`w-full rounded-xl border px-4 py-2.5 outline-none transition-all duration-300 ${
                    darkMode
                      ? "border-white/10 bg-black/30 text-white placeholder:text-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                      : "border-gray-200 bg-slate-50 text-slate-900 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                  }`}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  Message
                </label>

                <textarea
                  rows="4"
                  name="message"
                  required
                  placeholder="Write your message..."
                  className={`w-full rounded-xl border px-4 py-2.5 outline-none resize-none transition-all duration-300 ${
                    darkMode
                      ? "border-white/10 bg-black/30 text-white placeholder:text-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
                      : "border-gray-200 bg-slate-50 text-slate-900 placeholder:text-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/10"
                  }`}
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-500 py-3.5 text-white font-semibold transition-all duration-300 hover:bg-cyan-600 hover:scale-[1.01] shadow-lg shadow-cyan-500/20"
              >
                Send Message
              </button>
              {status && (
                <p
                  className={`mt-4 text-center font-medium ${
                    status.includes("successfully")
                      ? "text-green-500"
                      : status === "Sending..."
                        ? "text-cyan-500"
                        : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

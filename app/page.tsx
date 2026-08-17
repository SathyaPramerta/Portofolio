'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Code2, LayoutTemplate, User, ExternalLink } from 'lucide-react';
import Link from 'next/link';

// Komponen SVG manual untuk ikon GitHub
const GithubIcon = ({ size = 24, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 relative overflow-hidden">
      {/* Background Modern */}
      <div className="fixed inset-0 z-[-1] bg-slate-950">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20 blur-[120px] bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Hero Section dengan FOTO (Lebih ke tengah karena tidak ada navbar atas) */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-center text-center min-h-[90vh] justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="relative mb-8 group">
            {/* Efek Glow di belakang foto */}
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            {/* Wadah Foto */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-900 overflow-hidden shadow-2xl">
              <Image
                src="/profile.jpeg"
                alt="I Gusti Putu Bagus Sathya Pramerta"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            Available for Internship
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-tight"
          >
            Building Digital <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Experiences.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Hi, I'm{' '}
            <strong className="text-white">
              I Gusti Putu Bagus Sathya Pramerta
            </strong>
            . An Informatics Engineering student at INSTIKI specializing in Web
            Development. Turning complex problems into elegant, scalable
            solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center"
          >
            <a
              href="mailto:pramertasathya@gmail.com"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <Mail
                size={18}
                className="group-hover:text-blue-400 transition-colors"
              />{' '}
              Contact Me
            </a>
            <a
              href="https://github.com/SathyaPramerta"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-slate-300 bg-transparent border border-slate-700 rounded-full transition-all hover:border-slate-500 hover:text-white hover:scale-105"
            >
              <GithubIcon size={18} /> GitHub
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="bg-slate-900/50 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors duration-500"></div>

            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
              <User className="text-blue-400" /> About Me
            </h3>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              I am a 5th-semester Informatics Engineering student at Institut
              Bisnis dan Teknologi Indonesia (INSTIKI) with a{' '}
              <span className="text-white font-bold bg-blue-500/20 px-2 py-0.5 rounded">
                3.86 GPA
              </span>
              . Highly passionate about full-stack web development, data
              analysis, and creating intuitive user interfaces.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Equipped with knowledge from academic coursework and a Full Stack
              Developer Bootcamp (Harisenin), I am currently seeking a Web
              Developer or Mobile Developer internship opportunity to apply my
              technical skills in a real-world industry environment.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <h3 className="text-3xl font-bold mb-12 flex items-center gap-3 text-white">
            <Code2 className="text-blue-400" /> Featured Work
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
            <motion.div variants={itemVariants}>
              <Link href="/project/go-nippon" className="group flex flex-col h-full bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
                <div className="h-48 w-full bg-gradient-to-br from-slate-800 to-slate-900 border-b border-white/5 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Code2 size={48} className="text-slate-700 group-hover:text-blue-500/50 transition-colors duration-500 transform group-hover:scale-110" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">go_nippon</h4>
                  </div>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow">
                    Japan Web-Based Ticketing Information System. Click to view feature details, tech stack, and GitHub repository links.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-medium mt-auto">
                    <span className="bg-slate-800/80 text-slate-300 px-3 py-1.5 rounded-lg border border-white/5">PHP Native</span>
                    <span className="bg-slate-800/80 text-slate-300 px-3 py-1.5 rounded-lg border border-white/5">MySQL</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={itemVariants}>
              <Link href="/project/buildwjax" className="group flex flex-col h-full bg-slate-900/40 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]">
                <div className="h-48 w-full bg-gradient-to-bl from-slate-800 to-slate-900 border-b border-white/5 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <LayoutTemplate size={48} className="text-slate-700 group-hover:text-cyan-500/50 transition-colors duration-500 transform group-hover:scale-110" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">BuildWJax</h4>
                  </div>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow">
                    Mobile-Based PC Assembly Simulation System. Click to view system details, backend API integration, and project documentation.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-medium mt-auto">
                    <span className="bg-slate-800/80 text-slate-300 px-3 py-1.5 rounded-lg border border-white/5">Java</span>
                    <span className="bg-slate-800/80 text-slate-300 px-3 py-1.5 rounded-lg border border-white/5">Firebase</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto pb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold mb-10 text-center text-white">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto">
            {[
              'Java',
              'Python',
              'PHP',
              'JavaScript',
              'Laravel 12',
              'React.js',
              'Next.js',
              'MySQL',
              'PostgreSQL',
              'Firebase',
              'Tailwind CSS',
              'Figma',
              'Git',
            ].map((skill) => (
              <motion.span
                key={skill}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="bg-slate-900/50 backdrop-blur-md text-slate-300 px-6 py-3 rounded-full text-sm font-medium border border-white/10 hover:border-blue-500/50 hover:text-white transition-colors cursor-default shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-slate-500 text-sm bg-slate-950/50 pb-24 md:pb-8">
        <p>
          &copy; {new Date().getFullYear()} I Gusti Putu Bagus Sathya Pramerta.
          Crafted with Next.js & Tailwind.
        </p>
      </footer>

      {/* --- FLOATING DOCK MENU (PENGGANTI NAVBAR) --- */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="flex items-center gap-1 md:gap-2 px-3 py-2 bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-blue-500/10">
          <a
            href="#about"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all group"
          >
            <User
              size={18}
              className="group-hover:text-blue-400 transition-colors"
            />
            <span className="text-sm font-semibold hidden md:block">About</span>
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all group"
          >
            <Code2
              size={18}
              className="group-hover:text-blue-400 transition-colors"
            />
            <span className="text-sm font-semibold hidden md:block">Work</span>
          </a>
          <a
            href="#skills"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-all group"
          >
            <LayoutTemplate
              size={18}
              className="group-hover:text-blue-400 transition-colors"
            />
            <span className="text-sm font-semibold hidden md:block">
              Skills
            </span>
          </a>
        </div>
      </motion.div>
      {/* --- AKHIR FLOATING DOCK MENU --- */}
    </main>
  );
}
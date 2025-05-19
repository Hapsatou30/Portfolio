"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Menu,
  X,
  GitlabIcon as GitHub,
  Linkedin,
  Mail,
  Code,
  Database,
  FigmaIcon,
  Server,
  Globe,
  Monitor,
  ChevronRight,
  Moon,
  Sun,
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("accueil")
  const [scrollY, setScrollY] = useState(0)
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("light-mode", savedTheme === "light")
    } else {
      // Check user's system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
      document.documentElement.classList.toggle("light-mode", !prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("light-mode", newTheme === "light")
  }

  const [roleIndex, setRoleIndex] = useState(0)
  const roles = [
    "Développeuse Full Stack",
    "Développeuse Python",
    "Développeuse Laravel",
    "Développeuse React",
    "Développeuse Angular",
    "Développeuse Vue.js",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [roles.length])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section based on scroll position
      const sections = ["contact", "projets", "competences", "a-propos", "accueil"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#a-propos", label: "À propos" },
    { href: "#competences", label: "Compétences" },
    { href: "#projets", label: "Projets" },
    { href: "#contact", label: "Contact" },
  ]

  const skills = [
    { name: "Laravel", icon: <Server className="w-8 h-8" />, level: "Expert", category: "Backend" },
    { name: "Python", icon: <Code className="w-8 h-8" />, level: "Avancé", category: "Backend" },
    { name: "React", icon: <Monitor className="w-8 h-8" />, level: "Expert", category: "Frontend" },
    { name: "Angular", icon: <Monitor className="w-8 h-8" />, level: "Avancé", category: "Frontend" },
    { name: "Vue.js", icon: <Monitor className="w-8 h-8" />, level: "Avancé", category: "Frontend" },
    { name: "Docker", icon: <Server className="w-8 h-8" />, level: "Intermédiaire", category: "DevOps" },
    { name: "WordPress", icon: <Globe className="w-8 h-8" />, level: "Expert", category: "CMS" },
    { name: "Figma", icon: <FigmaIcon className="w-8 h-8" />, level: "Avancé", category: "Design" },
    { name: "MySQL", icon: <Database className="w-8 h-8" />, level: "Avancé", category: "Database" },
    { name: "UML", icon: <Code className="w-8 h-8" />, level: "Avancé", category: "Design" },
    { name: "HTML", icon: <Code className="w-8 h-8" />, level: "Expert", category: "Frontend" },
    { name: "CSS", icon: <Code className="w-8 h-8" />, level: "Expert", category: "Frontend" },
  ]

  const projects = [
    {
      title: "Sama Ecole",
      description: "Une plateforme de gestion scolaire dédié aux élèves, parents, enseignants et école.",
      image: "/samaecole.png",
      tags: ["Laravel", "Vue.js", "MySQL", "Docker"],
      link: "#",
    },
    {
      title: "NWS'Delivery ",
      description: "Tableau de bord d'analyse de données avec visualisations interactives et rapports en temps réel.",
      image: "/restaurant.png",
      tags: ["React", "Django", "Mysql"],
      link: "#",
    },
    {
      title: "quizz islamique",
      description: "Système de gestion de contenu sur mesure pour une entreprise de médias.",
      image: "/quizz.png",
      tags: ["WordPress", "PHP", "MySQL", "JavaScript"],
      link: "#",
    },
    {
      title: "Docsen Online",
      description: "Application mobile hybride pour la gestion de tâches et la productivité.",
      image: "/docsen.png",
      tags: ["Laravel", "Vue.js", "Docker", "Mysql"],
      link: "#",
    },
  ]

  return (
    <div
      className={`min-h-screen overflow-x-hidden ${
        theme === "dark" ? "bg-[#0f172a] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div
          className={`absolute top-0 right-0 w-1/3 h-1/3 rounded-full blur-3xl ${
            theme === "dark"
              ? "bg-gradient-to-br from-amber-600/30 to-transparent"
              : "bg-gradient-to-br from-amber-400/20 to-transparent"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full blur-3xl ${
            theme === "dark"
              ? "bg-gradient-to-tr from-emerald-600/20 to-transparent"
              : "bg-gradient-to-tr from-emerald-400/10 to-transparent"
          }`}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? theme === "dark"
              ? "bg-[#0f172a]/90 backdrop-blur-md shadow-lg"
              : "bg-white/90 backdrop-blur-md shadow-lg text-gray-900"
            : theme === "dark"
              ? "bg-transparent text-white"
              : "bg-transparent text-gray-900"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a
            href="#"
            className={`text-2xl font-bold bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hapsatou
          </motion.a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`relative px-2 py-1 transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "text-teal-400"
                    : theme === "dark"
                      ? "hover:text-teal-400 text-white"
                      : "hover:text-teal-600 text-gray-800"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {link.label}
                {activeSection === link.href.substring(1) && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-400 to-indigo-500"
                    layoutId="activeSection"
                  ></motion.span>
                )}
              </motion.a>
            ))}

            {/* Theme toggle button */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === "dark"
                  ? "bg-gray-800 text-yellow-300 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme toggle button */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                theme === "dark"
                  ? "bg-gray-800 text-yellow-300 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <button className="p-2 rounded-md focus:outline-none" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            className={`md:hidden ${
              theme === "dark" ? "bg-[#1e293b] text-white" : "bg-white text-gray-800"
            } py-4 px-6 absolute w-full shadow-lg`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "text-emerald-400"
                      : theme === "dark"
                        ? "hover:text-emerald-400"
                        : "hover:text-emerald-600"
                  }`}
                  onClick={toggleMenu}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="block">Bonjour, je suis</span>
                <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
                  Hapsatou
                </span>
              </h1>
              <h2 className={`text-2xl md:text-3xl mb-6 h-10 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="block"
                >
                  {roles[roleIndex]}
                </motion.span>
              </h2>
              <p className={`text-lg mb-8 max-w-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Je crée des applications web modernes, performantes et esthétiques avec les dernières technologies.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="#contact"
                  className="relative overflow-hidden px-8 py-3 rounded-full font-medium group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 to-indigo-600 transition-all duration-300 group-hover:scale-105"></span>
                  <span className="relative">Me contacter</span>
                </motion.a>
                <motion.a
                  href="#projets"
                  className="px-8 py-3 rounded-full font-medium border border-gray-600 hover:border-emerald-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir mes projets
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-96 h-96 md:w-[28rem] md:h-[28rem]">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-amber-600 blur-xl opacity-50 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                  <Image src="IMG_0635.jpeg" alt="Hapsatou" fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <span className="text-sm text-gray-400 mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2"
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="a-propos" className="relative py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 z-10">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">À propos de moi</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
             <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-amber-600/20 rounded-xl blur-xl"></div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                <Image
                  src="/bureau.png"
                  alt="Hapsatou au travail"
                  fill
                />
              </div>
            </div>

            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
                Développeuse Full Stack 
              </h3>
              <div className={`space-y-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                <p>
                  Avec plus de 3 ans d'expérience dans le développement web, je suis spécialisée dans la création
                  d'applications web modernes et performantes.
                </p>
                <p>
                  Ma passion pour les nouvelles technologies me pousse constamment à apprendre et à me perfectionner
                  dans mon domaine. J'aime relever des défis techniques et trouver des solutions créatives aux problèmes
                  complexes.
                </p>
                <p>
                  Mon expertise couvre l'ensemble du stack technologique, du développement frontend , au développement backend , en passant par la gestion de bases de
                  données et le déploiement.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Code className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Frontend</h4>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center">
                    <Server className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Backend</h4>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <Database className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Database</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="relative py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 z-10">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Mes compétences</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`rounded-xl p-6 border transition-all group ${
                  theme === "dark"
                    ? "bg-[#1e293b] border-gray-700 hover:border-emerald-500/50"
                    : "bg-white border-gray-200 hover:border-emerald-500/50 shadow-sm"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-amber-600/20 flex items-center justify-center mr-4 group-hover:from-emerald-500/30 group-hover:to-amber-600/30 transition-all">
                    <div className="text-emerald-400 group-hover:text-emerald-300 transition-colors">{skill.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                      {skill.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="relative py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 z-10">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Mes projets</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative overflow-hidden rounded-xl mb-6 aspect-video group-hover:shadow-xl group-hover:shadow-emerald-500/10 transition-all">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <a
                      href={project.link}
                      className="px-6 py-3 bg-[#0f172a]/80 backdrop-blur-sm rounded-full font-medium hover:bg-[#0f172a] transition-colors"
                    >
                      Voir le projet
                    </a>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/10 to-amber-600/10 border border-emerald-500/20 text-emerald-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  En savoir plus <ChevronRight size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="https://github.com/hapsatou30"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-full font-medium bg-gradient-to-r from-emerald-500/20 to-amber-600/20 hover:from-emerald-500/30 hover:to-amber-600/30 border border-emerald-500/30 transition-all"
            >
              <GitHub size={18} className="mr-2" />
              Voir plus sur GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 z-10">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Me contacter</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-indigo-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
                Discutons de votre projet
              </h3>
              <p className={`mb-8 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter. Je suis toujours à la
                recherche de nouveaux défis et de collaborations intéressantes.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500/10 to-amber-600/10 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className={`font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>Email</h4>
                    <a href="mailto:hapsatou@example.com" className="text-lg hover:text-emerald-400 transition-colors">
                      hapsatou@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500/10 to-amber-600/10 flex items-center justify-center mr-4">
                    <Linkedin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className={`font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>LinkedIn</h4>
                    <a href="#" className="text-lg hover:text-emerald-400 transition-colors">
                      linkedin.com/in/hapsatou
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500/10 to-amber-600/10 flex items-center justify-center mr-4">
                    <GitHub className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className={`font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>GitHub</h4>
                    <a
                      href="https://github.com/hapsatou30"
                      className="text-lg hover:text-emerald-400 transition-colors"
                    >
                      github.com/hapsatou30
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative">
                <div
                  className={`absolute -inset-4 rounded-xl blur-xl ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-emerald-500/10 to-amber-600/10"
                      : "bg-gradient-to-r from-emerald-500/5 to-amber-600/5"
                  }`}
                ></div>
                <div
                  className={`relative p-8 rounded-xl border ${
                    theme === "dark" ? "bg-[#1e293b] border-gray-700" : "bg-white border-gray-200 shadow-md"
                  }`}
                >
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className={`block mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors ${
                          theme === "dark"
                            ? "bg-[#0f172a] border-gray-700 text-white"
                            : "bg-gray-50 border-gray-200 text-gray-900"
                        }`}
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className={`block mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors ${
                          theme === "dark"
                            ? "bg-[#0f172a] border-gray-700 text-white"
                            : "bg-gray-50 border-gray-200 text-gray-900"
                        }`}
                        placeholder="Votre email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className={`block mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors ${
                          theme === "dark"
                            ? "bg-[#0f172a] border-gray-700 text-white"
                            : "bg-gray-50 border-gray-200 text-gray-900"
                        }`}
                        placeholder="Votre message"
                      ></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-emerald-500 to-amber-600 hover:from-emerald-400 hover:to-amber-500 font-medium transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Envoyer le message
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative py-12 z-10 border-t ${theme === "dark" ? "border-gray-800" : "border-gray-200"}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a
                href="#"
                className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent"
              >
                Hapsatou
              </a>
              <p className={`mt-2 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>Développeuse Full Stack</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-emerald-500/20 transition-colors"
              >
                <GitHub size={18} className="text-gray-300 hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-emerald-500/20 transition-colors"
              >
                <Linkedin size={18} className="text-gray-300 hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#1e293b] flex items-center justify-center hover:bg-emerald-500/20 transition-colors"
              >
                <Mail size={18} className="text-gray-300 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              &copy; {new Date().getFullYear()} Hapsatou. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

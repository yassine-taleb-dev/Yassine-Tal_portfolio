"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Download,
  Code2,
  Database,
  Server,
  ArrowRight,
  MapPin,
  Star,
  Zap,
  Globe,
  Award,
  Users,
  TrendingUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const projects = [
    {
      title: "StockGenius",
      description:
        "StockGenius is an intelligent web application designed to simplify and optimize inventory management for businesses of all sizes. Built with Flask and powered by a MySQL database, it offers a seamless way to track products, manage stock levels, and handle customer orders efficiently.",
      techStack: ["Python 3.11+", "Flask", "SQLAlchemy ", "Angular 12 & TypeScript 4.3+", "ESP32 / Arduino Uno"],
      liveUrl: "https://drive.google.com/file/d/1tqs1U3kXG4-pJpQUyG-P9e2FjAXVeY3g/view?usp=drive_link",
      githubUrl: "https://github.com/yassine-taleb-dev/StockGenius",
      featured: true,
      metrics: { users: "200", uptime: "70%", performance: "< 100ms" },
      image: "/stock.jpg",
    },
    {
      title: "Portfolio_LocationTVM_Pitch",
      description:
        "Location TVM is a platform for connecting individuals for the rental of bikes, scooters and motos. It aims to simplify access to environmentally friendly transportation by connecting owners with urban or rural users looking for occasional mobility solutions",
      techStack: ["Python", "Flask", "JS", "MySQL", "CSS","Bootstrap"],
      liveUrl: "https://drive.google.com/file/d/1sMdlq-8JvQFNY-Gz8IyfQ-cDOtU36rTU/view?usp=drive_link",
      githubUrl: "https://github.com/achrafkassimi/Portfolio_LocationTVM_Pitch",
      featured: true,
      metrics: { accuracy: "94%", reviews: "100K+", time_saved: "40%" },
      image: "/v1.png",
    }, 
  ]

  const skills = {
    
    "FrontEnd Engineering": {
      items: ["React", "Next.js", "Angular", "Vue.js", "TypeScript"],
      icon: <Server className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
    },
    "BackEnd Engineering": {
      items: ["SpringBoot", "Node.js", "Python", "Java", ],
      icon: <Code2 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    "Data & ML": {
      items: ["MySQL"," PostgreSQ","Xampp" ],
      icon: <Database className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
    },
    "Cloud & DevOps": {
      items: ["Kubernetes", "Docker", "AWS","Nginx",],
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
    },
  }

  const achievements = [
    { icon: <Award className="w-6 h-6" />, label: "Software Development", value: "2 Years" },
    { icon: <Users className="w-6 h-6" />, label: "Team Size", value: "4+ Devs" },
    { icon: <TrendingUp className="w-6 h-6" />, label: "System Scale", value: "100k+ Users" },
    { icon: <Star className="w-6 h-6" />, label: "Open Source", value: "1K+ Stars" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-teal-950/20"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.1), transparent 40%)`,
          }}
        ></div>
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Yassine Taleb
            </div>
            <div className="hidden md:flex space-x-8">
              {["about", "projects", "skills", "contact"].map((section) => (
                <Link
                  key={section}
                  href={`#${section}`}
                  className={`relative text-slate-300 hover:text-white transition-all duration-300 capitalize ${
                    activeSection === section ? "text-emerald-400" : ""
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center px-6 pt-20">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  
                </div>

                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-white">Hi, I'm</span>
                  <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                    Yassine Taleb
                  </span>
                </h1>

                <div className="space-y-2">
                  <h2 className="text-3xl lg:text-4xl text-slate-300 font-light">FullStack Spring Boot,React Engineer</h2>
                  <div className="flex items-center space-x-4 text-slate-400">
                    <span>•</span>
                    <span>Software Developer</span>
                    <span>•</span>
                    <span>Digital Entrepreneur</span>
                    <span>•</span>
                    <span>Open Source Contributor</span>
                  </div>
                </div>

                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                I build scalable distributed systems with <span className="text-emerald-400 font-semibold">Spring Boot and React</span>
                I care about clean architecture,{" "}
                  <span className="text-teal-400 font-semibold">performance optimization, and mentoring future engineers.</span>,
                  
                </p>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">{achievement.value}</div>
                      <div className="text-sm text-slate-400">{achievement.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
  <Button
    size="lg"
    onClick={() => window.location.href = 'taleb.yassine95@gmail.com'}
    className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
  >
    <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
    Let's Connect
    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
  </Button>

  <Button
    variant="outline"
    size="lg"
    onClick={() => window.open('CV Resume.pdf', '_blank')}
    className="group border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-emerald-500 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
  >
    <Download className="w-5 h-5 mr-2 group-hover:bounce transition-transform duration-300" />
    Télécharger CV
  </Button>
</div>

              <div className="flex space-x-6">
                {[
                  { icon: <Github className="w-6 h-6" />, href: "https://github.com/yassine-taleb-dev", color: "hover:text-white" },
                  { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/yassine-taleb-73a421218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfAk9z1rkT8SSv1TM4FB4Cw%3D%3D", color: "hover:text-emerald-400" },
                  { icon: <Mail className="w-6 h-6" />, href: "#", color: "hover:text-teal-400" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className={`text-slate-400 ${social.color} transition-all duration-300 hover:scale-125 hover:-translate-y-1`}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="relative w-96 h-96 mx-auto">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full border border-emerald-500/20 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border border-teal-500/20 animate-spin-reverse"></div>
                <div className="absolute inset-8 rounded-full border border-cyan-500/20 animate-spin-slow"></div>

                {/* Gradient background */}
                <div className="absolute inset-12 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

                {/* Profile image */}
                <Image
                  src="/per.jpeg?height=320&width=320"
                  alt="Yassine Taleb"
                  width={320}
                  height={320}
                  className="absolute inset-12 rounded-full object-cover border-2 border-slate-700 shadow-2xl hover:scale-105 transition-transform duration-500"
                />

                {/* Floating tech icons */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center animate-float">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center animate-float-delayed">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative">
                <Image
                  src="/image.jpeg?height=500&width=500"
                  alt="Yassine Taleb Professional"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-3xl object-cover shadow-2xl border border-slate-700/50 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Award className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-500/30">
                  <span className="text-emerald-300 text-sm font-medium">About Me</span>
                </div>
                <h2 className="text-5xl font-bold text-white leading-tight">
                  Building the{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Future
                  </span>{" "}
                  of Software
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
              </div>

              <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                <p>
                  With over<span className="text-emerald-400 font-semibold"> 2 years</span>  of experience in software development, I've built and deployed more than 15 production-grade 
                  applications and scalable systems{" "}
                  <span className="text-teal-400 font-semibold">My skill</span> 
                  <span className="text-green-400 font-semibold"> set ranges from low-level performance tuning to making high-impact architectural decisions.</span>
                </p>
                <p>
                  I specialize in <span className="text-emerald-400 font-semibold">distributed systems</span>,
                  <span className="text-teal-400 font-semibold"> with a strong focus on performance,clean architecture,</span> and
                  <span className="text-green-400 font-semibold">  long-term system reliability.</span>My mission is to build software that is not only functionally robust but also performant,
                   maintainable, and scalable.
                </p>
                <p>
                 Beyond writing code, I’m deeply invested in mentoring engineers, {" "}
                  <span className="text-emerald-400 font-semibold">contributing to open source projects, </span> speaking at{" "}
                  <span className="text-teal-400 font-semibold">international tech conferences, </span> and fostering engineering
                  <span className="text-green-400 font-semibold">  cultures where excellence</span> and collaboration thrive.
                </p>
              </div>

              <div className="flex items-center space-x-6 text-slate-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  <span>MOHAMMEDIA, Morocco</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-teal-400" />
                  <span>Remote Friendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-500/30">
              <span className="text-emerald-300 text-sm font-medium">Featured Work</span>
            </div>
            <h2 className="text-5xl font-bold text-white leading-tight">
              Enterprise-Scale{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Projects that highlight my experience in developing scalable 
            and efficient systems across multiple domains.
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-500/10 ${
                  project.featured ? "lg:col-span-1" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className={`grid ${project.featured ? "lg:grid-cols-2" : "md:grid-cols-2"} gap-6`}>
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={project.featured ? 600 : 500}
                      height={project.featured ? 400 : 300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                      <Link href={project.liveUrl} target="_blank" className="flex items-center">

                        <Button
                          size="sm"
                          className="bg-emerald-600 hover:bg-emerald-500 text-white transition-all duration-300 hover:scale-105"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        </Link>
                        <Link href={project.githubUrl} target="_blank" className="flex items-center"><Button
                          size="sm"
                          variant="outline"
                          className="border-slate-400 text-slate-200 hover:bg-slate-800 hover:border-emerald-500 transition-all duration-300 hover:scale-105 bg-slate-900/80"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        </Link>
                        
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <CardTitle className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-slate-300 leading-relaxed text-base">
                        {project.description}
                      </CardDescription>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-3">
                        {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                          <div
                            key={metricIndex}
                            className="text-center p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/30 transition-colors duration-300"
                          >
                            <div className="text-lg font-bold text-emerald-400">{value}</div>
                            <div className="text-xs text-slate-400 capitalize">{key.replace("_", " ")}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="border-slate-600 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-500/30">
              <span className="text-emerald-300 text-sm font-medium">Technical Expertise</span>
            </div>
            <h2 className="text-5xl font-bold text-white leading-tight">
              Senior-Level{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Mastery
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Deep expertise across the entire technology stack, from system design to implementation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, data], index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${data.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardHeader className="text-center space-y-4 relative z-10">
                  <div
                    className={`mx-auto w-20 h-20 bg-gradient-to-r ${data.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-white">{data.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                    {category}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {data.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300 hover:scale-105"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-500/30">
              <span className="text-emerald-300 text-sm font-medium">Let's Connect</span>
            </div>
            <h2 className="text-5xl font-bold text-white leading-tight">
              Ready to Build{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Whether you're planning a new project or simply want to connect, I'm always open to new opportunities and meaningful collaborations. 
            Let's build something exceptional together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6" />,
                    title: "Email",
                    value: "taleb.yassine95@gmail.com",
                    color: "from-emerald-500 to-teal-500",
                  },
                  {
                    icon: <Phone className="w-6 h-6" />,
                    title: "Phone",
                    value: "+212 7 01 10 60 60",
                    color: "from-green-500 to-emerald-500",
                  },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <div className="text-white">{contact.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg">{contact.title}</h3>
                      <p className="text-slate-300">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Connect with me</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Github className="w-6 h-6" />, href: "https://github.com/yassine-taleb-dev", color: "hover:bg-slate-600" },
                    { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/yassine-taleb-73a421218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BeA%2BV%2Bc2aR4iYGT%2FspNrPyg%3D%3D", color: "hover:bg-emerald-600" },
                    { icon: <Mail className="w-6 h-6" />, href: "https://mail.google.com/mail/u/4/#inbox", color: "hover:bg-teal-600" },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className={`w-16 h-16 bg-slate-800 ${social.color} rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group border border-slate-700`}
                    >
                      <div className="text-slate-300 group-hover:text-white transition-colors duration-300">
                        {social.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <form
  action="https://formspree.io/f/xwpbdwon"
  method="POST"
>
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white">Send a Message</CardTitle>
                <CardDescription className="text-slate-300">
                  Let's discuss your next project or engineering challenge.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Name</label>
                    <Input
                      placeholder="Your name"
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <Textarea
                    placeholder="Tell me about your project or what you'd like to discuss..."
                    rows={5}
                    name="message"
                    className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20 resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 group">
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-slate-800/50">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                Yassine Taleb
              </div>
              <p className="text-slate-400">FullStack Spring Boot,React Engineer</p>
              <p className="text-slate-500 text-sm mt-1">Building the future, one system at a time</p>
            </div>

            <div className="flex space-x-8">
              {["about", "projects", "skills", "contact"].map((link) => (
                <Link
                  key={link}
                  href={`#${link}`}
                  className="text-slate-400 hover:text-white transition-colors duration-300 capitalize hover:scale-105"
                >
                  {link}
                </Link>
              ))}
            </div>

            <div className="flex space-x-4">
              {[
                { icon: <Github className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                { icon: <Mail className="w-5 h-5" />, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800/50 mt-12 pt-8 text-center">
            <p className="text-slate-500">
              &copy; {new Date().getFullYear()} Yassine Taleb. Crafted with precision and passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

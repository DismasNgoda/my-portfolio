import React, { useState, useEffect } from 'react';
import IMG_0785 from './images/IMG_0785.JPG';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Code, 
  BarChart3, 
  PieChart, 
  Database,
  Globe,
  Zap,
  Layers,
  TrendingUp,
  Monitor,
  Cpu,
  Cloud,
  ArrowRight,
  ExternalLink,
  MapPin,
  Calendar,
  Bot,
  Cog,
  Smartphone,
  Palette
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: 'React/Next.js', level: 95, icon: Code },
    { name: 'Python/Django', level: 92, icon: Cpu },
    { name: 'Data Visualization', level: 98, icon: BarChart3 },
    { name: 'Machine Learning', level: 88, icon: Database },
    { name: 'Cloud Architecture', level: 85, icon: Cloud },
    { name: 'Dashboard Design', level: 96, icon: Monitor },
    { name: 'AI & Automation', level: 90, icon: Bot },
    { name: 'Mobile Development', level: 82, icon: Smartphone },
    { name: 'UI/UX Design', level: 87, icon: Palette }
  ];

  const projects = [
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Interactive dashboard processing 1M+ data points with live updates, built with React, D3.js, and WebSocket connections.',
      tech: ['React', 'D3.js', 'Python', 'WebSocket', 'PostgreSQL'],
      image: '🚀',
      metrics: ['99.9% Uptime', '< 200ms Response', '1M+ Data Points'],
      url: 'https://real-time-analytics-dashboard-nvk3.vercel.app/'
    },
    {
      title: 'Podcast Trends Analytics',
      description: 'A comprehensive "Google Trends for podcasts" tool using React with interactive charts and sample data.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Docker'],
      image: '🤖',
      metrics: ['85% Accuracy', '50% Time Saved', 'Auto Insights'],
      url: 'https://podcast-trend-analytics-d9uiapp8m-dismasngodas-projects.vercel.app/'
    },
    {
      title: 'Sample Drug Inventory Africa',
      description: 'Interactive 3D visualization of drug inventory in Africa with real-time tracking and predictive analytics.',
      tech: ['Three.js', 'React', 'Node.js', 'MongoDB', 'AWS'],
      image: '🌍',
      metrics: ['10 Countries', '3D Interactive', 'Real-time'],
      url: 'https://africa-drug-inventory.vercel.app/'
    },
    {
      title: 'HIV Situation in Kenya - Simulation',
      description: 'Comprehensive simulation platform with fake data on the HIV situation in Kenya.',
      tech: ['React', 'Python', 'Plotly', 'Redis', 'Kubernetes'],
      image: '📊',
      metrics: ['8 Counties', 'Risk Modeling', 'Real-time'],
      url: 'https://hiv-sismulation-data.vercel.app/'
    }
  ];

  const experiences = [
    {
      role: 'Advanced AI Trainer (Software Developer)',
      company: 'Invisible Technologies Inc.',
      duration: '2024 - Present',
      description: 'Leads the development of data visualization platforms serving 100K+ users globally. Built real-time dashboards and ML-powered analytics.',
      achievements: ['40% performance improvement', 'Led team of 5 engineers']
    },
    {
      role: 'Technical Writer/Web Developer',
      company: 'Freelance',
      duration: '2019 - Present',
      description: 'Creates interactive content and data stories that simplifies complex and technical insights into actionable items.',
      achievements: ['Built 10+ custom visualizations', 'Improved user engagement by 100%']
    },
    {
      role: 'Data Officer',
      company: 'Aids Healthcare Foundation',
      duration: '2019 - 2020',
      description: 'Liaised with healthcare providers and program teams across supported sites to ensure timely data collection, submission, and resolution of inconsistencies.',
      achievements: ['Streamlined data collection process', 'Supported patient privacy according to outlined data protection protocols']
    },
    {
      role: 'ICT Officer',
      company: 'Phoenix Aviation Ltd',
      duration: '2019 - 2019',
      description: 'Led the performance tuning and monitoring of mission-critical databases that support flight operations.',
      achievements: ['Improved team collaboration', 'Enhanced the management of Hybrid ETL Workflows']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Network Background */}
      <div className="fixed inset-0 z-0">
        {/* Floating Network Nodes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Moving Network Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(168, 85, 247, 0.4)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.4)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              filter="url(#glow)"
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </svg>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute border border-purple-400/20 rotate-45 animate-spin ${
                i % 3 === 0 ? 'w-16 h-16' : i % 3 === 1 ? 'w-12 h-12 rounded-full' : 'w-8 h-8'
              }`}
              style={{
                left: `${10 + (i * 15)}%`,
                top: `${20 + (i * 10)}%`,
                animationDuration: `${10 + i * 2}s`,
                animationDelay: `${i * 1}s`
              }}
            />
          ))}
        </div>
        
        {/* Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x * 0.05,
            top: mousePosition.y * 0.05,
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            right: mousePosition.x * 0.03,
            bottom: mousePosition.y * 0.03,
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"
          style={{
            left: `${50 + Math.sin(Date.now() * 0.001) * 20}%`,
            top: `${50 + Math.cos(Date.now() * 0.001) * 20}%`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl">
              <img src={IMG_0785} alt="Profile" className="w-full h-full rounded-full object-cover"/>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6 animate-fade-in">
            DISMAS NGÓDA
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 animate-fade-in delay-300">
            Full-Stack Engineer & Data Visualization Expert
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in delay-500">
            Crafting epic data visualizations and scalable applications that transform complex data into stunning, actionable insights. 
            Specializing in React, Python, SQL, Ruby, SPSS, and advanced analytics platforms (PowerBI and Tableau).
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in delay-700">
            <a 
              href="https://drive.google.com/file/d/1C6-997MumcuuaWRQcc5JRI-eeyW219S8/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </a>
            <a 
              href="mailto:dismasngoda@gmail.com"
              className="group flex items-center gap-2 border-2 border-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
          
          <div className="flex justify-center gap-6 animate-fade-in delay-1000">
            <a href="https://github.com/DismasNgoda" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/dismas-ng-oda-851426104/" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://my-portfolio-bice-nine-34.vercel.app/" className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
              <Globe className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="group bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg group-hover:animate-pulse">
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="absolute right-0 -top-8 text-sm text-purple-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Epic Project Showcase
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="group bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="p-8">
                  <div className="text-6xl mb-4 text-center group-hover:animate-bounce">
                    {project.image}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric) => (
                      <div key={metric} className="text-center">
                        <div className="text-sm text-purple-400 font-semibold">
                          {metric}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.role}
                className="group bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let's Build Something Epic
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to transform your data into stunning visualizations? Looking for a passionate engineer 
            who can deliver scalable solutions? Let's connect and create something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>Available for Remote Work Worldwide</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Zap className="w-5 h-5 text-purple-400" />
              <span>Open to Full-time & Contract Opportunities</span>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:dismasngoda@gmail.com"
              className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              Email Me
            </a>
            <a 
              href="https://calendly.com/dismasngoda"
              className="group flex items-center gap-2 border-2 border-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              Schedule Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
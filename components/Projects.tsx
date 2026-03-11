'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Banking App',
    description: 'Full-stack banking application with secure authentication and financial management.',
    longDescription: 'A modern banking application built with Next.js featuring secure user authentication, account management, transaction history, and real-time balance updates. Implements industry-standard security practices and responsive design for seamless user experience.',
    image: '/banking-app.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Appwrite'],
    github: 'https://github.com/bryhuang9/Banking-App',
  },
  {
    title: 'AI Real Estate Price Estimator',
    description: 'Machine learning model for predicting real estate prices with high accuracy.',
    longDescription: 'An intelligent real estate price estimation system utilizing advanced machine learning algorithms to predict property values. The project implements multiple ML models including regression analysis, decision trees, and neural networks to provide accurate price predictions based on various property features.',
    image: '/realestate.png',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter'],
    github: 'https://github.com/TheGhostCoder0/ECS170Group17FinalProject',
  },
  {
    title: 'CivicConnect',
    description: 'Smart City Infrastructure Platform with event-driven microservices handling 1M+ events/day.',
    longDescription: 'Production-grade smart city infrastructure monitoring platform featuring event-driven microservices architecture with Kafka streaming, real-time alerting, and comprehensive analytics. Achieves 1M+ events/day throughput with 99.97% uptime through Kubernetes HPA, Redis caching (94% hit rate), and automated monitoring with Prometheus/Grafana.',
    image: '/civicconnect.png',
    technologies: ['Next.js', 'Node.js', 'Kafka', 'PostgreSQL', 'Redis', 'Kubernetes', 'Docker'],
    github: 'https://github.com/bryhuang9/CivicConnect',
  },
  {
    title: 'Portfolio Website',
    description: 'My own portfolio website containing all my work and information.',
    longDescription: 'The Portfolio Website is my personal website developed to showcase my experiences and projects. It serves as a digital resume, providing a comprehensive view of my capabilities and achievements.',
    image: '/portfolio.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/bryhuang9/bryhuang9.github.io',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black"></div>
      <div className="absolute inset-0 mesh-gradient opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">Some things I've built</p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden"
                whileHover={{ y: -10 }}
              >
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 group-hover:border-transparent transition-colors">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-pink-400 transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-2">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center mt-12 text-gray-400"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            More projects on my{' '}
            <a
              href="https://github.com/bryhuang9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-pink-400 transition-colors font-medium underline"
            >
              GitHub
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

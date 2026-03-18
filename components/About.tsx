'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, GraduationCap, Heart } from 'lucide-react';

const details = [
  { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
  { icon: GraduationCap, label: 'Education', value: 'University of California, Davis' },
  { icon: Heart, label: 'Interests', value: 'Coding, Gaming, Snowboarding, Adventures' },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            Get to know me better
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center md:justify-start"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative">
                  <img
                    src="/pic.png"
                    alt="Brian Huang"
                    className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl object-cover shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Hello there! 👋</h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  I'm Brian Huang, I graduated with a Bachelors of Science in Computer Science from the University of California, Davis. I'm passionate about creating elegant solutions to complex problems 
                  and continuously seeking opportunities to learn and grow in the tech industry.
                </p>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 gap-4">
                {details.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="group flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all hover:shadow-lg"
                  >
                    <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                      <detail.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{detail.label}</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{detail.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="/Resume 2 - Brian Huang.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all glow-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Download Resume</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

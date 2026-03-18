'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, ExternalLink, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    position: 'Extern, Hydroficient',
    duration: 'Mar 2026 - Present',
    location: 'Remote',
    website: 'https://www.extern.com/externships/hydroficient-iot-cyber-defense-externship/',
    websiteText: 'extern.com',
    description: '- Built and secured an MQTT-based IoT pipeline using Python, TLS encryption, and device certificates to simulate and protect real-time water monitoring systems. \n-Conducted security testing, including replay attack simulations and TLS performance benchmarking, identifying vulnereabilities and tuning defenses. \n- Developed a real-time security dashboard using Streamlit to monitor pipeline health, detect threats, and track system status',
    image: '/extern.png',
  },
  {
    position: 'Alumni @ University of California, Davis',
    duration: 'Sep 2023 - Dec 2025',
    location: 'Davis, California',
    website: 'https://www.ucdavis.edu/',
    websiteText: 'ucdavis.edu',
    description: 'Transferred to University of California, Davis with a Regents Scholarship to pursue my degree in Computer Science. I will be attending UCD starting Fall 2023 as a third year student.',
    image: '/davis.png',
  },
  {
    position: 'HackDavis @ University of California, Davis',
    duration: 'April 2024',
    location: 'Davis, California',
    website: 'https://hackdavis.io/',
    websiteText: 'hackdavis.io',
    description: "Participated in HackDavis 2024, a hackathon where I collaborated with a team to create a web application for the University of California, Davis.",
    image: '/davis.png',
  },
  {
    position: 'Member @ SlugCP',
    duration: 'Jan 2022 - May 2023',
    location: 'Santa Cruz, California',
    website: null,
    websiteText: null,
    description: 'Competitive coding club at UCSC that hosted daily meetings and general meetings to practice coding. I collaborated with peers to tackle leetcode type problems as well as participate in mock interviews.',
    image: '/slug.png',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">My journey so far</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all"
              >
                {/* Header */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full p-4 sm:p-6 flex items-center justify-between hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 dark:hover:from-gray-700/50 dark:hover:to-gray-700/50 transition-all"
                >
                  <div className="flex-1 text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.duration}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" />
                  </motion.div>
                </button>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedIndex === index ? 'auto' : 0,
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 sm:p-6 pt-0 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 mb-4 text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                      {exp.website && (
                        <>
                          <span className="mx-2">•</span>
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>{exp.websiteText}</span>
                          </a>
                        </>
                      )}
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                          {exp.description.split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      </div>
                      {exp.image && (
                        <div className="md:w-32 flex items-end justify-center md:justify-end">
                          <img
                            src={exp.image}
                            alt={exp.position}
                            className="w-24 h-24 object-contain"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

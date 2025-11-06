'use client';

import { motion } from 'framer-motion';
import { Heart, Code2, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          {/* Logo/Name */}
          <motion.div
            className="text-2xl font-bold gradient-text mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Brian Huang
          </motion.div>

          {/* Quote */}
          <p className="text-gray-400 max-w-md mx-auto italic">
            "Building the future, one line of code at a time"
          </p>

          {/* Made with section */}
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-indigo-400" />
              Crafted with
            </span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
            <span>using</span>
            <span className="flex items-center gap-1.5 text-white font-medium">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Next.js 16
            </span>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-gray-500 text-sm">
              © {currentYear} Brian Huang. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Hosted on GitHub Pages
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

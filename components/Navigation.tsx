'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Estates</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link href="/" className="px-4 py-2 text-slate-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
          Home
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        <a href="#services" className="px-4 py-2 text-slate-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
          Services
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
        <a href="#contact" className="px-4 py-2 text-slate-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
          Contact
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
      </div>

      {/* CTA Button */}
      <div className="hidden md:flex items-center gap-3">
        <button className="px-6 py-2.5 text-amber-600 font-semibold hover:bg-amber-50 rounded-lg transition-colors duration-200">
          Sign In
        </button>
        <button className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-800 shadow-lg shadow-amber-600/30 transition-all duration-200 hover:shadow-xl hover:shadow-amber-600/40">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200" aria-label="Toggle menu">
        <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu Overlay Indicator */}
  <div className="md:hidden border-t border-slate-100"></div>
</nav>
  );
}
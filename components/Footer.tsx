'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
    {/* Main Footer Grid */}
    <div className="grid md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-12">
      {/* Company Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Elevate Living</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Discover extraordinary properties and exceptional investment opportunities in the world"s most coveted locations.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 002.856-3.708 9.966 9.966 0 01-2.836.756 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300">
            <svg fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
          </a>
          <a href="#" className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-300">
            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.474-2.237-1.776-2.237-1.371 0-2.187.923-2.547 1.814-.131.326-.164.779-.164 1.233v4.759h-3.554s.04-7.735 0-8.536h3.554v1.209c-.009.015-.021.029-.031.042h.031v-.042c.537-.827 1.491-2.01 3.622-2.01 2.645 0 4.631 1.728 4.631 5.45v4.887zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.771-1.704 1.956-1.704 1.184 0 1.914.753 1.915 1.704 0 .946-.771 1.704-1.956 1.704zm1.581 11.019H3.757V9.917h3.161v10.535zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Services</h3>
        <ul className="space-y-2">
          <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Residential Sales</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Commercial Leasing</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Investment Properties</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Market Analysis</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Portfolio Management</a></li>
        </ul>
      </div>

      {/* Company Links */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Company</h3>
        <ul className="space-y-2">
          <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Home</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">About Us</a></li>
          <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Contact</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Terms of Service</a></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-6">Get In Touch</h3>
        <div className="space-y-4 text-sm">
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Email</p>
            <a href="mailto:hello@elevate.com" className="text-gray-300 hover:text-white transition-colors duration-300">hello@elevate.com</a>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Phone</p>
            <a href="tel:+1-555-0123" className="text-gray-300 hover:text-white transition-colors duration-300">+1 (555) 0123</a>
          </div>
          <div>
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Office</p>
            <p className="text-gray-300">123 Luxury Ave<br/>New York, NY 10001</p>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-800 mt-12 pt-8">
      {/* Copyright */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <p className="text-gray-400 text-sm">
          © 2025 Elevate Living. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs">
          Redefining luxury real estate for the discerning investor.
        </p>
      </div>
    </div>
  </div>
</footer>
  );
}
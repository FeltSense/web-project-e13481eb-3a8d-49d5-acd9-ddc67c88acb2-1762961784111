import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
  {/* Animated background overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20 opacity-90 z-10"></div>
  
  {/* Hero background carousel (simulated with overlay) */}
  <div className="absolute inset-0">
    <Image 
      src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=2400&h=1600&fit=crop" 
      width={2400} 
      height={1600} 
      alt="Luxury waterfront estate at sunset"
      className="w-full h-full object-cover opacity-40"
      priority
    />
  </div>

  {/* Navigation */}
  <nav className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 py-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
        <span className="text-white text-2xl font-serif tracking-tight">Prestige<span className="text-amber-400">Estate</span></span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm text-white/90">
        <a href="#properties" className="hover:text-amber-400 transition-colors">Properties</a>
        <a href="#agents" className="hover:text-amber-400 transition-colors">Our Agents</a>
        <a href="#neighborhoods" className="hover:text-amber-400 transition-colors">Neighborhoods</a>
        <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
      </div>

      <button className="md:hidden text-white">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>

  {/* Hero content */}
  <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-28 pb-24 sm:pb-32">
    <div className="max-w-4xl">
      {/* Luxury badge */}
      <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 sm:mb-8">
        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
        <span className="text-white/90 text-sm font-light tracking-wider">CURATED LUXURY PROPERTIES</span>
      </div>

      {/* Main headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white leading-tight mb-6 sm:mb-8">
        Where Exceptional
        <span className="block mt-2 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent">
          Homes Meet
        </span>
        <span className="block mt-2">Extraordinary Lives</span>
      </h1>

      {/* Subheadline */}
      <p className="text-lg sm:text-xl text-white/80 mb-10 sm:mb-12 max-w-2xl leading-relaxed font-light">
        Discover an exclusive collection of $1M+ luxury estates, penthouses, and waterfront properties. 
        <span className="hidden sm:inline"> Expert guidance for discerning buyers seeking their dream residence.</span>
      </p>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-16 sm:mb-20">
        <button className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-0.5">
          <span className="flex items-center justify-center space-x-2">
            <span>Explore Properties</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
        
        <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 hover:-translate-y-0.5">
          Schedule Virtual Tour
        </button>
      </div>

      {/* Quick search bar */}
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 sm:p-6 max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="relative">
            <label className="block text-xs font-medium text-slate-600 mb-1 uppercase tracking-wide">Location</label>
            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none cursor-pointer">
              <option>Manhattan, NY</option>
              <option>Beverly Hills, CA</option>
              <option>Miami Beach, FL</option>
              <option>Aspen, CO</option>
            </select>
            <svg className="absolute right-3 top-9 w-5 h-5 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-slate-600 mb-1 uppercase tracking-wide">Price Range</label>
            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none cursor-pointer">
              <option>$1M - $3M</option>
              <option>$3M - $5M</option>
              <option>$5M - $10M</option>
              <option>$10M+</option>
            </select>
            <svg className="absolute right-3 top-9 w-5 h-5 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="relative">
            <label className="block text-xs font-medium text-slate-600 mb-1 uppercase tracking-wide">Bedrooms</label>
            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none cursor-pointer">
              <option>3+ Beds</option>
              <option>4+ Beds</option>
              <option>5+ Beds</option>
              <option>6+ Beds</option>
            </select>
            <svg className="absolute right-3 top-9 w-5 h-5 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl sm:mt-6 flex items-center justify-center space-x-2 group">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Search</span>
          </button>
        </div>

        {/* Advanced filters link */}
        <div className="mt-4 pt-4 border-t border-slate-200">
          <button className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center space-x-1 group">
            <span>Advanced Search Filters</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Stats bar */}
  <div className="relative z-20 border-t border-white/10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div className="text-center sm:text-left">
          <div className="text-3xl sm:text-4xl font-serif text-white mb-1">250+</div>
          <div className="text-white/60 text-sm font-light tracking-wide">Luxury Properties</div>
        </div>
        <div className="text-center sm:text-left">
          <div className="text-3xl sm:text-4xl font-serif text-white mb-1">$2.4B+</div>
          <div className="text-white/60 text-sm font-light tracking-wide">Properties Sold</div>
        </div>
        <div className="text-center sm:text-left">
          <div className="text-3xl sm:text-4xl font-serif text-white mb-1">98%</div>
          <div className="text-white/60 text-sm font-light tracking-wide">Client Satisfaction</div>
        </div>
        <div className="text-center sm:text-left">
          <div className="text-3xl sm:text-4xl font-serif text-white mb-1">24/7</div>
          <div className="text-white/60 text-sm font-light tracking-wide">Concierge Service</div>
        </div>
      </div>
    </div>
  </div>

  {/* Decorative elements */}
  <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
</div>
  );
}
import Image from 'next/image';

export default function Services() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
  {/* Elegant background pattern */}
  <div className="absolute inset-0 opacity-[0.03]">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 0)`,
      backgroundSize: '48px 48px'
    }}></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section header with elegant typography */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <div className="inline-flex items-center gap-3 mb-6">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600"></div>
        <span className="text-sm font-medium tracking-[0.2em] text-amber-600 uppercase">Excellence in Service</span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600"></div>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-6 tracking-tight">
        Luxury Living,
        <span className="block font-semibold bg-gradient-to-r from-slate-900 via-amber-900 to-slate-900 bg-clip-text text-transparent">
          Expertly Delivered
        </span>
      </h2>
      <p className="text-lg text-slate-600 leading-relaxed">
        From exclusive property curation to personalized concierge service, we deliver an unparalleled real estate experience
      </p>
    </div>

    {/* Services grid with staggered layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
      {/* Featured service - Luxury Portfolio */}
      <div className="lg:col-span-7 group relative">
        <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=900&fit=crop" 
              width={1200} 
              height={900} 
              alt="Luxury waterfront estate at sunset" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-semibold text-amber-600">$1M+</span>
            </div>
          </div>

          <div className="relative p-8 lg:p-10">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl lg:text-3xl font-semibold text-slate-900 mb-3 group-hover:text-amber-900 transition-colors">
                  Curated Luxury Portfolio
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Exclusive access to handpicked estates, penthouses, and waterfront properties valued at $1M+. Each listing undergoes rigorous vetting to ensure exceptional quality, prime location, and investment potential.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 text-sm text-slate-700 bg-slate-50 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified listings
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-slate-700 bg-slate-50 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Prime locations
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm text-slate-700 bg-slate-50 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Investment grade
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Virtual Tours */}
      <div className="lg:col-span-5 group relative">
        <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative aspect-[4/3] lg:aspect-[4/5] overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop" 
              width={800} 
              height={1000} 
              alt="Virtual reality property tour experience" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
            <div className="absolute top-6 left-6">
              <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-slate-900">Live Tours</span>
              </div>
            </div>
          </div>

          <div className="relative p-6 lg:p-8">
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-3 group-hover:text-amber-900 transition-colors">
                  Immersive Virtual Tours
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Experience properties from anywhere with 360° virtual walkthroughs, live video tours, and interactive floor plans. Save time and narrow choices before in-person visits.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>HD 360° walkthroughs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Live agent guidance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom row - Expert Agents and Neighborhood Insights */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Expert Agents */}
      <div className="group relative">
        <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="flex flex-col sm:flex-row">
            <div className="relative sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop" 
                width={600} 
                height={800} 
                alt="Professional luxury real estate agent" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r sm:bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>

            <div className="relative sm:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-3 group-hover:text-amber-900 transition-colors">
                    Elite Agent Network
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Work with specialists who&apos;ve closed $500M+ in luxury transactions. Our agents bring market intelligence, negotiation prowess, and discrete service to every deal.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">15+</div>
                      <div className="text-xs text-slate-500">Avg Years</div>
                    </div>
                    <div className="h-10 w-px bg-slate-200"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">98%</div>
                      <div className="text-xs text-slate-500">Close Rate</div>
                    </div>
                    <div className="h-10 w-px bg-slate-200"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">24/7</div>
                      <div className="text-xs text-slate-500">Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Neighborhood Insights */}
      <div className="group relative">
        <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-amber-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="flex flex-col sm:flex-row">
            <div className="relative sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=800&fit=crop" 
                width={600} 
                height={800} 
                alt="Luxury neighborhood cityscape at dusk" 
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r sm:bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-slate-900">Schools</div>
                <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-slate-900">Dining</div>
              </div>
            </div>

            <div className="relative sm:w-3/5 p-6 lg:p-8 flex flex-col justify-center">
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-3 group-hover:text-amber-900 transition-colors">
                    Neighborhood Intelligence
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Deep insights into schools, amenities, culture, and investment trends. We help you understand not just the property, but the lifestyle and community it offers.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                      <span>School ratings</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                      <span>Walkability scores</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                      <span>Market trends</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600"></div>
                      <span>Local culture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-10 shadow-xl">
        <div className="text-left sm:text-center flex-1">
          <h3 className="text-2xl font-semibold text-white mb-2">Ready to Find Your Dream Property?</h3>
          <p className="text-slate-300 text-sm">Schedule a private consultation with our luxury specialists</p>
        </div>
        <button className="group flex-shrink-0 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-amber-600/30 hover:shadow-amber-500/50 hover:scale-105">
          <span className="flex items-center gap-2">
            Book Consultation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</section>
  );
}
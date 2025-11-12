import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24 md:py-32 overflow-hidden">
  {/* Elegant background accent */}
  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50/30 to-transparent pointer-events-none" />
  
  <div className="container mx-auto px-4 md:px-6 relative z-10">
    {/* Section header */}
    <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
      <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-900 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        Client Success Stories
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
        Dreams Fulfilled,
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
          Homes Discovered
        </span>
      </h2>
      <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
        Every property tells a story. Here are journeys of clients who found their perfect sanctuary with us.
      </p>
    </div>

    {/* Testimonials grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
      
      {/* Testimonial 1 - Featured Large */}
      <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 group">
        <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600" />
          
          <div className="p-8 md:p-10 flex flex-col h-full">
            {/* Quote icon */}
            <div className="mb-6">
              <svg className="w-12 h-12 text-amber-500/20 group-hover:text-amber-500/30 transition-colors duration-300" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>

            {/* Testimonial text */}
            <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 flex-grow font-light">
              After viewing <span className="font-semibold text-slate-900">47 properties over 8 months</span>, we were exhausted. Then Sarah showed us a hidden gem in Belmont Heights we hadn&apos;t seen listed anywhere else. Within 3 weeks, we closed on our dream 5-bedroom estate with panoramic ocean views. The private negotiation saved us <span className="font-semibold text-amber-700">$385,000 below asking</span>.
            </p>

            {/* Property detail badge */}
            <div className="inline-flex items-center gap-2 text-sm text-slate-600 mb-6 bg-slate-50 px-4 py-2 rounded-lg w-fit">
              <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Purchased: $3.2M Estate in Belmont Heights
            </div>

            {/* Client info */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces"
                  width={56}
                  height={56}
                  alt="Michael and Jennifer Chen"
                  className="rounded-full object-cover ring-2 ring-amber-100"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 text-lg">Michael & Jennifer Chen</h4>
                <p className="text-slate-500 text-sm">Tech Executives, Silicon Valley</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="group">
        <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-400 via-slate-500 to-slate-600" />
          
          <div className="p-8 flex flex-col h-full">
            <div className="mb-6">
              <svg className="w-10 h-10 text-slate-500/20 group-hover:text-slate-500/30 transition-colors duration-300" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 flex-grow font-light">
              Relocating from London with <span className="font-semibold text-slate-900">just 2 weeks notice</span>, I needed someone who understood international buyers. Marcus arranged virtual tours, handled all paperwork remotely, and I closed on a stunning penthouse without ever setting foot in the country first. Move-in ready in <span className="font-semibold text-amber-700">19 days total</span>.
            </p>

            <div className="inline-flex items-center gap-2 text-sm text-slate-600 mb-6 bg-slate-50 px-4 py-2 rounded-lg w-fit">
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Purchased: $1.8M Penthouse Downtown
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
                  width={56}
                  height={56}
                  alt="David Whitmore"
                  className="rounded-full object-cover ring-2 ring-slate-100"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">David Whitmore</h4>
                <p className="text-slate-500 text-sm">Investment Banker</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="group">
        <div className="relative h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600" />
          
          <div className="p-8 flex flex-col h-full">
            <div className="mb-6">
              <svg className="w-10 h-10 text-rose-500/20 group-hover:text-rose-500/30 transition-colors duration-300" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6 flex-grow font-light">
              As a single mother, I thought luxury was out of reach. Elena found creative financing and a pocket listing that fit my budget perfectly. My daughters now have a <span className="font-semibold text-slate-900">6,200 sq ft home with a pool</span> in the best school district. She made the impossible possible.
            </p>

            <div className="inline-flex items-center gap-2 text-sm text-slate-600 mb-6 bg-slate-50 px-4 py-2 rounded-lg w-fit">
              <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Purchased: $2.4M Family Estate
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
              <div className="relative">
                <Image 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces"
                  width={56}
                  height={56}
                  alt="Rebecca Martinez"
                  className="rounded-full object-cover ring-2 ring-rose-100"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Rebecca Martinez</h4>
                <p className="text-slate-500 text-sm">Healthcare Executive</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="md:col-span-2 group">
        <div className="relative h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-700">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600" />
          
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}} />
          </div>
          
          <div className="relative p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-grow">
              <div className="mb-6">
                <svg className="w-12 h-12 text-amber-500/30 group-hover:text-amber-500/40 transition-colors duration-300" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              <p className="text-slate-200 text-lg md:text-xl leading-relaxed mb-8 font-light">
                We sold our previous home for <span className="font-semibold text-white">$600K above market value</span> and simultaneously purchased our waterfront dream home—all coordinated seamlessly. James&apos;s network meant we got first look at an unlisted property. His staging expertise and professional photography made our old house sell in <span className="font-semibold text-amber-400">72 hours with 14 offers</span>.
              </p>

              <div className="inline-flex items-center gap-2 text-sm text-amber-300 mb-6 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg w-fit">
                <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Sold $4.1M • Purchased $5.8M Waterfront
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-700">
                <div className="relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces"
                    width={56}
                    height={56}
                    alt="Alexandra and Thomas Beaumont"
                    className="rounded-full object-cover ring-2 ring-amber-500/50"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg">Alexandra & Thomas Beaumont</h4>
                  <p className="text-slate-400 text-sm">Entrepreneurs, Marina District</p>
                </div>
              </div>
            </div>

            {/* Stats sidebar */}
            <div className="flex md:flex-col gap-6 md:gap-4 pt-6 md:pt-0 md:border-l md:border-slate-700 md:pl-8">
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">72hrs</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">To Sold</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">14</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Offers</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">$600K</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Above Ask</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Trust indicators */}
    <div className="mt-16 md:mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-12 text-slate-600">
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          <div className="w-10 h-10 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm">★</div>
          <div className="w-10 h-10 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm">★</div>
          <div className="w-10 h-10 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center text-white font-bold text-sm">★</div>
        </div>
        <div>
          <div className="font-semibold text-slate-900">4.9/5.0 Rating</div>
          <div className="text-sm">From 247+ clients</div>
        </div>
      </div>
      
      <div className="h-12 w-px bg-slate-200 hidden md:block" />
      
      <div className="text-center md:text-left">
        <div className="font-semibold text-slate-900 text-xl">$2.4B+</div>
        <div className="text-sm">In luxury sales</div>
      </div>
      
      <div className="h-12 w-px bg-slate-200 hidden md:block" />
      
      <div className="text-center md:text-left">
        <div className="font-semibold text-slate-900 text-xl">18 Days</div>
        <div className="text-sm">Avg. time to close</div>
      </div>
    </div>

  </div>
</section>
  );
}
"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

export default function OrganizersSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainer = useRef(null);

  const organizers = [
    { id: 1, name: 'SWE', logo: '🏢' },
    { id: 2, name: 'Data Science Lab', logo: '🧪' },
  ];


  const mediaPartners = [
    { id: 1, name: 'Somkalol', logo: '📰' },
    { id: 2, name: 'The Daily Star', logo: '📄' },
    { id: 3, name: 'Dhaka Tribune', logo: '🗞️' },
    { id: 4, name: 'Business Standard', logo: '📈' },
  ];

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = 300;
      if (direction === 'left') {
        scrollContainer.current.scrollLeft -= scrollAmount;
      } else {
        scrollContainer.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section className="w-full py-24 md:py-32 px-4 relative z-10  bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Organizers Section */}
        <div className="mb-24">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-lg blur-xl opacity-30"></div>
                <h2 className="relative text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  Organizers
                </h2>
              </div>
            </div>
          </div>

          {/* Organizers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 justify-center items-center max-w-2xl mx-auto">
            {organizers.map((org) => (
              <div
                key={org.id}
                className="group relative rounded-2xl border border-cyan-500/30 bg-linear-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl p-8 overflow-hidden transition-all duration-300 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-center">
                  <div className="text-6xl mb-4">{org.logo}</div>
                  <p className="text-gray-300 font-semibold">{org.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Media Partners Section */}
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute -inset-2 bg-linear-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-lg blur-xl opacity-30"></div>
                <h2 className="relative text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  Partners
                </h2>
              </div>
            </div>
          </div>

          {/* Media Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mediaPartners.map((media) => (
              <div
                key={media.id}
                className="group relative rounded-2xl border border-cyan-500/30 bg-linear-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl p-6 overflow-hidden transition-all duration-300 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-center">
                  <div className="text-4xl mb-2">{media.logo}</div>
                  <p className="text-gray-300 font-semibold text-xs md:text-sm">{media.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
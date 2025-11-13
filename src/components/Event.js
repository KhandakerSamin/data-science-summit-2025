'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function EventsSection() {
  const events = [
    {
      id: 1,
      title: 'Data Hackathon',
      description:
        'Join data enthusiasts, AI experts, and innovators as they come together to tackle real-world problems, push the limits of machine learning, and dive into the exciting world of big data and AI.',
      date: '11.12.2025',
      location: 'Daffodil Smart City, Birulia, Dhaka-1216',
      tags: ['ML / AI', 'Deep Learning'],
      time: '09:00 AM - 05:00 PM',
      registerLink: '#',
    },
    {
      id: 2,
      title: 'Project Competition',
      description:
        'Showcase your innovative projects and compete with others in a high-energy event celebrating tech creativity and practical solutions.',
      date: '11.12.2025',
      location: 'Daffodil Smart City, Birulia, Dhaka-1216',
      tags: ['Innovation', 'Tech Projects'],
      time: '09:00 AM - 05:00 PM',
      registerLink: '#',
    },
    {
      id: 3,
      title: 'Promptcraft Challenge',
      description:
        'Unleash your creativity by crafting powerful and impactful prompts in this engaging, interactive challenge designed for aspiring creators and innovators.',
      date: '11.12.2025',
      location: 'Daffodil Smart City, Birulia, Dhaka-1216',
      tags: ['Creativity', 'Prompt Engineering'],
      time: '09:00 AM - 05:00 PM',
      registerLink: '#',
    },
    // {
    //   id: 4,
    //   title: 'Hands-On Workshop',
    //   description:
    //     'Engage in practical, skill-building sessions led by experts on cutting-edge topics in technology and innovation.',
    //   date: '11.12.2025',
    //   location: 'Daffodil Smart City, Birulia, Dhaka-1216',
    //   tags: ['Skill Development', 'Practical Learning'],
    //   time: '09:00 AM - 05:00 PM',
    //   registerLink: '#',
    // },
    {
      id: 5,
      title: 'Idea Poster Presentation',
      description:
        'Showcase your innovative ideas on AI, automation, and ethics in an engaging poster presentation, sparking insights and discussions with experts.',
      date: '11.12.2025',
      location: 'Daffodil Smart City, Birulia, Dhaka-1216',
      tags: ['Creative Ideas', 'Poster Session'],
      time: '09:00 AM - 05:00 PM',
      registerLink: '#',
    },
  ];

  return (
    <section
      id="events"
      className="w-full py-24 md:py-32 px-4 relative z-10 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-linear-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-lg blur-xl opacity-30"></div>
              <h2 className="relative text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                Events
              </h2>
            </div>
          </div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Join us for events that fuel creativity, innovation, and growth. Share your ideas, dive into expert-led sessions, tackle challenges, and showcase your projects.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {events.map((event, idx) => (
            <div
              key={event.id}
              className={`group relative rounded-2xl border border-gray-700/50 bg-linear-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/50 flex flex-col h-full ${
                idx === 3 || idx === 4 ? 'md:col-span-2 lg:col-span-1 mx-auto' : ''
              }`}
            >
              {/* Gradient Background Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Logo Section */}
              <div className="relative px-8 md:px-8 pt-6 pb-4 border-b border-gray-700/30">
              
                <Image
                  src="/dss-logo.svg"
                  alt="DSS Logo"
                  width={120}
                  height={50}
                  className="h-8 md:h-10 object-contain"
                />

              </div>

              {/* Content */}
              <div className="relative p-8 md:p-8 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-2xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
                  {event.description}
                </p>

                {/* Info Details */}
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                    <svg
                      className="w-4 h-4 text-cyan-400 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 2a1 1 0 011-1h6a1 1 0 011 1v2h4a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2h4V2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                    <svg
                      className="w-4 h-4 text-cyan-400 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                    <svg
                      className="w-4 h-4 text-cyan-400 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {event.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-linear-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 rounded-full border border-cyan-500/30 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons - Pushed to Bottom */}
                <div className="flex gap-3 mt-auto pt-6 border-t border-gray-700/30">
                  <button className="flex-1 bg-linear-to-r from-cyan-500 to-blue-600 text-white px-4 py-2.5 font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 text-xs md:text-sm shadow-lg shadow-cyan-500/20">
                    Register Now
                  </button>
                  <button className="flex-1 border border-cyan-500/40 text-cyan-300 px-4 py-2.5 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300 text-xs md:text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
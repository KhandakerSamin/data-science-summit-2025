import EventsSection from '@/components/Event';
import Hero from '@/components/Hero';
import ScheduleSection from '@/components/Schedule';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero />
      <EventsSection />
      <ScheduleSection />
    </div>
  );
};

export default page;
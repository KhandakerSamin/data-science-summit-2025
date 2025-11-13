import EventsSection from '@/components/Event';
import Hero from '@/components/Hero';
import OrganizersSection from '@/components/OrganizersSection';
import ScheduleSection from '@/components/Schedule';
import VenueSection from '@/components/Venue';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero />
      <EventsSection />
      <ScheduleSection />
      <VenueSection />
      <OrganizersSection />
    </div>
  );
};

export default page;
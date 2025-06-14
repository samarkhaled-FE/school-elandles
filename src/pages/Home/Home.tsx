import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Hero from './sections/Hero';
import Features from './sections/Features';
import AboutSection from './sections/AboutSection';
import CoursesSection from './sections/CoursesSection';
import StatsSection from './sections/StatsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import NewsSection from './sections/NewsSection';
import CtaSection from './sections/CtaSection';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <AboutSection />
      <CoursesSection />
      <StatsSection />
      <TestimonialsSection />
      <NewsSection />
      <CtaSection />
    </div>
  );
};

export default Home;
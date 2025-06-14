import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Award, Building } from 'lucide-react';

const stats = [
  {
    icon: <Users size={36} />,
    value: 1500,
    label: 'طالب وطالبة',
    duration: 2.5,
  },
  {
    icon: <BookOpen size={36} />,
    value: 45,
    label: 'برنامج دراسي',
    duration: 2,
  },
  {
    icon: <Award size={36} />,
    value: 120,
    label: 'جائزة وتكريم',
    duration: 2.2,
  },
  {
    icon: <Building size={36} />,
    value: 25,
    label: 'سنة من الخبرة',
    duration: 1.8,
  }
];

const StatCounter: React.FC<{ value: number; duration: number }> = ({ value, duration }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-white"
    >
      <motion.span
        initial={{ counter: 0 }}
        whileInView={{ counter: value }}
        viewport={{ once: true }}
        transition={{ duration: duration }}
      >
        {({ counter }) => Math.floor(counter)}
      </motion.span>
      +
    </motion.span>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <StatCounter value={stat.value} duration={stat.duration} />
              <p className="text-xl mt-2 text-gray-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
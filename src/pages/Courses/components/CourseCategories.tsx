import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, GraduationCap, Clock, Award } from 'lucide-react';

const categories = [
  { id: 'all', name: 'جميع البرامج', count: 12 },
  { id: 'arabic', name: 'اللغة العربية', count: 4 },
  { id: 'math', name: 'الرياضيات', count: 3 },
  { id: 'science', name: 'العلوم', count: 3 },
  { id: 'islamic', name: 'التربية الإسلامية', count: 2 },
];

const levels = [
  { id: 'beginner', name: 'مبتدئ' },
  { id: 'intermediate', name: 'متوسط' },
  { id: 'advanced', name: 'متقدم' },
];

const durations = [
  { id: 'short', name: '1-3 أشهر' },
  { id: 'medium', name: '3-6 أشهر' },
  { id: 'long', name: '6+ أشهر' },
];

const CourseCategories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  
  const toggleLevel = (levelId: string) => {
    if (selectedLevels.includes(levelId)) {
      setSelectedLevels(selectedLevels.filter(id => id !== levelId));
    } else {
      setSelectedLevels([...selectedLevels, levelId]);
    }
  };
  
  const toggleDuration = (durationId: string) => {
    if (selectedDurations.includes(durationId)) {
      setSelectedDurations(selectedDurations.filter(id => id !== durationId));
    } else {
      setSelectedDurations([...selectedDurations, durationId]);
    }
  };
  
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
          <GraduationCap size={20} className="ml-2" />
          الفئات
        </h3>
        
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => setActiveCategory(category.id)}
                className={`w-full text-right py-2 px-3 rounded-md transition-colors flex items-center justify-between ${
                  activeCategory === category.id
                    ? 'bg-primary bg-opacity-10 text-primary font-bold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span>{category.name}</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
          <Award size={20} className="ml-2" />
          المستوى
        </h3>
        
        <ul className="space-y-2">
          {levels.map((level) => (
            <li key={level.id}>
              <button
                onClick={() => toggleLevel(level.id)}
                className="w-full text-right py-2 px-3 rounded-md transition-colors flex items-center text-gray-700 hover:bg-gray-100"
              >
                <CheckSquare
                  size={18}
                  className={`ml-2 ${
                    selectedLevels.includes(level.id) ? 'text-primary' : 'text-gray-300'
                  }`}
                />
                <span>{level.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
          <Clock size={20} className="ml-2" />
          المدة
        </h3>
        
        <ul className="space-y-2">
          {durations.map((duration) => (
            <li key={duration.id}>
              <button
                onClick={() => toggleDuration(duration.id)}
                className="w-full text-right py-2 px-3 rounded-md transition-colors flex items-center text-gray-700 hover:bg-gray-100"
              >
                <CheckSquare
                  size={18}
                  className={`ml-2 ${
                    selectedDurations.includes(duration.id) ? 'text-primary' : 'text-gray-300'
                  }`}
                />
                <span>{duration.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default CourseCategories;
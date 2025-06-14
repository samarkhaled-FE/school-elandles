import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Search, Filter, Clock, User, BarChart } from 'lucide-react';
import { RootState } from '../../../redux/store';
import Button from '../../../components/common/Button';
import studySVG from '../../../assets/animation/study.svg';
import scinceSVG from '../../../assets/animation/scince.svg';
import religionSVG from '../../../assets/animation/religion.svg';
import mathSVG from '../../../assets/animation/math.svg';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const CoursesList: React.FC = () => {
  const { courses } = useSelector((state: RootState) => state.courses);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(
        (course) =>
          course.title.includes(term) ||
          course.description.includes(term) ||
          course.teacher.includes(term)
      );
      setFilteredCourses(filtered);
    }
  };
  
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          جميع البرامج الدراسية
          <span className="text-gray-500 text-lg font-normal mr-2">({filteredCourses.length})</span>
        </h2>
        
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث عن برنامج..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full md:w-64"
          />
          <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      {filteredCourses.length === 0 ? (
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <p className="text-gray-600 text-lg">لا توجد برامج تطابق بحثك. حاول استخدام كلمات بحث مختلفة.</p>
        </div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCourses.map((course, idx) => (
            <motion.div key={course.id} variants={item} className="card group">
              <div className="relative overflow-hidden">
                <img
                  src={
                    idx === 0 ? religionSVG :
                    idx === 1 ? scinceSVG :
                    idx === 2 ? mathSVG :
                    idx === 3 ? studySVG :
                    course.image
                  }
                  alt={course.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Link to={`/courses/${course.id}`} className="text-white font-bold">
                    عرض التفاصيل
                  </Link>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                <div className="border-t pt-4 grid grid-cols-3 gap-2">
                  <div className="flex items-center text-gray-600 text-sm">
                    <User size={16} className="ml-1" />
                    <span className="truncate">{course.teacher}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock size={16} className="ml-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <BarChart size={16} className="ml-1" />
                    <span>{course.level}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to={`/courses/${course.id}`}>
                    <Button variant="primary" fullWidth>عرض التفاصيل</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default CoursesList;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { ChevronLeft, Clock, User, BarChart } from 'lucide-react';
import { RootState } from '../../../redux/store';
import SectionTitle from '../../../components/common/SectionTitle';
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

const CoursesSection: React.FC = () => {
  const { courses } = useSelector((state: RootState) => state.courses);
  
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="برامجنا الدراسية"
          subtitle="نقدم مجموعة متنوعة من البرامج الدراسية المصممة لتلبية احتياجات الطلاب في مختلف المراحل التعليمية"
          centered
        />
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {courses.map((course, idx) => (
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
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link to="/courses">
            <Button variant="primary">
              عرض جميع البرامج
              <ChevronLeft size={20} className="mr-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
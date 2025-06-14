import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CoursesList from './components/CoursesList';
import CourseCategories from './components/CourseCategories';

const Courses: React.FC = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <CourseCategories />
            </div>
            
            <div className="lg:col-span-3">
              <CoursesList />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
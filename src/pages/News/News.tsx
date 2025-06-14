import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import NewsList from './components/NewsList';
import Sidebar from './components/Sidebar';

const News: React.FC = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <NewsList />
            </div>
            
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
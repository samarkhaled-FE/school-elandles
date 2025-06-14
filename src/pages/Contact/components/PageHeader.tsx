import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const PageHeader: React.FC = () => {
  return (
    <div className="relative h-64 md:h-80 bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-primary bg-opacity-75"></div>
      </div>
      
      <div className="relative h-full container-custom flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">اتصل بنا</h1>
        <div className="flex items-center text-gray-200">
          <Link to="/" className="hover:text-white transition-colors flex items-center">
            <Home size={16} className="ml-1" />
            الرئيسية
          </Link>
          <span className="mx-2">/</span>
          <span>اتصل بنا</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
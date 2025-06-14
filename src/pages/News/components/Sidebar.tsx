import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Calendar, ChevronLeft } from 'lucide-react';
import { RootState } from '../../../redux/store';

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString('ar-EG', options);
};

const Sidebar: React.FC = () => {
  const { news } = useSelector((state: RootState) => state.news);
  
  // Get latest news
  const latestNews = [...news].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);
  
  const categories = [
    { id: 'all', name: 'جميع الأخبار', count: news.length },
    { id: 'events', name: 'الفعاليات', count: 5 },
    { id: 'activities', name: 'الأنشطة', count: 4 },
    { id: 'announcements', name: 'الإعلانات', count: 3 },
    { id: 'achievements', name: 'الإنجازات', count: 2 },
  ];
  
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-800 relative pb-2">
          الفئات
          <span className="absolute bottom-0 right-0 w-12 h-1 bg-primary"></span>
        </h3>
        
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to="#"
                className="block py-2 px-3 rounded-md transition-colors hover:bg-gray-100 flex items-center justify-between"
              >
                <span className="text-gray-700">{category.name}</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </Link>
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
        <h3 className="text-xl font-bold mb-4 text-gray-800 relative pb-2">
          أحدث الأخبار
          <span className="absolute bottom-0 right-0 w-12 h-1 bg-primary"></span>
        </h3>
        
        <div className="space-y-4">
          {latestNews.map((item) => (
            <div key={item.id} className="flex space-x-4 space-x-reverse">
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 line-clamp-2 hover:text-primary transition-colors">
                  <Link to={`/news/${item.id}`}>{item.title}</Link>
                </h4>
                <div className="flex items-center text-gray-500 text-xs mt-1">
                  <Calendar size={12} className="ml-1" />
                  <span>{formatDate(item.date)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <Link
            to="/news"
            className="text-primary font-bold flex items-center justify-center hover:underline"
          >
            عرض جميع الأخبار
            <ChevronLeft size={16} className="mr-1" />
          </Link>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-bold mb-4 text-gray-800 relative pb-2">
          النشرة البريدية
          <span className="absolute bottom-0 right-0 w-12 h-1 bg-primary"></span>
        </h3>
        
        <p className="text-gray-600 mb-4">
          اشترك في نشرتنا البريدية للحصول على آخر الأخبار والفعاليات.
        </p>
        
        <form className="space-y-3">
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-light text-white font-bold py-2 rounded-md transition-all"
          >
            اشتراك
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Sidebar;
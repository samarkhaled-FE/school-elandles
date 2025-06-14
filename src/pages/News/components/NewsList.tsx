import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Search, Calendar, User, ChevronLeft } from 'lucide-react';
import { RootState } from '../../../redux/store';
import courseImg from '../../../assets/images/دورةمكثفة.jfif';

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

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString('ar-EG', options);
};

const NewsList: React.FC = () => {
  const { news } = useSelector((state: RootState) => state.news);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNews, setFilteredNews] = useState(news);
  
  // خبر الدورة المكثفة
  const courseNews = {
    id: 'intensive-course-2024',
    title: 'دورة الحافظ الرباني المكثفة',
    summary: 'دورة صيفية مكثفة لحفظ ومراجعة القرآن الكريم لجميع الأعمار، مع مميزات عديدة واختبارات تحديد مستوى.',
    content: '',
    image: courseImg,
    date: '2024-06-01',
    author: 'مدرسة الأندلس',
  };

  // دمج خبر الدورة مع الأخبار (يظهر في الأعلى دائماً)
  const allNewsWithCourse = [courseNews, ...news];

  // تحديث البحث ليشمل الدورة المكثفة
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.trim() === '') {
      setFilteredNews(allNewsWithCourse);
    } else {
      const filtered = allNewsWithCourse.filter(
        (item) =>
          item.title.includes(term) ||
          item.summary.includes(term) ||
          (item.content && item.content.includes(term))
      );
      setFilteredNews(filtered);
    }
  };

  // عند أول تحميل، اعرض كل الأخبار مع الدورة
  React.useEffect(() => {
    setFilteredNews(allNewsWithCourse);
  }, [news]);
  
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          أحدث الأخبار والفعاليات
        </h2>
        
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث في الأخبار..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full md:w-64"
          />
          <Search size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>
      
      {filteredNews.length === 0 ? (
        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <p className="text-gray-600 text-lg">لا توجد أخبار تطابق بحثك. حاول استخدام كلمات بحث مختلفة.</p>
        </div>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {filteredNews.map((item) => (
            <motion.div key={item.id} variants={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="h-full relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <div className="flex items-center ml-4">
                      <Calendar size={14} className="ml-1" />
                      <span>{formatDate(item.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="ml-1" />
                      <span>{item.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 hover:text-primary transition-colors">
                    <Link to={`/news/${item.id}`}>{item.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{item.summary}</p>
                  
                  <Link
                    to={`/news/${item.id}`}
                    className="text-primary font-bold flex items-center hover:underline"
                  >
                    اقرأ المزيد
                    <ChevronLeft size={16} className="mr-1" />
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

export default NewsList;
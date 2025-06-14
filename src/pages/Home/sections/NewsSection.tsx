import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { ChevronLeft, Calendar } from 'lucide-react';
import { RootState } from '../../../redux/store';
import SectionTitle from '../../../components/common/SectionTitle';
import Button from '../../../components/common/Button';
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

const NewsSection: React.FC = () => {
  const { news } = useSelector((state: RootState) => state.news);
  
  // Get the latest 3 news
  const latestNews = [...news].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);

  // خبر الدورة المكثفة
  const courseNews = {
    id: 'intensive-course-2024',
    title: 'دورة الحافظ الرباني المكثفة',
    summary: 'دورة صيفية مكثفة لحفظ ومراجعة القرآن الكريم لجميع الأعمار، مع مميزات عديدة واختبارات تحديد مستوى.',
    image: courseImg,
    date: '2024-06-01',
  };

  const latestNewsWithCourse = [courseNews, ...latestNews].slice(0, 3);
  
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="أحدث الأخبار والفعاليات"
          subtitle="تابع آخر أخبار وفعاليات المدرسة لتبقى على اطلاع دائم بكل المستجدات"
          centered
        />
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          {latestNewsWithCourse.map((newsItem) => (
            <motion.div key={newsItem.id} variants={item} className="card group">
              <div className="relative overflow-hidden">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-white text-sm font-medium">
                  <div className="flex items-center">
                    <Calendar size={14} className="ml-1" />
                    <span>{formatDate(newsItem.date)}</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors">
                  {newsItem.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{newsItem.summary}</p>
                <Link to={`/news/${newsItem.id}`} className="text-primary font-bold flex items-center hover:underline">
                  اقرأ المزيد
                  <ChevronLeft size={16} className="mr-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link to="/news">
            <Button variant="primary">
              عرض جميع الأخبار
              <ChevronLeft size={20} className="mr-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
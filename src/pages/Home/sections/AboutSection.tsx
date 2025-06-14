import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ChevronLeft } from 'lucide-react';
import SectionTitle from '../../../components/common/SectionTitle';
import Button from '../../../components/common/Button';
import Lottie from 'lottie-react';
import twoAnimation from '../../../assets/animation/two.json';

const points = [
  'توفير بيئة تعليمية محفزة وآمنة',
  'تطوير مهارات الطلاب الإبداعية والتحليلية',
  'غرس القيم الأخلاقية والمبادئ الإسلامية',
  'تأهيل جيل واعٍ قادر على مواجهة تحديات المستقبل',
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <Lottie
                animationData={twoAnimation}
                loop
                className="rounded-lg shadow-lg w-full h-full"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-lg shadow-lg hidden md:block">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-4xl font-bold text-primary">25+</h3>
                  <p className="mt-2 text-gray-600">سنوات من التميز</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle title="عن مدرسة الأندلس" />
            
            <p className="text-gray-600 mb-6">
              مدرسة الأندلس هي مؤسسة تعليمية رائدة تأسست عام 1998، تسعى لتقديم تعليم متميز يجمع بين الأصالة والمعاصرة، ويهدف إلى بناء شخصية الطالب المتكاملة علمياً وثقافياً واجتماعياً.
            </p>
            
            <div className="space-y-3 mb-8">
              {points.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-primary mt-1 ml-2 flex-shrink-0" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            
            <Link to="/about">
              <Button variant="primary">
                المزيد عنا
                <ChevronLeft size={20} className="mr-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
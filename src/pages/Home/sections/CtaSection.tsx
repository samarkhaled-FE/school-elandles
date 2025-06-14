import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import Button from '../../../components/common/Button';

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5088179/pexels-photo-5088179.jpeg')] bg-cover bg-center opacity-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            انضم إلى أسرة مدرسة الأندلس الآن
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-200 text-lg mb-8"
          >
            نحن نفتح أبوابنا للتسجيل للعام الدراسي الجديد. احجز مقعداً لطفلك واضمن له تعليماً متميزاً في بيئة محفزة.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                سجل الآن
                <ChevronLeft size={20} className="mr-2" />
              </Button>
            </Link>
            <a href="tel:+123456789">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                اتصل بنا
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
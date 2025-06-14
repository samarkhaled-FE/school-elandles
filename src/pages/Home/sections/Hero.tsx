import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import Button from '../../../components/common/Button';

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen min-h-[600px] overflow-hidden"
      // style={{ background: "url('/src/assets/animation/five.svg') center center / cover no-repeat" }}
    >
      {/* Overlay layer */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <div className="relative h-full container-custom flex items-center z-10">

        {/* Text content on the left */}
        <div className="w-full lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            مدرسة الأندلس
            <span className="block text-amber-400 mt-2">
              نبني المستقبل معاً
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-md"
          >
            نحن ملتزمون بتوفير بيئة تعليمية متميزة تساعد الطلاب على اكتشاف قدراتهم وتنمية مهاراتهم وتحقيق أهدافهم.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link to="/courses">
              <Button variant="primary" size="lg">
                اكتشف برامجنا
                <ChevronLeft size={20} className="mr-2" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                تعرف علينا
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Image on the right for large screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:block w-1/2"
        >
          <img
            src="/src/assets/animation/five.svg"
            alt="طلاب مدرسة الأندلس"
            className="max-w-md mx-auto animate-float rounded-lg shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
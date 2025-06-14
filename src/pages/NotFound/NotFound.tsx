import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import Button from '../../components/common/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container-custom">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-9xl font-bold text-primary"
          >
            404
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold text-gray-800 mt-4"
          >
            الصفحة غير موجودة
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 mt-4 max-w-md mx-auto"
          >
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8"
          >
            <Link to="/">
              <Button variant="primary" size="lg" className="flex items-center mx-auto">
                <Home size={20} className="ml-2" />
                العودة للصفحة الرئيسية
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
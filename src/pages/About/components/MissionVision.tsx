import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';
import SectionTitle from '../../../components/common/SectionTitle';

const MissionVision: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <SectionTitle title="رؤيتنا ورسالتنا وقيمنا" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary"
          >
            <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-4">
              <Eye size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">رؤيتنا</h3>
            <p className="text-gray-600">
              أن نكون مؤسسة تعليمية رائدة في تقديم تعليم نوعي متميز، يساهم في إعداد جيل واعٍ ومبدع، قادر على المنافسة عالمياً مع الحفاظ على هويته وانتمائه.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary"
          >
            <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-4">
              <Target size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">رسالتنا</h3>
            <p className="text-gray-600">
              تقديم خدمة تعليمية متميزة تساهم في بناء شخصية الطالب المتكاملة علمياً وثقافياً واجتماعياً، وتنمية مهاراته وقدراته المختلفة، وتعزيز قيم الانتماء والمواطنة لديه.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary"
          >
            <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-4">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-800">قيمنا</h3>
            <ul className="text-gray-600 space-y-2">
              <li>• التميز والإبداع في العملية التعليمية</li>
              <li>• الالتزام بالقيم الأخلاقية والمهنية</li>
              <li>• احترام التنوع والتعددية</li>
              <li>• العمل بروح الفريق الواحد</li>
              <li>• المسؤولية المجتمعية</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
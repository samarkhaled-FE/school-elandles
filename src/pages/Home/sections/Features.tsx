import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Lightbulb } from 'lucide-react';
import SectionTitle from '../../../components/common/SectionTitle';

const features = [
  {
    icon: <BookOpen size={28} />,
    title: 'منهج دراسي متميز',
    description: 'نقدم منهجاً دراسياً متكاملاً يجمع بين المعرفة النظرية والتطبيق العملي.'
  },
  {
    icon: <Users size={28} />,
    title: 'كادر تعليمي مؤهل',
    description: 'يضم فريقنا التعليمي نخبة من المعلمين المؤهلين ذوي الخبرة العالية.'
  },
  {
    icon: <Award size={28} />,
    title: 'تفوق أكاديمي',
    description: 'نسعى دائماً لتحقيق أعلى معدلات النجاح والتفوق لطلابنا في كافة المراحل.'
  },
  {
    icon: <Lightbulb size={28} />,
    title: 'أنشطة إبداعية',
    description: 'نهتم بتنمية مهارات الطلاب من خلال الأنشطة الإبداعية المتنوعة.'
  }
];

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

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="ما يميزنا"
          subtitle="نحن نسعى لتقديم خدمة تعليمية متكاملة تلبي احتياجات الطلاب وتساعدهم على تحقيق أهدافهم"
          centered
        />
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary"
            >
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
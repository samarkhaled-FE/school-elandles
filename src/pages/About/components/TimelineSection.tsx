import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/common/SectionTitle';

const timelineEvents = [
  {
    year: '1998',
    title: 'تأسيس المدرسة',
    description: 'تأسست مدرسة الأندلس وبدأت مسيرتها التعليمية بعدد محدود من الطلاب والفصول الدراسية.',
  },
  {
    year: '2005',
    title: 'افتتاح المبنى الجديد',
    description: 'تم افتتاح مبنى جديد للمدرسة يضم مرافق تعليمية حديثة ومتطورة لتحسين البيئة التعليمية.',
  },
  {
    year: '2010',
    title: 'توسعة البرامج الدراسية',
    description: 'توسعت المدرسة في برامجها الدراسية لتشمل مجالات جديدة تلبي احتياجات الطلاب المتنوعة.',
  },
  {
    year: '2015',
    title: 'حصول المدرسة على الاعتماد الدولي',
    description: 'حصلت المدرسة على الاعتماد الدولي كمؤسسة تعليمية متميزة تقدم خدمات تعليمية ذات جودة عالية.',
  },
  {
    year: '2020',
    title: 'تطوير التعلم الإلكتروني',
    description: 'طورت المدرسة منظومة التعلم الإلكتروني لديها لمواكبة التطورات التكنولوجية في مجال التعليم.',
  },
  {
    year: '2023',
    title: 'إطلاق مبادرة التعليم المستدام',
    description: 'أطلقت المدرسة مبادرة التعليم المستدام التي تهدف إلى دمج مفاهيم الاستدامة في المناهج الدراسية.',
  },
];

const TimelineSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <SectionTitle
          title="تاريخ المدرسة"
          subtitle="تعرف على أبرز المحطات في مسيرة مدرسة الأندلس منذ تأسيسها وحتى الآن"
          centered
        />
        
        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute right-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-16 text-left' : 'pr-16 text-right'}`}></div>
                
                <div className="absolute right-1/2 transform translate-x-1/2 z-10">
                  <div className="bg-primary text-white text-xl font-bold w-14 h-14 rounded-full flex items-center justify-center">
                    {event.year}
                  </div>
                </div>
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                  <div className="bg-white p-5 rounded-lg shadow-md border-r-4 border-primary">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
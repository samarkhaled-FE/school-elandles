import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/common/SectionTitle';

const timelineEvents = [
  {
    year: '2007',
    title: 'مكتب الأندلس للكمبيوتر واللغات',
    description: 'بدأت المدرسة العمل تحت مسمى مكتب الأندلس للكمبيوتر واللغات، لتقديم خدمات تعليمية متنوعة لأبناء القرية.'
  },
  {
    year: '2011',
    title: 'تأسيس مدرسة الأندلس للقرآن الكريم بصنبو',
    description: 'مدرسة الأندلس للقرآن الكريم خاضعة لإشراف الأزهر الشريف، سجل رقم 188 لسنة 2011م. أنشئت لتخدم أبناء القرية والقرى المجاورة، بهدف تحديث طريقة التحفيظ القديمة (الكتاتيب) بطريقة حديثة تواكب التطورات الحالية.'
  },
  {
    year: '2011',
    title: 'دورات التجويد والكورسات التعليمية',
    description: 'قامت المدرسة بعمل دورات تجويدية وتدريس كتب التجويد في هيئة كورسات تعليمية، منها الدورة التمهيدية الأولى (شرح متن تحفة الأطفال) والدورة التمهيدية الثانية (شرح متن الجزرية).' 
  },
  {
    year: '2011',
    title: 'العمل تحت إشراف الأزهر الشريف',
    description: 'عملت المدرسة تحت ترخيص الأزهر الشريف سجل رقم 188 لسنة 2011م.'
  },
  {
    year: 'الآن',
    title: 'فروع المدرسة وعدد الدارسين',
    description: 'للمدرسة فرعان: الأول في قرية صنبو مبنى الجمعية الزراعية الدور الثاني، والثاني في قرية نجع خضر مبنى الجمعية الشرعية. بلغ عدد الدارسين بها الآن حوالي 1000 طالب وطالبة من مختلف الأعمار من الجنسين.'
  },
  {
    year: 'الآن',
    title: 'نظام الدراسة والمعلمون',
    description: 'تعتمد الدراسة بالمدرسة على تعلم القرآن الكريم بالأحكام ودراسة أحكام التجويد شفويًا وتحريريًا. يقوم بالتدريس بها 25 معلم ومعلمة من حفظة القرآن الكريم من أبناء القرية، معظمهم تخرج من هذه المدرسة.'
  },
  {
    year: 'الآن',
    title: 'تطوير المعلمين',
    description: 'تقوم المدرسة الآن بشرح الدورة التمهيدية لمعلمي ومعلمات القرآن الكريم ببرنامج دكتور إبراهيم الشربيني "تدبر وعمل".'
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
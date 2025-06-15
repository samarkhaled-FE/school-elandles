import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../components/common/SectionTitle';
import Button from '../../components/common/Button';
import MissionVision from './components/MissionVision';
import TeamSection from './components/TeamSection';
import TimelineSection from './components/TimelineSection';
import fiveSVG from 'src/assets/animation/five.svg';

const About: React.FC = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle title="من نحن" />
              
              <div className="space-y-4 text-gray-600">
                <p>
                  تأسست مدرسة الأندلس عام 1998 على يد مجموعة من التربويين المتميزين الذين آمنوا بضرورة توفير تعليم نوعي يجمع بين الأصالة والمعاصرة، ويهدف إلى بناء جيل واعٍ متسلح بالعلم والقيم.
                </p>
                <p>
                  تقع المدرسة في مدينة القدس، وتضم مجمعاً تعليمياً متكاملاً يشمل مباني دراسية حديثة، ومختبرات علمية متطورة، وملاعب رياضية، وقاعات للأنشطة الثقافية والفنية.
                </p>
                <p>
                  تتميز المدرسة بكادر تعليمي مؤهل ومتميز، يضم نخبة من المعلمين والمعلمات ذوي الخبرة والكفاءة العالية، الذين يحرصون على تقديم أفضل الخدمات التعليمية للطلاب، ومساعدتهم على التفوق والإبداع.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src={fiveSVG}
                  alt="مدرسة الأندلس"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 p-4 rounded shadow-md">
                  <div className="flex justify-between">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary">1500+</h3>
                      <p className="text-sm text-gray-600">طالب وطالبة</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary">85+</h3>
                      <p className="text-sm text-gray-600">معلم ومعلمة</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-primary">25+</h3>
                      <p className="text-sm text-gray-600">سنة خبرة</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <MissionVision />
      <TimelineSection />
      <TeamSection />
    </div>
  );
};

export default About;
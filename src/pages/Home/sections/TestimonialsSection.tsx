import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react';
import SectionTitle from '../../../components/common/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    name: 'أحمد محمود',
    role: 'ولي أمر',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    text: 'أنا سعيد جداً بالمستوى التعليمي والتربوي الذي تقدمه مدرسة الأندلس. لقد لاحظت تطوراً كبيراً في مستوى ابني الدراسي وفي شخصيته منذ التحاقه بالمدرسة.',
  },
  {
    id: 2,
    name: 'سارة خالد',
    role: 'خريجة',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    text: 'مدرسة الأندلس كانت نقطة تحول في حياتي. لقد تعلمت فيها الكثير من المهارات والقيم التي ساعدتني في حياتي الجامعية والعملية. أنا فخورة جداً بانتمائي لهذه المدرسة العريقة.',
  },
  {
    id: 3,
    name: 'محمد عبدالله',
    role: 'طالب',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    text: 'المدرسة توفر بيئة تعليمية محفزة ومشجعة. أحب الأنشطة المتنوعة والفعاليات التي تنظمها المدرسة، وأشعر بأنني أتطور بشكل مستمر في مختلف المجالات.',
  },
  {
    id: 4,
    name: 'فاطمة أحمد',
    role: 'معلمة سابقة',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    text: 'عملت في المدرسة لعدة سنوات، وكانت من أجمل فترات حياتي المهنية. الإدارة متعاونة والكادر التعليمي متميز، والأهم من ذلك أن المدرسة تضع مصلحة الطالب فوق كل اعتبار.',
  },
];

const TestimonialsSection: React.FC = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="آراء طلابنا وأولياء الأمور"
          subtitle="نفتخر بما يقوله عنا طلابنا وأولياء أمورهم، وهذا يعكس جودة الخدمة التعليمية التي نقدمها"
          centered
        />
        
        <div className="relative mt-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col"
                >
                  <Quote size={40} className="text-primary opacity-20 mb-4" />
                  <p className="text-gray-600 mb-6 flex-grow">{testimonial.text}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ml-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="flex justify-center mt-8 space-x-4 space-x-reverse">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
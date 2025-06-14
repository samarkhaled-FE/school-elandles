import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import SectionTitle from '../../../components/common/SectionTitle';

const contactDetails = [
  {
    icon: <MapPin size={24} />,
    title: 'العنوان',
    details: 'صنبو - مبنى الجمعية الزراعية - الدور الثاني',
  },
  {
    icon: <Phone size={24} />,
    title: 'الهاتف',
    details: '01223919302',
  },
  
  {
    icon: <Clock size={24} />,
    title: 'ساعات العمل',
    details: 'يوميًا ما عدا الخميس والجمعة',
  },
];

const ContactInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle title="معلومات الاتصال" />
      
      <p className="text-gray-600 mb-8">
        يمكنك التواصل معنا من خلال وسائل الاتصال المختلفة الموضحة أدناه، أو زيارتنا في المدرسة خلال ساعات العمل الرسمية.
      </p>
      
      <div className="space-y-6 mb-8">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="bg-primary bg-opacity-10 p-3 rounded-full text-primary ml-4">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-gray-600">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-4">تابعنا على وسائل التواصل الاجتماعي</h3>
        <div className="flex space-x-4 space-x-reverse">
          <a
            href="https://www.facebook.com/profile.php?id=100071271681254"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary bg-opacity-10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-all"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
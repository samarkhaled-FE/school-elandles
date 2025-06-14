import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../../../components/common/SectionTitle';

const Map: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <SectionTitle title="موقعنا" centered />
          <p className="text-gray-600 max-w-2xl mx-auto">
            يمكنك زيارتنا في المدرسة في أي وقت خلال ساعات العمل الرسمية. نحن نقع في موقع مركزي يسهل الوصول إليه.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27034.907342180815!2d35.21377035!3d31.76832585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem!5e0!3m2!1sen!2s!4v1698834047055!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="خريطة موقع المدرسة"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Map;
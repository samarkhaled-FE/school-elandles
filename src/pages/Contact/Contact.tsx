import React from 'react';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

const Contact: React.FC = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
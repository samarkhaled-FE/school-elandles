import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyan-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-white">مدرسة</span>
              <span className="text-amber-400"> الأندلس</span>
            </h3>
            <p className="mb-6 text-gray-300">
              نسعى لتقديم تعليم متميز يساهم في بناء جيل واعي قادر على مواجهة تحديات المستقبل بكفاءة وإبداع.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://www.facebook.com/profile.php?id=100071271681254" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/samar-khaled-abdradi" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              روابط سريعة
              <span className="absolute bottom-0 right-0 w-12 h-1 bg-amber-400 mt-2"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">عن المدرسة</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">البرامج الدراسية</Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors">الأخبار والفعاليات</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              الاتصال بنا
              <span className="absolute bottom-0 right-0 w-12 h-1 bg-amber-400 mt-2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="ml-2 mt-1 text-amber-400" />
                <span className="text-gray-300">صنبو - مبنى الجمعية الزراعية - الدور الثاني</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="ml-2 text-amber-400" />
                <span className="text-gray-300">01226260636 – 01012112443 – 01013013030 – 01223919302</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 relative">
              مواعيد الدورة
              <span className="absolute bottom-0 right-0 w-12 h-1 bg-amber-400 mt-2"></span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>يوميًا ما عدا الخميس والجمعة</span>
              </li>
              <li className="flex justify-between">
                <span>من 9 صباحًا حتى 1 ظهرًا</span>
              </li>
              <li className="flex justify-between">
                <span>ومن 3 عصرًا حتى 6 مساءً</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="text-center text-gray-400">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - مدرسة الأندلس</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
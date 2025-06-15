import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import SectionTitle from '../../../components/common/SectionTitle';
import mangerImg from '../../../assets/images/manger.jpg';
import teacherImg from '../../../assets/images/teacher.png';

const teamMembers = [
  {
    name: 'الشيخ/ ممدوح فراج',
    position: 'مدير المدرسة',
    image: mangerImg,
    social: {
      email: 'mailto:mohammad@alaqsaschool.edu',
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'الشيخ/ إبراهيم',
    position: 'مشرف عام للمدرسة',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    social: {
      email: 'mailto:sarah@alaqsaschool.edu',
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'أ.محمد سمير',
    position: 'استاذ اللغة العربية',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    social: {
      email: 'mailto:ahmad@alaqsaschool.edu',
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    name: 'ميادة محمد رشدي',
    position: 'مشرفة المدرسة',
    image: teacherImg,
    social: {
      email: 'mailto:fatima@alaqsaschool.edu',
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <SectionTitle
          title="فريق الإدارة"
          subtitle="تعرف على فريق الإدارة المتميز الذي يقود مسيرة التطوير والتميز في مدرسة الأندلس"
          centered
        />
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={item} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center space-x-4">
                    <a
                      href={member.social.facebook}
                      className="bg-white/20 p-2 rounded-full hover:bg-primary hover:text-white transition-all"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="bg-white/20 p-2 rounded-full hover:bg-primary hover:text-white transition-all"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={member.social.instagram}
                      className="bg-white/20 p-2 rounded-full hover:bg-primary hover:text-white transition-all"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href={member.social.email}
                      className="bg-white/20 p-2 rounded-full hover:bg-primary hover:text-white transition-all"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-primary">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
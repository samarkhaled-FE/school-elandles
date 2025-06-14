import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import SectionTitle from '../../../components/common/SectionTitle';
import Button from '../../../components/common/Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    schoolYear: '',
    grade: '',
    parentName: '',
    address: '',
    whatsapp: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // تكوين نص الرسالة من بيانات النموذج
    const message = `\nالاسم: ${formData.name}\nتاريخ الميلاد: ${formData.birthdate}\nالسنة الدراسية: ${formData.schoolYear}\nالصف الدراسي: ${formData.grade}\nاسم ولي الأمر: ${formData.parentName}\nالعنوان: ${formData.address}\nرقم الواتس: ${formData.whatsapp}`;

    // رقم الواتساب المطلوب (بدون صفر في البداية، مع كود الدولة)
    const phone = "201122199303"; // 2 = كود مصر

    // تكوين رابط واتساب
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    // فتح واتساب في نافذة جديدة
    window.open(whatsappUrl, "_blank");
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle title="تواصل معنا" />
      
      <p className="text-gray-600 mb-8">
        نحن نرحب بتواصلك معنا في أي وقت. يمكنك إرسال استفساراتك أو اقتراحاتك من خلال النموذج التالي، وسنقوم بالرد عليك في أقرب وقت ممكن.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              الاسم الكامل *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="أدخل اسم الطفل"
            />
          </div>
          <div>
            <label htmlFor="birthdate" className="block text-gray-700 font-medium mb-2">
              تاريخ الميلاد *
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="schoolYear" className="block text-gray-700 font-medium mb-2">
              السنة الدراسية *
            </label>
            <input
              type="text"
              id="schoolYear"
              name="schoolYear"
              value={formData.schoolYear}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="مثال: 2023/2024"
            />
          </div>
          <div>
            <label htmlFor="grade" className="block text-gray-700 font-medium mb-2">
              الصف الدراسي *
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="مثال: الصف الرابع"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="parentName" className="block text-gray-700 font-medium mb-2">
              اسم ولي أمر الطفل *
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="أدخل اسم ولي الأمر"
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
              العنوان بالتفصيل *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="اكتب العنوان بالتفصيل"
            />
          </div>
        </div>
        <div>
          <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-2">
            رقم الواتس *
          </label>
          <input
            type="text"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="أدخل رقم الواتس"
          />
        </div>
        <div>
          <Button
            type="submit"
            disabled={formStatus === 'submitting'}
            className="flex items-center justify-center"
          >
            {formStatus === 'submitting' ? (
              'جاري الإرسال...'
            ) : (
              <>
                إرسال البيانات
                <Send size={18} className="mr-2" />
              </>
            )}
          </Button>
          
          {formStatus === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-green-600 font-medium"
            >
              تم إرسال البيانات بنجاح. سنقوم بالرد عليك في أقرب وقت ممكن.
            </motion.p>
          )}
          
          {formStatus === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-red-600 font-medium"
            >
              حدث خطأ أثناء إرسال البيانات. الرجاء المحاولة مرة أخرى.
            </motion.p>
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
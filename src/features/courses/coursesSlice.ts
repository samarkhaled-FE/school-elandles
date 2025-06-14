import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  teacher: string;
  duration: string;
  level: string;
}

interface CoursesState {
  courses: Course[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CoursesState = {
  courses: [
    {
      id: '1',
      title: 'تعلم اللغة العربية',
      description: 'دورة شاملة لتعلم اللغة العربية من البداية وحتى الاحتراف',
      image: 'https://images.pexels.com/photos/4144101/pexels-photo-4144101.jpeg',
      teacher: 'أ. أحمد محمد',
      duration: '3 أشهر',
      level: 'مبتدئ',
    },
    {
      id: '2',
      title: 'أساسيات الرياضيات',
      description: 'تعلم أساسيات الرياضيات بطريقة مبسطة وممتعة',
      image: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg',
      teacher: 'د. سارة أحمد',
      duration: '4 أشهر',
      level: 'متوسط',
    },
    {
      id: '3',
      title: 'العلوم الطبيعية',
      description: 'استكشاف عالم العلوم الطبيعية بطريقة تفاعلية',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
      teacher: 'د. محمد علي',
      duration: '5 أشهر',
      level: 'متقدم',
    },
    {
      id: '4',
      title: 'التاريخ الإسلامي',
      description: 'رحلة شيقة في التاريخ الإسلامي والحضارة الإسلامية',
      image: 'https://images.pexels.com/photos/4946527/pexels-photo-4946527.jpeg',
      teacher: 'أ. عمر خالد',
      duration: '3 أشهر',
      level: 'مبتدئ',
    },
  ],
  status: 'idle',
  error: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse: (state, action: PayloadAction<Course>) => {
      state.courses.push(action.payload);
    },
  },
});

export const { addCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
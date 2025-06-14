import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

interface NewsState {
  news: NewsItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: NewsState = {
  news: [
    {
      id: '1',
      title: 'افتتاح مبنى المدرسة الجديد',
      summary: 'افتتاح المبنى الجديد للمدرسة بحضور عدد من المسؤولين والشخصيات البارزة',
      content: 'تم بحمد الله افتتاح المبنى الجديد للمدرسة الذي يضم مرافق تعليمية حديثة ومتطورة تساهم في تحسين البيئة التعليمية للطلاب. وقد حضر حفل الافتتاح عدد من المسؤولين والشخصيات البارزة الذين أشادوا بالمستوى المتميز للمدرسة ودورها الرائد في العملية التعليمية.',
      image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg',
      date: '2023-09-15',
      author: 'إدارة المدرسة',
    },
    {
      id: '2',
      title: 'تكريم الطلاب المتفوقين',
      summary: 'حفل تكريم للطلاب المتفوقين في الفصل الدراسي الأول',
      content: 'أقامت المدرسة حفلاً لتكريم الطلاب المتفوقين في الفصل الدراسي الأول، وذلك تشجيعاً لهم على مواصلة التفوق والتميز. وقد حضر الحفل أولياء الأمور وعدد من المعلمين والإداريين الذين أشادوا بجهود الطلاب وتفوقهم.',
      image: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg',
      date: '2023-12-20',
      author: 'قسم الأنشطة الطلابية',
    },
    {
      id: '3',
      title: 'انطلاق برنامج التبادل الثقافي',
      summary: 'بدء برنامج التبادل الثقافي مع المدارس العالمية',
      content: 'انطلق برنامج التبادل الثقافي الذي تنظمه المدرسة بالتعاون مع عدد من المدارس العالمية، والذي يهدف إلى تبادل الخبرات والمعارف وتعزيز التواصل الثقافي بين الطلاب من مختلف الثقافات.',
      image: 'https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg',
      date: '2024-02-10',
      author: 'قسم العلاقات الدولية',
    },
  ],
  status: 'idle',
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNewsItem: (state, action: PayloadAction<NewsItem>) => {
      state.news.push(action.payload);
    },
  },
});

export const { addNewsItem } = newsSlice.actions;
export default newsSlice.reducer;
import { combineReducers } from '@reduxjs/toolkit';
import coursesReducer from '../features/courses/coursesSlice';
import newsReducer from '../features/news/newsSlice';

const rootReducer = combineReducers({
  courses: coursesReducer,
  news: newsReducer,
});

export default rootReducer;
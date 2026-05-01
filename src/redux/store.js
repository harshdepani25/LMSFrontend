import { configureStore } from '@reduxjs/toolkit'
import authReducers from './slice/auth.slice'
import alertReducers from './slice/alert.slice'
import categoryReducers from './slice/CategorySlice'
import { courseApi } from './Api/Course.api'
import { SectionApi } from './Api/Section.api'
import { quizApi } from './Api/quiz.api'
import { quizContentApi } from './Api/quizContent.api'
import { contentApi } from './Api/Content.api'


export const store = configureStore({
  reducer: {
    auth: authReducers,
    alert: alertReducers,
    category: categoryReducers,
    [courseApi.reducerPath]: courseApi.reducer,
    [SectionApi.reducerPath]: SectionApi.reducer,
    [quizApi.reducerPath]: quizApi.reducer,
    [quizContentApi.reducerPath]: quizContentApi.reducer,
    [contentApi.reducerPath]: contentApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      courseApi.middleware,
      SectionApi.middleware,
      quizApi.middleware,
      quizContentApi.middleware,
      contentApi.middleware,
    ),
})
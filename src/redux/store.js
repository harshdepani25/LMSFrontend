import { configureStore } from '@reduxjs/toolkit'
import authReducers from './slice/auth.slice'
import alertReducers from './slice/alert.slice'
import categoryReducers from './slice/CategorySlice'
import { courseApi } from './Api/Course.api'


export const store = configureStore({
  reducer: {
    auth: authReducers,
    alert: alertReducers,
    category: categoryReducers,
    [courseApi.reducerPath]: courseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(courseApi.middleware),
})
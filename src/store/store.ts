import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'

export const store = configureStore({
  reducer: {
    auth : userSlice
  },
  devTools: import.meta.env.NODE_ENV !== "production"
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { configureStore } from '@reduxjs/toolkit';
import { basketReducer } from './slice/basketSlice';
import { productReducer } from './slice/productSlice';
export const store = configureStore({
  reducer: {
    basket: basketReducer, 
    product: productReducer
  },
});

// Tipos globais para o Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

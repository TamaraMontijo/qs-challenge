import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type BasketItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type BasketState = {
  items: BasketItem[];
};

const initialState: BasketState = {
  items: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
   
    addItem: (state, action: PayloadAction<BasketItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
 
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        console.log('Updating quantity:', action.payload);
        item.quantity = action.payload.quantity;
      }
    },

    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearBasket } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;

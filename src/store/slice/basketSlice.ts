import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Tipagem do item no carrinho
type BasketItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// Tipagem do estado inicial
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
    // Adicionar um item ao carrinho
    addItem: (state, action: PayloadAction<BasketItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    // Remover um item do carrinho
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    // Alterar a quantidade de um item
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        console.log('Updating quantity:', action.payload);
        item.quantity = action.payload.quantity;
      }
    },
    // Limpar o carrinho
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

// Exportar as actions e o reducer
export const { addItem, removeItem, updateQuantity, clearBasket } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;

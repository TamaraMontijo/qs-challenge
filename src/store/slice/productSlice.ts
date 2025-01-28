import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Tipagem para o produto
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  images?: { image: string }[];
  modifiers?: any; // Tipar de acordo com sua necessidade
};

// Tipagem do estado inicial
type ProductState = {
  products: Product[];
  loading: boolean;
};

const initialState: ProductState = {
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setProducts, setLoading } = productSlice.actions;
export const productReducer = productSlice.reducer;

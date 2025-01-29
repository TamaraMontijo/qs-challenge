import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  images?: { image: string }[];
  modifiers?: ModifierItem[]; 
};

interface ModifierItem {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string; // Example: "AVAILABLE_NOW"
  qty?: number; 
  available: boolean;
}

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

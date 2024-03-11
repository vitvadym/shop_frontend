import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types';
import type { RootState } from '../../store';
import updateProductQuantity from '../../../utils/updateProductQuantity';

export interface CartState {
  bag: IProduct[];
  favorites: IProduct[];
  totalPrice: number;
}

const initialState: CartState = {
  bag: [],
  favorites: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.bag.push({
        ...action.payload,
        quantity: 1,
      });
    },
    removeProduct: (state, action: PayloadAction<IProduct>) => {
      state.bag = state.bag.filter(
        (product) => product.id !== action.payload.id,
      );
    },
    toggleFavorite: (state, action: PayloadAction<IProduct>) => {
      const isInFavorites = state.favorites.some(
        (product) => product.itemId === action.payload.itemId,
      );

      if (isInFavorites) {
        state.favorites = state.favorites.filter(
          (product) => product.itemId !== action.payload.itemId,
        );
      } else {
        state.favorites.push(action.payload);
      }
    },
    toggleQuantity: (
      state,
      action: PayloadAction<{ type: string; id: number }>,
    ) => {
      state.bag = state.bag.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: updateProductQuantity(product, action.payload.type),
          };
        }
        return product;
      });
    },
    countTotal: (state) => {
      state.totalPrice = state.bag.reduce((total, product) => {
        const quantity = product.quantity || 1;
        const productTotal = product.price * quantity;

        return total + productTotal;
      }, 0);
    },
  },
});
export const {
  addProduct,
  removeProduct,
  toggleFavorite,
  toggleQuantity,
  countTotal,
} = cartSlice.actions;

export const selectProducts = (state: RootState) => state.cart?.bag;
export const selectFavorites = (state: RootState) => state.cart?.favorites;
export const selectTotalPrice = (state: RootState) => state.cart?.totalPrice;

export default cartSlice.reducer;

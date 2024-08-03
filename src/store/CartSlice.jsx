import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalItems++;
        state.totalPrice += action.payload.price;
      }
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.totalItems--;
        state.totalPrice -= state.items[index].price * state.items[index].quantity;
        state.items.splice(index, 1);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        state.totalPrice -= existingItem.price * existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalPrice += existingItem.price * existingItem.quantity;
        state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;

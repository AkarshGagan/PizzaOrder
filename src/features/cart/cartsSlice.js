import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuqantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.totalPrice * item.quantity;
    },
    decreaseItemQuqantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      if (item.quantity === 0) {
        //here i am using deleteIem reducer from above reducer , reusing the logic
        cartSlice.caseReducers.deleteItem(state, action);
      }
      item.totalPrice = item.totalPrice * item.quantity;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuqantity,
  decreaseItemQuqantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const totalQuantity = (state) =>
  state.cart.cart.reduce((acc, prev) => {
    return acc + prev.quantity;
  }, 0);

export const totalCartPrice = (state) =>
  state.cart.cart.reduce((acc, prev) => {
    return acc + prev.totalPrice;
  }, 0);

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantityByID = (id) => (state) => {
  return state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
};

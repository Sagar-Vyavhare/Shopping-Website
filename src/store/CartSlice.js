import { createSlice } from "@reduxjs/toolkit";

const cart_Slice = createSlice({
  name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            return [...state,action.payload]
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { add, remove } = cart_Slice.actions;
export default cart_Slice.reducer;

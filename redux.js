
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useState } from 'react';
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    data:[],
  },
  reducers: {
  
    added:(state,action)=>{
      state.data.push(action.payload);
    }
  },
});

const store=configureStore({
    reducer:{counter:counterSlice.reducer},
})
export const counteractions=counterSlice.actions;
export default store;
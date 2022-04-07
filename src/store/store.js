import { configureStore } from '@reduxjs/toolkit';
import fetchSlice from './fetchSlice';

const store = configureStore({
	reducer: fetchSlice.reducer,
});

export default store;

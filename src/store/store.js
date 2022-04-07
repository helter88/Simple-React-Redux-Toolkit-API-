import { configureStore } from '@reduxjs/toolkit';
import fetchSlice from './FetchSlice';

const store = configureStore({
	reducer: fetchSlice.reducer,
});

export default store;

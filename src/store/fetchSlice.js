import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	isLoading: false,
	data: [],
	err: '',
};

const fetchSlice = createSlice({
	name: 'fetch data',
	initialState,
	reducers: {
		startFetch(state) {
			state.isLoading = true;
		},
		successFetch(state, payload) {
			state.isLoading = false;
			state.data = payload;
		},
		failedFetch(state, payload) {
			state.isLoading = false;
			state.err = payload;
		},
	},
});

export const getData = () => {
	return async (dispatch) => {
		dispatch(fetchActions.startFetch);
		const fetchData = async () => {
			const response = await axios(
				'https://jsonplaceholder.typicode.com/users'
			);
			return response.data;
		};
		try {
			const users = await fetchData();
			dispatch(fetchActions.successFetch(users));
		} catch (error) {
			dispatch(fetchActions.failedFetch(error));
		}
	};
};

export const fetchActions = fetchSlice.actions;

export default fetchSlice;

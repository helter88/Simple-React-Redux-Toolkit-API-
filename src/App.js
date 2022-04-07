import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getData } from './store/fetchSlice';

function App() {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.data);
	useEffect(() => {
		dispatch(getData());
	}, []);

	console.log(users);

	return (
		<div className="App">
			<h1>User List:</h1>
		</div>
	);
}

export default App;

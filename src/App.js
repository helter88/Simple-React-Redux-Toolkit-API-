import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getData } from './store/fetchSlice';

function App() {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.data.payload);
	useEffect(() => {
		dispatch(getData());
	}, []);

	let displayUsers = users?.map((user) => (
		<li key={user.id}>
			<h3>{user.name}</h3>
			<p>{user.email}</p>
			<p>{user.phone}</p>
		</li>
	));

	return (
		<div className="App">
			<h1>User List:</h1>
			<ul>{displayUsers}</ul>
		</div>
	);
}

export default App;

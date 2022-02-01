import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {
	const [items, setItems] = useState([]);
	useEffect(async () => {
		const data = await fetch('https://fakestoreapi.com/products');
		const result = await data.json();
		console.log(result);
	}, []);
	return (
		<div className="App">
			<header>
				<input type="text" placeholder="Search" />
			</header>
		</div>
	);
}

export default App;

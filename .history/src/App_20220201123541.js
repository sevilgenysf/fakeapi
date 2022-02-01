import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {
	const [items, setItems] = useState([]);
	useEffect(async () => {
		const data = await fetch('https://fakerestapi.com/products');
	}, []);
	return (
		<div className="App">
			<h1>Hello World</h1>
		</div>
	);
}

export default App;

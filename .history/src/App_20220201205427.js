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
			<Header>
				<input type="text" placeholder="Search" />
				<button>Search</button>
			</Header>
		</div>
	);
}

export default App;

const Header = styled.header`
	display: flex;
	min-height: 50px;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #ccc;
	font-size: 1.5rem;

	input {
		width: 300px;
		height: 30px;
		margin-right: 10px;
		outline: none;
	}

	button {
		padding: 5px 10px;
		margin-right: 10px;
		transition: 0.3s ease-in-out;
		cursor: pointer;
	}

	button:hover {
		background-color: #ccc;
		color: #fff;
		border: none;
	}
`;

const Items = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 20px;
`;

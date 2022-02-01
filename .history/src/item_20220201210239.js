import React from 'react';

const Item = ({ id, title, price, category, description, image }) => {
	return (
		<div>
			<image src={image} />
			<h3>{title}</h3>
		</div>
	);
};

export default Item;

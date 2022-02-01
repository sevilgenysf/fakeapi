import React from 'react';

const Item = ({ id, title, price, category, description, image }) => {
	return (
		console.log(image);
		<div>
			<image src={image} />
			<h3>{title}</h3>
			<p>{description}</p>
			<p>{price}</p>
		</div>
	);
};

export default Item;

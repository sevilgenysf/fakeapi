import React from 'react';

const Item = ({ id, title, price, category, description, image }) => {
	return (
		<div>
			d<div>{image}</div>
			<h3>{title}</h3>
			<p>{description}</p>
			<p>{price}</p>
		</div>
	);
};

export default Item;

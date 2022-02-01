import React from 'react';

const Item = ({ id, title, price, category, description, image }) => {
	return (
		<div>
			<image src={image} />
		</div>
	);
};

export default Item;

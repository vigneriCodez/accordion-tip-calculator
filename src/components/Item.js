import React from 'react';

function Item({ num, title, text }) {
	return (
		<div className='item'>
			<p>{num}</p>
			<h2>{title}</h2>
			<p>{text}</p>
		</div>
	);
}

export default Item;

import React from 'react';

function Item({ num, title, text }) {
	return (
		<div className='item'>
			<p className='number'>{num < 9 ? `0${num}` : num}</p>
			<h2 className='text'>{title}</h2>
			<p className='icon'>-</p>
			<div className='content-box'>{text}</div>
		</div>
	);
}

export default Item;

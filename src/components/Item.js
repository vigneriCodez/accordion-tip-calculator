import React, { useState } from 'react';

function Item({ num, title, text }) {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen((bool) => !bool);
	};

	return (
		<div onClick={handleToggle} className={`item ${isOpen ? 'open' : ''}`}>
			<p className='number'>{num < 9 ? `0${num}` : num}</p>
			<h2 className='title'>{title}</h2>
			<p className='icon'>{isOpen ? '-' : '+'}</p>
			{isOpen && <div className='content-box'>{text}</div>}
		</div>
	);
}

export default Item;

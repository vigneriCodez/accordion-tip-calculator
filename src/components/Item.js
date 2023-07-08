import React from 'react';

function Item({ num, title, curOpen, onOpen, children }) {
	const isOpen = num === curOpen;
	const displayNum = num + 1;

	const handleToggle = () => {
		onOpen(isOpen ? null : num);
	};

	return (
		<div onClick={handleToggle} className={`item ${isOpen ? 'open' : ''}`}>
			<p className='number'>{displayNum < 9 ? `0${displayNum}` : displayNum}</p>
			<h2 className='title'>{title}</h2>
			<p className='icon'>{isOpen ? '-' : '+'}</p>
			{isOpen && <div className='content-box'>{children}</div>}
		</div>
	);
}

export default Item;

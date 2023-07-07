import React from 'react';

import Item from './Item';

function Accordion({ data }) {
	return (
		<div className='accordion'>
			<h1>the Accordion:</h1>
			<ol>
				{data.map((el, i) => (
					<Item key={el.title} title={el.title} text={el.text} num={i + 1} />
				))}
			</ol>
		</div>
	);
}

export default Accordion;

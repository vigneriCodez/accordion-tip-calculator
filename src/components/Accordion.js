import React, { useState } from 'react';

import Item from './Item';

function Accordion({ data }) {
	const [curOpen, setCurOpen] = useState(null);

	return (
		<div className='accordion'>
			<h1>the Accordion:</h1>
			<ol>
				{data.map((el, i) => (
					<Item
						curOpen={curOpen}
						onOpen={setCurOpen}
						key={el.title}
						title={el.title}
						num={i}
					>
						{el.text}
					</Item>
				))}
			</ol>
		</div>
	);
}

export default Accordion;

import React from 'react';

import Item from './Item';

function Accordion({ faqs }) {
	return (
		<div className='accordion'>
			<h1>the Accordion:</h1>
			<ol>
				{faqs.map((faq, i) => {
					return (
						<Item
							key={faq.title}
							title={faq.title}
							text={faq.text}
							num={i + 1}
						/>
					);
				})}
			</ol>
		</div>
	);
}

export default Accordion;

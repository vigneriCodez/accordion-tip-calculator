import React, { useState } from 'react';

function TipService({ children }) {
	const [tipAmt, setTipAmt] = useState(5);

	return (
		<>
			<span>{children}</span>
			<select value={tipAmt} onChange={(e) => setTipAmt(e.target.value)}>
				<option value={5}>It was poor (5%)</option>
				<option value={10}>It was good (10%)</option>
				<option value={15}>It was great (15%)</option>
				<option value={25}>Absolutely amazing! (25%)</option>
			</select>
		</>
	);
}

export default TipService;

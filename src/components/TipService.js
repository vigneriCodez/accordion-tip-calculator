import React from 'react';

function TipService({ children, tipAmt, setTipAmt }) {
	return (
		<>
			<div>
				<label>{children}</label>
				<select
					value={tipAmt}
					onChange={(e) => setTipAmt(Number(e.target.value))}
				>
					<option value={0}>It was real bad (0%)</option>
					<option value={5}>It was poor (5%)</option>
					<option value={10}>It was good (10%)</option>
					<option value={15}>It was great (15%)</option>
					<option value={25}>Absolutely amazing! (25%)</option>
				</select>
			</div>
		</>
	);
}

export default TipService;

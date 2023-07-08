import React from 'react';

function CalcDisplay({ billAmt, tip1Amt, tip2Amt }) {
	const newTipTotal = tip1Amt + tip2Amt;
	const newTipAmt = (billAmt * newTipTotal) / 100;
	const newTotal = newTipAmt + billAmt;

	return (
		<>
			<div>
				<h2>
					You pay ${newTotal} total (${billAmt} + ${newTipAmt} tip)
				</h2>
				<p>------</p>
				<h3>${newTotal / 2} Each</h3>
			</div>
		</>
	);
}

export default CalcDisplay;

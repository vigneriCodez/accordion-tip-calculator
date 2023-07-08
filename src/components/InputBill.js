import React from 'react';

function InputBill({ billAmt, setBillAmt }) {
	return (
		<>
			<span>How much was the bill?</span>
			<input
				id='bill'
				name='bill'
				type='number'
				value={billAmt}
				onChange={(e) => setBillAmt(Number(e.target.value))}
			/>
		</>
	);
}

export default InputBill;

import React from 'react';

function InputBill({ billAmt, onSetBillAmt }) {
	return (
		<>
			<label>How much was the bill?</label>
			<input
				id='bill'
				name='bill'
				type='number'
				placeholder='Bill Amount...'
				value={billAmt}
				onChange={(e) => onSetBillAmt(Number(e.target.value))}
			/>
		</>
	);
}

export default InputBill;

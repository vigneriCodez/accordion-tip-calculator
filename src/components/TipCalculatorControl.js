import React, { useState } from 'react';

import InputBill from './InputBill';
import TipService from './TipService';
import CalcDisplay from './CalcDisplay';
import ResetButton from './ResetButton';

function TipCalculatorControl() {
	const [billAmt, setBillAmt] = useState(0);
	const [tip1Amt, setTip1Amt] = useState(5);
	const [tip2Amt, setTip2Amt] = useState(5);

	const handleResetPress = () => {
		setBillAmt(0);
		setTip1Amt(5);
		setTip2Amt(5);
	};

	return (
		<>
			<div>the Tip Calculator:</div>
			<InputBill billAmt={billAmt} setBillAmt={setBillAmt} />

			<TipService tipAmt={tip1Amt} setTipAmt={setTip1Amt}>
				<p>How did you like the service?</p>
			</TipService>

			<TipService tipAmt={tip2Amt} setTipAmt={setTip2Amt}>
				<p>How did your friend like the service?</p>
			</TipService>
			<CalcDisplay billAmt={billAmt} tip1Amt={tip1Amt} tip2Amt={tip2Amt} />
			<ResetButton onClick={handleResetPress} />
		</>
	);
}

export default TipCalculatorControl;

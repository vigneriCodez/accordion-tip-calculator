import React, { useState } from 'react';

import InputBill from './InputBill';
import TipService from './TipService';
import CalcDisplay from './CalcDisplay';
import ResetButton from './ResetButton';

function TipCalculatorControl() {
	const [billAmt, setBillAmt] = useState('');
	const [tip1Amt, setTip1Amt] = useState(10);
	const [tip2Amt, setTip2Amt] = useState(10);

	const handleResetPress = () => {
		setBillAmt('');
		setTip1Amt(10);
		setTip2Amt(10);
	};

	return (
		<>
			<div>
				<h1>the Tip Calculator:</h1>
				<InputBill billAmt={billAmt} onSetBillAmt={setBillAmt} />
				<TipService tipAmt={tip1Amt} setTipAmt={setTip1Amt}>
					How did you like the service?
				</TipService>
				<TipService tipAmt={tip2Amt} setTipAmt={setTip2Amt}>
					How did your friend like the service?
				</TipService>
				{billAmt > 0 && (
					<>
						<CalcDisplay
							billAmt={billAmt}
							tip1Amt={tip1Amt}
							tip2Amt={tip2Amt}
						/>
						<ResetButton onReset={handleResetPress} />
					</>
				)}
			</div>
		</>
	);
}

export default TipCalculatorControl;

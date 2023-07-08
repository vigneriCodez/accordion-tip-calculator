import React from 'react';

import InputBill from './InputBill';
import TipService from './TipService';
import CalcDisplay from './CalcDisplay';
import ResetButton from './ResetButton';

function TipCalculatorControl() {
	return (
		<>
			<div>the Tip Calculator:</div>
			<InputBill />

			<TipService>
				<p>How did you like the service?</p>
			</TipService>

			<TipService>
				<p>How did your friend like the service?</p>
			</TipService>
			<CalcDisplay />
			<ResetButton />
		</>
	);
}

export default TipCalculatorControl;

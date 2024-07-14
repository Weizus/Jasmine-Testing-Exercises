// we can test:
// 
// If sumPaymentTotal is returning the right value for a given type of payment (billAmt/tipAmt/tipPercent)
// If calculateTipPercent is returning the right value
// If appendTd adds a child with the appropriate value to the tr element 

describe("Helpers test (with setup and tear-down)", () => {
	beforeEach(() => {
		billAmtInput.value = '10';
		tipAmtInput.value = '1';
		submitPaymentInfo();

		billAmtInput.value = '13';
		tipAmtInput.value = '6';
		submitPaymentInfo();
	});

	it('should return the correct value for total bill amount, tip amount and tip percent', () => {
		expect(sumPaymentTotal('billAmt')).toEqual(23);
		expect(sumPaymentTotal('tipAmt')).toEqual(7);
		expect(sumPaymentTotal('tipPercent')).toEqual(56);
	});

	it('should return the correct tip percent given a billAmt and tipAmt', () => {
		expect(calculateTipPercent(10, 1)).toEqual(10);
		expect(calculateTipPercent(13, 6)).toEqual(46);
	});

	it('should append a table data cell to a table row element', () => {
		let newTr = document.createElement('tr');
		appendTd(newTr, 'test');

		expect(newTr.children.length).toEqual(1);
		expect(newTr.children[0].innerHTML).toEqual('test');
	});

	afterEach(() => {
		//objects n variables
		allPayments = {};
		paymentId = 0;

		// html stuff
		billAmtInput.value = '';
		tipAmtInput.value = '';
		paymentTbody.innerHTML = ''; 
		summaryTds[0].innerHTML = '';
		summaryTds[1].innerHTML = '';
		summaryTds[2].innerHTML = '';
		serverTbody.innerHTML = '';
	});
});

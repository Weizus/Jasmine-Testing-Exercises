// we can test:
// 1.if were getting new payment objects
//   if were getting payment objects only when all fields are valid
// 2.if submitPaymentInfo is adding to the payments object
// 	 html is updated when appendPaymentTable, updateServerTable, and updateSummary are called
describe("payments test (with setup and tear-down)", () => {
	beforeEach(() => {
		billAmtInput.value = 10;
		tipAmtInput.value = 1;
	});

	it('submitPaymentInfo should add new payment objects to allPayments array', () => {
		submitPaymentInfo();

		expect(Object.keys(allPayments).length).toEqual(1);
		expect(allPayments['payment1'].billAmt).toEqual('10');
		expect(allPayments['payment1'].tipAmt).toEqual('1');
		expect(allPayments['payment1'].tipPercent).toEqual(10);
	});

	it('submitPaymentInfo should not add a new payment object if all fields are not valid', () => {
		tipAmtInput.value = '';
		submitPaymentInfo();

		expect(Object.keys(allPayments).length).toEqual(0);
	});

	it('appendPaymentTable should add new payment information to the html', () => {
		let curPayment = createCurPayment();	
		appendPaymentTable(curPayment);

		let curPaymentTd = document.querySelectorAll('#paymentTable tbody tr td');
		expect(curPaymentTd.length).toEqual(3);
		expect(curPaymentTd[0].innerText).toEqual('$10');
		expect(curPaymentTd[1].innerText).toEqual('$1');
		expect(curPaymentTd[2].innerText).toEqual('10%');
	});

	it('createCurPayment will return undefined with invalid inputs', () => {
		billAmtInput.value = ''

		expect(createCurPayment()).toBe(undefined);
	});

	it('should create a new payment on createCurPayment()', function () {
		billAmtInput.value = 10;
		tipAmtInput.value = 10;

		let curPayment = {
			billAmt: '10',
			tipAmt: '10',
			tipPercent: 100,
		}

		expect(createCurPayment()).toEqual(curPayment);
	});

	afterEach(() => {
		paymentId = 0;
		allPayments = {};

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

describe('rates, years, amounts', () => {
	it('should calculate the monthly rate correctly', () => {
  		expect(+calculateMonthlyPayment({amount : 25000, years : 6, rate : 7})).toEqual(426.23);
	})
});

describe('results', () => {
	it("should return a result with 2 decimal places", () => {
  		expect(+calculateMonthlyPayment({amount : 25000, years : 6, rate : 7})).toEqual(426.23, 2);
	})
});

/// etc

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let values = {amount : 25000, years : 6, rate : 7}
  let amountUI = document.querySelector("#loan-amount");
  amountUI.value = values.amount;
  let yearsUI = document.querySelector("#loan-years");
  yearsUI.value = values.years;
  let rateUI = document.querySelector("#loan-rate");
  rateUI.value = values.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
// .toFixed() will return value as a string
function calculateMonthlyPayment(values) {
  let monthlyRate = (values.rate / 100.0) / 12.0; 
  let total_number_of_payments = values.years * 12
  return ((values.amount * monthlyRate) / 
  (1 - Math.pow((1 + monthlyRate), -total_number_of_payments))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	let monthlyUI = document.querySelector('#monthly-payment');
	monthlyUI.innerText = monthly;
}

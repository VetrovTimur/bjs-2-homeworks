"use strict"

function solveEquation(a, b, c) {
	let arr = [];
  let expression = b ** 2 - 4 * a * c; 
	if (expression < 0) {
		return arr;
	} else if (expression > 0) {
		arr.push((-b + Math.sqrt(expression)) / (2 * a));
    arr.push((-b - Math.sqrt(expression)) / (2 * a));
    return arr;
	} else {
		arr.push(-b / (2 * a));
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
    return false;
  }
  percent = percent/100/12;
  let debt = amount - contribution;
  let monthlyPayment = debt * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let totalPayment = monthlyPayment * countMonths;

  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}
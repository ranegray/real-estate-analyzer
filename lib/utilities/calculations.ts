const calculateDownPayment = (purchasePrice: number, downPayment: number) => {
  return purchasePrice * (downPayment / 100);
};

const calculatePrincipal = (purchasePrice: number, downPayment: number) => {
  const downPaymentAmount = calculateDownPayment(purchasePrice, downPayment);
  return purchasePrice - downPaymentAmount;
};

const calculateMonthlyInterest = (interestRate: number) => {
  return interestRate / 100 / 12;
};

const calculateMonthsOnLoan = (termLength: number) => {
  return termLength * 12;
};

export const calculateMonthlyMortgagePayment = (
  purchasePrice: number,
  downPayment: number,
  interestRate: number,
  termLength: number
) => {
  const P = calculatePrincipal(purchasePrice, downPayment);
  const i = calculateMonthlyInterest(interestRate);
  const n = calculateMonthsOnLoan(termLength);

  const mortgagePayment = P * ((i * (1 + i) ** n) / ((1 + i) ** n - 1));

  return Math.round(mortgagePayment * 100) / 100;
};

const sumExpenses = (expenses) => {
  let sum = 0;
  Object.values(expenses).forEach((expense) => (sum += expense));
  return sum;
};

export const calculateExpenses = (mortgagePaymentFunc, sumExpensesFunc) => {
  return mortgagePaymentFunc + sumExpensesFunc;
};

export const calculateCashFlow = (
  rentalIncome: number,
  purchasePrice: number,
  downPayment: number,
  interestRate: number,
  termLength: number,
  expenses: any
) => {
  const totalExpenses = calculateExpenses(
    calculateMonthlyMortgagePayment(
      purchasePrice,
      downPayment,
      interestRate,
      termLength
    ),
    sumExpenses(expenses)
  );
  return rentalIncome - totalExpenses;
};

// TESTS
const expenseTest = {
  propertyTaxes: 83,
  insurance: 83,
  hoaFees: 0,
  electricity: 0,
  garbage: 0,
  gas: 0,
  waterAndSewer: 0,
  repairs: 160,
  capitalExpend: 0,
  vacancy: 0,
  managementFees: 135,
};

calculateMonthlyMortgagePayment(325000, 20, 5.5, 30); //?
calculatePrincipal(325000, 20) //?
calculateMonthsOnLoan(30) //?
calculateMonthlyInterest(5.5) //?

calculateExpenses(
  calculateMonthlyMortgagePayment(325000, 20, 5.5, 30),
  sumExpenses(expenseTest)
); //?

calculateCashFlow(2700, 325000, 20, 5.5, 30, expenseTest); //?

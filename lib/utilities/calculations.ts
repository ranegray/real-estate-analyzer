export const calculateDownPayment = (purchasePrice, downPayment) => {
    // downPayment will be saved as float (i.e., 0.05, 0.2)
    return purchasePrice * downPayment
}

export const calculateTotalLoanPayment = (purchasePrice, downPayment) => {
    // pass in amount of downPayment from calculateDownPayment
}

export const calculateMortgage = (principal, interestRate, termLength) => {
    // pass in principal from calculateTotalLoanPayment
    // interestRate divided by 12 to get monthly
    // termLength multiplied by 12 to get months
}

export const sumExpenses = (expenses) => {
    // iterate over object and sum expenses
}

export const 
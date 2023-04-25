const calculateDownPayment = (purchasePrice: number, downPayment: number) => {
    return purchasePrice * downPayment
}

const calculatePrincipal = (purchasePrice: number, downPayment: number) => {
    const downPaymentAmount = calculateDownPayment(purchasePrice, downPayment)
    return purchasePrice - downPaymentAmount
}

const calculateMonthlyInterest = (interestRate : number) => {
    return interestRate / 12
}

const calculateMonthsOnLoan = (termLength : number) => {
    return termLength * 12
}

export const calculateMonthlyMortgagePayment = (purchasePrice: number, downPayment: number, interestRate: number, termLength: number) => {
    const P = calculatePrincipal(purchasePrice, downPayment)
    const i = calculateMonthlyInterest(interestRate)
    const n = calculateMonthsOnLoan(termLength)

    const mortgagePayment = P * ((i * (1 + i) ** n) / ((1 + i) ** n - 1))

    return Math.round(mortgagePayment * 100) / 100
}

calculateMonthlyMortgagePayment(100000, 0.2, 0.05, 10)

// export const calculateExpenses = (mortgagePayment: number, expenses: number[]) => {
//     // iterate over object and sum expenses
//     // has to take calcualteMortgage as well
// }

// export const calculateCashFlow = (rentalIncome: number, mortgagePayment: number, expenses: number[]) => {
//     const totalExpenses = calculateExpenses(expenses)
//     return rentalIncome - totalExpenses
// }
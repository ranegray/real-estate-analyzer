const { useState } = require("react")

const PropertyForm = () => {
    const [formData, setFormData] = useState({
        // property details
        propertyName: '',
        address: '',
        purchasePrice: null,
        closingCost: null,
        // loan details
        loanDownPayment: null,
        loanLength: null,
        loanRate: null,
        // income
        rentalIncome: null,
        // expenses TODO make these default percentages
        propertyTaxes: null,
        insurance: null,
        maintenance: null,
        vacancy: null,
        capEx: null,
        managementFees: null,
        water: null,
        gas: null,
        electric: null,
        HOA: null,
        garbage: null,
        otherEx: null
    })

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">property nickname</label>
            <input type="text" />
            <label htmlFor="">address</label>
            <input type="text" />
        </form>
    )
}
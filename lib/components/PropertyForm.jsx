const { useState } = require("react")

const PropertyForm = () => {
    const [formData, setFormData] = useState({
        propertyName: '',
        address: '',
        purchasePrice: 0,

    })

    const handleChange = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            
        </form>
    )
}
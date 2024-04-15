export const propertyPrice = (price) =>
        Number(price).toLocaleString('en-us', {
            style: 'currency',
            currency: 'USD'
        })
    
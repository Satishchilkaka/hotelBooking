const guestDetails = {
  firstName: 'fname',
  lastName: 'lname',
  email: 'satishchilkaka8@gmail.com',
  phoneNumber: '4444444444',
}

const guestPaymentDetails = {
  cardNumber: '4111111111111111',
  expiryDate: '1223',
  cvv: '123',
  nameOnCard: 'Fname Lname',
  billingAddress: {
    address: '260 Queen Street West',
    city: 'Toronto',
    province: 'ON',
    country: 'CA',
    postalCode: 'M5V1Z8',
  },
}

const getGuestDetails = () => guestDetails
const getGuestPaymentDetails = () => guestPaymentDetails

export { getGuestDetails, getGuestPaymentDetails }


const groomingFee = 50;
const numberofPets = 2;
const gstRate = 0.09;

const subtotal = groomingFee * numberofPets;
const gst = subtotal * gstRate;
const total = subtotal + gst;

const message = `The total cost is $${total.toFixed(2)}`; // Use toFixed(2) to format the total to two decimal places
console.log(message);

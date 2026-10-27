//A: payments is an array containing three objects.
//   Each object stores a pet's name, payment amount and payment status.
//   For example, Mochi's payment amount is 80, and the status is PENDING.
const payments = [
    { petName: "Chester", amount: 50, status: "APPROVED" },
    { petName: "Mochi", amount: 80, status: "PENDING" },
    { petName: "Mira", amount: 40, status: "DECLINED" }
];

const mochi = payments.find(payment => payment.petName === "Mochi");

console.log("Mochi's payment status: " + mochi.status);

//B: The for loop goes through each payment object, one at a time. The if statements then select the appropriate message for each status.
for (const payment of payments) {
    if (payment.status === "APPROVED") {
        console.log("Pet-care service for " + payment.petName + " confirmed");
    } else if (payment.status === "PENDING") {
        console.log("Payment for " + payment.petName + " is being processed");
    } else if (payment.status === "DECLINED") {
        console.log("Payment for " + payment.petName + " unsuccessful");
    }
}


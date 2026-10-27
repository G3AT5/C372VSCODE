const paymentStatus = "APPROVED";

switch (paymentStatus) {
  case "APPROVED":
    console.log("Pet-care service confirmed");
    break;

  case "PENDING":
    console.log("Payment is being processed");
    break;

  case "DECLINED":
    console.log("Payment unsuccessful");
    break;

  default:
    console.log("Unknown payment status");
}

//When should you use each approach?
// Use switch when checking one variable against several specific values.
// Use if...else when checking ranges, multiple variables, or complex conditions.
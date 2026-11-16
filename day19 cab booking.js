let customer = {
  name: "Rupesh",
  wallet: 500,
};

let cab = {
  available: true,
  fare: 250,
};

function bookCab(customer, cab) {
  if (cab.available === false) {
    return "Cab is unavailable";
  } else if (cab.fare === 0) {
    return "Invalid fare";
  } else if (customer.wallet < cab.fare) {
    return "Insufficient balance";
  } else {
    cab.available = false;
    customer.wallet -= cab.fare;
    return "Cab booked successfully";
  }
}
console.log(bookCab(customer, cab));
console.log(customer);

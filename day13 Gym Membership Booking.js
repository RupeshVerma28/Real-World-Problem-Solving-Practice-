function activateMembership(customer, membership) {
  if (membership.available === false) {
    return "Membership is unavailable";
  } else if (customer.active === true) {
    return "Customer already has an active membership";
  } else if (membership.price <= 0) {
    return "Invalid membership price";
  } else if (membership.price > customer.wallet) {
    return "Insufficient balance";
  } else {
    customer.wallet -= membership.price;
    customer.active = true;
    return `${customer.name} Membership buy sucessfully, Your Remaining Balace is ${customer.wallet} `;
  }
}
let customer = {
  name: "Rupesh",
  wallet: 2500,
  active: false,
};

let membership = {
  plan: "Monthly",
  price: 2000,
  available: true,
};

console.log(activateMembership(customer, membership));
console.log(customer.wallet);
console.log(customer.active);

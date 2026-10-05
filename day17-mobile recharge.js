function rechargeMobile(customer, plan) {
  if (customer.active === false) {
    return "Customer account is inactive";
  } else if (plan.available === false) {
    return "Plan is unavailable";
  } else if (plan.price <= 0) {
    return "Invalid plan price";
  } else if (customer.wallet < plan.price) {
    return "Insufficient balance";
  } else {
    customer.wallet -= plan.price;
    return `Recharge sucessfull Rupes of : ${plan.price} To ${customer.name} Mobile. Remaning in Wallet ${customer.wallet}`;
  }
}
let customer = {
  name: "Rupesh",
  wallet: 500,
  active: true,
};

let plan = {
  name: "5G Monthly",
  price: 299,
  available: true,
};

console.log(rechargeMobile(customer, plan));
console.log(customer);
console.log(plan);

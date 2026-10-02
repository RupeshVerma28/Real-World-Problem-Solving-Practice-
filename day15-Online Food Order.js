function placeFoodOrder(customer, food, quantity) {
  const total = food.price * quantity;
  if (food.available === false) {
    return "Food is unavailable";
  } else if (quantity <= 0) {
    return "Invalid quantity";
  } else if (quantity > food.stock) {
    return "Insufficient stock";
  } else if (food.price <= 0) {
    return "Invalid food price";
  } else if (customer.wallet < total) {
    return "Insufficient balance";
  } else {
    customer.wallet -= total;
    food.stock -= quantity;
    return `${food.name} book Sucessfully, Qunatity:${quantity}, Price to Pay: ${total}, Remaning in wallet ${customer.wallet}`;
  }
}

let customer = {
  name: "Rupesh",
  wallet: 1500,
};

let food = {
  name: "Paneer Thali",
  price: 250,
  stock: 8,
  available: true,
};

console.log(placeFoodOrder(customer, food, 2));
console.log(customer);
console.log(food);

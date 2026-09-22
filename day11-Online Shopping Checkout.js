const { use } = require("react");

function checkoutOrder(user, order) {
  const total = order.price * order.quantity;
  const discount = (total * order.discount) / 100;
  const finalprice = total - discount;

  if (order.stock <= 0) {
    return "Product is out of stock";
  } else if (user.wallet <= total) {
    return "Insufficient wallet balance";
  } else {
    order.stock -= 1;
    user.wallet -= finalprice;
    return `Order successful. You bought ${order.quantity} ${order.product}. Final price: ${finalprice}. Remaining wallet: ${user.wallet}`;
  }
}

const user = {
  name: "Rupesh",
  wallet: 3000,
};

const order = {
  product: "Wireless Headphones",
  price: 2200,
  quantity: 1,
  discount: 10,
  stock: 5,
};
console.log(checkoutOrder(user, order));

console.log(user.wallet);
console.log(order.stock);

// Check Delivery Charges
function checkDelivery(order) {
  if (order.orderAmount >= 500) {
    return `${order.customer} Has Free Delivery`;
  } else {
    return `${order.customer} Delivery charges 50rs`;
  }
}

const order1 = {
  customer: "jack",
  orderAmount: 499,
};

console.log(checkDelivery(order1));

const order2 = {
  customer: "tom",
  orderAmount: 498,
};

console.log(checkDelivery(order2));

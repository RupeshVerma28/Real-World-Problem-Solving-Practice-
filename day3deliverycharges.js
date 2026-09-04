// Check Delivery Charges
function checkDelivery(order) {
  if (order.orderAmount >= 500) {
    return `${order.customer} Has Free Delivery`;
  } else {
    return `${order.customer} Delivery charges 50rs`;
  }
}

const order3 = {
  customer: "Priya",
  orderAmount: 499,
};

console.log(checkDelivery(order3));

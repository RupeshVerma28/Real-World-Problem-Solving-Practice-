// This simple program calcualte the delivery charge base on the distance
function calculateDelivery(order) {
  if (order.distance <= 5) {
    return `${order.customer}, your delivery charge is 30₹, So Final Amount is:${30 + order.foodPrice}`;
  } else {
    return `${order.customer}, your delivery chrage is 60₹, So Final Amount is:${60 + order.foodPrice}`;
  }
}

const order = {
  customer: "Rupesh",
  foodPrice: 450,
  distance: 6,
};

console.log(calculateDelivery(order));

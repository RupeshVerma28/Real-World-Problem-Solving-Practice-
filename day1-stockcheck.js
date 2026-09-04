// Here in this program i will dyanmically check the product stock is avilable or not using simple javasctip funtion

function checkStock(product) {
  if (product.stock === 0) {
    return `${product.name} is unavailable`;
  } else {
    return `${product.name} is available`;
  }
}

console.log(
  checkStock({
    name: "Keyboard",
    price: 1200,
    stock: 5,
  }),
);

console.log(
  checkStock({
    name: "Mouse",
    price: 500,
    stock: 10,
  }),
);

console.log(
  checkStock({
    name: "Cabinet",
    price: 5000,
    stock: 0,
  }),
);

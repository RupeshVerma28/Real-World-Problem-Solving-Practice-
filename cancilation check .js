function cancelOder(customer, order){
if(order.status === "cancelled"){
    return "Order is already cancelled"
} else if( order.status != "confirmed"){
    return "order cannot be cancelled"
} else if (order.refundable === false){
    return "order is not refundable"
}else if (order.price === 0){
    return "invalid order price "
} else {
    customer.wallet += order.price 
    order.status = "cancelled"
    return `Order:${order.product} cancleed sucessfully total refundable amount Product Price:${order.price} Your cureent balance after return Wallet:${customer.wallet}`
}

}

let customer = {
    name:"Rupesh",
    wallet:1000
}

let order ={
    product:"wireless Mouse",
    price: 800,
    status:"confirmed",
    refundable: true
}

console.log(cancelOder(customer,order));
console.log(customer);
console.log(order);




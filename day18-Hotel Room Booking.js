function bookRoom(customer, room, nights) {
  const total = room.pricePerNight * nights;
  if (nights <= 0) {
    return "Invalid number of nights";
  } else if (room.availableRooms === 0) {
    return "Room is unavailable";
  } else if (room.pricePerNight <= 0) {
    return "Invalid room price";
  } else if (total > customer.wallet) {
    return "Insufficient balance";
  } else {
    customer.wallet -= total;
    room.availableRooms -= 1;
    return `Room Book suceefull for ${nights} Night, Total Price is ${total}, Remain in Wallet ${customer.wallet}`;
  }
}
let customer = {
  name: "Rupesh",
  wallet: 5000,
};

let room = {
  type: "Deluxe",
  pricePerNight: 1800,
  availableRooms: 3,
};

console.log(bookRoom(customer, room, 2));
console.log(customer);
console.log(room);

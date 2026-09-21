function bookRoom(customer, room) {
  const total = room.pricePerNight * room.nights;
  if (room.available === false) {
    return "room is currently not avilable";
  } else if (total > customer.wallet) {
    return "Insufficient Balance";
  } else {
    return `Room booked successfully. Total: ${total}. Remaining wallet: ${(customer.wallet -= total)} ${(room.available = false)}`;
  }
}
const customer = {
  name: "Rupesh",
  wallet: 5000,
};

const room = {
  type: "Deluxe",
  pricePerNight: 2000,
  nights: 2,
  available: true,
};

console.log(bookRoom(customer, room));

console.log(customer.wallet);
console.log(room.available);

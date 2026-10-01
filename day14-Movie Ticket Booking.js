function bookTickets(customer, movie, quantity) {
  const totalprice = movie.ticketPrice * quantity;
  if (movie.bookingOpen === false) {
    return "Booking is closed";
  } else if (quantity <= 0) {
    return "Invalid ticket quantity";
  } else if (movie.availableSeats < quantity) {
    return "Not enough seats available";
  } else if (customer.wallet < totalprice) {
    return "Insufficient balance";
  } else {
    customer.wallet -= totalprice;
    movie.availableSeats -= quantity;
    return `Ticket Book Sucessfully Seat Quantitiy: ${quantity} Total Price: ${totalprice} Remaning in Wallet: ${customer.wallet}`;
  }
}
let customer = {
  name: "Rupesh",
  wallet: 1200,
};

let movie = {
  title: "Avengers",
  ticketPrice: 250,
  availableSeats: 5,
  bookingOpen: true,
};

console.log(bookTickets(customer, movie, 2));
console.log(customer);
console.log(movie);

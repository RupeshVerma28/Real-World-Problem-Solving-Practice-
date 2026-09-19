function bookRide(user, ride) {
  if (!ride.available) {
    return "Ride is currently unavailable";
  } else if (user.wallet < ride.distance * ride.pricePerKm) {
    return "Insufficient wallet balance";
  } else if (ride.available && user.wallet >= ride.distance * ride.pricePerKm) {
    return `Ride booked successfully with ${ride.driver}. Fare: ${ride.distance * ride.pricePerKm}. Remaining wallet: ${(user.wallet -= ride.distance * ride.pricePerKm)}`;
  }
}

/**function bookRide(user, ride) {
  if (!ride.available) {
    return "Ride is currently unavailable";
  }

  if (user.wallet < ride.distance * ride.pricePerKm) {
    return "Insufficient wallet balance";
  }

  user.wallet -= ride.distance * ride.pricePerKm;

  return `Ride booked successfully with ${ride.driver}. Fare: ${ride.distance * ride.pricePerKm}. Remaining wallet: ${user.wallet}`;
} */

const user = {
  name: "Rupesh",
  wallet: 500,
};

const ride = {
  driver: "Aman",
  distance: 8,
  pricePerKm: 20,
  available: true,
};

console.log(bookRide(user, ride));
console.log(user.wallet); // 340

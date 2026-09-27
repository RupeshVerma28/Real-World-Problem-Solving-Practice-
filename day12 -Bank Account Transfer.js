function transferMoney(sender, receiver, amount) {
  let remain = sender.balance - amount;
  if ((sender.active = false)) {
    return "Sender account is inactive";
  } else if ((receiver.active = false)) {
    return "Receiver account is inactive";
  } else if (sender.balance < amount) {
    return "Insufficient balance";
  } else {
    sender.balance -= amount;
    receiver.balance += amount;
    return `Transfer successful. ${amount} sent to ${receiver.name}. Remaining balance: ${remain}`;
  }
}
const sender = {
  name: "Rupesh",
  balance: 10000,
  active: true,
};

const receiver = {
  name: "Aman",
  balance: 3000,
  active: true,
};

console.log(transferMoney(sender, receiver, 3000));

console.log(sender.balance); // 7000
console.log(receiver.balance); // 6000

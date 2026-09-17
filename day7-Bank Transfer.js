function transferMoney(sender, receiver, amount) {
  sender.balance -= amount;
  receiver.balance += amount;

  if (sender.balance >= amount) {
    return `Money Transfer  to ${receiver.name} is Sucess ✅ ${amount} Now ${receiver.name} Balance is ${receiver.balance} 💵 and your Balance is ${sender.balance} 💴 ${sender.name}`;
  } else {
    return `Insufficient Balance in your bank ${sender.name} 😞`;
  }
}
const sender = {
  name: "Rupesh",
  balance: 8000,
};

const receiver = {
  name: "Aman",
  balance: 2000,
};

console.log(transferMoney(sender, receiver, 3000));

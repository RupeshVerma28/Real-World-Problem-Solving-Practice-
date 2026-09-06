function withdrawMoney(account, amount) {
  if (account.balance < amount) {
    return "Insufficient balance";
  } else {
    account.balance = account.balance - amount;
    return `Withdrawal successful. Remaining balance: ${account.balance}`;
  }
}

const account = {
  name: "Rupesh",
  balance: 5000,
  pin: 1234,
};
console.log(withdrawMoney(account, 2000));

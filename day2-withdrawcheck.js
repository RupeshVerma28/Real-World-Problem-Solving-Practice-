function checkWithdrawal(account, amount) {
  if (account.balance >= amount) {
    return `${account.name}: withdraw sucessfull`;
  } else {
    return `${account.name}: insuficient balance`;
  }
}

const account1 = {
  name: "Rupesh",
  balance: 5000,
};

console.log(checkWithdrawal(account1, 2000));

const account2 = {
  name: "Aman",
  balance: 3000,
};

console.log(checkWithdrawal(account2, 5000));

const account3 = {
  name: "Priya",
  balance: 1000,
};

console.log(checkWithdrawal(account3, 1000));

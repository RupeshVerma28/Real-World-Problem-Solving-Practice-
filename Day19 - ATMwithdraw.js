let account = {
    name:"Rupesh ",
    balance:5000,
    active:true
};

function withdrawMoney(account,amount){
    if (account.active === false){
        return "account is inactive"
    } else if ( amount <= 0){
        return "Imvalid Amount"
    } else if(amount > account.balance ){
        return "insufficient Balance"
    } else {
        account.balance -= amount
        return "Withdraw Sucessfull"
    }
}

console.log(withdrawMoney(account,2000));
console.log(account);


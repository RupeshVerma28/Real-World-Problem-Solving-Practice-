let user = {
    username:'rupesh28',
    password: "javascript123",
    active:true
};
function validateLogin(user){
    
    if(user.active === false){
        return "Account is inactive"
    }  else if(user.username === " "){
        return "username is requred"
    } else if (user.password > 8){
        return "Password is to short"
    } else {
        return "Login Sucessful"
    }
}

console.log(validateLogin(user));

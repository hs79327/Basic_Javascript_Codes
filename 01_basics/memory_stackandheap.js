// stack (primitive) & heap (non-primitive)

let myName = "harshal";

let anotherName = myName;
anotherName = "Harshal Sharma"

// console.log(myName);  
// console.log(anotherName);

let userOne ={
    email: "myemail@gmail.com",
    password: 123456789
}

let userTwo = userOne;

userTwo.email = "harshal@gmail.com";

console.log(userOne);
console.log(userTwo);


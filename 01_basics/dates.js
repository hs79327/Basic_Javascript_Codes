// Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());


// let createdDate = new Date(2025, 7 , 20);
let createdDate = new Date("08-20-2024");
// console.log(createdDate.toLocaleString());
let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(createdDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.toLocaleString('default',{
    month:"2-digit"
}));
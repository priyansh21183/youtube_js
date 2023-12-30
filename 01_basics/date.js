let myDate = new Date();
console.log(myDate.toUTCString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString('In-en'));
console.log(myDate.toLocaleDateString());
let myCreateDate= myDate
myCreateDate= new Date(2023,11,6)
console.log(myCreateDate.toDateString());

let myCreatedDate = new Date("2023-12-6")
console.log(myCreatedDate.toDateString());

let myTimeStamp =Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000))// in milli seconds

myDate.toLocaleDateString('default',{weekday:"long"})

console.log(myDate);
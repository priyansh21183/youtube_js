// `new` keyword is used in javascript to instantiate a object of a class .
let days=new String(3)
let year =2023
const a= "Irritating"
console.log(`There is only ${days} days left in ${year} year now and it is very ${a}.`)

console.log(a.charAt(5))

const c = "c";
const d = "d";
if (c< d) {
  // true
  console.log(`${c} is less than ${d}`);
} else if (c > d) {
  console.log(`${c} is greater than ${d}`);
} else {
  console.log(`${c} and ${d} are equal.`);
}

console.log(a.toUpperCase())
const f='C'
const new1="                4+5\n"
const o="Omega"
console.log(eval(new1)) // eval is only valid on primitive type string not on non primitive string
console.log(new1)
console.log(new1.trim());
console.log(typeof(new1.valueOf));
console.log(typeof new1)
console.log(typeof f);
console.log(new1.indexOf(4))
console.log(o.slice(-5,5));
console.log(o.substring(-2,4));

let a1={
    age:22,
    name: "human",
    job: "workForLiving"
}

let a2=a1

a2.age=55
//change in features in a1 due to change in feature in a2 because they are getting storedin heap.
console.log(a1)
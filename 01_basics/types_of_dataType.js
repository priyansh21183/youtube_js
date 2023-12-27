//Primitive (call by value) => 7 types 

// NUmber,String,BigInt(>2^53),Symbol,boolean,null,undefined

let a = Symbol('123');
let b=  Symbol(123);

console.log(a,b);
console.log(typeof a,typeof b);

// define bigINt 
p= 5666n

console.log(typeof p)

// Reference type 

//  for example => array,function,Object

const heroes =['superman','hitman','batman','shaktiman'];

let obj ={
     age:22,
     name: "Priyansh",
     blood_group:"B +ve"

}

const func = function(){
    console.log("I am Human.");
}

console.log(obj);
console.log(func);

func()
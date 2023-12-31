const balance=new Number(100)

console.log(balance.toString().length)
console.log(balance.toFixed(1));

const OtherNUmber= 123.8966

console.log(OtherNUmber.toPrecision(3));

const hundreads =1000000
console.log(hundreads.toLocaleString("en-IN"));
console.log(Number.MAX_VALUE);

// +++++++++++++++++++++++++++++++++++++  Maths  ++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.max(1,5,4.3,10,9,11,0,7,6));


console.log(Math.random());//returns between 0 and 1
console.log(Math.random()*10+1);
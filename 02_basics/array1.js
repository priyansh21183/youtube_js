const a= [1,2,3,4,5,6]
const heroes=["shaktiman","naagraj"]

const arr2 =new Array(1,2,3,4)

// Methods of Array

/*a.push(0)
console.log(a);
a.pop()
console.log(a);
a.unshift(10)
console.log(a);
a.shift()
console.log(a);*/

console.log(a.includes(9));
console.log(a.indexOf(9));

const newArr= a.join()
console.log(a);//returns array
console.log(newArr);//returns strings

b=a.slice(1,3);
console.log(a,b);
c=a.splice(1,3)
console.log(a,c);

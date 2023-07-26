// let key word
let x = 1;
if (x === 1) {
    let x = 2;
    console.log(x);
}
console.log(x);

// const key word
const y = 1;
if (y === 1) {
    const y = 2;
    console.log(y);
}
console.log(y);

// Arrow Functions
const hello=()=>{
    return "hello";
}
let ans= hello();
console.log(ans);

//The (Spread Of) ... Operator
function sum(x, y, z) {
    return x + y + z;
  }  
  const numbers = [1, 2, 3];
  console.log(sum(...numbers));

  // for of
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
  console.log(element);
}

//map
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
map1.set('a', 97);
console.log(map1.get('a'));


//set

const set1 = new Set();

set1.add(84);
set1.add(72);
set1.add(84);
for (const item of set1) {
  console.log(item);
}

// classes
class square{
     
    constructor(length){
        this.length = length;
    }

     area(){
        return this.length * this.length;
    }
    getlen(){
        return this.length;
    }
}

const obj2 = new square(10);
console.log("length is : " , square.len);
console.log(square.area);


// 


const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
      console.log(data[5].name);
      console.log(data[3].name);
    });
  });

// symbol

const sym2 = Symbol("Anuj");
const sym3 = Symbol("Anuj");
if(sym3 === sym2){
    console.log("true");
}
else{
    console.log("false");
}


// defalult parameters
function multiply(a, b = 10) {
  return a + b;
}
console.log(multiply(84, 72));
console.log(multiply(84));

//Function Rest Parameter

function letSum(...perms){
    let sum = 0;
    for(let i of perms){
        sum += i;
    }
    return sum;
}

console.log(letSum(1,2,3,4,5,6));





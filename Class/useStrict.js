// "use strict";
//  a=10;
// console.log(a);

// "use strict";
// function addition()
// {
//     "use strict"; 
//     var b=20;
//     console.log(b);
// }
// addition();


//SyntaxError: Duplicate parameter name not allowed in this context
// function addition2(a,b,b){
//     "use strict";
//     return a+b+b;
// }
// console.log(addition2(20,30));

// function sum(a = 1, b = 2) {
//     // SyntaxError: "use strict" not allowed in function with default parameter
//     "use strict";
//     return a + b;
//   }

// const sum = function sum([a, b]) {
//     // SyntaxError: "use strict" not allowed in function with destructuring parameter
//     "use strict";
//     return a + b;
//   };

  //solution
  // const sum = (function () {
  //   "use strict";
  //   return function sum([a, b]) {
  //     return a + b;
  //   };
  // })();

//   const callback = (...args) => {
//     // SyntaxError: "use strict" not allowed in function with rest parameter
//     "use strict";
//     return this.run(args);
//   };

  //solution
//   const callback = (() => {
//     "use strict";
//     return (...args) => {
//       return this.run(args);
//     };
//   })();


//Error
// "use strict";
// let mistypeVariable;

// Assuming no global variable mistypeVarible exists
// this line throws a ReferenceError due to the
// misspelling of "mistypeVariable" (lack of an "a")
//mistypeVarible = 17;


"use strict";

// Assignment to a non-writable global
//undefined = 5; // TypeError
//Infinity = 5; // TypeError

// Assignment to a non-writable property
const obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x =5 ; // TypeError

// Assignment to a getter-only property
// const obj2 = {
//   get x() {
//     return 17;
//   },
// };
// obj2.x = 5; // TypeError

// Assignment to a new property on a non-extensible object
// const fixed = {};
// Object.preventExtensions(fixed);
// fixed.newProp = "ohai"; // TypeError

//In sloppy mode, a number beginning with a 0, such as 0644, is interpreted as an octal number (0644 === 420), if all digits are smaller than 8.

//"use strict";
// const sum =
//   015 + // syntax error
//   197 +
//   142;
// //"use strict";

// false.true = ""; // TypeError
// (14).sailing = "home"; // TypeError
// "with".you = "far away"; // TypeError

// "use strict";
// const x = 17;
// with (obj) {
//     x;
// }
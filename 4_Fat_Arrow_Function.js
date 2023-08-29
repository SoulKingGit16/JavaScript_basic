//                                                      Fat Arrow Function
//                                               --------------------------------
console.log("//Fat Arrow Function");

// NORMAL WAY 

// adder(20, 20);  // IN NORMAL FUNCTION WE CAN CALL THE FUNCTION ANYWHERE;
// function adder(a, b) {
//     sum = a + b;
//     console.log("sum = " + sum);
// }

// MODERN WAY
// const total = (a, b) => {
//     return `sum = ${a + b}`;
// }
// console.log(total(10,10));


const total = (a, b) => `sum = ${a + b}`; // WE DON'T NEED TO WRITE RETURN OR {} FOR ONE LINE CODES;
console.log(total(10,10));



//                                          Truthy and falsy values in javascript
//                                  ----------------------------------------------------------
//  ---> We have total 5 falsy values in javascript.
//  Those are:  0, "", undefined , null , NaN. & false anyway;

if (score = 0) {
    console.log("loose");
}
else {
    console.log("victory");
}

//also can be write as:
if (0) {
    console.log("loose");
}
else {
    console.log("victory");
}


//                                          Conditional(Ternary) operator in javascript
//                                    --------------------------------------------------------
//  ---> The ternary operator is the only operator in javascript who takes there operands.
console.log("//Conditional(Ternary) operator in javascript");

var age = 17;
console.log((age >= 18) ? "you have license" : "you don't have license");
//           condition         true value             false value


//                                          Switch & brake statement in javascript
//                                     ------------------------------------------
console.log("//Switch & brake statement in javascript");

var area = "circle", pi = 3.14, l = 5, b = 4, r = 3;

switch (area) {
    case "circle": console.log("Area of " + area + " is:: " + pi * r ** 2);
    case "circle": console.log(` Area of ${area} is:: ${pi * r ** 2} `); //ES6
        break;
    case "triangle": console.log("Area of " + area + " is:: " + (l * b) / 2);
        break;
    case "rectangle": console.log("Area of " + area + " is::" + (l * b));
        break;

    default: console.log("please enter a valid area");
}


//                                           Do-while loop in javascript
//                                     --------------------------------------

console.log(" Do-while loop in javascript");
debugger
var a = 10;
do {
    console.log(a);
    a++;
} while (a < 9);




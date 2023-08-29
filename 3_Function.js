// here in adder Function a & b are Parameters;

// ----------------------------------------------|
function adder(a, b) {
    sum = a + b;
    //                                            Function Definition          Or          Function Declaration      Or           Function Statement
    console.log("sum = " + sum);
}
// ----------------------------------------------|
adder();
adder(20, 20);
//     ^   ^
//     |   |
//  Function Arguments;


//                                                   Function Expression & Return Keyword
//                                               ---------------------------------------------
console.log("//Function Expression");

function total(x, y) {
    return x + y;
}

var Func_Exps = total(10, 10);
console.log(Func_Exps);

//                                                   Anonymous Function Expression
//                                               ---------------------------------------------
// ---->Check notes ----;

//                                                      Default Parameters
//                                               --------------------------------
console.log("//Default Parameters");

function multi(a, b = 0) {
    return a * b;
}
console.log(`Ans-->${multi(4)}`);//if we miss to give two parameters then output will be 0 or whatever we in b so that output will be a*b;










//                                                      Fat Arrow Function
//                                               --------------------------------


let arr = [20, 30, 40];

let a = arr.map((element, index, array) => {
    console.log(`${element}`);
    // return element;
});
console.log(a);


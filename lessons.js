//////////////////////////////////////////////
// less: 52- loop for advanced example 
// let products = ["Keyboards","Mouse","Pen","Pad","Monitor","iPhone"]

// for( let i = 0; i < products.length; i++ ) {
//     console.log(products[i])
// }

// let i= 0
// for( ; i < products.length; i++ ) {
//     console.log(products[i])
// }

// for( ; i < products.length;  ) {
//     console.log(products[i])
//     i++;
//     if( i === products.length ) break;
// }

//////////////////////////////////////////////
// less: 53- practice add  products to page  

// let products = ["Keyboards","Mouse","Pen","Pad","Monitor","iPhone"]

// let index = 0;
// while (index < 10 )  {
//     console.log(index);
//     index += 1; 
// } 

//////////////////////////////////////////////////
// less: 57- functions 

// let userName = "dddd"
// function sayHello(x) {
//     console.log(`Hello ${x}`);
// }
// sayHello(userName);

//////////////////////////////////////////////////
// less: 58- functions 

//////////////////////////////////////////////////
// less: 59- function return and use cases 

//////////////////////////////////////////////////
// less: 60- function Default Parameter 

// function sayHello(userName, age= "UnKnown") {
//     return (`Hello ${userName} your age is ${age}`);
// }
// console.log(sayHello("dddd"));
// console.log(sayHello("dddd", 31));

//////////////////////////////////////////////////
// less: 61- function Reset Parameter 

// let result = 0;
//  function calc(...numbers) {
//     for (let i =0; i < numbers.length; i++) {
//         console.log(numbers[i]);
//         result += numbers[i];
//     }
//     return `Final Result Is  ${result}`
//  }
//  console.log(calc(1, 5, 14, 32))

//////////////////////////////////////////////////
// less: 62- function Ultimate Practice 

// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
//     document.write(`<div>`);
//     document.write(`<h2>welcome, ${us} </h2>`);
//     document.write(`<p>Age, ${ag} </p>`);
//     document.write(`<p>Rate, $${rt} </p>`);
//     if (show === "Yes") {
//         if (sk.length > 0 ){
//             document.write(`<p>Skills, ${sk.join(" | ")} </p>`);
//         } else {
//             document.write(`<p>No Skills</p>`);
//         }
//     } else {
//         document.write(`<p>Skills Is Hidden </p>`);
//     }
//     document.write(`</div>`);
// }

// showInfo("Ahmed", 31, 50, "Yes", "Html", "Css")

// function saveParamsInVars(...params) {
//     for ( let i =0; i < params.length; i++ )  {
//         let P1 = params[i]
//         console.log(P1);
//     }
// }

// saveParamsInVars("param1", "param2", "param3", "param4", "param5")

//////////////////////////////////////////////////
// less: 62- function Ultimate Practice 

//////////////////////////////////////////////////
// less: 64- Anonymous Function and Practice 

// setTimeout( function printGood() {
//     console.log("Good Morning");
// }, 2000)

// setTimeout( function () {
//     console.log("Good Morning 2");
// }, 2000)

// function sayHello() {
//     console.log("Hello");
// } 
// document.getElementById("show").onclick = sayHello;


//////////////////////////////////////////////////
// less: 65- Return Nested function 

 
//////////////////////////////////////////////////
// less: 66- Arrow Function Syntax 

// let print = function () {
//     return 1;
// }

// let print2 = () => {
//     return 2;
// }

// let print3 = () => 3; // one  line code 

// let print4 = _ => 4;

// /// with argument 

// let print5 = function (num, num2)  {
//     return `${num} + ${num}`;
// }

// let print6 = (num) =>  { return `${num * num}` ; }

// // output = 5 * 5

// let print7 = (num, num2) =>  { return num + num2 }

// // console.log(print);
// // console.log(print2);
//  console.log(print5(5, 5));
//  console.log(print6(5));
// console.log(print7(5, 5));

//////////////////////////////////////////////////
// less: 67- Scope Global and local
 

//////////////////////////////////////////////////
// less: 68- Block Scope [if , for , switch ]

// var x = 10;

// if (10 === 10) {
//     var x = 20;
// }
// console.log(x);
// // output = 20
 
// let y = 10;

// if (10 === 10) {
//     let y = 20;
// }
// console.log(y); 
// output = 10

////////////////////////////////////////////////
// less:  69- lexical Scope 

//- search about - execution contect - lexical environment

// function parent() {
//     let a = 10; 
//     function child() {
//         // let a = 20;
//         console.log(a);

//         function grandChild() {
//             //let a = 30;
//             let b = 50;
//              console.log(a)
//         }
//     } 
//     child();
// }
// parent();

////////////////////////////////////////////////////////////
// les: 71- Higher Order functions => Map
/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.
  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.
  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
  Notes
  - Map Return A New Array
  Examples
  - Anonymous Function
  - Named Function
*/
// let myNums = [1, 2, 3, 4, 5, 6];
// let newArray = [];

// for( let i =0; i< myNums.length; i++ ) {
//     newArray.push(myNums[i] * myNums[i] );
// }
// console.log(newArray)

// let addSelf = myNums.map( function(element, indx, arr) {
//   // console.log(`element = ${element}`)
//   // console.log(`indx = ${indx}`)
//   // console.log(`arr = ${arr}`)
//   // console.log(`this = ${this}`)
//     return element * element 
// }, 10 )
// console.log(addSelf);

// use  arrow function
// let addSelf = myNums.map( (e)=> {
//   return e * e 
// })

// console.log(addSelf);

// use function

// function addition(ele) {
//   return ele + ele
// }
// let addSelf = myNums.map(addition)
// console.log(addSelf);

//////////////////////////////////////////////////////////////
// less: 72- Map Practice 
/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";

// let swappingCasesArray =  swappingCases.split("").map( function( item )  {
//       return item === item.toUpperCase() ?  item.toLowerCase() :  item.toUpperCase()
// } ).join("");
// console.log(swappingCasesArray);
 

///////////////////

// let res_InvertedNumbers = invertedNumbers.map( function (item) {
//    //  return item < 0 ? -item  : item 
//    return -item
// } )

// console.log(res_InvertedNumbers);

//////////////////////////////

// let res_ignoreNumbers = ignoreNumbers.split("").map( function (item) {
//       return  isNaN( parseInt(item) )  ? item : ""
// } ).join("")

// console.log(res_ignoreNumbers);

///////////////////////////////////////////////////////
// les 73- Higher Order Functions – Filter
/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/
// // Get Friends With Name Starts With A
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// let friendsWithA = friends.filter(function (item, index, array) {
//   return item.startsWith("A");
// } )

// console.log(friendsWithA)
// // Get Even Numbers Only
// let numbers = [11, 20, 2, 5, 17, 10];

// let addMap = numbers.map( (item) => { return item + item  } )

// console.log(addMap);

// let addFilter = numbers.filter( (item) => { return item + item  } )

// console.log(addFilter);

// let evenNumbers = numbers.filter( (item) => { return item % 2 === 0 } )
// console.log(evenNumbers)


/////////////////////////////////////////////////////////
// les 74- Higher Order Functions – Filter Practice
/*
  Filter
  - Filter Longest Word By Number
*/

// // Filter Words More Than 4 Characters
// let sentence = "I Love Foood Code Too Playing Much";

// let words = sentence.split(" ").filter( function ( item ) {
//   return item.length <= 4
// } ).join(" ")

// console.log(words)


// // Ignore Numbers
// let ignoreNumbers = "Elz123er4o";

// let res_filterNumbers = ignoreNumbers
//     .split('').filter( function(item) { 
//   return isNaN(item)
// } ).join("")

// console.log(res_filterNumbers)
// Filter Strings + Multiply

// let mix = "A13BS2ZX";
// let res = []
// let res_filterNumbers = mix.split("").filter( function(item) {
//     return !isNaN(item)
// } ).map(function( item ) {
//   return item * item
// }).join("")

// console.log(res_filterNumbers)


/////////////////////////////////////////////////////////
// les 75- Higher Order Functions – Reduce
/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

// let nums = [10, 20, 15, 30];

// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(`Current Element Index => ${index}`);
//   console.log(`Array => ${arr}`);
//   console.log(acc + current);
//   console.log(`#############`);
//   return acc + current;
// }, 5);

// console.log(Add)

/////////////////////////////////////////////////////////
// les 76- Higher Order Functions – Reduce Practice
/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test", "Propaganda_Two"];

// let check = theBiggest.reduce(function (acc, current) {
//   console.log(`Acc => ${acc}`);
//   console.log(`Current Element => ${current}`);
//   console.log(acc.length > current.length ? acc : current);
//   console.log(`#############`);
//   return acc.length > current.length ? acc : current;
// });


// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

// let finalString = removeChars
//   .filter(function (ele) {
//     return ele !== "@";
//   })
//   .reduce(function (acc, current) {
//     return `${acc}${current}`;
//   });

// console.log(finalString);


/////////////////////////////////////////////////////////
// les 77- Higher Order Functions – ForEach And Practice
/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/
// let allList = document.querySelectorAll("ul li")
// allDivs = document.querySelectorAll(".content div")
// allList.forEach(function(item, index, arr) {
//     // console.log(item);
//     // console.log(index);
//     // console.log(arr);
//     item.onclick = function() { 
//       allList.forEach( function(element) {
//         element.classList.remove("active")
//       } )
//       this.classList.add("active")

//       allDivs.forEach( function(element) {
//         element.style.display = "none"

//        } )


//     }

// })

// allDivs = document.querySelectorAll(".content div")
// allDivs.forEach( function(item) {
//     item.onclick = function() {
//       allDivs.forEach( function(element) {
//         element.classList.remove("")
//        })
//        this.classList.add("")
//     }
// } )


// console.log(allList)

/////////////////////////////////////////////////////////
// les 79- 
















































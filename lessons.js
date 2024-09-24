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
// les 79- Object – Introduction
/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/


// let user = {
//   // Properties
//   theName: "ahmed",
//   theAge: 30,
//   // Methods
//   sayHello: function () {
//     return `Hello`;
//   },
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());

/////////////////////////////////////////////////////////////
// les 80- Dot Notation vs Bracket Notation

/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

// let myVar = "country";

// let user = {
//   theName: "ahmed",
//   country: "Egypt",
//   "city of my country": "Cairo",
// };

// console.log(user.theName);
// console.log(user.country); // user.country
// console.log(user["city of my country"]); // user['city of my country']
// console.log(user.myVar); // user.country == undifined
// console.log(user[myVar]); // user.country == Egypt

/////////////////////////////////////////////////////
// les 81- Nested Object And Advanced Examples
/*
  Object
  - Nested Object And Trainings
*/

// let available = true;

// let user = {
//   name: "Osama",
//   age: 38,
//   skills: ["HTML", "CSS", "JS"],
//   available: false,
//   addresses: {
//     ksa: "Riyadh",
//     egypt: {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   checkAv: function () {
//     if (user.available === true) {
//       return `Free For Work`;
//     } else {
//       return `Not Free`;
//     }
//   },
// };

// console.log(user.name);
// console.log(user.age);
// console.log(user.skills);
// console.log(user.skills.join(" | "));
// console.log(user.skills[2]); // Access With Index
// console.log(user.addresses.ksa);
// console.log(user.addresses.egypt.one);
// console.log(user["addresses"].egypt.one);
// console.log(user["addresses"]["egypt"]);
// console.log(user["addresses"]["egypt"]["one"]);

// console.log(user.checkAv());



////////////////////////////////////////////////////
// les 82- Create Object With New Keyword
/*
  Object
  - Create With New Keyword new Object();
*/

// let user = new Object({
//   age: 20,
// });

// console.log(user);

// user.age = 38;
// user["country"] = "Egypt";

// user.sayHello = function () {
//   return `Hello`;
// };

// console.log(user);
// console.log(user.age);
// console.log(user.country);
// console.log(user.sayHello());

////////////////////////////////////////////////////
// les 83- This Keyword
/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

// console.log(this);
// console.log(this === window); // true

// myVar = 100;

// console.log(window.myVar); // 100
// console.log(this.myVar); // 100 

// function sayHello() {
//   console.log(this);
//   return this;
// }
// sayHello();

// console.log(sayHello() === window); // true 

// document.getElementById("cl").onclick = function () {
//   console.log(this);
// };

// let user = {
//   age: 38,
//   ageInDays: function () {
//     console.log(this);
//     return this.age * 365;
//   },
// };

// console.log(user.age);
// console.log(user.ageInDays());

///////////////////////////////////////////////////
// les 84- Create Object With Create Method
/*
  Object
  - Create Object With Create Method
  - Create Object With Object Constructor
  - Create Object With Object Literal
  - Create Object With Object Assign
  - Create Object With Object Spread
  - Create Object With Object Freeze
  - Create Object With Object Seal
  - Create Object With Object Keys
  - Create Object With Object Entries
  /// 
*/

// let user = {
//   age: 20,
//   doubleAge: function () {
//     // return user.age * 2; // in this case prototype will not changed when i create  object from user
//     return this.age * 2;
//   },
// };

// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

// let obj = Object.create({});

// obj.a = 100;

// console.log(obj);

// let copyObj = Object.create(user);

// copyObj.age = 50;

// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());



/////////////////////////////////////////////////////
// les 85- Create Object With Assign Method

/*
  Object
  - Create Object With Assign Method
  - Object.assign(target, ...sources)
  - target: object to assign properties to
  - sources: one or more objects to assign properties from
  - returns: the target object
  - if target is null or undefined, returns the first source object
  - if target is not an object, throws a TypeError
  - if sources is null or undefined, returns the target object
  - if sources is not an array, throws a TypeError
  - if sources is an array and its elements are not objects, returns the target object

*/

// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };

// let obj2 = {
//   prop2: 2,
//   meth2: function () {
//     return this.prop2;
//   },
// };

// let targetObject = {
//   prop1: 100,
//   prop3: 3,
// };

// let finalObject = Object.assign(targetObject, obj1, obj2); // return 

// finalObject.prop1 = 200;
// finalObject.prop4 = 4;

// console.log(finalObject);

// let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

// console.log(newObject);


////////////////////////////////////////////////////
// les 86- What Is DOM ? And Select Elements
/*
  DOM
  - What Is DOM ? => document obiect model 
  - DOM is a programming interface for HTML and XML documents
  - It represents the structure of a document as a tree of nodes or a node list
  - It allows you to select and manipulate elements in the document
  - It provides methods and properties to interact with the document and its elements
  - DOM is a W3C standard
  - DOM is used by JavaScript to interact with the HTML document
  - DOM is used by CSS to style the HTML document
  - DOM is used by JavaScript to add event listeners to the HTML document

  - DOM Selectors
  --- Find Element By ID = document.getElementById
  --- Find Element By Tag Name = document.getElementsByTagName("p");
  --- Find Element By Class Name = document.getElementsByClassName("my-span");
  --- Find Element By CSS Selectors = document.querySelector(".my-span");
  --- Find Element By Collection = document.querySelectorAll(".my-span");
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

// let myIdElement = document.getElementById("my-div"); // one element
// let myTagElements = document.getElementsByTagName("p"); // => Array

// let myClassElements = document.getElementsByClassName("my-span");
// let myQueryElement = document.querySelector(".my-span");
// let myQueryAllElement = document.querySelectorAll(".my-span");


// console.log(myIdElement, "myIdElement");
// console.log(myTagElements,"myTagElements");
// console.log(myTagElements[1], "myTagElements index [1]");
// console.log(myClassElements, "myClassElements");
// console.log(myQueryElement, "myQueryElement");
// console.log(myQueryAllElement, "myQueryAllElement");

// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value); // form.inputName.valueAttr
// console.log(document.links[1].href);

///////////////////////////////////////////////////////////////////
// les: 87: Get, Set Elements Content And Attributes
/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML => myElement.innerHTML
  - textContent => myElement.textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute 
  --- setAttribute

  Search
  - innerText
*/

// let myElement = document.querySelector(".js")

// console.log(myElement.innerHTML); // retutn html as text
// console.log(myElement.textContent) // return just text


// myElement.innerHTML = "text from <span>lessons.js file</span>";
// console.log(myElement.innerHTML);

// myElement.textContent = "text from <span>lessons.js file</span>"
// console.log(myElement.textContent);

// document.images[0]
// document.images[0].src = "https://picsum.photos/200/300"; // add src
// document.images[0].alt = "Alternate" // add alt text 
// document.images[0].title = "Picture" // add new attribute
// document.images[0].id = "photo-id" // add new id attr
// myElement.id = "js-content" // add new id attr
// myElement.className = "second-class"  // add new class attr but remove the old one 

// let myLink = document.querySelector(".link")

// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href" , "https://x.com")
// myLink.setAttribute("title", "link-title")

//////////////////////////////////////////////////////////////////
// les: 88: Check Attributes And Examples
/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/
// console.log(document.getElementsByTagName("p")[0].attributes)

// let myP = document.getElementsByTagName("p")[0];

// if (myP.hasAttribute("data-src")) {
//   console.log("has attribute")
// } else {
//   console.log("does not have attribute")
// }

// // myP.removeAttribute("data-src")

// if (myP.hasAttribute("data-src")) {
//   if(myP.getAttribute("data-src") === "ss")
//     myP.removeAttribute("data-src")
//     console.log("remove attribute")
// } else {
//   myP.setAttribute("data-src", "new-value")
//   console.log("set Attribute")
// }
///////////////////////////////////////////////////////////////////
// les: 89: Create And Append Elements
/*
  DOM [Create Elements]
  - createElement
  - createTextNode
  - createComment
  - createTextNode
  - createAttribute
  - appendChild

*/

// let myElement = document.createElement("div");
//  let myAttr = document.createAttribute("data-custom");
//  let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This Is Div");

//  myElement.className = "product";
//  myElement.setAttributeNode(myAttr);
//  myElement.setAttribute("data-test", "Testing");

// // Append Comment To Element
// myElement.appendChild(myComment);

// // Append Text To Element
// myElement.appendChild(myText);

// // Append Element To Body
// document.body.appendChild(myElement);


// console.log(myElement)
////////////////////////////////////////////////////////////
// les: 90: Product With Heading And Paragraph Practice
/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/
// let myDiv = document.createElement("div")
// let myH3 = document.createElement("h3")
// let myP = document.createElement("p")

// document.body.appendChild(myDiv)
// console.log(myDiv)

// myDiv.appendChild(myH3)
// myH3.innerText = "h3 text"

// myH3.appendChild(myP)
// myP.innerText = "p text"

//////////////////////////////////////////////////////////////
// les: 91: Deal With Childrens
/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

// let myElement = document.querySelector("div");

// console.log(myElement);
// console.log(myElement.children);
// console.log(myElement.children[0]);
// console.log(myElement.childNodes);
// console.log(myElement.childNodes[0]);

// console.log(myElement.firstChild);
// console.log(myElement.lastChild);

// console.log(myElement.firstElementChild);
// console.log(myElement.lastElementChild);

/////////////////////////////////////////////////////////////
// les: 92: DOM Events
/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu => the right click in mouse 
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus => in form when i hover on feild
  --- onblur => in form when i hover out feild
  --- onsubmit => in form when i cleck submet button 
*/
// let myBtn = document.querySelector("button");
// myBtn.onclick = function() {
//   console.log("Clicked")
// }
// console.log(myBtn)

// window.onscroll = function() {
//   console.log("Scrolling")
// }


//////////////////////////////////////////////////////////////
// les: 93: Validate Form And Prevent Default
/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/
// document.links[0].onclick = function(event) {
//   console.log(event)
//   event.preventDefault()
// }

// let userInput = document.querySelector("[name='username']")
// let ageInput = document.querySelector("[name='age']")

// console.log()

// document.forms[0].onsubmit = function(event) {
//   console.log(event);
//   let userValid = false;
//   let ageValid = false

//   console.log(userInput.value)
//   console.log(userInput.value.length)

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     console.log("userInput valid")
//     userInput = true
//   }
//   if (ageInput.value !== "" && ageInput.value.length <= 5) {
//     console.log("ageValid valid")
//     ageInput = true
//   }
//   if (userValid === false || ageValid === false ) {
//     event.preventDefault()
//   }

// }



//////////////////////////////////////////////
// les: 94: Event Simulation – Click, Focus, Blur
/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/
// let two = document.querySelector(".two")
// let one = document.querySelector(".one")

// window.onload = function() {
//   console.log("window.onload")
//   console.log(two)
//   one.focus()
// }

// one.onblur = function() {
//   document.links[0].click()
// }


///////////////////////////////////////////////////////
// les: 95: ClassList Object and Methods
/*
  DOM [Class List]
  - classList
  --- length
  --- contains => return true or false
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

// let element = document.querySelector("div")

// console.log(element.classList)
// console.log(element.classList.contains("ahmed"))
// console.log(element.classList.contains("show"))

// element.onclick = function() {
//   element.classList.add("add-one", "add-two")
//   console.log(element)
// }

// element.onclick = function() {
//   element.classList.remove("add-one", "add-two")
//   console.log("remove")
// }

// element.onclick = function() {
//   element.classList.toggle("add-one")
//   console.log("toggle")
// }


//////////////////////////////////////////////////////////
// les: 96: CSS Styling And Stylesheets
/*
  DOM [CSS]
  - style
  - cssText
  - removeProperty(propertyName) [Inline, Stylesheet]
  - setProperty(propertyName, value, priority)
*/
// let element = document.getElementById("my-div");

// element.style.color = "red";
// element.style.fontWeight = "bold";

// element.style.cssText = "font-weight: bold; color: green; opacity: 0.9";

// element.style.removeProperty("color");
// element.style.setProperty("font-size", "40px", "important");

// document.styleSheets[0].rules[0].style.removeProperty("line-height");
// document.styleSheets[0].rules[0].style.setProperty("background-color", "red", "important");

////////////////////////////////////////////////////////////
// les: 97: Before, After, Prepend, Append, Remove
/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

// let element = document.getElementById("my-div")
// let createdP = document.createElement("p");
// element.remove();
///////////////////////////////////////////////////////////
// les: 98: DOM Traversing Practice 4


////////////////////////////////////////////////////////////
// les: 99: DOM Traversing
/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/
// let span = document.querySelector(".two");

// console.log(span.nextSibling)

// span.onclick = function() {
//   span.parentElement.remove()
//   span.parentElement.style.opacity ="10%"
// }


/////////////////////////////////////////////////////////////
// les: 100: addEventListener
/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/
// let myP = document.querySelector("p")
// myP.onclick = () => { console.log("message") }



// myP.addEventListener("click", function(){
//  let newP =  myP.cloneNode(true)
//  newP.className = "clone-p"
//   document.body.appendChild(newP);

//   // console.log("cloned")
// })

// let cloned = document.querySelector(".cloned")

// // cloned.onclick = function() {
// //   console.log("iam cloned")
// // }

// document.addEventListener("click", function(e) {
//   if(e.target.className === "clone-p") {
//     console.log("iam cloned")
//   }
// })

// cloned.addEventListener("click", function() {
//   console.log("iam cloned")
// })

//////////////////////////////////////////////////////////////
// les: 101: DOM Challenge
/*


// window.document.title = "Hello JS";



/////////////////////////////////////////////////////////////
// les: 102: BOM
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/




/////////////////////////////////////////////////////////
// les: 103: Alert, Confirm, Prompt
/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

//  let promptMsg = prompt("avaliable day to you ?" ,"write a day");
//  console.log(promptMsg);


///////////////////////////////////////////////////////////
// les: 104: setTimeout and clearTimeout
/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

// let counter = setTimeout(() => {
//     console.log("AAA")
//  }, 4000);

//  setTimeout(sayMsg, 3000, "Ahmed" , 31);

//  function sayMsg(user, age) {
//     console.log(`Hello ${user} age : ${age}` )
//  }

//  let btn = document.querySelector("button")
//  btn.onclick = function() {
//   clearTimeout(counter)
//  }

////////////////////////////////////////////////////////////
// les: 105: setInterval and clearInterval
 /*
 BOM [Browser Object Model]
 - setInterval(Function, Millseconds, Additional Params)
 - clearInterval(Identifier)
*/

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// let div = document.querySelector("div")
// function countDown() {
//   div.innerHTML -= 1;
//   if( div.innerHTML === "0") { // "o" as string  
//     clearInterval(counter)
//   }
// }

// setInterval(countDown , 1000)
//or
// let counter = setInterval(countDown, 1000)

///////////////////////////////////////////////////////////
// les: 106: Window Location Object
/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace() // remove thre current page from the section history
  --- assign()
*/

// console.log(location)
// console.log(location.href)
// location.href = "https://google.com";
// location.href = '/#sec02'
// location.href = "https://google.com"
// console.log(location.host)
// console.log(location.hostname)
// 
// console.log(location.protocol)
// console.log(location.hash)
// // console.log(location.reload)

// location.replace()

/////////////////////////////////////////////////////////////
// les: 107: Window Open And Close
/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

// setTimeout(function () {
//   window.open("https://google.com", "", "width=400,height=400,left=200,top=100", "");
// }, 2000);

// setTimeout(function () {
//   window.open("https://google.com", "_blank", "width=400,height=400,left=200,top=10");
// }, 2000);


////////////////////////////////////////////////////////////
// les: 108: Window History Object
/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

// console.log("fwfw")
// console.log(history.length)
// console.log(history.back)
// console.log(history.forward)

///////////////////////////////////////////////////////////
// les: 109: Scroll, ScrollTo, ScrollBy, Focus, Print, Stop
/*
  BOM [Browser Object Model]
  - stop() //  to stop loading the page 
  - print() // print the page 
  - focus() //  focus on window or element
  - scrollTo(x, y || Options) // go to spicific place in the page 
  - scroll(x, y || Options) as same as scroll to 
  - scrollBy(x, y || Options) دي كأني بقوله اعمل سكرول بقيمة معينة في كل  مرة بعمل سكرول
    behavior: "smooth"
*/
// let myNewWindow = window.open("https://google.com", "", "width=500,height=500")

// console.log(myNewWindow.focus())
// console.log(myNewWindow.close())

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });

// window.scrollBy({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });



///////////////////////////////////////////////////////////
// les: 110: Scroll To Top Using ScrollY Practice
/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollY())

// let btn = document.querySelector("button");

// btn.addEventListener("onclick", function() {
//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: "smooth"
//     })
// } )


// window.onscroll =  function() {
//   // console.log(`${window.scrollY}`)
//   if(window.scrollY >= 600) {
//     console.log(`scrolling Y value is ${window.scrollY}`)
//     btn.style.display = "block"
//   } else {
//     btn.style.display = "none"
//   }
// }
// btn.onclick = function() {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth"
//   })
// }


/////////////////////////////////////////////////////////
// les: 111: Local Storage
/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
// window.localStorage.setItem("color", "#F00");
// window.localStorage.fontWeight = "bold";
// window.localStorage["fontSize"] = "20px";

// // Get
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

// // Remove One
// // window.localStorage.removeItem("color");

// // Remove All
// // window.localStorage.clear();

// // Get Key
// console.log(window.localStorage.key(0));

// // Set Color In Page
// document.body.style.backgroundColor = window.localStorage.getItem("color");

// console.log(window.localStorage);
// console.log(typeof window.localStorage);

///////////////////////////////////////////////////////////////
// les: 112: Local Storage Color App Practice
/*
  BOM [Browser Object Model]
  Local Storage Practice
*/
// let lis = document.querySelectorAll("ul li");
// let myDiv = document.querySelector(".experiment")

// if (window.localStorage.getItem("color")) {
//     // 1- add color to div
//     myDiv.style.backgroundColor = window.localStorage.color
//     // 2- remove active class from li  
//     lis.forEach( (item)=> {
//       item.classList.remove("active")
//     })
//     // 3- add active class to li with color
//     document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
// } else {
//   console.log("NO")
// }


// lis.forEach(function(li) {
//     li.addEventListener("click", function(e) {
//         // console.log(e.currentTarget)
//         // console.log(e.currentTarget.dataset.color)
//         e.currentTarget.classList.add("active");
//         window.localStorage.setItem("color", e.currentTarget.dataset.color)
//     })
// })


//////////////////////////////////////////////////////////////
// les: 113: Session Storage And Use Cases
/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/
// window.localStorage.clear()


// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "green");

// document.querySelector(".name").addEventListener("blur", function(){
//   console.log(this.value)
//   window.localStorage.setItem("input-value", this.value)
// })

///////////////////////////////////////////////////////////
// les: 113 : section storage 
/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

// document.querySelector(".name").onblur = function () {
//   // console.log(this.value);
//   window.localStorage.setItem("input-name", this.value);
// };

////////////////////////////////////////////////////////////
// les: 114: DOM Challenge




///////////////////////////////////////////////////////////
// les: 115: Destructuring Arrays Part 1
/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];
// [ a = "A", b, c, d, e= "gaber" ] = myFriends;



// console.log(a); // he will print 
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e); // he well print mayas


// let myFriends2 = ["x", "y", "z", "zz"];

// let  [x, y, ,z ] = myFriends2  // here i have four obj but th 3th on is empety .. value in index 2 ="z" in array will not be print

// console.log(x); // x 
// console.log(y); // y
// console.log(z); // zz

////////////////////////////////////////////////////////
// les: 116: Destructuring Arrays Part 2
/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

// let myFriends = ["Ahmed", "Sayed", "Ali", ["Shady", "Amr", ["Mohamed", "Gamal"]]];

// console.log(myFriends[3][2][1]) // print Gamal
 
// let [ , , , [a, , [, b]] ] = myFriends

// console.log(a) //  shady 
// console.log(b) // gamal 

//////////////////////////////////////////////////////
// les: 117: Destructuring Arrays Part 3 Swap Variables 
/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/
// let book = "Video";
// let video = "Book";

// Save Book Value In Stash
// let stash = book; // Video

// // change book value 
// book = video; // Book

// // change video value 
// video = stash; // Video

// console.log(video) // video
// console.log(book); // Book 

//  [book , video] = [video, book] // 
 // console.log(video) // video
// console.log(book); // Book 

////////////////////////////////////////////////////////////
// les: 118: Destructuring Objects Part 1
/*
  Destructuring
  - Destructuring Object
*/

// const user = {
//   name: "Osama",
//   age: 39,
//   title: "Developer",
//   country: "Egypt",
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// ({ theName, theAge, theTitle, theCountry } = user); // that is if i already declare vars

// let { name, age, title, country } = user // varaible name should be identical with obj.var name ex name  = user.name 
// console.log(name); 
// console.log(age); 
// console.log(title);
// console.log(country);


////////////////////////////////////////////////////////////
// les: 119 : Destructuring Objects Part 2
/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/
// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
//   theColor: "Black",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// const  { 
//     theName: n, 
//     theAge: a, 
//     theCountry, 
//     theColor: co ="red",
//     skills: { html: h, css }
//     } = user 

// console.log(n)
// console.log(a)
// console.log(theCountry)
// console.log(co)
// console.log(`My HTML Skill Progress Is ${h}`);
// console.log(`My CSS Skill Progress Is ${css}`);

// const { html: skillOne, css: skillTwo } = user.skills

// console.log(skillOne)
// console.log(skillTwo)

///////////////////////////////////////////////////////////
// les: 120 : Destructuring Function Parameters
/*
  Destructuring
  - Destructuring Function Parameters
*/
// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// showDetails(user);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

// destructing 

// function showDetails({theName: n, theAge: a, skills: {css: c} } = user) {
//   console.log(`Your Name Is ${n}`);
//   console.log(`Your Age Is ${a}`);
//   console.log(`Your CSS Skill Progress Is ${c}`);
// }


//////////////////////////////////////////////////////////
// les: 121 : Destructuring Mixed Content
/*
  Destructuring
  - Destructuring Mixed Content
*/

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   skills: ["HTML", "CSS", "JavaScript"],
//   addresses: {
//     egypt: "Cairo",
//     ksa: "Riyadh",
//   },
// };

// let { theName: n, theAge: a, skills: [ one, two, three], addresses:{egypt: e, ksa: r} } = user

// console.log(`Your Name Is: ${n}`);
// console.log(`Your Age Is: ${a}`);
// console.log(`Your Last Skill Is: ${three}`);
// console.log(`Your Live In: ${e}`);


/////////////////////////////////////////////////////////
// les: 122 : Destructuring Challenge


////////////////////////////////////////////////////////
// les: 123 : Set Data Type And Methods
/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index
  // يقوم بتخزين الداتا المتكررة اكتر من مرة مرة واحدة بس يعني بياخد نسخة واحدة من كل عنصر 

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/
// let myData2 = [1, 1, 1, 2, 3 ];
// console.log(myData2) // retutn => [1, 1, 1, 2, 3]
// let myUniqueData2 = new Set([1, 1, 1, 2, 3]);
// console.log(myUniqueData2)  // retutn => [1,2,3]


// let myData = [1, 1, 1, 2, 3, "A"];
// // let myUniqueData = new Set([1, 1, 1, 2, 3]);
// // let myUniqueData = new Set(myData);
// // let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
// let myUniqueData = new Set();

// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add(2).add(3).add("A");

// console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

// console.log(myData);
// console.log(myUniqueData);

// console.log(myUniqueData.size);

// console.log(myData[0]);
// console.log(myUniqueData[0]);

// // myUniqueData.delete(2);
// console.log(myUniqueData.delete(2));

// console.log(myUniqueData);
// console.log(myUniqueData.size);

// myUniqueData.clear();

// console.log(myUniqueData);
// console.log(myUniqueData.size);


///////////////////////////////////////////////////////
// les: 124 : Set vs WeakSet And Garbage Collector 
/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  -- 
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

// let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

// console.log(mySet);

// // Size
// console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// // Values + Keys [Alias For Values]
// let iterator = mySet.keys();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// // forEach

// mySet.forEach((el) => console.log(el));

// console.log("#".repeat(20));

// // Type Of Data

// let myws = new WeakSet([{ A: 1, B: 2 }]);

// console.log(myws);


///////////////////////////////////////////////////////
// les: 125 : Map Data Type vs Object
/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

// let myObject = {};
// let myEmptyObject = Object.create(null); // null prototype
// let myMap = new Map();

// console.log(myObject);
// console.log(myEmptyObject);
// console.log(myMap);

// let myNewObject = {
//   10: "Number",
//   "10": "String",
// };

// console.log(myNewObject[10]);

// let myNewMap = new Map();
// myNewMap.set(10, "Number");
// myNewMap.set("10", "String");
// myNewMap.set(true, "Boolean");
// myNewMap.set({a: 1, b: 2}, "Object");
// myNewMap.set(function doSomething() {}, "Function");

// console.log(myNewMap.get(10));
// console.log(myNewMap.get("10"));

// console.log("####");

// console.log(myNewObject);
// console.log(myNewMap);



////////////////////////////////////////////////////////
// les: 126 : Map Methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// https://www.w3schools.com/jsref/jsref_map.asp
// https://www.w3schools.com/jsref/jsref_map_methods.asp
/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/
//  let myMap = new Map();

//  myMap.set(10, "Number")
//  myMap.set("10", "String")
//  myMap.set("arr", [{1: "as"}, "1", 2, 3, 4])
 
//  console.log(myMap)

//  let myMapTwo = new Map([  // he read this as obj not array 
//   [10, "Number"], // he read this as obj not array  ant this not work {10, "Number"}
//   ["Name", "String"],
//   [false, "Boolean"],
//  ]) 

//  console.log(myMapTwo)


// console.log(myMap.get(10));
// console.log(myMap.get("Name"));
// console.log(myMap.get(false));

// console.log("####");

// console.log(myMap.has("Name"));

// console.log("####");

// console.log(myMap.size);

// console.log(myMap.delete("Name"));

// console.log(myMap.size);

// // myMap.clear();

// console.log(myMap.size);

////////////////////////////////////////////////////////
// les: 127 : Map vs WeakMap
/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/
// let mapUser = {theName: "ahmed"}

// let myMap = new Map();
// myMap.set(mapUser, "object value");

// console.log(mapUser)
// console.log(myMap);
// console.log(myMap.get(mapUser));

// mapUser = null
// console.log(mapUser, "mapUser")
// console.log(myMap, "myMap")
// console.log("#".repeat(10))

// let wMapUser = {theName: "ahmed"}
// let wMapUser2 = {theName2: "ahmed2"}
// let myWeatMap = new WeakMap();

// // myWeatMap.set("name", "value")
// // console.log(myWeatMap) // Erorr

// myWeatMap.set(wMapUser, "value")
// myWeatMap.set(wMapUser2, "value2")
// console.log(myWeatMap, "w Map User")

//////////////////////////////////////////////////////
// les: 128 : Array.from Method
/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/


///////////////////////////////////////////////////////
// les: 129 :

///////////////////////////////////////////////////////
// les: 130 :


//////////////////////////////////////////////////////
// les: 131 - 


//////////////////////////////////////////////////////
// les: 132 :


/////////////////////////////////////////////////////
// les: 133 :


/////////////////////////////////////////////////////
// les: 134 :


//////////////////////////////////////////////////////
// les: 135 :

/////////////////////////////////////////////////////
// les: 136 :


///////////////////////////////////////////////////////
// les: 137 :


///////////////////////////////////////////////////////
// les: 138 :


//////////////////////////////////////////////////////
// les: 139 :


/////////////////////////////////////////////////////
// les: 140 :


/////////////////////////////////////////////////////
// les: 140 :


//////////////////////////////////////////////////////
// les: 141 -



//////////////////////////////////////////////////////
// les: 142 :


//////////////////////////////////////////////////////////
// les: 143 - 



/////////////////////////////////////////////////////////
// les: 144 - 



////////////////////////////////////////////////////////
// les: 145 -


////////////////////////////////////////////////////////
// les: 146 -



////////////////////////////////////////////////////////
// les: 147 -


///////////////////////////////////////////////////////
// les: 148 -


//////////////////////////////////////////////////////
// les: 149 -


///////////////////////////////////////////////////////
// les: 150 -



///////////////////////////////////////////////////////
// les: 151 -


///////////////////////////////////////////////////////
// les: 152 -


///////////////////////////////////////////////////////
// les: 153 -


//////////////////////////////////////////////////////
// les: 154 -



//////////////////////////////////////////////////////
// les: 155 -




//////////////////////////////////////////////////////
// les: 156 -


/////////////////////////////////////////////////////
// les: 157 -



/////////////////////////////////////////////////////
// les: 158 -


////////////////////////////////////////////////////
// les: 159 -



//////////////////////////////////////////////////////////
// les: 160 -



//////////////////////////////////////////////////////////
// les: 161 -


/////////////////////////////////////////////////////////
// les: 162 -


/////////////////////////////////////////////////////////
// les: 163 -


/////////////////////////////////////////////////////////
// les: 164 -


/////////////////////////////////////////////////////////\
// les: 165 -

////////////////////////////////////////////////////////
// les: 166 -


////////////////////////////////////////////////////////
// les: 167 -


//////////////////////////////////////////////////////////
// les: 168 -



/////////////////////////////////////////////////////////
// les: 169 -


////////////////////////////////////////////////////////
// les: 170 -


///////////////////////////////////////////////////////
// les: 171 -


///////////////////////////////////////////////////////
// les: 172 -


////////////////////////////////////////////////////////
// les: 173 -


////////////////////////////////////////////////////////
// les: 174 -


////////////////////////////////////////////////////////
// les: 175 -


///////////////////////////////////////////////////////
// les: 176 -


/////////////////////////////////////////////////////////////
// les: 177 -



/////////////////////////////////////////////////////////////
// les: 178 -


/////////////////////////////////////////////////////////////
// les: 179 -


/////////////////////////////////////////////////////////////
// les: 180 -



////////////////////////////////////////////////////////////////
// les: 181 -




///////////////////////////////////////////////////////////////
// les: 182 -


//////////////////////////////////////////////////////////////
// les: 183 -


//////////////////////////////////////////////////////////////
// les: 184 -



////////////////////////////////////////////////////////////
// les: 185 -



////////////////////////////////////////////////////////////
// les: 186 -



///////////////////////////////////////////////////////////
// les: 187 -


///////////////////////////////////////////////////////////
// les: 188 -



///////////////////////////////////////////////////////////


























































































































































































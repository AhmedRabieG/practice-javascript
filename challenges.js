//console.table(["A","B","C","D"])
///////////////////////
// chalngr Lesion 17 


// let theTitle = "Elzero", 
//     theDescription = "Elzero Web School", 
//     theDate = "25/10"

// let divContent = `<h3>${theTitle}</h3>
//                   <p>${theDescription}</p>
//                   <span>${theDate}</span>
//                 `

// for (let index = 0; index < 4 ; index++) {
//     document.write(divContent);
// }

///////////////////////////////////////
// let text = "Te x t "
// let text2 = "Hello From Training Javascript"
// console.log(Number.MAX_SAFE_INTEGER)


// console.log(text.toLocaleLowerCase());
// console.log(text.toUpperCase());
// console.log(text.trim())
// console.log(text.charAt(1) )
// console.log(text2.slice(5, 25));
// console.log(text2.slice(0,1) , "// H");
// console.log(text2.repeat(2))
// console.log(text2.split("F"))
// console.log(text2.split(" ", 1))
// console.log(text2.split("", 1))
// console.log("/////////")

// console.log(text2.slice(text2.length -1))
// console.log(text2.substring(text2.length -1))
// console.log(text2.substring(text2.length -5, text2.length -3));

//////////////////////////////////////////////////////
// les:30 string challenge 
// let a = "Elzero Web School";
// console.log("dddddddd")

// console.log(a.charAt(2).toLocaleUpperCase()+a.slice(3,6))

// console.log(a.charAt(13).toLocaleUpperCase().repeat(8))

// console.log(a.split(" ", 1));

// console.log(a.substr(0, 7)+a.substr(11))

// console.log(a.charAt().toLocaleLowerCase()+a.slice(1,a.length -1)
// .toLocaleUpperCase()+a.substring(a.length -1))

////////////////////////////////////////////////////////
// les: 27 to 30 Assignments

// let userName = "Elzero";
// console.log(userName.charAt(3)); // e
// console.log(userName.slice(3,4)); // e
// console.log(userName.substring(3,4)); // e
// console.log(userName.substr(3,1)); // e
// console.log(userName[3]); // e
// console.log(userName.slice(-3, -2).repeat(3)); // eee

//////////////////////////////////////////////
// les: 37- challenge 
// let st = "Elzero Web School";

// console.log(st.length);

// if ( (st.length * 2).toString() === "34") {
//     console.log("Good");
// }

// let text =  st.includes("W") ? "w" : null;
// if ( text === "w") {
//     console.log("Good");
// }

// let text = st.split();
// if (text !== "string") {
//     console.log("Good");
// }

// if ( typeof st.length === "number") {
//     console.log("Good");
// }

// let text = st.slice(0, 6).repeat(2)
// console.log(text)
// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//     console.log("Good");
// }

///////////////////////////////////////////////////////////
// les: 39 challenge


// let job = "Designer";
// let salary = 0;

// switch (job){
//     case "Manager":
//         salary = 8000;
//         console.log(`My Money is ${salary}`)
//     break;
//     case "IT":
//     case "Support":
//         salary = 6000;
//         console.log(`My Money is ${salary}`)
//     break;
//     case "Developer":
//     case "Designer":
//         salary = 7000;
//         console.log(`My Money is ${salary}`)
//     break;
//     default:
//         salary = 5000;
//         console.log(`My Money is ${salary}`)
// }

// let holidays = 2;
// let money = 0;

// if (holidays === 0) {
//     money = 5000;
//     console.log(`My Money is ${money}`);
// }
// else if (holidays ===  1 || holidays ===  2 ) {
//     money = 3000;
//     console.log(`My Money is ${money}`);
// }
// else if (holidays ===  3 ) {
//     money = 2000;
//     console.log(`My Money is ${money}`);
// }
// else {
//     money = 0;
//     console.log(`My Money is ${money}`);
// }

///////////////////////////////////////////////////////
// les: 47 Array Challenge
// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
// let my2 = my.reverse().slice(--counter)
// console.log(my2); // ["Osama", "Elham", "Mazero", "Ahmed"];
// let my3 = my.slice(++zero, counter)
// console.log(my2.slice(++zero).reverse()); // ["Elham", "Mazero"]

// console.log(my3); // "Elzero"
// let my4 = `${my3[1].slice(0,2)}${my3[0].slice(2,6)}` 
// console.log(my4)

// console.log(my4.slice(-2)); // "rO"

////////////////////////////////////////////////////////
// less: 56- challenge loop 

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

// let adminNumbers = 0;
// for (let i = 0; i < myAdmins.length; i++) {
//     if ( myAdmins[i] === "Stop" ) break;
//     adminNumbers +=1;
// }
// document.write(`<div>We Have ${adminNumbers} Admins</div>`);
// document.write(`<hr/>`);
// let adminIndex = 0
// for ( let i = 0; i < myAdmins.length; i++ ) {
//     if ( myAdmins[i] === "Stop" ) break;
//     adminIndex += 1;
//     document.write(`<div>
//         <p>the admin for team ${adminIndex} is => ${myAdmins[i]}   </p>
//         </div>`);
//     let firstAdminChat = myAdmins[i].charAt(0);
//     console.log(firstAdminChat)
//     document.write(`<h3> Team Members </h3>`)
//     for (let j = 0; j < myEmployees.length; j++) {
//         let firstTeamMemberChart = myEmployees[j].charAt(0);
//         console.log(firstTeamMemberChart)
//         if ( firstTeamMemberChart === firstAdminChat ) {
//             document.write(`<div> ${myEmployees[j]}</div>`)
//         }
//     }
//     document.write(`<hr/>`);
// }

////////////////////////////////////////////////////////
// les: 63- Random Argument Challenge

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

// function showDetails(...details) {
//     let userName; let userAge; let userStatus
//     for (let i = 0; i < details.length; i++ ) {
//         typeof details[i] === "string" ?
//          userName = details[i] : typeof details[i] === "number" ? 
//          userAge = details[i] : typeof  details[i] === "boolean" ?
//         userStatus = details[i] : details[i] = null 
//     }
//     let message = userStatus === true ? "You Are Available For Hire" : "You Are Not Available For Hire"
//     return  console.log(`${userName}  ${userAge} ${message}`)
// }

// showDetails("ahmed", 38, true); 
// // "Hello ahmed, Your Age Is 38, You Are Available For Hire"
// showDetails(38, "ahmed", true); 
// // "Hello ahmed, Your Age Is 38, You Are Available For Hire"
// showDetails(true, 38, "ahmed"); 
// // "Hello ahmed, Your Age Is 38, You Are Available For Hire"
// showDetails(false, "ahmed", 38); 
// // "Hello ahmed, Your Age Is 38, You Are Not Available For Hire"


//////////////////////////////////////////////
// 70- Challenge arrow function  

// let names 
// =  (...params) => { return `String  ["${params.join('"],["')}"] => Done !` };


// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// // output = String  ["Osama"],["Mohamed"],["Ali"],["Ibrahim"]


// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

// let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => { return one + one + two + nums[0]};

// console.log(calc(10, 50, 10, 60 )); // 80

/////////////////////////////////////////////////////////
// less: 78- Higher Order Functions Challenge
/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split("").map(function(item) {
//   return item !== "," ? item : "";
// }).filter(function(item) {
//     return isNaN(item)
// }).slice(1).slice(0,-1).join("").split("_").join(" ")

let solution = myString.split("").map(function(item) {
  return item !== "," ? item : "";
}).filter(function(item) {
    return isNaN(item)
}).reduce(function(acc, current) {
  return acc + current
})

// let solution = myString.split("").filter( function(item) {
//   return item !== "," && item !== "_" && item !== " " && item !== "e" 
//   && isNaN(item)
// } ).slice(1).slice(0,-1).join("")



// myString.split("_").map(function(item) {
//     return  item.split(",").filter(function(item) {
//       return isNaN(item.split(""))
//     })
// })

// .splice(1).slice(0,-1)
console.log(solution); // Elzero Web School





























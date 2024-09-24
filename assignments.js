//////////////////////////////////////////////////////////////
// first dom assignments =>  Lessons From 086 To 093
      // assign 2
    // let images = document.querySelectorAll("img")
    // images.forEach( (img)=> {
    //     // set attribute 
    //     img.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    // })
    // console.log(images)

    /// assign 3 
    // let input = document.querySelector("input")
    // let result = document.getElementsByClassName("result")

    // console.log(input)
    // console.log(result[0])
    // input.addEventListener("input", ()=> {
    //     let res = (input.value * 47).tofixed(2)
    //     result[0].textContent = `${input.value} USD Dollar = ${res.} Egyptian Pound`
        
    // })

    /// assign 4 
    // let divOne = document.querySelector(".one")
    // let divTwo = document.querySelector(".two")
    
    // console.log(divOne)
    // console.log(divTwo)

    // divOne.setAttribute("title", "one")
    // divOne.textContent = "one"

    // divTwo.setAttribute("title", "two")
    // divTwo.textContent = "two 2";

    /// assign 5 
        // let images = document.querySelectorAll("img");

        // images.forEach( (img)=> {
        //     if ( img.getAttribute("alt") ) {
        //         img.setAttribute("alt", "Old");
        //     } else {
        //         img.setAttribute("alt", "Elzero New");
        //     }
        // } )
        // console.log(images);

    /// assign 6

// let elementsNumber = document.querySelector('[name="elements"]')
// let elementText = document.querySelector('[name="texts"]')
// let elemntType = document.querySelector("select")
// let results = document.querySelector(".results")
// let form = document.forms[0];


// console.log(elementsNumber)
// console.log(elementText.value)
// console.log(elemntType.value)
// console.log(form, "form")



// form.addEventListener("submit", function submit(evevt) {
//     evevt.preventDefault();
//     if ( elementsNumber.value > 0 && elementText.value ) {
//         console.log( `el num  ${elementsNumber.value} el text= ${elementText.textContent} el type ${elemntType.value}` )
//         for (let i = 0; i <= elementsNumber.value; i++) {
//             if (elemntType.value === "Div") {
//                 let myDiv = document.createElement("div")
//                 myDiv.textContent = elementText.value;
//                 myDiv.setAttribute("title", "title")
//                 myDiv.setAttribute("class", "box")
//                 myDiv.setAttribute("id", `"id-${i}"`)
//                 results.append(myDiv)
//             }
//             if (elemntType.value === "Section") {
//                 let mySection = document.createElement("section")
//                 mySection.textContent = elementText.value;
//                 mySection.setAttribute("title", "title")
//                 mySection.setAttribute("class", "box")
//                 mySection.setAttribute("id", "id-1")
//                 results.append(mySection)
//             }
//         }
//     }

//     // this.submit();
// }) 

/////////////////////////////////////////////////////////////
// تكليفات JavaScript Bootcamp من الدرس 094 إلى 101

 // assign 1
    // let links = document.querySelectorAll("a")
    // console.log(links);
    // links.forEach( (link)=> {
    //     if( link.classList.contains("open") && link.innerText === "Elzero" ) {
    //         console.log(link)
    //          // link.click()
    //     }
    // } )


///////////////////////////////////////////////////////////
///// تكليفات JavaScript Bootcamp من الدرس 115 إلى 122
 // assign 1 
//  let myNumbers = [1, 2, 3, 4, 5];

// // Write Your Destructuring Assignment Here
//  let [a, , , , e ] = myNumbers
 
//  console.log(a * e ) // 5

//  // assign 2 
//  let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// // Write Your Destructuring Assignment Here
// let [a, b, c, [d, e, [f, g]] ] = mySkills
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// assign 3
// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// let newArray = [arr3[1] , arr2[0], arr1[0]]

// let [a,b,c] = newArray
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);
// // My Best Friends: Shady, Mahmoud, Ahmed

// assign 4 
// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
//   };
  
//   // Write Your Destructuring Assignment Here
// let {age: a, working: w, country: c, hobbies: [h1, , h3]} = member
//     console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
//     // My Age Is 30 And Iam Not Working

//     console.log(`I Live in ${c}`);
//     // I Live in Egypt
    
//     console.log(`My Hobbies: ${h1} And ${h3}`);
//     // My Hobbies: Reading And Programming

//  // assign 5

// const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//       "Oath In Felghana": ["USA", "Japan"],
//       "Ark Of Napishtim": {
//         US: "20 USD",
//         JAP: "10 USD",
//       },
//       Origin: "30 USD",
//     },
//   };
  
//   // Write Your Destructuring Assignment/s Here

//   let { title: t, developer: d, releases } = game;

//   let [o, a] = Object.keys(releases)

//   let [ [ u, j ], { US: u_price, JAP: j_price }, or ] = Object.values(releases);

// // let { "Oath In Felghana": [u, j], "Ark Of Napishtim": { US: u_price, JAP: j_price }, Origin: or } 
// // = releases

//   console.log(`My Favourite Games Style Is ${t} Style`);
//   // My Favourite Games Style Is YS Style
  
//   console.log(`And I Love ${d} Games`);
//   // And I Love Falcom Games
  
//   console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
//   // My Best Release Is Oath In Felghana It Released in USA & Japan
  
//   console.log(`Although I Love ${a}`);
//   // Although I Love Ark Of Napishtim
  
//   console.log(`${a} Price in USA Is ${u_price}`);
//   // Ark Of Napishtim Price in USA Is 20 USD
  
//   console.log(`${a} Price in Japan Is ${j_price}`);
//   // Ark Of Napishtim Price in Japan Is 10 USD
  
//   console.log(`Origin Price Is ${or}`);
//   // Origin Price Is 30 USD

// assign 6

// let chosen = 2;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// function handleChosen(chosen) {
//     if (chosen === 1) {
//         let { title: t, age: a, available, skills: [one, two] } = myFriends[0]
//         available === true ? available = "Available" : available = "Not Available"
//         // let { ava } = Object.keys(available)
        
//         console.log(t,a,available,two)
//     }
//     else if (chosen === 2) { 
//         let { title: t, age: a, available, skills: [one, two]} = myFriends[1]
//         available === true ? available = "Available" : available = "Not Available"
//         console.log(t,a,available,two)
//     }
//     else if (chosen === 3) { 
//         let { title: t, age: a, available, skills: [one, two]} = myFriends[2]
//         available === true ? available = "Available" : available = "Not Available"
//         console.log(t,a,available,two)
//     }
// }handleChosen(chosen)

////////////////////////////////////////////////////////




// ///EX2////

// //0.1
// // const fruitList = ["apple", "banana", "tomato"];
// // const parentUl =  document.getElementById('ul_id');
// // for (let i=0; i<3; i++) {
// //     const childLi = document.createElement('li');
// //     childLi.innerHTML = fruitList[i];
// //     parentUl.appendChild(childLi)
// // }

// //0.2
// // const parentDiv =  document.getElementById('div_id');
// // const childImg = document.createElement("img");
// // childImg.src = "https://crocoder.dev/icon.png";
// // parentDiv.appendChild(childImg)

// //0.3
// const parentUL = document.querySelectorAll('ul');
// const lii = document.getElementsByTagName('li');

// for (i in lii) {
//     if (lii[i].id==='oneFirstLi' || lii[i].id==='TwoFirstLi' || lii[i].id==='ThreeFirstLi') {
//         lii[i].innerHTML = "First" 
//     }
//     else if (lii[i].id==='oneLastLi' || lii[i].id==='TwoLastLi' || lii[i].id==='ThreeLastLi'){
//         lii[i].innerHTML = "Last" 
//     }
// }
// console.log(lii);

// //1
// // const h2 = document.getElementById('title')
// function change (e) {
//     e.preventDefault();

//     const newInput = document.getElementById("user-new-input");
//     const newH2 = document.getElementById("title");
//     console.log(newInput);
//     console.log(newH2);
    
//     newH2.innerText= newInput.value;
//     console.log(newH2);
// }

// //2
// const pressbutton = document.getElementById("press");
// const newParagraph = document.getElementById("para");

//     let numOfPress = 0
//     pressbutton.addEventListener("click", () => {
//         numOfPress ++ ; 
//         newParagraph.innerText = numOfPress;
//         newParagraph.style.fontSize = `${10+numOfPress}px`;
//     })

// //4

// const OldH2 = document.getElementById("headerTwo");
// const newh2 = ["i change you"];

// window.addEventListener("load", () => {
//      OldH2.innerText = newh2;

// });

// //5
// const inputBox = document.getElementById("input-box");
// const h2IfEmpty = document.getElementById("h3-of-empty");

// function ifEmpty (e) {
//     e.preventDefault();

//     if (inputBox.value == "") {
//         h2IfEmpty.innerText = "Error, it is empty";
//     }
//     return false
// }

// //6
// const buttonOfHello = document.getElementById("button-of-hello");
// const buttonOfGoodbye = document.getElementById("button-of-goodbye");
// const titleHello = document.getElementById ("helloT") ;
// const titleGood = document.getElementById ("GoodbyeT") ;


// buttonOfHello.addEventListener ("click" , () =>{
//     titleHello.innerText = "You press the Hello button 👽";
// }
// );

// buttonOfGoodbye.addEventListener ("click" , () =>{
//     titleGood.innerText = "You press the Goodbye button 🦁";
// }
// );

//7
const addToDo = document.getElementById("button-todo");
// const inputLine = document.getElementById("todo-input").value;
// console.log(addToDo);
// console.log(inputLine);

addToDo.addEventListener("click", () => {
    if ( document.getElementById("todo-input") !== "") {
    let valueOfInputLine =  document.getElementById("todo-input").value;
    let lineOfCodeToHtml =  `<li> ${valueOfInputLine} <input type="checkbox"> </li>`;
    document.querySelector("ul").insertAdjacentHTML("beforeend", lineOfCodeToHtml);
    document.getElementById("todo-input").value = ""}
    
});








 







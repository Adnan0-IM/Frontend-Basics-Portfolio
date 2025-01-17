
// const today = new Date();

// console.log("Todays Date: ", today);

// const fruits = ["apple", "banana", "mango", "orange"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// select button
const button = document.querySelector("#changeColorButton");

// add event listener to change the background color of the body
button.addEventListener("click", () => {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
});
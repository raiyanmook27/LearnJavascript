//DOM
//DOM SELECTORS

//Single Selectors
//getElementById
//querySelector
const form = document.getElementById("my-form");
const container = document.querySelector(".container");
console.log(container);

//Multiple Selectors
console.log(document.querySelectorAll(".item"));

const items = document.querySelectorAll(".item");

items.forEach((item) => console.log(item));

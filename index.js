"use strict"

const text = document.querySelector(".text");
const button = document.querySelector(".button");
button.addEventListener("click", ()=> {button.textContent = text.textContent})

const firstPicture = document.querySelector(".image");
firstPicture.src = "img/IMG-worlds-of-adventure.webp";

const link = document.querySelector(".link");
link.href = "https://textbook.edu.goit.global/javascript-yk5evp/v2/uk/docs/lesson-12/events";
link.textContent = "konspekt";

const newImage = document.querySelector(".new-image");
newImage.alt = "new-image";

const firstItem = document.querySelector(".item");
firstItem.textContent = "HTML";
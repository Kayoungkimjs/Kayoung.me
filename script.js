"use strict";
const btn1 = document.querySelector(".career-card-1")
const btn2 = document.querySelector(".career-card-2")
const btn3 = document.querySelector(".career-card-3")
const card1 = document.querySelector(".description-1")
const card2 = document.querySelector(".description-2")
const card3 = document.querySelector(".description-3")



btn1.addEventListener("click", function() {
    card1.classList.toggle("show");
})

btn2.addEventListener("click", function() {
    card2.classList.toggle("show");
})

btn3.addEventListener("click", function() {
    card3.classList.toggle("show");
})
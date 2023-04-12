/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["clubs", "diamonds", "spades", "hearts"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let top = document.querySelector("#symbol-top");
let number = document.querySelector("#number");
let bottom = document.querySelector("#symbol-bottom");

function cardSelection(arr1, arr2) {
  let card = [];
  card.push(arr1[Math.floor(Math.random() * arr1.length)]);
  card.push(arr2[Math.floor(Math.random() * arr2.length)]);
  return card;
}
function assignColor(arr) {
  if (arr[0] === "hearts" || arr[0] === "diamonds") {
    top.style.color = "red";
    number.style.color = "red";
    bottom.style.color = "red";
  } else {
    top.style.color = "black";
    number.style.color = "black";
    bottom.style.color = "black";
  }
}
function assignSuit(arr) {
  if (arr[0] === "hearts") {
    top.innerHTML = "♥";
    bottom.innerHTML = "♥";
  } else if (arr[0] === "diamonds") {
    top.innerHTML = "♦";
    bottom.innerHTML = "♦";
  } else if (arr[0] === "clubs") {
    top.innerHTML = "♣";
    bottom.innerHTML = "♣";
  } else {
    top.innerHTML = "♠";
    bottom.innerHTML = "♠";
  }
}
function assignValue(arr) {
  number.innerHTML = arr[1];
}
function generateCard() {
  let card = cardSelection(suits, values);
  assignColor(card);
  assignSuit(card);
  assignValue(card);
}

window.onload = function() {
  generateCard();
};
document.querySelector(".button").addEventListener("click", generateCard);

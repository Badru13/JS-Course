// Module 1 — Intro to the Web & JavaScript
// JavaScript runs the moment the page loads.

console.log("Page loaded — JavaScript is running.");

const heading = document.getElementById("main-heading");
const subText = document.getElementById("sub-text");
const btn     = document.getElementById("action-btn");

// JS updates the page on load
subText.textContent = "JavaScript is now running on this page.";

// JS responds to a button click
btn.addEventListener("click", function () {
  heading.textContent    = "JavaScript Just Changed This!";
  heading.style.color    = "#16a34a";
  btn.textContent        = "It Worked!";
  console.log("Button clicked — JavaScript responded.");
});

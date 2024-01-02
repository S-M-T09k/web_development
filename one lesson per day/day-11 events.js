//!this is not finished I have other things to do so, I'll come back to this later

export * as Color from './colorUtils.js'

const display = document.querySelector("#events");
const colors = "1234567890abcdef";

display.addEventListener('mouseover', changeColor);
display.addEventListener('mouseout', changeBack);
display.addEventListener('mousedown', showText);
display.addEventListener('mouseup', hideText);

const originalStyle = window.getComputedStyle(display);
const originalBackgroundColor = originalStyle.backgroundColor;
const originalBorderColor = originalStyle.borderColor;

console.log(originalStyle);
console.log(originalBackgroundColor);
console.log(originalBorderColor);

function changeColor ()
{
  this.style.backgroundColor = "#ff0000"
  this.style.borderColor     = "#ffff00"
};

function changeBack ()
{
  this.style.backgroundColor = originalBackgroundColor;
  this.style.borderColor     = originalBorderColor;
};

function showText ()
{
  this.style.color = "#ffffff";
  this.innerText   = "This is some text";
};

function hideText ()
{
  this.innerText = "";
};
'use strict'

// Add 16 divs
const canvas = document.querySelector('.canvas')
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div')
  div.style.cssText = 'border: 1px solid #bbb; height: 25px; width: 25px;'
  div.setAttribute('class', 'hover')
  canvas.appendChild(div)
}

let hover = document.querySelectorAll('.hover')
let hoverList = [...hover]

// Add background to divs on mouseenter
function start() {
  hoverList.map((el) => {
    el.addEventListener('mouseenter', () => {
      el.style.backgroundColor = '#555';
    })
  })
}
// Revert background-color to transparent
function revertBg () {
  hoverList.map(el => el.style.backgroundColor = 'revert')
}

// Generate random color on hover button
function colors() {
  hoverList.map((el) => {
    el.addEventListener('mouseenter', () => {
      el.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    })
  })
}

function bw() {
  hoverList.map((el) => {
    el.addEventListener('mouseenter', () => {
      el.style.backgroundColor = '#555';
    })
  })
}

// Button that cleans canvas background
function reset() {
  revertBg()
  hoverList.map((el) => {
    el.addEventListener('mouseenter', () => {
      el.style.backgroundColor = '#555';
    })
  })
}
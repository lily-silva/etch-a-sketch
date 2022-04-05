'use strict'

// Add 16 divs
const canvas = document.querySelector('.canvas')
for (let i = 1; i < 257; i++) {
  const div = document.createElement('div')
  div.style.cssText = 'border: 1px solid #bbb; height: 25px; width: 25px;'
  div.setAttribute('class', 'hover')
  canvas.appendChild(div)
}

// Add background to divs on mouseenter
let hover = document.querySelectorAll('.hover')
let hoverList = [...hover]
hoverList.map((el) => {
  el.addEventListener('mouseenter', () => {
    el.classList.add('red')
  })
})



// Generate random color on hover button
function colors() {
  hoverList.map(el => el.style.backgroundColor = 'revert')
  hoverList.map((el) => {
    el.addEventListener('mouseenter', () => {
      el.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    })
  })
  
}

// Button that cleans canvas background
function reset() {
  hoverList.map(el => el.style.backgroundColor = 'revert')
}
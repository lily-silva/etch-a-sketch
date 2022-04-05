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

// Button that erases canvas background
function erase() {
  // console.log('click')
  hoverList.map((el) =>
    el.addEventListener('mouseenter', () => {
      el.classList.remove('red')
    })
  )
}
'use strict'

// Add 16 divs

function getColor(){ 
  let R = Math.floor((Math.random() * 100) + 127);
  let G = Math.floor((Math.random() * 127) + 127);
  let B = Math.floor((Math.random() * 127) + 127);
  
  let rgb = (R << 16) + (G << 8) + B;
  return `#${rgb.toString(16)}`;   
}

function defaultGrid() {
  const canvas = document.querySelector('.canvas')
  const gridSize = getComputedStyle(document.documentElement)
  document.getElementById('error').style.visibility = 'hidden'
  let defCol = gridSize.getPropertyValue('--columns')
  let defRow = gridSize.getPropertyValue('--rows')
  for (let i = 0; i < defCol * defRow; i++) {
    const div = document.createElement('div')
    div.style.cssText = 'border: 1px solid #e3e3e3'
    div.setAttribute('class', 'hover')
    canvas.appendChild(div)
  }
  draw()
}

function draw() {
  let hover = document.querySelectorAll('.hover')
  let hoverList = [...hover]
  hoverList.map((el) => {
    el.addEventListener('mouseenter', () => {
      el.style.backgroundColor = '#dce0e0'
    })
  })
}

function bigGrid(e) {
  const gridSize = document.getElementById('gridSize')
  let size = gridSize.value
  const errorText = document.getElementById('error')
  errorText.style.visibility = 'hidden'
  if (e.keyCode === 13) {
    if (size >= 1 && size <= 64) {
      const gridEls = document.querySelectorAll('.hover')
      gridEls.forEach((el) => el.remove())
      document.documentElement.style.setProperty('--columns', size)
      document.documentElement.style.setProperty('--rows', size)
      defaultGrid()
    } else if (size !== '') {
      errorText.style.visibility = 'visible'
    }
  }
}

// Revert background-color to transparent
function revertBg() {
  let hover = document.querySelectorAll('.hover')
  let hoverList = [...hover]
  hoverList.map((el) => (el.style.backgroundColor = 'revert'))
}

// Generate random color on hover button
function colors() {
  let hover = document.querySelectorAll('.hover')
  let hoverList = [...hover]
  hoverList.map((el) => {
    el.addEventListener('mouseenter', () => {
      el.style.backgroundColor =
      getColor()
    })
  })
}

// Trigger b&w color button
function bw() {
  let hover = document.querySelectorAll('.hover')
  let hoverList = [...hover]
  hoverList.map((el) => {
    el.addEventListener('mouseenter', () => {
      el.style.backgroundColor = '#555'
    })
  })
}

// Button that cleans canvas background
function reset() {
  revertBg()
  let hover = document.querySelectorAll('.hover')
  let hoverList = [...hover]
  hoverList.map((el) => {
    el.addEventListener('mouseenter', () => {
      el.style.backgroundColor = '#555'
    })
  })
}

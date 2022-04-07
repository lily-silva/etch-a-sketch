'use strict'

// create 16x16 grid on start
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

// draw on canvas
function draw() {
  let canvas = document.getElementById('canvas')
  let hover = document.querySelectorAll('.hover')
  let hoverList = [...hover]
  canvas.addEventListener('click', () => {
    hoverList.map((el) => {
      el.addEventListener('mouseover', () => {
        el.style.backgroundColor = '#dce0e0'
      })
    })
  })
}

// read user input to change canvas size
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

// generate pastel cores
function createPastels() {
  let R = Math.floor(Math.random() * 100 + 127)
  let G = Math.floor(Math.random() * 127 + 127)
  let B = Math.floor(Math.random() * 127 + 127)

  let rgb = (R << 16) + (G << 8) + B
  return `#${rgb.toString(16)}`
}

// Generate random color on hover button
function colors() {
  let canvas = document.getElementById('canvas')
  let hover = document.querySelectorAll('.hover')
  let hoverList = [...hover]
  canvas.addEventListener('click', () => {
    hoverList.map((el) => {
      el.addEventListener('mouseover', () => {
        el.style.backgroundColor = createPastels()
      })
    })
  })
}

// Reset button to clear background
function reset() {
  let hover = document.querySelectorAll('.hover')
  let hoverList = [...hover]
  hoverList.map((el) => (el.style.backgroundColor = 'transparent'))
  hoverList.map((el) => {
    el.addEventListener('mouseover', () => {
      el.style.backgroundColor = 'transparent'
    })
  })
}

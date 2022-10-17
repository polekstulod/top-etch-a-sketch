const container = document.getElementById('container')
const sizeBtn = document.getElementById('size-btn')
const colors = ['#8be9fd', '#50fa7b', '#ffb86c', '#ff79c6', '#bd93f9', '#ff5555', '#f1fa8c']

let gridSize = 0

function createGrid() {
  const SQUARES = gridSize * gridSize
  for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.style.height = `${800 / gridSize}px`
    square.style.width = `${800 / gridSize}px`

    square.addEventListener('mouseover', () => setColor(square))

    container.appendChild(square)
  }
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

sizeBtn.addEventListener('click', () => {
  gridSize = prompt('Enter new grid size (1-100):')
  if (gridSize < 1 || gridSize > 100) {
    alert('Please enter a number between 1 and 100')
    return
  }

  container.replaceChildren()
  createGrid()
})

createGrid()

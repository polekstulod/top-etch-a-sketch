const container = document.getElementById('container')

for (let i = 0; i < 256; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))

  container.appendChild(square)
}

function setColor(element) {
  const color = '#f8f8f2'
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

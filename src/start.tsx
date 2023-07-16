const body = document.querySelector('body')

if (body) {
  body.style.backgroundImage = 'none'
  setTimeout(() => {
    const main = document.querySelector('main')
    const cloud1 = document.getElementById('cloud1')
    const cloud2 = document.getElementById('cloud2')
    const textStart = document.getElementById('textStart')
    if (main && cloud1 && cloud2 && textStart) {
      body.style.overflow = 'auto'
      main.style.visibility = 'visible'
      body.style.backgroundImage = ''
      cloud1.style.display = 'none'
      cloud2.style.display = 'none'
      textStart.style.display = 'none'
    }
  }, 4500)
}
const body = document.querySelector('body')
const main = document.querySelector('main')

if (body && main) {
  body.style.backgroundImage = 'none'
  setTimeout(() => {
    body.style.overflow = 'auto'
    main.style.visibility = 'visible'
    body.style.backgroundImage = ''
  }, 4500)
}
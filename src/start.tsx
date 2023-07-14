const body = document.querySelector('body')
const main = document.querySelector('main')

if (body && main) {
  body.style.backgroundColor = '#ffffff'
  setTimeout(() => {
    body.style.overflow = 'auto'
    main.style.visibility = 'visible'
    body.style.backgroundColor = ''
  }, 4500)
}
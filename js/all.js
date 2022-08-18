const menu = document.querySelector('.side-menu')
const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', (e) => {
  if (menu.classList.value.indexOf('show') !== -1) {
    menu.classList.remove('show')
  } else {
    menu.classList.add('show')
  }
})
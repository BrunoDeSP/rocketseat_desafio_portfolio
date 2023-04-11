const btnNavbar = document.getElementById('btn-menu')
const btnContacts = document.getElementById('contacts-mobile')
const navbar = document.getElementById('navbar')
const Elementfooter = document.getElementsByClassName('rodape')


function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    // const Elementfooter = document.getElementsByClassName('rodape')
    navbar.classList.toggle('active')
    // Elementfooter.classList.toggle('active')
    // event.currentTarget.setAttibute('aria-expanded', 'true')
}

btnNavbar.addEventListener('click', toggleMenu)
btnNavbar.addEventListener('touchstart', toggleMenu)

// function toggleDivision(event) {
//    if (event.type === 'touchstart') event.preventDefault();
//    btnContacts.classList.toggle('active')
// }

// btnContacts.addEventListener('click', toggleDivision)
// btnContacts.addEventListener('touchstart', toggleDivision)

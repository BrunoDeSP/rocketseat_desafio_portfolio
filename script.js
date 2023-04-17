const btnNavbar = document.getElementById('btn-menu')
const divContacts = document.getElementById('divContacts')
const divTecnologies = document.getElementById('divTecnologies')
const divExperiences = document.getElementById('divExperiences')
const divEducation = document.getElementById('divEducation')
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

function toggleDivisionContacts(event) {
    if (event.type === 'touchstart') event.preventDefault();
    divContacts.classList.toggle('active')    
}

divContacts.addEventListener('click', toggleDivisionContacts)
divContacts.addEventListener('touchstart', toggleDivisionContacts)

function toggleDivisionTecnologies(event) {
    if (event.type === 'touchstart') event.preventDefault();
    divTecnologies.classList.toggle('active')    
}

divTecnologies.addEventListener('click', toggleDivisionTecnologies)
divTecnologies.addEventListener('touchstart', toggleDivisionTecnologies)


function toggleDivisionExperiences(event) {
    if (event.type === 'touchstart') event.preventDefault();
    divExperiences.classList.toggle('active')    
}

divExperiences.addEventListener('click', toggleDivisionExperiences)
divExperiences.addEventListener('touchstart', toggleDivisionExperiences)


function toggleDivisionEducation(event) {
    if (event.type === 'touchstart') event.preventDefault();
    divEducation.classList.toggle('active')    
}

divEducation.addEventListener('click', toggleDivisionEducation)
divEducation.addEventListener('touchstart', toggleDivisionEducation)
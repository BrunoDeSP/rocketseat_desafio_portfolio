const btnNavbar = document.getElementById('btn-menu')
const divContactsContent = document.getElementById('divContactsContent')
const divTecnologiesContent = document.getElementById('divTecnologiesContent')
const divExperiencesContent = document.getElementById('divExperiencesContent')
const divEducationContent = document.getElementById('divEducationContent')
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
    const divContacts = document.getElementById('divContacts')
    divContacts.classList.toggle('active')    
}

divContactsContent.addEventListener('click', toggleDivisionContacts)
divContactsContent.addEventListener('touchstart', toggleDivisionContacts)

function toggleDivisionTecnologies(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const divTecnologies = document.getElementById('divTecnologies')
    divTecnologies.classList.toggle('active')    
}

divTecnologiesContent.addEventListener('click', toggleDivisionTecnologies)
divTecnologiesContent.addEventListener('touchstart', toggleDivisionTecnologies)


function toggleDivisionExperiences(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const divExperiences = document.getElementById('divExperiences')
    divExperiences.classList.toggle('active')    
}

divExperiencesContent.addEventListener('click', toggleDivisionExperiences)
divExperiencesContent.addEventListener('touchstart', toggleDivisionExperiences)


function toggleDivisionEducation(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const divEducation = document.getElementById('divEducation')
    divEducation.classList.toggle('active')    
}

divEducationContent.addEventListener('click', toggleDivisionEducation)
divEducationContent.addEventListener('touchstart', toggleDivisionEducation)
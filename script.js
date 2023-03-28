 const btnNavbar = document.getElementById('btn-menu')

 function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('navbar')
    const Elementfooter = document.getElementById('rodape')
    nav.classList.toggle('active')
    Elementfooter.classList.toggle('active')
    event.currentTarget.setAttibute('aria-expanded', 'true')
 }

 btnNavbar.addEventListener('click', toggleMenu)
 btnNavbar.addEventListener('touchstart', toggleMenu)
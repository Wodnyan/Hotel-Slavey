const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    });
    navLinks.forEach((link, index) => {
        if (link.style.animation) {

        } else {
            link.style.animation = 'navLinkFade 0.5s ease forward'
        }
    })
}
const app = () => {
    navSlide();
}
app();
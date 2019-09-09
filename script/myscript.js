const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        //Nav toggle
        nav.classList.toggle('nav-active');
        //Nav fade
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.5}s`;
            }
        });
        //Burger toggle
        burger.classList.toggle('active');
    });


};
const app = () => {
    navSlide();
};
app();
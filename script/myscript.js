const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const navLinksAll = document.querySelectorAll('.nav-links li');
    //Nav toggle
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        nav.classList.toggle('navBlack');
        navLinksAll.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;

            }
        });
        burger.classList.toggle('active');
    });

}
const app = () => {
    navSlide();
};
app();


const date = new Date();


console.log(date.toLocaleDateString());
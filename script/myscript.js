const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li')
    //Nav toggle
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    //Animated links
    
}

navSlide();
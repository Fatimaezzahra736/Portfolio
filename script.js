/*=====toggle icon navbar=====*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
};

/*=====skills tabs=====*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('skills__active');
        });
        target.classList.add('skills__active');

        tabs.forEach(tab => {
            tab.classList.remove('skills__active');
        });
        tab.classList.add('skills__active');
    });
});

/*=====scroll sections active link=====*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*=====sticky navbar=====*/
    let headers = document.querySelectorAll('header');
    headers.forEach(header => {
        header.classList.toggle('sticky', window.scrollY > 100);
    });
    
    /*=====remove toggle icon and navbar when click navbar link (scroll)=====*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
    /*=====scroll reveal =====*/
ScrollReveal({ 
    // reset: true ,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content, .heading' , { origin: 'top' });
ScrollReveal().reveal(' .services-container, .portfolio-box, .contact form, .skills__container' , { origin: 'bottom' });
ScrollReveal().reveal(' .home-content h1, .about-img' , { origin: 'left' });
ScrollReveal().reveal(' .home-content h3, .about-content' , { origin: 'right' });



    /*=====typed js =====*/
// const typed = new Typed('.multiple-text' , {
//     Strings : ['full-stack developer' , 'frontend developer' , 'backend developer' ],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });

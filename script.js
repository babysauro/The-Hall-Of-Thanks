// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbarLinks = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// scroll section
let sections = document.querySelector('section');
let navLinks = document.querySelector ('header nav a');


window.onscroll =  () => {
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navabar links 
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('heade nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })


    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

}
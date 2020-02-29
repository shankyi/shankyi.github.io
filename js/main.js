const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    const navLink = document.querySelectorAll('.nav-link li')

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navLink.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwaords ${index / 7 + 1.5}s` ;
            } 
          });

        burger.classList.toggle('toggle');
    });
    
 }

navSlide();


window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
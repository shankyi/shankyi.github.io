const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-link');
    // const navLink = document.querySelector('.nav-link li')

    burger.addEventListener('click',()=>{
        nav.classList.toggle('.nav-active');

        // navLink.forEach((link, index) => {
        //     if(link.style.animation){
        //         link.style.animation = '';
        //     }else{
        //         link.style.animation = `navLinkFade 0.5s ease forwaords ${index / 7 +0.3}s` ;
        //     } 
        //   });
    });
    
 }

navSlide();